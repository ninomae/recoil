# Recoil勉強会

## 目的
ReactのState管理ライブラリ、Recoilの評判がよいのでチュートリアルを行いながらモブプロをやり理解を深める
ちなみに西田のRecoil歴は5時間くらいです

## 形式
Google Meetで西田の画面共有しながら、やる途中疑問点をもったらすぐに言っていただけたらと！

## [GettingStarted](https://recoiljs.org/docs/introduction/getting-started/)

```
npx create-react-app . --template typescript
yarn add recoil
```

## RecoilRoot
ReduxでいうStoreのようなもの、Recoilに必要な箇所に囲む
```
<RecoilRoot>
    <App/>
</RecoilRoot>
```

## atom
Recoilにおけるデータストア

## selector
Atomから取得したものを加工する

## TODO
チュートリアル通り

## 非同期処理
https://recoiljs.org/docs/guides/asynchronous-data-queries

ランダムユーザー取得
https://randomuser.me/api/

## 参考
https://ics.media/entry/210224/

https://engineering.linecorp.com/ja/blog/line-sec-frontend-using-recoil-to-get-a-safe-and-comfortable-state-management/?utm_source=pocket_mylist