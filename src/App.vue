<script setup>
import * as THREE from 'three';
import gsap from 'gsap';
import { onMounted,ref } from 'vue';
import { CSS2DRenderer,CSS2DObject} from 'three/examples/jsm/renderers/CSS2DRenderer.js'
// 创建场景
const scene = new THREE.Scene();
// 初始化相机
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000)
// 设置相机位置
camera.position.set(0,0,0)
// 初始化渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
// 渲染函数
const render = () => {
  renderer.render(scene,camera)
  requestAnimationFrame(render);
}
const container = ref()
const tagDiv = ref()
const progress = ref(0);
onMounted(() => {
    // 监听鼠标事件来移动摄像机视角
    let isMouseDown = false;
  container.value.addEventListener('mousedown',() => {
    isMouseDown = true
  })
  container.value.addEventListener('mouseup',() => {
    isMouseDown = false
  })
  container.value.addEventListener("mouseout",()=>{
    isMouseDown = false;
  });
  container.value.addEventListener('mousemove',(e) => {
    if(isMouseDown) {
      camera.rotation.y += e.movementX * 0.01;
      camera.rotation.x += e.movementY * 0.01;
      // 修改默认旋转顺序
      camera.rotation.order = "YXZ";
    }
  })
  container.value.appendChild(renderer.domElement)
  render()
  // 初始化地图上位置图片的坐标
  tagDiv.value.style.cssText =`transform:translate(100px,110px)`;
  function moveTag(name) {
    let position = {
      客厅:[100,110],
      厨房:[180,190],
      阳台:[50,50]
    }
    if(position[name]) {
      gsap.to(tagDiv.value,{
        duration:0.5,
        x:position[name][0],
        y:position[name][1]
      })
    }
  }
  // livingroom
  let livingRoom = new Room('客厅',0,"./imgs/livingroom/")
 

  // 厨房
  const kitchenPostion = new THREE.Vector3(-5,0,-10);
  const kitchenEuler = new THREE.Euler(0,-Math.PI / 2,0)
  const kitchen = new Room('厨房',3,  "./imgs/kitchen/",kitchenPostion,kitchenEuler);
  // 创建厨房文字
  const kitchenTextPosition = new THREE.Vector3(-1,0,-3)
  const ketchenText = new SpriteText('厨房',kitchenTextPosition)
  // 点击事件的回调函数
  ketchenText.onClick(() => {
    // 相机视角移动到厨房
    gsap.to(camera.position,{
      duration:1,
      x:kitchenPostion.x,
      y:kitchenPostion.y,
      z:kitchenPostion .z,
    })
    moveTag('厨房')
  })

  // 厨房返回客厅
  const kitchenBackTextPosition = new THREE.Vector3(-4,0,-6);
  const kitchenBackText = new SpriteText('客厅',kitchenBackTextPosition)
  kitchenBackText.onClick(() => {
    gsap.to(camera.position,{
      duration:1,
      x:0,
      y:0,
      z:0
    })
    moveTag('客厅')
  })

 // 阳台
 const balconyPosition = new THREE.Vector3(0,0,15);
 let balcony = new Room('阳台',8,"./imgs/balcony/",balconyPosition);
//  阳台文字
const balconyTextPosition = new THREE.Vector3(0,0,3);
const balconyText = new SpriteText('阳台',balconyTextPosition);
balconyText.onClick(() => {
  gsap.to(camera.position,{
    duration:1,
    x:balconyPosition.x,
    y:balconyPosition.y,
    z:balconyPosition.z,
  })
  moveTag('阳台')
})

// 阳台回客厅的文字
const balconyBackTextPosition = new THREE.Vector3(-1,0,11);
const balconyBackText = new SpriteText('客厅',balconyBackTextPosition);
balconyBackText.onClick(() => {
    gsap.to(camera.position,{
      duration:1,
      x:0,
      y:0,
      z:0
    })
    moveTag('客厅')
  })

//rest room走廊
const restroomPositon = new THREE.Vector3(-10, 0, 0);
const restroomEuler = new THREE.Euler(0,-Math.PI / 2,0);
let restroom = new Room('走廊', 7, "./imgs/restroom/", restroomPositon, restroomEuler);
//restroom去文字
const restroomTextPosiion = new THREE.Vector3(-4.5, 0, 0.5);
const restroomText = new SpriteText('走廊', restroomTextPosiion);
restroomText.onClick(() =>{
  gsap.to(camera.position,{
    duration:1,
    x:restroomPositon.x,
    y:restroomPositon.y,
    z:restroomPositon.z
  })
  moveTag('走廊')
})
//restroom回客厅文字
const restroomBackTextPosition = new THREE.Vector3(-5.5,0,1);
const restroomBackText = new SpriteText('客厅',restroomBackTextPosition);
restroomBackText.onClick(() => {
    gsap.to(camera.position,{
      duration:1,
      x:0,
      y:0,
      z:0
    })
    moveTag('客厅')
  })

//卧室门口
const bedroom1Positon = new THREE.Vector3(-20, 0, 0);
const bedroom1Euler = new THREE.Euler(0,-Math.PI / 2,0);
let bedroom1 = new Room('主卧门口', 20, "./imgs/bedroom/", bedroom1Positon,bedroom1Euler);
//restroom
const bedroom1TextPosition = new THREE.Vector3(-14.5,0.5,1);
const bedroom1Text = new SpriteText('主卧门口',bedroom1TextPosition);
bedroom1Text.onClick(() => {
    gsap.to(camera.position,{
      duration:1,
      x:bedroom1Positon.x,
      y:bedroom1Positon.y,
      z:bedroom1Positon.z
    })
    moveTag('主卧门口')
  })
//卧室门口回走廊
const bedroom1BackTextPosition = new THREE.Vector3(-15.5,0,2);
const bedroom1BackText = new SpriteText('走廊',bedroom1BackTextPosition);
bedroom1BackText.onClick(() => {
    gsap.to(camera.position,{
    duration:1,
    x:restroomPositon.x,
    y:restroomPositon.y,
    z:restroomPositon.z
  })
  moveTag('走廊')
  })
//卧室内
const bedroom2Positon = new THREE.Vector3(-35, 0, -10);
let bedroom2 = new Room('主卧内', 23, "./imgs/bedroom/", bedroom2Positon);
//restroom
const bedroom2TextPosition = new THREE.Vector3(-24,0.5,1);
const bedroom2Text = new SpriteText('主卧内',bedroom2TextPosition);
bedroom2Text.onClick(() => {
    gsap.to(camera.position,{
      duration:1,
      x:bedroom2Positon.x,
      y:bedroom2Positon.y,
      z:bedroom2Positon.z
    })
    moveTag('主卧内')
  })
//卧室回卧室门口
const bedroom2BackTextPosition = new THREE.Vector3(-39,0,-11);
const bedroom2BackText = new SpriteText('主卧门口',bedroom2BackTextPosition);
bedroom2BackText.onClick(() => {
  gsap.to(camera.position,{
      duration:1,
      x:bedroom1Positon.x,
      y:bedroom1Positon.y,
      z:bedroom1Positon.z
    })
    moveTag('主卧门口')
  })
//儿童房
const childroom1Positon = new THREE.Vector3(10, 0, -10);
let childroom1 = new Room('儿童房', 19, "./imgs/childroom/", childroom1Positon);
//restroom
const childroom1TextPosition = new THREE.Vector3(-14.5,-0.5,1.5);
const childroom1Text = new SpriteText('儿童房',childroom1TextPosition);
childroom1Text.onClick(() => {
    gsap.to(camera.position,{
      duration:1,
      x:childroom1Positon.x,
      y:childroom1Positon.y,
      z:childroom1Positon.z
    })
    moveTag('儿童房')
  })
//儿童房走回走廊
const childroom1BackTextPosition = new THREE.Vector3(7,0,-13);
const childroom1BackText = new SpriteText('走廊',childroom1BackTextPosition);
childroom1BackText.onClick(() => {
    gsap.to(camera.position,{
    duration:1,
    x:restroomPositon.x,
    y:restroomPositon.y,
    z:restroomPositon.z
  })
  moveTag('走廊')
  })

//客房
const childroom2Positon = new THREE.Vector3(-17.5, 0, -10);
let childroom2 = new Room('客房', 11, "./imgs/childroom/", childroom2Positon);
//restroom
const childroom2TextPosition = new THREE.Vector3(-14.5,-0.5,0);
const childroom2Text = new SpriteText('客房',childroom2TextPosition);
childroom2Text.onClick(() => {
    gsap.to(camera.position,{
      duration:1,
      x:childroom2Positon.x,
      y:childroom2Positon.y,
      z:childroom2Positon.z
    })
    moveTag('客房')
  })
//客房走回走廊
const childroom2BackTextPosition = new THREE.Vector3(-19.5,0,-13);
const childroom2BackText = new SpriteText('走廊',childroom2BackTextPosition);
childroom2BackText.onClick(() => {
    gsap.to(camera.position,{
    duration:1,
    x:restroomPositon.x,
    y:restroomPositon.y,
    z:restroomPositon.z
  })
  moveTag('走廊')
  })

})



 // 创建房间
