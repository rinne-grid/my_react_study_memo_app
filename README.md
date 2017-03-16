### 開始する時

```sh
$ yarn install

$ yarn run build # webpack -w
 # or
$ yarn start # webpack-dev-server --inline --hot --port 3000 
```

### これの中身：メモビューア

![メモビューア](http://www.rinsymbol.sakura.ne.jp/github_images/my_react_study_memo_app.png "メモビューア")

#### 今回の目的

* やりたかったこと
  * SCSSを試す
  * es-lintを使う
  * ファイルを分割してReactを書く
* 実現したかった機能
  * メモ一覧を表示する(済)
  * 選択したメモをエディタに表示する(済)
  * メモを登録する(済)
  * メモを編集・削除する(未完了)
  * メモを永続化する(未完了)

#### コンポーネントの整理

* App
  * contents
    * MemoEditor
    * MemoArchiveList
    * MemoArchiveCard
  * menu
      * MemoSideEditor

