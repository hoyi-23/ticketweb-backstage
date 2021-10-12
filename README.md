# ticketweb-backstage

Demo: [gh-Page](https://hoyi-23.github.io/ticketweb-backstage/#/)

登入帳號: test@test.com
登入密碼: 123456

也可以自行註冊

## 運用
1. vue cli3 快速建構專案
2. firebase (authentication / firestore / firebase storage) 做為後端
3. Sass 做樣式管理
4. Vue router 實現SPA
5. VueX 實現資料管理

-------

## 完成功能
1. 登入&註冊
2. 商品管理(新增/編輯/刪除)
3. Loading樣式，增加使用者體驗
4. 實現RWD
5. 實現 theme toggle (dark/light mode)
6. 顧客訂單管理(已表單列出/刪除/查看)
7. localstorage就算重整還是保持登入狀態
8. 刪除項目時的確認機制(使用confirm)
9. 增加表單輸入時，開始與結束日期的檢查判斷!
10. 增加商品排序檢視(sort)
11. 當活動結束日期小於現在日期(活動過了)，會自動轉為尚未啟用

-------

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

-------

## 碰到的問題
### 圖片壓縮與預覽(解決，後來想要改為storage和firestore併用)
1. 壓縮
上傳至firebase有檔案大小限制，不能超過	1048487 bytes 
首先檢查上傳的圖檔高度是否大於1800px，如果超過圖片將按比例壓縮到高度為1800px。
接著將圖片轉為toDataURL，檢查長度是否超過 1016907 字節()，若超過將警示。
2. 預覽
直接來看看我的程式碼做了什麼
```
  function uploadPhoto(e){
    //為了要可以上傳多張，不過前台尚未運用到多張照片
      const length = e.target.files.length
    //取得FileList，<Input>選擇的檔案會回傳FileList
      const file = e.target.files
    //因為需要使用影像，所以用Image()建構新影像元素，產生新的HTMLImageElement物件
      const img = new Image()
      for(var i = 0; i < length ; i ++){
        //藉由 FileReader 物件，Web 應用程式能以非同步（asynchronously）方式讀取儲存在用戶端的檔案（或原始資料暫存）內容，可以使用 File 或 Blob 物件指定要讀取的資料。
          const reader = new FileReader()
          //FileReader.readAsDataURL()讀取指定的 Blob 或 File 
          //讀取陣列裡的file，完成後會觸發onload,同時result將包含一個data:URL格式的字串(base64編碼)
          reader.readAsDataURL(file[i])
            reader.onload = function() {
            // img.src  Set source path，把data:URL設為路徑
              img.src = reader.result
          }
          //img 完成set source path 後，為了要將檔案上傳(firebase有字節數限制)，所以進行壓縮與檢查。
          img.onload = function(){
              //若圖片超過1800px就會壓縮成1800。高度按比例計算
              const w = Math.min(1800, img.width)
              const h = img.height*(w/img.width)
              //建立一個canvas元素
              const canvas = document.createElement('canvas')
              //設定為2D
              const ctx = canvas.getContext('2d')
              //帶入大小壓縮過後的寬高
              canvas.width = w
              canvas.height = h
              //繪製畫布(圖片/X軸/Y軸/寬/高)<-這時圖片已經繪製上去canvas
              ctx.drawImage(img,0,0,w,h)
              //將canvas轉為base64編碼來確認大小
              if(canvas.toDataURL('image/jpeg').length>=1016907){
                  alert('圖檔過大，請勿上船超過1MB')
                  document.getElementById("eventPhotos").value=null; 
                  return
              }else{
                //若大小確認符合，將編碼傳入eventphoto的值並顯示在上面，同時建立活動可以傳入至後端
                  eventPhotos.value = canvas.toDataURL('image/jpeg')
              }
              
          }
      }
      
  }
```

### firestore 上傳檔案大小限制(解決)
firestore上的檔案不能超過 1MiB，這個對於圖檔來說有點難。
一開始我的做法是把圖檔壓縮再上傳，但是這樣在上傳圖檔時還是有很大限制。
後來看到看到stack overflow上有人說可以將圖檔上傳到storage，
等到需要拿取資料時再從storage拿。

1. 處理 CORS 問題
firebase提供了一個工具gsutil來處理同源政策問題
安裝完成後，新增兩個 json 檔案，一個 cors.json，一個 clear.json(此為空陣列)
```
[
    {
      "origin": ["*"],
      "method": ["GET"],
      "maxAgeSeconds": 3600
    }
]
```
指向 cors.json 並運行命令 `gsutil cors set C:\Users\...\cors.json gs://sianzaren.appspot.com/`
2. 修改更新/新增/刪除方式(完成)
針對不同格式檔案firebase都定義好上傳與下載的方式，真的很方便。

### firebase firestore 載入問題(解決)
問題: 顯示網路連線不健康。
思考: 看了很多資料，尚未得出結論。
解決: 換成storage另外儲存圖檔後有加速載入

### 同個表單做 正式發佈/草稿 區分(解決)
我的方法是直接設兩個傳送值，分別為發佈和草稿。
點選發佈按鈕 `eventActive.value = true;`
點選儲存按鈕 `eventDraft.value = true;`
這兩個值都會傳入後端

### 編輯與建立項目邏輯(解決)
點選編輯操作鍵時，會有兩個動作:
 * 傳入editProduct為true，告知現在是要編輯
 * 傳入現在點擊的項目eventId，並推入currentProductArray

在開啟表單Modal前，會先判斷當時傳入的editProduct是否為true。
若為true，表示是打開來編輯，就會將currentProductArray的值傳到表單上，等待它更新(Update)
若為false，表示是新建活動，會將timestampe設為id，等待它建立(Upload)

### 更新與建立(解決)
建立會在firestore創建一個新的doc，並將新獲得的Id與資料傳入。
更新並不會重新建一個doc，而是利用傳入文件ID，doc(id).update來做更新
現在已經更新到後端資料了，但是前端為了不要重複取資料，
在最一開始getproduct時，設定如果productData(取到的所有活動資料)內，已經有這個doc.id的話，就不會重複拿取資料到productData。
那現在的問題就是，Update活動時，我並沒有刪掉doc然後建新的，我是更新而已(沒有更動doc.id)，所以就算後端的資料改了，可是因為productData(取到的所有活動資料)內已經有一樣的doc.id了，要怎麼讓前端也重新取最新的資料呢?
所以將資料更新到後端後，我傳入當下更新文件的doc.id和event.id。將productData(取到的所有活動資料)內為此doc.id的物件刪掉，然後重新拿取資料，這樣拿到的就會是更新後的啦。
(同時將editProduct值設為false，因為編輯結束了)
(並在一次currentProduct，如果Modal還開著裡面的資料也會更新)

-------

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
