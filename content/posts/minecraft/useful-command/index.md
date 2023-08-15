{
  "title": "Minecraft 防噴、防爆和一些給新手的方便指令",
  "description": "",
  "tags": [
    "Minecraft",
    "command"
  ],
  "categories": [
    "Minecraft",
    "command"
  ],
  "date": "2023-08-11 00:00:00.000000000 +0800 CST",
  "menu": "main",
  "aliases": [
    "/2019/05/minecrafteasycommands.html"
  ]
}

## 前言

大家好，我是 ianiiannn，本篇文章將會介紹一些給新手的方便指令，以及防噴、防爆的遊戲規則。\
輸入指令時，首先要點擊 `Shift` 左邊一格的 `/`，或是直接開啟聊天室輸入 `/`，接著輸入指令。

## 指令格式說明

格式說明

* `/` 通常為指令的前導字元，遊戲看到才會視後方內容為指令
* `文字`必須一模一樣
* `<文字>` 必須根據需求替換
* `[文字]` 可選擇是否使用
* `(a|b)` 必須二選一
* `[a|b]` 可選擇其中一個或是都不用
* `#` 後面的文字為註解，不須輸入
* `@` 為[選擇器](https://minecraft.fandom.com/zh/wiki/目標選擇器?variant=zh-tw)，可以替代大多數指令中玩家欄位
  * `@p` 選擇最近的玩家
  * `@a` 選擇所有玩家
  * `@r` 選擇隨機玩家
  * `@e` 選擇所有實體
  * `@s` 選擇使用這串指令的玩家（可被 `/execute as` 改變）

## 自動完成

自動完成是指在輸入指令時，會自動列出可能的指令，以方便玩家輸入。使用上下鍵選擇，按下 Tab 鍵即可輸入自動完成猜測的指令。

![Minecraft 自動完成示範](https://2.bp.blogspot.com/-Xx69DdL1Jm8/XNs31wDhblI/AAAAAAAAAeI/9WKaBu-6FSozFsifVvh5g14TRuBKv8KPwCK4BGAYYCw/s16000/Minecraft%25E8%2587%25AA%25E5%258B%2595%25E8%25BC%25B8%25E5%2585%25A5.PNG)

## 實用指令列表

### 遊戲規則（防噴防爆）

```mcfunction
/gamerule keepInventory true # 防噴，死亡時防止物品與經驗值掉落

/gamerule mobGriefing false # 防爆，阻止苦力怕、終界使者等等的生物改變方塊  
  
/gamerule keepInventory false # 關閉防噴

/gamerule mobGriefing true # 關閉防爆

/gamerule playersSleepingPercentage 0 # 只需一個玩家睡覺即可跳過夜晚
```

完整的遊戲規則可在 [Minecraft Wiki](https://minecraft.fandom.com/zh/wiki/遊戲規則?variant=zh-tw) 中找到

### 玩家控制（ban、op、kick）

```mcfunction
/op <玩家> # 給<玩家>管理員權限

/deop <玩家> # 取消玩家的管理員權限

/kick <玩家> [原因] # 以[原因]踢出玩家

/ban <玩家> [原因] # 以[原因]封鎖玩家

/pardon <玩家> # 解除封鎖玩家  
```

### 遊戲模式（生存、創造……）

```mcfunction
/gamemode survival [玩家] # 切換到生存模式

/gamemode creative [玩家] # 切換到創造模式

/gamemode adventure [玩家] # 切換到冒險模式

/gamemode spectator [玩家] # 切換到旁觀模式  
```

1.16 開始可用 F3（按住）+ F4 切換遊戲模式

### 傳送

```mcfunction
/tp [被傳送玩家（若無指定則為自己）] (x y z [yRot xRot] | 目標玩家)

/tp @e[type=item] @p # 把所有被讀取的掉落物傳送到自己身上（1.13開始有跨維度）

/execute in <維度> run tp <玩家> <x y z [yRot xRot]> # 傳送到目標緯度
```

座標會出現在 F3，1.13+ 可以按 F3 + C 複製包含緯度的傳送指令（按太久會變成測試崩潰），目前原版遊戲的緯度有

* `minecraft:overworld` 主世界
* `minecraft:the_nether` 下界
* `minecraft:the_end` 終界

### 尋找結構

```mcfunction
/locate structure village # 村莊

/locate structure fortress # 地獄要塞（地域堡壘）

/locate structure stronghold # 要塞（終界祭壇）

/locate structure endcity # 終界城  
```

更多結構可在 [Minecraft Wiki](https://minecraft-zh.gamepedia.com/index.php?title=%E5%91%BD%E4%BB%A4/locate&variant=zh-tw) 中找到

### 經驗值

```mcfunction
/xp set <目標玩家> <點數> <points/levels> # 設定玩家的經驗值

/xp add <目標玩家> <點數> <points/levels> # 加玩家的經驗值
```

### 關閉伺服器

```mcfunction
/stop # 關閉伺服器
```
