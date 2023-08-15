{
  "Title": "使用 Gmail SMTP 免費以自訂網域收發 Email",
  "Description": "",
  "Date": "2023-08-12 00:00:00.000000000 +0800 CST",
  "Tags": [
    "CS"
  ],
  "Categories": [
    "CS"
  ],
  "Menu": "main",
  "Alias": [
    "/2022/06/blog-post.html"
  ]
}

## 前言

我幫這個 Blog 跟 Google 買了一個網域，最近在研究買了網域之後還有哪些功能可以玩。由於 Google Domains 上面寫的 Get a custom email address 使用的是 Google Workspace，每個使用者每個月要價 6 美元，已經接近 Google Domain 賣一個網域的半年的價格了，所以我研究了只使用其他 Google 提供的服務也能達成，免費使用自訂網域收發 email 的方法──Gmail SMTP 服務。

我使用的是 Google Domains 操作，但理論上只要是有免費提供 email forwarding 的域名註冊商都適用，一樣直接 Forward 過去就好。

![Google Workspace](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLrvgGgVcQSFt7dXd-B0pUiijb3ou3R2fr2QcMIRwwmEmrx9kAtz-y-RfO2_RvzF_-CVCOvmUI5Cwd7063tnvKMheSzM3BAVI50Kt0DfaIWtKedMOx5NdU8YtZyivSj2lOwwl8RqXgSj7-T0INFU73Dw9tEqBTv7kWBb0As4Kuj11FLhJoN1pWIT6VBw/s1600/workspace.png)

## 收 email

-------

收 email 的部分設定較簡單，進入 [Google domains 控制台](https://domains.google.com/registrar/)並選取網域，在 email 選項中，設定讓 email 自動轉寄到目標 email 就好。

![Google Domains Forward](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEje3lbwo5WFloXp6xWF1UBfjnnZg65vaR9WhMHjO6Zy8noxIKuqA0-MzQfwy6CziY-k3EZ83f57k9ffG5LS_ragQfVePIruIJL_XKapa7fvhFQF2i9BXTsvAmLTSx534CIvouBmHwLracYdErlvVaNIFLnkexjZOiftjRbi_YXktUdtRY3MrhwrcUixBQ/s1600/set_email_forward.png)

接下來，進入被轉寄的 email，點一下確認信後就可以用設定好的 email 收信了。

![Google Domains Forward Confirm email](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiE05hC8dwa5cI8R_TTKFkxfUMf3sOvmHpH-VhpdduJlganhTtu-Ga9omVERbrbut7QMv8SBICEzKRraIWCRE0N_9tIlUfKG7agq40DxmoUc0z8owXVU6w2S3jvQyLDld0Zu8CbC-Tr1CVDTeLmiv9B38IC2Jjuj2wEfOc6YuDXK3eVGGaTUg6KpImWXw/s1600/verify.png)

## 發 email

-------

首先要先幫前面設定好收 email 被轉寄的帳號開啟 [2-Step Verification](https://myaccount.google.com/signinoptions/two-step-verification/enroll-welcome)，才能設定 [App passwords](https://myaccount.google.com/apppasswords)。在 App passwords 介面中輸入一個方便記憶的名稱例如 gmail。

![Generate app password](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRVIzM9zf-8FxcXXkb8CQbmFDMoRx_l4hgpaNScrQp9tigt24gUnS4SdesdXRECMJasrMJ0jI3fpW98Jpkuhjk8M1nFjdQ6uAT9_K2EQ2fo1N2jQb13oQ7GLsdjW0Lj3Dbo-iZp3FTwDFQtmIsEyuwi8e1fQdwdWAIFmTiqDPD1WZImhKN5-aNbgiWWA/s1600/name_app_password.png)

Google 會給生成一組十六位的密碼，先記下來等等要用來登入 Gmail SMTP 伺服器。這個密碼的權限非常大要保管好。

![Google Account App Password](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_x5wT3sLnuZG8QVMFVgyhKHSvDwXeoV-M62dWb9davFa57TYpJW6ZpfFWM2DhPs_ZYo2CLadfVLinith0MaFMKv8C70zbGEb855ebuDCI95lAUugVrNbD3h5ly3UtiyU_PEJJC1fsGtY1YbVO-JALXPjAnmkIRnQF9W0Nxw5c4cPu3Cs-cMb1meUFMA/s1600/get_app_password.png)

接下來，進入 Gmail 設定中的 [Accounts and Import](https://mail.google.com/mail/?tab=km#settings/accounts)，找到 Send mail as 下的 Add another email address，跟著跳出來的小視窗輸入收 email 的 address，第二個視窗照著以下的資料填：

* SMTP Server: smtp.gmail.com
* Port: 587
* Username: 被轉發那個人 @gmail.com 前面的使用者名稱
* Password: 前面拿到的 app password

![Gmail SMTP Send](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjffJ6GxzFD2BWksCl4Vg3roQelF3hKVSv4nzqtMaLJJGJyBnr5fgCyepFoo0lrFxGrGp95lfcI1PrnyyQfatM519r7ywP3cOP4aQEKDFZiwmOmcTFd84UhjBvvmBEwoWBj6p0k6FkGKn1ef6EvO3U6mZbRacTgUhbtexwG0PLMUVDdzwSFbt6-gzEgLw/s1600/SMTP.png)

完成後 Gmail 會寄一封確認信，點進去按確定，重新整理 Gamil 一下就完成了！\
設定完以上步驟，Gmail 在寄件者欄位會多出一個帳號能用，這樣就能用酷酷的 custom domain 收發 email 了！
