# ticketweb-backstage

Demo: [gh-Page](https://hoyi-23.github.io/ticketweb-backstage/#/)

登入帳號: test@test.com
登入密碼: 123456

也可以自行註冊

## 運用
1. vue cli3 快速建構專案
2. firebase (authentication / firestore) 做為後端
3. Sass 做樣式管理
4. Vue router 實現SPA
5. VueX 實現資料管理

## 完成功能
1. 登入&註冊
2. 商品管理(新增/編輯/刪除)
3. Loading樣式，增加使用者體驗
4. 實現RWD
5. 實現 theme toggle (dark/light mode)
6. 顧客訂單管理(已表單列出/刪除/查看)

## 專案預覽
### 登入註冊
  1. 登入
    ![](https://i.imgur.com/9V0Kf9e.png)
  2. 註冊
    ![](https://i.imgur.com/2eU96ix.png)
### 商品管理
  1. light mode
    ![](https://i.imgur.com/03SRZwp.png)
  2. dark mode
    ![](https://i.imgur.com/pOjlz6i.png)
  3. 創建商品
    ![](https://i.imgur.com/DfNfi7m.png)
  4. 編輯商品
    ![](https://i.imgur.com/ayyETjA.png)

## 預計完成
1. localstorage保持登入狀態
2. 加上場地與其他前台內容管理

## 碰到的問題
1. 圖片壓縮與預覽(解決)
#### 壓縮
上傳至firebase有檔案大小限制，不能超過	1 MiB（1 MiB = 1.048576 MB/1048576位元組）
首先檢查上傳的圖檔高度是否大於1800px，如果超過圖片將按比例壓縮到高度為1800px。
接著將圖片轉為toDataURL，檢查長度是否超過 1016907 字節()，若超過將警示。
#### 預覽
直接來看看我的程式碼做了什麼

```
  function uploadPhoto(e){
    //為了要可以上傳多張，不過前台尚未運用到多張照片
      const length = e.target.files.length
    //取得FileList，<Input>選擇的檔案會回傳FileList
      const file = e.target.files
    //因為需要使用影像，所以用Image()建構
      const img = new Image()
      for(var i = 0; i < length ; i ++){
        //藉由 FileReader 物件，Web 應用程式能以非同步（asynchronously）方式讀取儲存在用戶端的檔案（或原始資料暫存）內容，可以使用 File 或 Blob 物件指定要讀取的資料。
          const reader = new FileReader()
          //FileReader.readAsDataURL()讀取指定的 Blob 或 File 
          //讀取陣列裡的file，完成後會觸發onload,同時result將包含一個data:URL格式的字串(base64編碼)
          reader.readAsDataURL(file[i])
            reader.onload = function() {
              //console.log(reader.result)

              
              img.src = reader.result
              //eventPhotos.value = reader.result
          }
          img.onload = function(){
              //若圖片超過1800px就會壓縮成1800。高度按比例計算
              const w = Math.min(1800, img.width)
              const h = img.height*(w/img.width)
              const canvas = document.createElement('canvas')
              const ctx = canvas.getContext('2d')
              canvas.width = w
              canvas.height = h
              ctx.drawImage(img,0,0,w,h)
              console.log(canvas.toDataURL('image/jpeg').length)
              if(canvas.toDataURL('image/jpeg').length>=1016907){
                  alert('圖檔過大，請勿上船超過1MB')
                  document.getElementById("eventPhotos").value=null; 
                  return
              }else{
                  eventPhotos.value = canvas.toDataURL('image/jpeg')
              }
              
          }
      }
      
  }
```
2. firebase firestore 載入問題(尚未解決，研究中)
問題: 顯示網路連線不健康。
思考: 看了很多資料，尚未得出結論。

3. 編輯項目邏輯(解決)



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
