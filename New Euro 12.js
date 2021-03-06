// const profile = require('profile1920.js');
// const robot = require('robot.js');
const DEVICE = require('device.js');
const PLAY = require('play.js').carrer;

sleep(2000);
toast("3秒后将开始运行程序,请迅速切换至游戏主界面");
sleep(3000);
toast("开局可能会弹广告,请自己手动关掉,直至保证程序正常选关为止");
DEVICE.checkPermission();
DEVICE.setEventListener();
DEVICE.savePower();
// 选关卡
PLAY.beforeRun();
var counterCarrer = 0;

for (;;counterCarrer++) {
    // 选择关卡
    PLAY.chooseMode(counterCarrer);
    sleep(2000);

    // 选车
    PLAY.chooseCar();
    sleep(6000);

    // 跑完之后
    PLAY.run(counterCarrer);
}