class Room{
  constructor(
    name,
    roomIndex,
    textureUrl,
    position=new THREE.Vector3(0,0,0),
    //旋转角度
    euler = new THREE.Euler(0,0,0)
  ){
     
  this.name = name;
  const geometry = new THREE.BoxGeometry(10,10,10);
  geometry.scale(1,1,-1)

  let arr = [
      `${roomIndex}_l`,
      `${roomIndex}_r`,
      `${roomIndex}_u`,
      `${roomIndex}_d`,
      `${roomIndex}_b`,
      `${roomIndex}_f`,
    ]
    let boxMaterial = [];
    arr.forEach(item => {
      const texture = new THREE.TextureLoader().load(textureUrl + item  + '.jpg');
      // 调整纹理角度 天花板和地板位置不对，旋转一下
      if(item ===  `${roomIndex}_d` || item ===  `${roomIndex}_u`) {
        texture.rotation = Math.PI;
        texture.center = new THREE.Vector2(0.5,0.5)
      }
      boxMaterial.push(new THREE.MeshBasicMaterial({map:texture}))
    })
    const cube = new THREE.Mesh(geometry,boxMaterial);
    cube.position.copy(position);
    cube.rotation.copy(euler)
    scene.add(cube)
  }
}
// 创建文字
class SpriteText {
  constructor(text,position) {
    this.callbacks = []
    // 创建精灵文字
    const canvas = document.createElement('canvas')
    canvas.width = 1024
    canvas.height = 1024
    const context = canvas.getContext('2d');
    context.fillStyle = 'rgba(100,100,100,0.7)'
    // 填充矩阵
    context.fillRect(0,256,1025,512);
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = 'bold 200px Arial';
    context.fillStyle = 'white'
    context.fillText(text,512,512)
    let texture = new THREE.CanvasTexture(canvas);
    // 精灵材质
    const material = new THREE.SpriteMaterial({map:texture,transparent:true});
    // 创建精灵
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(0.5,0.5,0.5);
    sprite.position.copy(position);
    //返回sprite,后续操作方便
    this.sprite = sprite;
    scene.add(sprite)

    // 添加投射光线
    const raycaster = new THREE.Raycaster()
    let mouse = new THREE.Vector2();
    window.addEventListener('click',(e) => {
      // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
      mouse.x = (e.clientX / window.innerWidth) * 2 -1
      mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
      // 通过摄像机和鼠标位置更新射线
      raycaster.setFromCamera(mouse,camera);
      // 计算物体和射线的焦点
      let intersects = raycaster.intersectObject(sprite);
      if(intersects.length > 0) {
        this.callbacks.forEach(callback => {
          callback()
        })
      }
    })
  }
  // 函数增加点击事件
  onClick(callback) {
    this.callbacks.push(callback)
  }
}
THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
 progress.value = new Number(itemsLoaded / itemsTotal  * 100).toFixed(2)
}
</script>

<template>
<div class="container" ref="container"></div>
<div class="map">
  <div class="tag" ref="tagDiv"></div>
  <img src="./assets//map.gif" alt="">
</div>
<div class="loading" v-if="progress!=100"></div>
<div class="progress" v-if="progress!=100">
<img src="./assets/loading.gif" alt="" />
    <span>新房加载中：{{ progress }}%</span>
</div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
.container {
  height: 100vh;
  width: 100vw;
  background-color: #f0f0f0;
}
.label {
  color: #fff;
  text-shadow: 0 0 10px #000;
  font-size: 16px;
}

.map {
  width: 300px;
  height: 260px;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.map > img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.map > .tag {
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  background-image: url(./assets/location.png);
  background-size: cover;
  z-index: 1;
}
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(./assets/loading.png);
  background-size: cover;
  filter: blur(50px);
  z-index: 100;
}
.progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
}
.progress > img {
  padding: 0 15px;
}

.title {
  width: 180px;
  height: 40px;
  position: fixed;
  right: 100px;
  top: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  line-height: 40px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  z-index: 110;
}
</style>
