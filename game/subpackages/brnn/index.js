window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  brnnBankerHead: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9563epKrsZKuYH30T6VJZ+f", "brnnBankerHead");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        headNode: cc.Node,
        labName: cc.Label,
        labMoney: cc.Label,
        btnApply: cc.Button
      },
      onLoad: function onLoad() {
        this.btnApply.node.on("click", function() {
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_brnn.SUB_CMD_GAME.SUB_BANKER_LIST_REQ);
        });
      },
      init: function init(data) {
        data.sp && (this.headNode.getChildByName("headImg").spriteFrame = data.sp);
        this.labName.string = data.name;
        this.labMoney.string = data.money;
      },
      changeMoney: function changeMoney(num) {
        this.labMoney.string = num;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brnnBankerItme: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f8e639NAq9InpjgUXRfC+QB", "brnnBankerItme");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        bankName: {
          default: null,
          type: cc.Label
        },
        rank: {
          default: null,
          type: cc.Label
        },
        coin: {
          default: null,
          type: cc.Label
        }
      },
      setBankerItme: function setBankerItme(data) {
        this.bankName.string = data.name;
        this.rank.string = data.rank;
        this.coin.string = data.coin;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brnnBankerList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "48bd2jbunxB0p2JIt/M0wjW", "brnnBankerList");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        tipNum: cc.Label,
        close: cc.Button,
        cancle: cc.Button,
        suer: cc.Button,
        down: cc.Button,
        upBankerNum: cc.Label,
        labName1: cc.Label,
        labName2: cc.Label,
        labName3: cc.Label,
        labName4: cc.Label
      },
      onLoad: function onLoad() {
        var _this = this;
        this.nameArr = [];
        for (var i = 0; i < 4; i++) this.nameArr.push(this["labName" + (i + 1)]);
        this.node.active = false;
        this.close.node.on("click", function() {
          _this.node.active = false;
        });
        this.node.on("click", function() {
          _this.node.active = false;
        });
        this.suer.node.on("click", function() {
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_brnn.SUB_CMD_GAME.SUB_WRNN_ROB_BANKER_REQ);
          _this.node.active = false;
        });
        this.cancle.node.on("click", function() {
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_brnn.SUB_CMD_GAME.SUB_WRNN_DOWN_BANKER_REQ);
          _this.node.active = false;
        });
        this.down.node.on("click", function() {
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_brnn.SUB_CMD_GAME.SUB_WRNN_DOWN_BANKER_REQ);
          _this.node.active = false;
        });
        this.initProto();
      },
      initProto: function initProto() {
        var _this2 = this;
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brnn.SUB_CMD_GAME.SUB_ROB_BANKER_RSP, function(data) {
          return _this2.bankerResult(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brnn.SUB_CMD_GAME.SUB_DOWN_BANKER_RSP, function(data) {
          return _this2.downBankerResult(data);
        }, this);
      },
      setData: function setData(num, data, btnStauts) {
        this.tipNum.string = num;
        this.suer.node.active = false;
        this.down.node.active = false;
        this.cancle.node.active = false;
        var data1 = bundle.brnn.data.get(bundle.brnn.key.data.ENTER_ROOM_SUCC);
        var rule = data1.RuleData;
        var tableRule = new proto.cmd_game_brnn.TableRule();
        cc.ak.util.tbfUtil.unPackInnerData(tableRule, rule);
        var bankerBase = tableRule.BankerBase;
        this.upBankerNum.string = "" + bankerBase;
        1 == btnStauts ? this.down.node.active = true : 2 == btnStauts ? this.cancle.node.active = true : 3 == btnStauts && (this.suer.node.active = true);
        for (var j = 0; j < this.nameArr.length; j++) this.nameArr[j].node.active = false;
        if (data) for (var i = 0; i < data.length; i++) if (this.nameArr[i]) {
          this.nameArr[i].node.active = true;
          var name = cc.ak.util.utils.FilterFormString(data[i].name + "");
          name = cc.ak.util.utils.nameInterception(data[i].name);
          this.nameArr[i].string = i + 1 + ". " + name;
        }
        this.node.active = true;
      },
      bankerResult: function bankerResult(data) {
        var result = new proto.cmd_game_brnn.RobBankerRsp();
        cc.ak.util.tbfUtil.unPackData(result, data);
        var str = lan.brnn.game["upBankerResult" + result.Result];
        cc.ak.ui.toast(str);
      },
      downBankerResult: function downBankerResult(data) {
        var result = new proto.cmd_game_brnn.DownBankerRsp();
        cc.ak.util.tbfUtil.unPackData(result, data);
        cc.ak.ui.toast(lan.brnn.game["DownBankerResult" + result.Result]);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brnnBetLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "af457b2LOBEIIVXf4Uem9Ul", "brnnBetLayer");
    "use strict";
    var BetLayer = cc.Class({
      extends: cc.Component,
      properties: {
        chipLayer: {
          default: null,
          type: cc.Node
        },
        chipSpPf: {
          default: null,
          type: cc.Prefab
        },
        headLayer: {
          default: null,
          type: cc.Node
        },
        otherLayer: {
          default: null,
          type: cc.Node
        },
        totalBetNum: cc.Label,
        lessBetNum: cc.Label,
        betNode1: cc.Node,
        betNode2: cc.Node,
        betNode3: cc.Node,
        betNode4: cc.Node,
        onMybetSucc: false,
        audioBet: {
          default: null,
          type: cc.AudioClip
        },
        recordSheetNodeArr: {
          default: [],
          type: cc.Node
        }
      },
      statics: {
        POS: {
          x: -300,
          y: 0,
          step: 200
        }
      },
      onLoad: function onLoad() {
        this.betArr = new Array();
        this.betArr.push(this.betNode1);
        this.betArr.push(this.betNode2);
        this.betArr.push(this.betNode3);
        this.betArr.push(this.betNode4);
        this.onMybetSuccArr = [];
        this.zoom = cc.winSize.width / 1920;
        for (var i = 0; i < this.betArr.length; i++) this.betArr[i].scaleX = this.zoom;
        for (var _i = 0; _i < this.betArr.length; _i++) {
          var betCop = this.betArr[_i].getComponent("brnnBet");
          this.betArr[_i].name = "" + _i;
          betCop.init(_i);
          betCop.betNumChange("0");
          betCop.selfBetNumChange("0");
        }
        this.betChips1 = [];
        this.betChips2 = [];
        this.betChips3 = [];
        this.betChips4 = [];
        this.initProto();
        this.myBetChipsFlag = 0;
      },
      initProto: function initProto() {
        var _this = this;
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brnn.SUB_CMD_GAME.SUB_WRNN_BET_INFO_RSP, function(data) {
          return _this.betPlatformInfo(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brnn.SUB_CMD_GAME.SUB_SET_BET_NUMS_RSP, function(data) {
          return _this.onMyBet(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brnn.SUB_CMD_GAME.SUB_BET_TIMES_RESULT_RSP, function(data) {
          return _this.onVipBet(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brnn.SUB_CMD_GAME.SUB_WRNN_ONTIME_SYNC_BET_RSP, function(data) {
          return _this.onLineBet(data);
        }, this);
      },
      betPlatformInfo: function betPlatformInfo(data) {
        var betInfo = new proto.cmd_game_brnn.BetChipsInfo();
        cc.ak.util.tbfUtil.unPackData(betInfo, data);
        var allBetInfo = betInfo.AllBetInfo;
        var coinNum = betInfo.CoinsNum;
        var myChairID = this.chipLayer.getComponent("brnnChipLayer").myHead.getComponent("brnnMyHead")._chairID;
        myChairID == betInfo.ChairID && this.chipLayer.getComponent("brnnChipLayer").myHead.getComponent("brnnMyHead").upDataCoin(coinNum);
        this.lessBetNum.string = "" + Math.floor(betInfo.LessChips / 1e3);
        this.totalBetNum.string = "" + Math.floor(betInfo.TotalBetChips / 1e3);
        for (var i = 0; i < allBetInfo.length; i++) {
          var pos = {};
          cc.log("allBetInfo[i].BetID :" + allBetInfo[i].BetID);
          pos.x = this.betArr[allBetInfo[i].BetID - 1].x;
          pos.y = this.betArr[allBetInfo[i].BetID - 1].y;
          0 != allBetInfo[i].SelfTotalChips && this.betArr[allBetInfo[i].BetID - 1].getComponent("brnnBet").selfBetNumChange(allBetInfo[i].SelfTotalChips / 1e3);
          if (null != allBetInfo[i].ChipsDetail) {
            cc.log("allBetInfo[i].ChipsDetail.length :" + allBetInfo[i].ChipsDetail.length + " ,betID :" + allBetInfo[i].BetID);
            for (var j = 0; j < allBetInfo[i].ChipsDetail.length; j++) {
              var chip = cc.instantiate(this.chipSpPf);
              chip.x = pos.x;
              chip.y = pos.y;
              var chipNum = this.getIndexForValue(allBetInfo[i].ChipsDetail[j]);
              chip.getComponent("brnnChipSp").init(chipNum, allBetInfo[i].ChipsDetail[j] - 1);
              this.node.addChild(chip);
              this["betChips" + allBetInfo[i].BetID].push(chip);
            }
          }
        }
      },
      onMyBet: function onMyBet(data) {
        var betTimes = new proto.cmd_game_brnn.BetTimesRsp();
        cc.ak.util.tbfUtil.unPackData(betTimes, data);
        var betInfo = betTimes.BetInfo;
        var lessChips = betTimes.LessChips;
        var totalBetChips = betTimes.TotalBetChips;
        var myRealCoin = betTimes.MyRealCoin;
        this.lessBetNum.string = "" + Math.floor(lessChips / 1e3);
        this.totalBetNum.string = "" + Math.floor(totalBetChips / 1e3);
        var type = betTimes.BetInfoType;
        var coinNum = this.chipLayer.getComponent("brnnChipLayer").myHead.getComponent("brnnMyHead");
        var chipCom = this.chipLayer.getComponent("brnnChipLayer");
        2 == type && (chipCom.btnContinue.interactable = false);
        if (0 == betTimes.BetResult) for (var i = 0; i < betInfo.length; i++) {
          var betInfoArrS = {
            betID: betInfo[i].BetID,
            chairpsID: betInfo[i].ChipsID
          };
          if (betInfoArrS.chairpsID) {
            cc.log("onMyBet chairsID: betID : " + betInfoArrS.betID + ", : " + betInfoArrS.chairpsID.length);
            this.throwBetIDForchips(1, betInfoArrS, betInfoArrS.chairpsID.length);
            this.betArr[betInfoArrS.betID - 1].getComponent("brnnBet").betNumChange(betInfo[i].TotalChips / 1e3);
            this.betArr[betInfoArrS.betID - 1].getComponent("brnnBet").selfBetNumChange(betInfo[i].SelfTotalChips / 1e3);
            for (var j = 0; j < betInfo[i].ChipsID.length; j++) {
              var num = this.getIndexForValue(betInfo[i].ChipsID[j]);
              cc.log("MYcoin : " + coinNum._myCoinNum + ",num : " + num);
              coinNum._myCoinNum -= num;
              cc.log("MYcoin : " + coinNum._myCoinNum);
            }
          }
          coinNum.upDataCoin(coinNum._myCoinNum);
          this.onMybetSucc = true;
          this.onMybetSucc && (chipCom.btnWithdraw.interactable = true);
          cc.ak.util.audioMgr.playSFX(this.audioBet);
        } else if (5 == betTimes.BetResult) cc.ak.ui.toast(lan.brnn.game.betResult5); else if (1 == betTimes.BetResult) cc.ak.ui.toast(lan.brnn.game.betResult1); else if (7 == betTimes.BetResult) {
          for (var _i2 = 0; _i2 < this.onMybetSuccArr.length; _i2++) {
            var betIn = this.onMybetSuccArr[_i2];
            var betArr = this["betChips" + betIn.betID];
            for (var _j = 0; _j < betArr.length; _j++) if (betArr[_j].name == betIn.name) {
              betArr[_j].destroy();
              betArr.splice(_j, 1);
            }
          }
          for (var _i3 = 0; _i3 < betInfo.length; _i3++) {
            var betInfoArr = {
              betID: betInfo[_i3].BetID,
              chairpsID: betInfo[_i3].ChipsID
            };
            this.betArr[betInfoArr.betID - 1].getComponent("brnnBet").betNumChange(betInfo[_i3].TotalChips / 1e3);
            this.betArr[betInfoArr.betID - 1].getComponent("brnnBet").selfBetNumChange(0);
          }
          chipCom.btnWithdraw.interactable = false;
          this.onMybetSucc = false;
          var chipLayer = this.chipLayer.getComponent("brnnChipLayer");
          var myHead = chipLayer.myHead.getComponent("brnnMyHead");
          myHead.upDataCoin(myRealCoin);
        } else 2 == betTimes.BetResult && cc.log("\u6570\u636e\u51fa\u9519");
      },
      onVipBet: function onVipBet(data) {
        var betTimes = new proto.cmd_game_brnn.BetTimesRsp();
        cc.ak.util.tbfUtil.unPackData(betTimes, data);
        this.lessBetNum.string = "" + Math.floor(betTimes.LessChips / 1e3);
        this.totalBetNum.string = "" + Math.floor(betTimes.TotalBetChips / 1e3);
        var betInfo = betTimes.BetInfo;
        if (7 == betTimes.BetResult) {
          var avatars = this.headLayer.getComponent("brnnHeadLayer").avatars;
          var realCoin = betTimes.MyRealCoin;
          for (var i = 0; i < betInfo.length; i++) {
            var betInfoArr = {
              betID: betInfo[i].BetID,
              chairpsID: betInfo[i].ChipsID
            };
            this.betArr[betInfoArr.betID - 1].getComponent("brnnBet").betNumChange(betInfo[i].TotalChips / 1e3);
            this.chipLayer.getComponent("brnnChipLayer").myHead.getComponent("brnnMyHead")._chairID == chairID && this.betArr[betInfoArr.betID - 1].getComponent("brnnBet").selfBetNumChange(betInfo[i].SelfTotalChips / 1e3);
            if (0 == betInfo[i].TotalChips) {
              var betArr = this["betChips" + betInfo[i].BetID];
              for (var j = 0; j < betArr.length; j++) betArr[j].destroy();
              betArr.splice(0, betArr.length);
            }
          }
          if (avatars[betTimes.LocateID]) {
            var avatar = avatars[betTimes.LocateID].getChildByName("head").getComponent("brnnHead");
            avatar.updataCoin(realCoin);
          }
        } else for (var _i4 = 0; _i4 < betInfo.length; _i4++) {
          var betInfoArr = {
            betID: betInfo[_i4].BetID,
            chairpsID: betInfo[_i4].ChipsID
          };
          this.betArr[betInfoArr.betID - 1].getComponent("brnnBet").betNumChange(betInfo[_i4].TotalChips / 1e3);
          this.chipLayer.getComponent("brnnChipLayer").myHead.getComponent("brnnMyHead")._chairID == chairID && this.betArr[betInfoArr.betID - 1].getComponent("brnnBet").selfBetNumChange(betInfo[_i4].SelfTotalChips / 1e3);
        }
        var chairID = betTimes.ChairID;
        if (this.chipLayer.getComponent("brnnChipLayer").myHead.getComponent("brnnMyHead")._chairID == chairID) {
          var avatars = this.headLayer.getComponent("brnnHeadLayer").avatars;
          for (var _i5 = 0; _i5 < betInfo.length; _i5++) {
            var chips = betInfo[_i5].ChipsID;
            if (chips) for (var _j2 = 0; _j2 < chips.length; _j2++) {
              var num = this.getIndexForValue(chips[_j2]);
              var coin = avatars[betTimes.LocateID].getChildByName("head").getComponent("brnnHead")._coinNum -= num;
              avatars[betTimes.LocateID].getChildByName("head").getComponent("brnnHead").updataCoin(coin);
            }
          }
          return;
        }
        var headLayerCom = this.headLayer.getComponent("brnnHeadLayer");
        cc.log("onvip length: " + betInfo.length);
        for (var _i6 = 0; _i6 < betInfo.length; _i6++) {
          var betInfoArr = {
            betID: betInfo[_i6].BetID,
            chairpsID: betInfo[_i6].ChipsID,
            locateID: betTimes.LocateID,
            chipsValue: betInfo[_i6].ChipsValue
          };
          betInfoArr.chairpsID && this.throwBetIDForchips(2, betInfoArr, betInfoArr.chairpsID.length);
        }
      },
      onLineBet: function onLineBet(data) {
        var betTimes = new proto.cmd_game_brnn.AllBetTimesInfo();
        cc.ak.util.tbfUtil.unPackData(betTimes, data);
        this.lessBetNum.string = "" + Math.floor(betTimes.LessChips / 1e3);
        this.totalBetNum.string = "" + Math.floor(betTimes.TotalBetChips / 1e3);
        var allBetInfo = betTimes.AllBetInfo;
        if (null != allBetInfo) for (var i = 0; i < allBetInfo.length; i++) {
          var betInfo = {
            betID: allBetInfo[i].BetID,
            chips: allBetInfo[i].ChipsID,
            totalChips: allBetInfo[i].TotalChips
          };
          this.betArr[betInfo.betID - 1].getComponent("brnnBet").betNumChange(betInfo.totalChips / 1e3);
          this.onlineBetAnim(betInfo);
        }
      },
      onlineBetAnim: function onlineBetAnim(data) {
        if (null == data.chips) return;
        var otherLayer = this.otherLayer.getComponent("brnnOtherLayer");
        for (var i = 0; i < data.chips.length; i++) {
          var chip = cc.instantiate(this.chipSpPf);
          chip.x = otherLayer.onLineNode.x * this.zoom;
          chip.y = otherLayer.onLineNode.y;
          this.node.addChild(chip);
          var chipNum = this.getIndexForValue(data.chips[i]);
          chip.getComponent("brnnChipSp").init(chipNum, data.chips[i] - 1);
          var bet = this.betArr[data.betID - 1];
          var betX = this.node.convertToNodeSpaceAR(bet.parent.convertToWorldSpaceAR(bet.getPosition())).x;
          var betY = this.node.convertToNodeSpaceAR(bet.parent.convertToWorldSpaceAR(bet.getPosition())).y;
          var w = this.betArr[data.betID - 1].width;
          var h = this.betArr[data.betID - 1].height;
          var sp_x = Math.floor(Math.random() * (betX + w / 2 - 60 - (betX - w / 2 + 60) + 1) + (betX - w / 2) + 60);
          var sp_y = Math.floor(Math.random() * (betY + h / 2 - 80 - (betY - h / 2 + 80) + 1) + (betY - h / 2) + 80);
          chip.runAction(cc.moveTo(.2, sp_x, sp_y));
          this["betChips" + data.betID].push(chip);
        }
        cc.ak.util.audioMgr.playSFX(this.audioBet);
        cc.log("this[betChips+data.betID].push(chip) : betid :" + data.betID + ",length" + this["betChips" + data.betID].length);
      },
      randomNum: function randomNum(min, max) {
        var range = max - min;
        var rand = Math.random();
        if (0 == Math.round(rand * range)) return min + 1;
        if (Math.round(rand * max) == max) return max - 1;
        var num = min + Math.round(rand * range) - 1;
        return num;
      },
      throwBetIDForchips: function throwBetIDForchips(where, betInfo, length) {
        cc.log("where : " + where + ", betINfo :" + betInfo.chairpsID.length + ",locateID : " + betInfo.locateID + ",length :" + length);
        var size = this["betNode" + betInfo.betID].getContentSize();
        var h = size.height;
        var w = size.width;
        var bet = this.betArr[betInfo.betID - 1];
        var betX = this.node.convertToNodeSpaceAR(bet.parent.convertToWorldSpaceAR(bet.getPosition())).x;
        var betY = this.node.convertToNodeSpaceAR(bet.parent.convertToWorldSpaceAR(bet.getPosition())).y;
        for (var i = 0; i < length; i++) {
          var sp_x = Math.floor(Math.random() * (betX + w / 2 - 60 - (betX - w / 2 + 60) + 1) + (betX - w / 2) + 60);
          var sp_y = Math.floor(Math.random() * (betY + h / 2 - 80 - (betY - h / 2 + 80) + 1) + (betY - h / 2) + 80);
          if (betInfo.chairpsID[i] >= 1 && betInfo.chairpsID[i] <= 6) {
            switch (where) {
             case 1:
              var chip = this.chipLayer.getComponent("brnnChipLayer").chipArr[betInfo.chairpsID[i] - 1];
              var x = this.chipLayer.convertToNodeSpaceAR(chip.parent.convertToWorldSpaceAR(chip.getPosition())).x;
              var y = this.chipLayer.convertToNodeSpaceAR(chip.parent.convertToWorldSpaceAR(chip.getPosition())).y;
              break;

             case 2:
              var avatars = this.headLayer.getComponent("brnnHeadLayer").avatars;
              if (avatars[betInfo.locateID]) {
                var x = avatars[betInfo.locateID].x;
                var y = avatars[betInfo.locateID].y;
                var num = 0;
                num = this.getIndexForValue(betInfo.chairpsID[i]);
                var avatar = avatars[betInfo.locateID].getChildByName("head").getComponent("brnnHead");
                var coin = avatar._coinNum -= num;
                avatar.updataCoin(coin);
                this.headLayer.getComponent("brnnHeadLayer").vipHeadBetMove(betInfo.locateID);
              }
            }
            var chip = cc.instantiate(this.chipSpPf);
            chip.x = x;
            chip.y = y;
            this.node.addChild(chip);
            var coin = this.getIndexForValue(betInfo.chairpsID[i]);
            chip.getComponent("brnnChipSp").init(coin, betInfo.chairpsID[i] - 1);
            chip.runAction(cc.moveTo(.2, cc.v2(sp_x, sp_y)));
            if (1 == where) {
              chip.name = "" + this.myBetChipsFlag;
              var betInf = {
                betID: betInfo.betID,
                chip: chip,
                name: chip.name
              };
              this.onMybetSuccArr.push(betInf);
              this.myBetChipsFlag++;
            }
            this["betChips" + betInfo.betID].push(chip);
          }
          cc.ak.util.audioMgr.playSFX(this.audioBet);
        }
      },
      getIndexForValue: function getIndexForValue(index) {
        var data = bundle.brnn.data.get(bundle.brnn.key.data.ENTER_ROOM_SUCC);
        var rule = data.RuleData;
        var tableRule = new proto.cmd_game_brnn.TableRule();
        cc.ak.util.tbfUtil.unPackInnerData(tableRule, rule);
        var chipsNum = tableRule.CardNumber;
        var chipNum = -1;
        for (var t = 0; t < chipsNum.length; t++) index == t + 1 && (chipNum = chipsNum[t]);
        return chipNum;
      },
      cleanChips: function cleanChips() {
        for (var i = 0; i < this.betChips1.length; i++) this.betChips1[i].destroy();
        for (var _i7 = 0; _i7 < this.betChips2.length; _i7++) this.betChips2[_i7].destroy();
        for (var _i8 = 0; _i8 < this.betChips3.length; _i8++) this.betChips3[_i8].destroy();
        for (var _i9 = 0; _i9 < this.betChips4.length; _i9++) this.betChips4[_i9].destroy();
        for (var _i10 = 0; _i10 < this.onMybetSuccArr.length; _i10++) this.onMybetSuccArr[_i10].chip.destroy();
        this.onMybetSuccArr.splice(0, this.onMybetSuccArr.length);
        for (var _i11 = 1; _i11 < 5; _i11++) this["betChips" + _i11].splice(0, this["betChips" + _i11].length);
      },
      canClick: function canClick(yes) {
        for (var i = 0; i < this.betArr.length; i++) this.betArr[i].getComponent("brnnBet").canClick(yes);
      },
      start: function start() {},
      onEnable: function onEnable() {
        var _this2 = this;
        for (var i = 0; i < this.betArr.length; i++) this.betArr[i].on("clickBet", function(event) {
          var toastFlag = 0;
          var chipArr = _this2.chipLayer.getComponent("brnnChipLayer").chipArr;
          var chipLayer = _this2.chipLayer.getComponent("brnnChipLayer");
          for (var j = 0; j < _this2.betArr.length; j++) if (_this2.betArr[j].name == event.name.substring(0, 1)) if (chipLayer.bankFlag.node.active) cc.ak.ui.toast(lan.brnn.game.bankerNotBet); else for (var k = 0; k < chipArr.length; k++) {
            if (chipArr[k].getComponent("brnnChip")._hightFlag) {
              var betTime = new proto.cmd_game_brnn.SetBetTimesRsq();
              betTime.BetID = j + 1;
              betTime.BetChips = k + 1;
              betTime.Type = 1;
              _this2.getIndexForValue(j + 1) > _this2.chipLayer.getChildByName("myHead").getComponent("brnnMyHead")._myCoinNum ? cc.ak.ui.toast(lan.com.lbl.game.betFail) : cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_brnn.SUB_CMD_GAME.SUB_SET_BET_NUMS_REQ, betTime);
              return;
            }
            toastFlag++;
            toastFlag == chipArr.length && (chipLayer.bankFlag.node.active ? cc.ak.ui.toast(lan.com.lbl.game.isBanker) : 0 == chipLayer.chipMinStatus ? cc.ak.ui.toast(lan.com.lbl.game.goldInadequate) : cc.ak.ui.toast(lan.com.lbl.game.betTips));
          }
        });
      },
      onDestroy: function onDestroy() {
        cc.ak.event.targetOff(this);
      }
    });
    cc._RF.pop();
  }, {} ],
  brnnBet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3b7baih2LxIFLjNhK1Vd9dZ", "brnnBet");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        sp: {
          default: [],
          type: [ cc.SpriteFrame ]
        },
        betSp: cc.Sprite,
        labBetNum: cc.Label,
        labSelfBetNum: cc.Label,
        betLight: cc.Sprite
      },
      onLoad: function onLoad() {
        this.node.on("click", this.onBet, this);
        this.betLight.node.active = false;
        this.getComponent(cc.Button)._soundOn = false;
      },
      init: function init(num) {
        this.betSp.spriteFrame = this.sp[num];
      },
      isVisiLight: function isVisiLight(yes) {
        this.betLight.node.active = yes;
        yes && this.betLight.node.runAction(cc.sequence(cc.fadeIn(1).easing(cc.easeSineOut()), cc.fadeOut(1).easing(cc.easeSineOut())).repeatForever());
      },
      betNumChange: function betNumChange(num) {
        this.labBetNum.string = "" + num;
      },
      selfBetNumChange: function selfBetNumChange(num) {
        0 == this.node.name && cc.log("num : " + num);
        this.labSelfBetNum.string = "" + num;
      },
      onBet: function onBet() {
        this.node.emit("clickBet", this);
      },
      canClick: function canClick(yes) {
        this.getComponent(cc.Button).interactable = yes;
      },
      cleanChipPrefab: function cleanChipPrefab() {
        for (var i = 0; i < this.node.children.length; i++) ;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brnnCardLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d81f991yuJOfKMaDwOhZJui", "brnnCardLayer");
    "use strict";
    var CardLayer = cc.Class({
      extends: cc.Component,
      properties: {
        poker_bg: {
          default: null,
          type: cc.Prefab
        },
        bankerCardNode: cc.Node,
        cardNode1: cc.Node,
        cardNode2: cc.Node,
        cardNode3: cc.Node,
        cardNode4: cc.Node,
        audioType: {
          type: cc.AudioClip,
          default: []
        },
        typeNiuAnim: {
          default: [],
          type: cc.Prefab
        },
        audioCard: {
          default: null,
          type: cc.AudioClip
        },
        sp_dealer: cc.Sprite
      },
      statics: {
        POS: [ {
          x: -555,
          y: -110,
          step: 50
        }, {
          x: -100,
          y: 300,
          step: 50
        }, {
          x: -395,
          y: 295,
          step: 50
        }, {
          x: -690,
          y: 285,
          step: 50
        }, {
          x: -990,
          y: 285,
          step: 50
        } ]
      },
      onLoad: function onLoad() {
        this._type = [];
        this.cardArr = [ [], [], [], [], [] ];
        this.timeOut = [];
        this.turnTimeOut = -1;
        this.cardNode = [];
        this.cardNode.push(this.bankerCardNode);
        this.cardNode.push(this.cardNode1);
        this.cardNode.push(this.cardNode2);
        this.cardNode.push(this.cardNode3);
        this.cardNode.push(this.cardNode4);
        for (var i = 0; i < this.cardNode.length; i++) {
          this.cardNode[i].getChildByName("type").active = false;
          this.cardNode[i].getChildByName("type").zIndex = 10;
        }
      },
      setType: function setType(betId, type) {
        var niuAinm = cc.instantiate(this.typeNiuAnim[type]);
        this.cardNode[betId].getChildByName("type").destroyAllChildren();
        this.cardNode[betId].getChildByName("type").addChild(niuAinm);
        this._type[betId] = type;
      },
      showType: function showType(betID) {
        this.cardNode[betID].getChildByName("type").active = true;
        var anim = this.cardNode[betID].getChildByName("type").children[0];
        var spine = anim.getChildByName("skeleton");
        cc.log("showType ID : " + this._type[betID]);
        if (spine) {
          var ske = spine.getComponent(sp.Skeleton);
          ske.setCompleteListener(function(trackEntry) {});
          ske.clearTracks();
          ske.setAnimation(0, "animation", false);
        } else {
          var animtion = anim.getComponent(cc.Animation);
          animtion.play();
        }
        void 0 != this.audioType[this._type[betID]] && cc.ak.util.audioMgr.playSFX(this.audioType[this._type[betID]]);
      },
      hideType: function hideType(betID) {
        this.cardNode[betID].getChildByName("type").destroyAllChildren();
        this.cardNode[betID].getChildByName("type").active = false;
      },
      start: function start() {},
      creatorCard: function creatorCard(betID, cardVaules, type) {
        if (null == cardVaules) {
          cc.log("cardVaule is null");
          return;
        }
        this.setType(betID, type);
        for (var i = 0; i < 5; i++) {
          var cards = this.cardArr[betID];
          var card = cards[i];
          if (null == card) {
            card = cc.instantiate(this.poker_bg);
            this.cardNode[betID].addChild(card);
          }
          var pos = this.cardNode[betID].convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(this.sp_dealer.node.getPosition()));
          card.active = true;
          card.rotation = 60;
          card.scale = .8;
          card.getComponent("card").setBg(1);
          card.getComponent("card").setCardvaule(cardVaules[i]);
          card.x = pos.x + 30;
          card.y = pos.y - 30;
          this.cardArr[betID][i] = card;
        }
      },
      sendCardAnim: function sendCardAnim() {
        var _this = this;
        var _loop = function _loop(i) {
          var cards = _this.cardArr[i];
          var _loop2 = function _loop2(j) {
            var card = cards[j];
            var pos = CardLayer.POS[i];
            if (0 == i) {
              card.ex = j * pos.step;
              card.ey = -20;
            } else {
              card.ex = j * pos.step - 80;
              card.ey = 0;
            }
            card.runAction(cc.sequence(cc.delayTime(.05 * j + .4 * Math.floor(i % 5)), cc.rotateTo(.01, -45), cc.spawn(cc.rotateTo(.2, 0), cc.scaleTo(.2, 1), cc.moveTo(.2, card.ex + 50, card.y - 40), cc.callFunc(function() {})), cc.moveTo(.1, card.ex, card.ey), cc.callFunc(function(card) {
              var _this2 = this;
              card.getComponent("card").setBg(0);
              cc.ak.util.audioMgr.playSFX(this.audioCard);
              cards.length - 1 == j && card.getComponent("card").setBg(1);
              if (i == this.cardArr.length - 1 && j == cards.length - 1) {
                var _loop3 = function _loop3(t) {
                  timeOut = setTimeout(function() {
                    this.turnCard(t);
                  }.bind(_this2), 1e3 * t);
                  _this2.timeOut.push(timeOut);
                };
                for (var t = 0; t < 5; t++) {
                  var timeOut;
                  _loop3(t);
                }
              }
            }.bind(_this))));
          };
          for (var j = 0; j < cards.length; j++) _loop2(j);
        };
        for (var i = 0; i < this.cardArr.length; i++) _loop(i);
      },
      turnCard: function turnCard(betId) {
        var _this3 = this;
        var that = this;
        var _loop4 = function _loop4(i) {
          if (i == _this3.cardArr[betId].length - 1) {
            card = _this3.cardArr[betId][i];
            card.runAction(cc.sequence(cc.scaleTo(.2, .001, 1), cc.scaleTo(.2, 1, 1), cc.callFunc(function() {
              card.getComponent("card").setBg(0);
              that.showType(betId);
              4 == betId && 4 == i && (_this3.turnTimeOut = setTimeout(function() {
                this.acceptCardAnim();
              }.bind(_this3), 1e3));
            })));
          }
        };
        for (var i = 0; i < this.cardArr[betId].length; i++) {
          var card;
          _loop4(i);
        }
      },
      acceptCardAnim: function acceptCardAnim() {
        var _this4 = this;
        var that = this;
        var _loop5 = function _loop5(i) {
          cards = _this4.cardArr[i];
          pos = _this4.cardNode[i].convertToNodeSpaceAR(_this4.node.convertToWorldSpaceAR(_this4.sp_dealer.node.getPosition()));
          var _loop6 = function _loop6(j) {
            card = cards[j];
            card.runAction(cc.sequence(cc.delayTime(.05 * j + .4 * Math.floor(i % 5)), cc.rotateTo(.01, -45), cc.spawn(cc.rotateTo(.2, 0), cc.scaleTo(.2, 1), cc.moveTo(.2, pos.x + 30, pos.y - 30), cc.callFunc(function() {})), cc.callFunc(function(card) {
              card.active = false;
              4 == j && that.hideType(i);
            })));
          };
          for (var j = 0; j < cards.length; j++) _loop6(j);
        };
        for (var i = 0; i < this.cardArr.length; i++) {
          var cards;
          var pos;
          var card;
          _loop5(i);
        }
      },
      hideCards: function hideCards() {
        for (var i = 0; i < this.cardArr.length; i++) {
          var cards = this.cardArr[i];
          for (var j = 0; j < cards.length; j++) null != cards && (cards[j].active = false);
        }
      },
      showCard: function showCard() {
        for (var i = 0; i < this.cardArr.length; i++) {
          var cards = this.cardArr[i];
          for (var j = 0; j < cards.length; j++) {
            var card = cards[j];
            if (0 == i) {
              card.x = j * CardLayer.POS[i].step;
              card.y = 0;
            } else {
              card.x = j * CardLayer.POS[i].step - 60;
              card.y = 0;
            }
            card.rotation = 0;
            card.scale = 1;
            card.getComponent("card").setBg(0);
          }
        }
      },
      onDestroy: function onDestroy() {
        this.node.stopAllActions();
        for (var i = 0; i < this.timeOut.length; i++) clearInterval(this.timeOut[i]);
        clearInterval(this.turnTimeOut);
      }
    });
    cc._RF.pop();
  }, {} ],
  brnnCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "31d9eH0wl1Hib9+UfqSHPh1", "brnnCard");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        cardVaule: {
          default: null,
          type: cc.Label
        },
        cardBigType: {
          default: null,
          type: cc.Label
        },
        cardType: cc.Label,
        cardBg_back: {
          default: null,
          type: cc.Sprite
        }
      },
      onLoad: function onLoad() {
        this.artTxtSimp = "0123456789:;<=>?@";
      },
      start: function start() {},
      setBg: function setBg(type) {
        this.cardBg_back.node.active = 1 == type;
      },
      setCardvaule: function setCardvaule(cardvalue) {
        var value = 15 & cardvalue;
        var type = (240 & cardvalue) >> 4;
        this.cardVaule.string = this.artTxtSimp[value];
        this.cardType.string = this.artTxtSimp[type + 1];
        this.cardBigType.string = this.artTxtSimp[type + 1];
        value <= 10;
      }
    });
    cc._RF.pop();
  }, {} ],
  brnnChipLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dfe9cHrO5lEq5DPCwjPUtke", "brnnChipLayer");
    "use strict";
    var ChipLayer = cc.Class({
      extends: cc.Component,
      properties: {
        chipPf: {
          default: null,
          type: cc.Prefab
        },
        bankFlag: cc.Sprite,
        btnContinue: cc.Button,
        btnWithdraw: cc.Button,
        myHead: cc.Node,
        btnArrowL: cc.Sprite,
        btnArrowR: cc.Sprite,
        chipArr: {
          default: [],
          type: cc.Node
        }
      },
      statics: {
        POS: {
          x: -200,
          y: -300,
          step: 100
        }
      },
      onLoad: function onLoad() {
        cc.log("onLoad");
        this.chipMinStatus = null;
        var data = bundle.brnn.data.get(bundle.brnn.key.data.ENTER_ROOM_SUCC);
        var rule = data.RuleData;
        var tableRule = new proto.cmd_game_brnn.TableRule();
        cc.ak.util.tbfUtil.unPackInnerData(tableRule, rule);
        var chipNum = tableRule.CardNumber;
        for (var i = 0; i < this.chipArr.length; i++) {
          var chipCom = this.chipArr[i].getComponent("brnnChip");
          cc.log("chipNum[i] : " + chipNum[i]);
          chipCom.init(chipNum[i] / 1e3, i);
          chipCom._hightFlag = false;
          this.chipArr[i].name = "" + i;
        }
        this.init();
      },
      init: function init() {
        var _this = this;
        this.btnContinue.node.on("click", function() {
          var betTime = new proto.cmd_game_brnn.SetBetTimesRsq();
          betTime.Type = 2;
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_brnn.SUB_CMD_GAME.SUB_SET_BET_NUMS_REQ, betTime);
        });
        this.btnWithdraw.node.on("click", function() {
          var betTime = new proto.cmd_game_brnn.SetBetTimesRsq();
          betTime.Type = 3;
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_brnn.SUB_CMD_GAME.SUB_SET_BET_NUMS_REQ, betTime);
        });
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brnn.SUB_CMD_GAME.SUB_REPEAT_BET_STATUS_RSP, function(data) {
          return _this.onContinueStatus(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brnn.SUB_CMD_GAME.SUB_USERINFO_PUSH, function(data) {
          return _this.myInfo(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brnn.SUB_CMD_GAME.SUB_WRNN_PLAYER_STATUS_RSP, function(data) {
          return _this.chipStatus(data);
        }, this);
        cc.ak.event.on(cc.ak.key.event.COIN_CHANGE, function(data) {
          if (_this.myHead) {
            var coins = data.Coins;
            var sum = 0;
            var myCoinNum = _this.myHead.getComponent("brnnMyHead")._myCoinNum;
            for (var i = 0; i < coins.length; i++) coins[i].CoinID == proto.cmd_sys.COIN_ID.COIN_ID_A ? 1 == coins[i].AddFlag && (sum = coins[i].Amount + myCoinNum) : coins[i].CoinID == proto.cmd_sys.COIN_ID.COIN_ID_B && 1 == coins[i].AddFlag && (sum = coins[i].Amount + myCoinNum);
            _this.myHead.getComponent("brnnMyHead").upDataCoin(sum);
          }
        });
      },
      chipStatus: function chipStatus(data) {
        var status = new proto.cmd_game_brnn.WrnnPlayerStatus();
        cc.ak.util.tbfUtil.unPackData(status, data);
        var chipArr = this.chipArr;
        this.chipMinStatus = status.MaxChipsId;
        for (var i = 1; i <= chipArr.length; i++) if (i <= status.MaxChipsId) chipArr[i - 1].getComponent("brnnChip").canClick(true); else {
          chipArr[i - 1].getComponent("brnnChip").canClick(false);
          chipArr[i - 1].getComponent("brnnChip")._hightFlag = false;
          chipArr[i - 1].getComponent("brnnChip").refreshChip();
        }
      },
      onContinueStatus: function onContinueStatus(data) {
        var status = new proto.cmd_game_brnn.RepeatBetStatus();
        cc.ak.util.tbfUtil.unPackData(status, data);
        this.btnContinue.getComponent(cc.Button).interactable = 0 != status.Status;
      },
      myInfo: function myInfo(data) {
        var Info = new proto.cmd_game_brnn.UserInfo();
        cc.ak.util.tbfUtil.unPackData(Info, data);
        if (Info.ChairID == this.myHead.getComponent("brnnMyHead").chairID && proto.cmd_room.USER_STATUS_TYPE.USER_STATUS_NULL == Info.Status) {
          cc.ak.ui.loadLobbyScence();
          return;
        }
        var coinNum = Info.AccountA + Info.AccountB;
        cc.log("\u81ea\u5df1\u91d1\u5e01\u5237\u65b0 :" + coinNum);
        var coin = coinNum;
        data = {
          name: Info.NickName,
          coin: coin,
          chairID: Info.ChairID,
          head: Info.HeadImgId
        };
        Info.Uid == cc.ak.mc.userMgr.uid && this.myHead.getComponent("brnnMyHead").setMyInfo(data);
      },
      canClick: function canClick(yes) {
        for (var i = 0; i < this.chipArr.length; i++) this.chipArr[i].getComponent("brnnChip").canClick(yes);
      },
      isVisiChips: function isVisiChips(yes) {
        for (var i = 0; i < this.chipArr.length; i++) this.chipArr[i].active = yes;
        this.bankFlag.node.active = !yes;
      },
      onEnable: function onEnable() {
        var _this2 = this;
        for (var i = 0; i < this.chipArr.length; i++) this.chipArr[i].on("checkHight", function(event) {
          for (var j = 0; j < _this2.chipArr.length; j++) {
            var chip = _this2.chipArr[j].getComponent("brnnChip");
            if (_this2.chipArr[j].name == event.name.substring(0, 1)) {
              chip._hightFlag = true;
              chip.refreshChip();
            } else {
              chip._hightFlag = false;
              chip.refreshChip();
            }
          }
        });
      },
      onPageEvent: function onPageEvent(pageView, eventType, customEventData) {
        if (eventType == cc.PageView.EventType.PAGE_TURNING) {
          var index = pageView.getCurrentPageIndex();
          if (0 == index) {
            this.btnArrowL.node.active = true;
            this.btnArrowR.node.active = false;
          } else if (1 == index) {
            this.btnArrowL.node.active = false;
            this.btnArrowR.node.active = true;
          }
        }
      },
      start: function start() {},
      update: function update(dt) {},
      onDestroy: function onDestroy() {
        cc.ak.event.targetOff(this);
      }
    });
    cc._RF.pop();
  }, {} ],
  brnnChipSp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef3f7NLTwdELLVyhUcaw1HB", "brnnChipSp");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        num: {
          default: null,
          type: cc.Label
        },
        sp: {
          default: [],
          type: [ cc.SpriteFrame ]
        }
      },
      init: function init(num, sp) {
        this.num.string = "" + num / 1e3;
        this.getComponent(cc.Sprite).spriteFrame = this.sp[sp];
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brnnChip: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "17ba0BxKLxHuocDacFNh97D", "brnnChip");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _hightFlag: false,
        num: {
          default: null,
          type: cc.Label
        },
        chipK: cc.Sprite,
        sp: {
          default: [],
          type: [ cc.SpriteFrame ]
        },
        _chipNum: -1
      },
      onLoad: function onLoad() {
        this.node.on("click", this.chipCallBack, this);
      },
      chipCallBack: function chipCallBack(event) {
        this.node.emit("checkHight", this);
      },
      start: function start() {},
      init: function init(num, sp) {
        this._chipNum = num;
        if (num >= 1e3) {
          this.chipK.node.active = true;
          this.num.node.x = -20;
          var chipNum = parseInt(num / 1e3);
          this.num.string = "" + chipNum;
        } else {
          this.num.string = "" + num;
          this.num.node.x = 0;
          this.chipK.node.active = false;
        }
        this.getComponent(cc.Sprite).spriteFrame = this.sp[sp];
      },
      getChip: function getChip() {
        return this._chipNum;
      },
      canClick: function canClick(yes) {
        this.getComponent(cc.Button).interactable = yes;
      },
      cleanChipHightFlag: function cleanChipHightFlag() {
        this._hightFlag = null;
      },
      refreshChip: function refreshChip() {
        true == this._hightFlag ? this.node.y = 30 : false == this._hightFlag && (this.node.y = 0);
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ],
  brnnHeadLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8fc70ua1U9E6IRAFVHJWSaj", "brnnHeadLayer");
    "use strict";
    var _cc$Class;
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    var HeadLayer = cc.Class((_cc$Class = {
      extends: cc.Component,
      properties: {
        _chairID: null,
        chairID: {
          get: function get() {
            return this._chairID;
          }
        },
        bankNode: {
          default: null,
          type: cc.Node
        },
        headNode2: cc.Node,
        headNode3: cc.Node,
        headNode4: cc.Node,
        headNode5: cc.Node,
        headNode6: cc.Node,
        headNode7: cc.Node,
        chipLayer: cc.Node,
        pfHead: cc.Prefab,
        btnBanker: cc.Button
      },
      statics: {},
      onLoad: function onLoad() {
        this.avatars = [];
        this.head = [];
        this.head.push(this.headNode2);
        this.head.push(this.headNode3);
        this.head.push(this.headNode4);
        this.head.push(this.headNode5);
        this.head.push(this.headNode6);
        this.head.push(this.headNode7);
        this.headPos = [];
        for (var i = 0; i < this.head.length; i++) this.headPos.push(0);
        this.chipLayerCom = this.chipLayer.getComponent("brnnChipLayer");
        this.initProto();
        this.btnBanker.node.on("click", function() {
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_brnn.SUB_CMD_GAME.SUB_BANKER_LIST_REQ);
        });
      },
      start: function start() {},
      initProto: function initProto() {
        var _this = this;
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brnn.SUB_CMD_GAME.SUB_WRNN_CHAIR_INFO_RSP, function(data) {
          return _this.upDataOne(data);
        }, this);
      },
      upDataOne: function upDataOne(data) {
        for (var p = 0; p < 7; p++) this.avatars[p] = null;
        var userInfos = new proto.cmd_game_brnn.WrnnChairInfoRsp();
        cc.ak.util.tbfUtil.unPackData(userInfos, data);
        var chairsInfo = userInfos.AllChairInfo;
        if (null == chairsInfo) return;
        for (var j = 0; j < this.head.length; j++) this.head[j].active = false;
        for (var i = 0; i < chairsInfo.length; i++) {
          if (0 == chairsInfo[i].LocateID) {
            if (null != chairsInfo[i].User) {
              var coin = chairsInfo[i].CoinsNum;
              var info = {
                name: chairsInfo[i].User.NickName,
                coin: coin,
                head: chairsInfo[i].User.HeadImgId
              };
              info.name = cc.ak.util.utils.FilterFormString(info.name + "");
              info.name = cc.ak.util.utils.nameInterception(info.name);
              this.bankNode.getChildByName("myHead").getComponent("brnnMyHead").setMyInfo(info);
              if (void 0 != this.chipLayerCom) if (chairsInfo[i].User.ChairID == this.chipLayerCom.myHead.getComponent("brnnMyHead")._chairID) {
                this.chipLayerCom.myHead.getComponent("brnnMyHead").upDataCoin(coin);
                this.chipLayerCom.isVisiChips(false);
              } else this.chipLayerCom.isVisiChips(true);
              continue;
            }
            this.chipLayerCom.isVisiChips(true);
            var info = {
              name: "\u5e84\u5bb6",
              coin: "xxxxxx",
              head: 1
            };
            this.bankNode.getChildByName("myHead").getComponent("brnnMyHead").setMyInfo(info);
            continue;
          }
          var userInfo = null;
          if (chairsInfo[i].User) {
            var coin = chairsInfo[i].CoinsNum;
            userInfo = {
              name: chairsInfo[i].User.NickName,
              coin: coin,
              head: chairsInfo[i].User.HeadImgId
            };
          }
          var head = this["headNode" + (chairsInfo[i].LocateID + 1)];
          head.active = true;
          var headNode = head.getChildByName("head");
          var headCopm = headNode.getComponent("brnnHead");
          userInfo && headCopm.setParame(chairsInfo[i].LocateID, userInfo);
          this.avatars[chairsInfo[i].LocateID] = head;
        }
      },
      vipUpdataCoinNum: function vipUpdataCoinNum(wrnnArr) {
        for (var i = 0; i < wrnnArr.length; i++) for (var j = 0; j < this.avatars.length; j++) if (null != this.avatars[j]) {
          var head = this.avatars[j].getChildByName("head");
          var headCop = head.getComponent("brnnHead");
          headCop.getLocate() == wrnnArr[i].LocateID && headCop.coinUpdata(wrnnArr[i].User);
        }
      },
      vipHeadBetMove: function vipHeadBetMove(locateID) {
        var index = locateID - 1;
        if (index > 5) return;
        var x = this.head[index].x;
        var y = this.head[index].y;
        if (0 == this.headPos[index]) {
          this.headPos[index] = 1;
          var that = this;
          index < 3 ? this.head[index].runAction(cc.sequence(cc.moveTo(.2, x + 30, y), cc.moveTo(.2, x, y), cc.callFunc(function() {
            that.headPos[index] = 0;
          }))) : this.head[index].runAction(cc.sequence(cc.moveTo(.2, x - 30, y), cc.moveTo(.2, x, y), cc.callFunc(function() {
            that.headPos[index] = 0;
          })));
        }
      },
      bankerFlyScoreAnim: function bankerFlyScoreAnim(num, info) {
        var winScore = this.bankNode.getChildByName("myHead").getChildByName("winScore");
        var loseScore = this.bankNode.getChildByName("myHead").getChildByName("loseScore");
        var score = null;
        if (0 == num) return;
        score = Math.floor(num / 10) / 100;
        var that = this;
        if (score > 0) {
          winScore.active = true;
          winScore.x = 205;
          winScore.getComponent(cc.Label).string = "+" + 100 * score / 100;
          winScore.runAction(cc.sequence(cc.moveTo(3, winScore.x, winScore.y - 50), cc.callFunc(function() {
            winScore.y = 0;
            winScore.active = false;
            if (info) {
              var coin = Math.floor((info.AccountA + info.AccountB) / 10) / 100;
              that.bankNode.getChildByName("myHead").getChildByName("labCoinNum").getComponent(cc.Label).string = "" + 100 * coin / 100;
            }
          })));
        } else {
          loseScore.active = true;
          loseScore.x = 180;
          loseScore.getComponent(cc.Label).string = "" + score;
          loseScore.runAction(cc.sequence(cc.moveTo(3, loseScore.x, loseScore.y - 50), cc.callFunc(function() {
            loseScore.y = 0;
            loseScore.active = false;
            if (info) {
              var coin = Math.floor((info.AccountA + info.AccountB) / 10) / 100;
              that.bankNode.getChildByName("myHead").getChildByName("labCoinNum").getComponent(cc.Label).string = "" + 100 * coin / 100;
            }
          })));
        }
      }
    }, _defineProperty(_cc$Class, "start", function start() {}), _defineProperty(_cc$Class, "onDestroy", function onDestroy() {
      cc.ak.event.targetOff(this);
    }), _cc$Class));
    cc._RF.pop();
  }, {} ],
  brnnHead: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "054d22EnvZPv72mKE044D5X", "brnnHead");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        headIcon: cc.Node,
        labName: cc.Label,
        labCoin: cc.Label,
        _locateID: 0,
        _coinNum: -1,
        winScore: cc.Label,
        loseScore: cc.Label
      },
      setParame: function setParame(num, data) {
        null != data.head && this.headIcon.getComponent("headAnthologyItem").setAvatar(data.head);
        data.name = cc.ak.util.utils.FilterFormString(data.name + "");
        data.name = cc.ak.util.utils.nameInterception(data.name);
        this.labName.string = data.name;
        this.updataCoin(data.coin);
        this._locateID = num;
      },
      getCoin: function getCoin() {
        return this._coinNum;
      },
      updataCoin: function updataCoin(num) {
        this._coinNum = num;
        this.labCoin.string = "" + Math.floor(num / 10) / 100;
      },
      getLocate: function getLocate() {
        return this._locateID;
      },
      coinUpdata: function coinUpdata(userInfo) {
        var winCoinNum = Math.floor(userInfo.WinAmount / 10) / 100;
        if (0 == winCoinNum) return;
        if (this._locateID > 3) {
          this.winScore.node.x = -150;
          this.loseScore.node.x = -150;
        } else {
          this.winScore.node.x = 150;
          this.loseScore.node.x = 150;
        }
        if (winCoinNum > 0) {
          this.winScore.node.active = true;
          this.winScore.string = "+" + 100 * winCoinNum / 100;
          var that = this;
          this.winScore.node.runAction(cc.sequence(cc.moveTo(3, this.winScore.node.x, this.winScore.node.y + 50), cc.callFunc(function() {
            that.winScore.node.y = -80;
            that.winScore.node.active = false;
            var num = userInfo.AccountA + userInfo.AccountB;
            that.updataCoin(num);
          })));
        } else {
          this.loseScore.node.active = true;
          this.loseScore.string = "" + winCoinNum;
          var that = this;
          this.loseScore.node.runAction(cc.sequence(cc.moveTo(3, that.loseScore.node.x, that.loseScore.node.y + 50), cc.callFunc(function() {
            that.loseScore.node.y = -80;
            that.loseScore.node.active = false;
            var num = userInfo.AccountA + userInfo.AccountB;
            that.updataCoin(num);
          })));
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brnnHistoryItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c953cMWf2xKkJyDuJcjDpwy", "brnnHistoryItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        resultSp: {
          default: [],
          type: cc.Sprite
        },
        resultSf: {
          default: [],
          type: cc.SpriteFrame
        }
      },
      onLoad: function onLoad() {},
      init: function init(type, results) {
        for (var i = 0; i < this.resultSp.length; i++) this.resultSp[i].spriteFrame = this.resultSf[results[i]];
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brnnHistoryLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "538aacAmfNG27JrOa1dLEI5", "brnnHistoryLayer");
    "use strict";
    var HistoryLayer = cc.Class({
      extends: cc.Component,
      properties: {
        itemPf: cc.Prefab,
        scroll: cc.ScrollView,
        backCall: cc.Button,
        labWinRate: {
          default: [],
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        this.node.active = false;
        this.backCall.node.on("click", function() {
          _this.node.active = false;
        });
        this.node.on("click", function() {
          _this.node.active = false;
        });
      },
      setResult: function setResult(data, winRate) {
        var content = this.scroll.content;
        content.destroyAllChildren();
        var temp = cc.instantiate(this.itemPf);
        content.width = temp.width * data.length;
        for (var i = 0; i < data.length; i++) {
          var item = cc.instantiate(this.itemPf);
          item.x = i * item.width - 600;
          item.y = -180;
          content.addChild(item);
          item.getComponent("brnnHistoryItem").init(i % 2, data[i]);
          this.labWinRate[i] && (this.labWinRate[i].string = winRate[i] + "%");
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brnnInit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d297ir4u5N26tEDv1SYpM7", "brnnInit");
    "use strict";
    var BrnnInit = cc.Class({
      extends: cc.Component,
      statics: {
        id: "brnn"
      },
      properties: {},
      onLoad: function onLoad() {
        cc.log("brnn module init!");
        bundle.brnn = {};
        bundle.brnn.key = {};
        bundle.brnn.data = new Map();
        this.initGlobalHttpKey();
        this.initGlobalCacheKey();
        this.initGlobalEventKey();
        this.initGlobalDataKey();
        this.initCache();
        this.initGlobalEventHandle();
      },
      start: function start() {},
      initBrnnData: function initBrnnData() {},
      initGlobalHttpKey: function initGlobalHttpKey() {
        bundle.brnn.key.http = {};
      },
      initGlobalCacheKey: function initGlobalCacheKey() {
        bundle.brnn.key.cache = {};
      },
      initGlobalDataKey: function initGlobalDataKey() {
        bundle.brnn.key.data = {
          temp: "temp",
          ENTER_ROOM_SUCC: "enter_room_succ"
        };
      },
      initGlobalEventKey: function initGlobalEventKey() {
        bundle.brnn.key.event = {
          ENTER_SCENE: "ENTER_SCENE",
          MY_USERINFO: "MY_USERINFO",
          VIP_USERINFO: "VIP_USERINFO",
          ONLINE_PLAYER_NUM: "ONLINE_PLAYER_NUM",
          BET_PLATFORM_INFO: "BET_PLATFORM_INFO",
          SELF_ONBET_RULEST: "SELF_ONBET_RULEST",
          VIP_ONBET_RULEST: "VIP_ONBET_RULEST",
          ONLINE_ONBET_RULEST: "ONLINE_ONBET_RULEST",
          SETTLEMENT_INFO: "SETTLEMENT_INFO",
          BTN_CONTINUE_STATUS: "SUB_REPEAT_BET_STATUS_RSP",
          ENTER_SETTLEMENT_SCENE: "ENTER_SETTLEMENT_SCENE"
        };
      },
      initCache: function initCache() {},
      initGlobalEventHandle: function initGlobalEventHandle() {
        cc.ak.event.on(cc.ak.key.event.ENTER_GAME_SCENE + "_" + BrnnInit.id, function(data) {
          bundle.brnn.data.set(bundle.brnn.key.data.ENTER_ROOM_SUCC, data);
          if ("brnnGame" != cc.director.getScene().name) {
            cc.ak.util.utils.loadGameSceneBegin();
            cc.ak.ui.loadScenceWithPreload("brnnGame");
          }
        });
        cc.ak.event.on(cc.ak.key.event.POPUP_SUGGAME_ENTRANCE + "_" + BrnnInit.id, function(data, parentNode) {
          cc.log("Handle : " + JSON.stringify(data));
          if (data.id !== BrnnInit.id) return;
          if (!cc.isValid(parentNode)) return;
          var entrance = cc.instantiate(cc.ak.ui.pfsubGameEntrance);
          entrance.parent = parentNode;
          entrance.getComponent("subGameEntrance").setMatchItme(data);
        });
      },
      loadPrefab: function loadPrefab() {}
    });
    module.exports = BrnnInit;
    cc._RF.pop();
  }, {} ],
  brnnLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2814dJNonhNgLsw8vpemZUl", "brnnLayer");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        cardLayer: cc.Node,
        betLayer: cc.Node,
        headLayer: cc.Node,
        chipLayer: cc.Node,
        otherLayer: cc.Node,
        audioBg: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u80cc\u666f\u97f3\u6548"
        },
        _settlementID: -1,
        coinNumTimeID: -1,
        flyChipTimeID: -1,
        audioBet: {
          default: null,
          type: cc.AudioClip
        },
        audioTime: {
          type: cc.AudioClip,
          default: []
        }
      },
      onLoad: function onLoad() {
        cc.ak.util.audioMgr.playBGM(this.audioBg);
        this.bankerFlyBetTime = [];
        this.bankerFlyFreeTimeID = [], this.cardLayerCom = this.cardLayer.getComponent("brnnCardLayer");
        this.betLayerCom = this.betLayer.getComponent("brnnBetLayer");
        this.chipLayerCom = this.chipLayer.getComponent("brnnChipLayer");
        this.initProtr();
        cc.log("test hotfix ");
      },
      start: function start() {
        cc.ak.util.utils.loadGameSceneFinish();
      },
      initProtr: function initProtr() {
        var _this = this;
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brnn.SUB_CMD_GAME.SUB_WRNN_SCENCE_TIMER, function(data) {
          return _this.enterScence(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brnn.SUB_CMD_GAME.SUB_SEND_STATE, function(data) {
          return _this.settlement(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brnn.SUB_CMD_GAME.SUB_USER_HAND_CARD, function(data) {
          return _this.enterSettlement(data);
        }, this);
      },
      enterScence: function enterScence(data) {
        var timer = new proto.cmd_game_brnn.WrnnSceneTimer();
        cc.ak.util.tbfUtil.unPackData(timer, data);
        var time = timer.Time;
        var type = timer.Type;
        var onlineNum = timer.UserOnline;
        var otherLayer = this.otherLayer.getComponent("brnnOtherLayer");
        var betLayer = this.betLayer.getComponent("brnnBetLayer");
        var chipLayer = this.chipLayer.getComponent("brnnChipLayer");
        otherLayer.playTimeAnim(type - 1);
        otherLayer.showPlayerNum(onlineNum);
        switch (type) {
         case 1:
          otherLayer.cleanAll();
          betLayer.canClick(false);
          chipLayer.canClick(false);
          betLayer && (betLayer.onMybetSucc = false);
          for (var i = 0; i < this.bankerFlyBetTime.length; i++) clearInterval(this.bankerFlyBetTime[i]);
          this.bankerFlyBetTime.splice(0, this.bankerFlyBetTime.length);
          for (var _i = 0; _i < this.bankerFlyFreeTimeID.length; _i++) clearInterval(this.bankerFlyFreeTimeID);
          this.bankerFlyFreeTimeID.splice(0, this.bankerFlyFreeTimeID.length);
          chipLayer.btnWithdraw.interactable = false;
          chipLayer.btnContinue.interactable = false;
          otherLayer.clockNode && (otherLayer.clockNode.active = false);
          break;

         case 2:
          betLayer && (betLayer.onMybetSucc = false);
          betLayer.myBetChipsFlag = 0;
          otherLayer.cleanAll();
          chipLayer.btnWithdraw.interactable = false;
          chipLayer.btnContinue.interactable = false;
          var chipArr = chipLayer.chipArr;
          for (var _i2 = 0; _i2 < chipArr.length; _i2++) {
            var chip = chipArr[_i2].getComponent("brnnChip");
            chip._hightFlag = false;
            chip.refreshChip();
          }
          betLayer.canClick(true);
          chipLayer.canClick(true);
          if (otherLayer.clockNode) {
            otherLayer.clockNode.active = true;
            otherLayer.clockNode.getComponent("brnnTime").setTime(time);
          }
          cc.ak.util.audioMgr.playSFX(this.audioTime[0]);
          break;

         case 3:
          betLayer && (betLayer.onMybetSucc = false);
          chipLayer.btnWithdraw.interactable = false;
          chipLayer.btnContinue.interactable = false;
          betLayer.canClick(false);
          chipLayer.canClick(false);
          otherLayer.clockNode && (otherLayer.clockNode.active = false);
          cc.ak.util.audioMgr.playSFX(this.audioTime[1]);
        }
      },
      settlement: function settlement(data) {
        var _this2 = this;
        var stateData = new proto.cmd_game_brnn.StateData();
        cc.ak.util.tbfUtil.unPackData(stateData, data);
        var playerWinCoinNum = stateData.GenerPlayerTotalInfo;
        var myWinType = stateData.MyselfInfo.WinBetId;
        var myInfo = stateData.MyselfInfo;
        var allLostFlag = stateData.NotAllLostFlag;
        var bankerWinNum = stateData.BankerWinNum;
        var cardsListData = stateData.UserHandCardList;
        var betCom = this.betLayer.getComponent("brnnBetLayer");
        for (var i = 0; i < cardsListData.length; i++) if (0 != cardsListData[i].BetTableID && 0 == cardsListData[i].TotalChips) {
          var arr = betCom["betChips" + cardsListData[i].BetTableID];
          for (var j = 0; j < arr.length; j++) arr[j].destroy();
          arr.splice(0, arr.length);
        }
        for (var _i3 = 0; _i3 < cardsListData.length; _i3++) {
          var betID = cardsListData[_i3].BetTableID;
          var cardsData = cardsListData[_i3].Cards;
          var type = cardsListData[_i3].Type;
          this.cardLayerCom.creatorCard(betID, cardsData.Cards1, type);
        }
        var chipLayer = this.chipLayer.getComponent("brnnChipLayer");
        var myHead = chipLayer.myHead.getComponent("brnnMyHead");
        this.cardLayerCom.sendCardAnim();
        var winBet = stateData.WinnerBet;
        var chairInfo = stateData.ChairInfo;
        var vipLocate = [];
        var bankerUseInfo = null;
        for (var k = 0; k < chairInfo.length; k++) {
          chairInfo[k].User && vipLocate.push(chairInfo[k]);
          0 == chairInfo[k].LocateID && chairInfo[k].User && (bankerUseInfo = chairInfo[k].User);
        }
        clearInterval(this._settlementID);
        this._settlementID = setTimeout(function() {
          for (var p = 0; p < winBet.length; p++) {
            if (0 == winBet[p].BetId) {
              if (4 == winBet[p].WinStatus) {
                _this2.betLayerCom.betArr[0].getComponent("brnnBet").isVisiLight(true);
                _this2.betLayerCom.betArr[1].getComponent("brnnBet").isVisiLight(true);
                _this2.betLayerCom.betArr[2].getComponent("brnnBet").isVisiLight(true);
                _this2.betLayerCom.betArr[3].getComponent("brnnBet").isVisiLight(true);
              }
              break;
            }
            1 == winBet[p].WinStatus && _this2.betLayerCom.betArr[winBet[p].BetId - 1].getComponent("brnnBet").isVisiLight(true);
          }
          var betCom = _this2.betLayer.getComponent("brnnBetLayer");
          var headLayer = _this2.headLayer.getComponent("brnnHeadLayer");
          var otherLayer = _this2.otherLayer.getComponent("brnnOtherLayer");
          var _loop = function _loop(_i4) {
            if (0 != winBet[_i4].BetId) {
              0 == winBet[_i4].WinStatus && _this2.freeChipsFlyBanker(winBet[_i4].BetId);
              if (1 == winBet[_i4].WinStatus) {
                _this2.bankerFlyBetTime.push(_i4);
                clearInterval(_this2.bankerFlyBetTime[_i4]);
                _this2.bankerFlyBetTime[_i4] = setTimeout(function() {
                  this.bankerChipsFlyBetID(winBet[_i4].BetId);
                }.bind(_this2), 2e3);
                _this2.bankerFlyFreeTimeID.push(_i4);
                clearInterval(_this2.bankerFlyFreeTimeID[_i4]);
                _this2.bankerFlyFreeTimeID[_i4] = setTimeout(function() {
                  this.betIDFlyChipsToFree(betCom["betChips" + winBet[_i4].BetId], vipLocate, myInfo, winBet[_i4].BetId, allLostFlag);
                }.bind(_this2), 4e3);
              }
            } else switch (winBet[_i4].WinStatus) {
             case 3:
              _this2.bankerAllwin(playerWinCoinNum, vipLocate, myInfo.Myself, bankerWinNum, bankerUseInfo);
              return {
                v: void 0
              };

             case 4:
              _this2.bankerAllLose(playerWinCoinNum, vipLocate, myInfo, allLostFlag, bankerWinNum, bankerUseInfo);
              return {
                v: void 0
              };
            }
            if (_i4 == winBet.length - 1) {
              clearInterval(_this2.coinNumTimeID);
              _this2.coinNumTimeID = setTimeout(function() {
                headLayer.vipUpdataCoinNum(vipLocate);
                myHead.flyScroe(myInfo.Myself);
                headLayer.bankerFlyScoreAnim(bankerWinNum, bankerUseInfo);
                otherLayer.onLineNode.getComponent("brnnOnline").coinUpdata(playerWinCoinNum);
              }.bind(_this2), 5e3);
            }
          };
          for (var _i4 = 0; _i4 < winBet.length; _i4++) {
            var _ret = _loop(_i4);
            if ("object" === ("undefined" === typeof _ret ? "undefined" : _typeof(_ret))) return _ret.v;
          }
        }, 1e4);
      },
      bankerAllLose: function bankerAllLose(playerWinCoinNum, chairInfo, myInfo, allLostFlag, bankerWinNum, bankerUseInfo) {
        for (var i = 1; i < 5; i++) this.bankerChipsFlyBetID(i);
        clearInterval(this.coinNumTimeID);
        var headLayer = this.headLayer.getComponent("brnnHeadLayer");
        var chipLayer = this.chipLayer.getComponent("brnnChipLayer");
        var headLayer = this.headLayer.getComponent("brnnHeadLayer");
        var chipLayer = this.chipLayer.getComponent("brnnChipLayer");
        var myHead = chipLayer.myHead.getComponent("brnnMyHead");
        var other = this.otherLayer.getComponent("brnnOtherLayer");
        var betCom = this.betLayer.getComponent("brnnBetLayer");
        clearInterval(this.flyChipTimeID);
        this.flyChipTimeID = setTimeout(function() {
          for (var _i5 = 1; _i5 < 5; _i5++) this.betIDFlyChipsToFree(betCom["betChips" + _i5], chairInfo, myInfo, _i5, allLostFlag);
          cc.ak.util.audioMgr.playSFX(this.audioBet);
        }.bind(this), 2e3);
        this.coinNumTimeID = setTimeout(function() {
          headLayer.vipUpdataCoinNum(chairInfo);
          myHead.flyScroe(myInfo.Myself);
          headLayer.bankerFlyScoreAnim(bankerWinNum, bankerUseInfo);
          other.onLineNode.getComponent("brnnOnline").coinUpdata(playerWinCoinNum);
        }.bind(this), 4e3);
      },
      betIDFlyChipsToFree: function betIDFlyChipsToFree(chipArr, chairInfo, myInfo, betID, allLostFlag) {
        var locateArr = [];
        var headLayer = this.headLayer.getComponent("brnnHeadLayer");
        var chipLayer = this.chipLayer.getComponent("brnnChipLayer");
        var otherLayer = this.otherLayer.getComponent("brnnOtherLayer");
        for (var i = 0; i < chairInfo.length; i++) if (0 != chairInfo[i].LocateID && chairInfo[i].WinBetId && chairInfo[i].WinBetId == betID) {
          var pos = {
            x: 0,
            y: 0
          };
          if (headLayer.avatars[chairInfo[i].LocateID]) {
            pos.x = headLayer.avatars[chairInfo[i].LocateID].x;
            pos.y = headLayer.avatars[chairInfo[i].LocateID].y;
          }
          locateArr.push(pos);
        }
        if (1 == allLostFlag) {
          var pos = {
            x: 0,
            y: 0
          };
          pos.x = otherLayer.onLineNode.getPosition().x;
          pos.y = otherLayer.onLineNode.getPosition().y;
          locateArr.push(pos);
        }
        if (null != myInfo.WinBetId) for (var _i6 = 0; _i6 < myInfo.WinBetId.length; _i6++) {
          var betiD = myInfo.WinBetId[_i6];
          if (betiD == betID) {
            var pos = {
              x: 0,
              y: 0
            };
            pos.x = chipLayer.myHead.x;
            pos.y = chipLayer.myHead.y;
            locateArr.push(pos);
          }
        }
        if (0 != locateArr.length) {
          var _loop2 = function _loop2(_i7) {
            chip = chipArr[_i7];
            chip.runAction(cc.sequence(cc.delayTime(.15), cc.moveTo(.85, locateArr[_i7 % locateArr.length].x, locateArr[_i7 % locateArr.length].y).easing(cc.easeBackIn()), cc.callFunc(function() {
              chipArr[_i7] && chipArr[_i7].destroy();
              _i7 == chipArr.length - 1 && chipArr.splice(0, chipArr.length);
            })));
          };
          for (var _i7 = 0; _i7 < chipArr.length; _i7++) {
            var chip;
            _loop2(_i7);
          }
        }
        cc.ak.util.audioMgr.playSFX(this.audioBet);
      },
      bankerAllwin: function bankerAllwin(playerWinCoinNum, chairInfo, myInfo, bankerWinNum, bankerUseInfo) {
        for (var j = 1; j < 5; j++) this.freeChipsFlyBanker(j);
        clearInterval(this.coinNumTimeID);
        var headLayer = this.headLayer.getComponent("brnnHeadLayer");
        var chipLayer = this.chipLayer.getComponent("brnnChipLayer");
        var myHead = chipLayer.myHead.getComponent("brnnMyHead");
        var other = this.otherLayer.getComponent("brnnOtherLayer");
        this.coinNumTimeID = setTimeout(function() {
          headLayer.vipUpdataCoinNum(chairInfo);
          myHead.flyScroe(myInfo);
          headLayer.bankerFlyScoreAnim(bankerWinNum, bankerUseInfo);
          other.onLineNode.getComponent("brnnOnline").coinUpdata(playerWinCoinNum);
        }.bind(this), 1e3);
        cc.ak.util.audioMgr.playSFX(this.audioBet);
      },
      freeChipsFlyBanker: function freeChipsFlyBanker(betID) {
        var betCom = this.betLayer.getComponent("brnnBetLayer");
        var headCop = this.headLayer.getComponent("brnnHeadLayer");
        var headImg = headCop.bankNode.getChildByName("myHead").getComponent("brnnMyHead").headIcon;
        var pos = headCop.bankNode.convertToNodeSpaceAR(headCop.bankNode.getChildByName("myHead").convertToWorldSpaceAR(headImg.getPosition()));
        for (var i = 0; i < betCom["betChips" + betID].length; i++) {
          var coin = betCom["betChips" + betID][i];
          void 0 != coin && null != coin && coin.runAction(cc.sequence(cc.delayTime(.15), cc.spawn(cc.sequence(cc.scaleTo(.05, .4), cc.scaleTo(.05, .3)), cc.moveTo(.75, pos.x, 350).easing(cc.easeBackIn())), cc.callFunc(function(coin, i) {
            coin.destroy();
            betCom["betChips" + betID][i].destroy();
            i == betCom["betChips" + betID].length - 1 && betCom["betChips" + betID].splice(0, betCom["betChips" + betID].length);
          }.bind(this), coin, i)));
        }
        cc.ak.util.audioMgr.playSFX(this.audioBet);
      },
      bankerChipsFlyBetID: function bankerChipsFlyBetID(betID) {
        var headCom = this.headLayer.getComponent("brnnHeadLayer");
        var headImg = headCom.bankNode.getChildByName("myHead").getComponent("brnnMyHead").headIcon;
        var pos = headCom.bankNode.convertToNodeSpaceAR(headCom.bankNode.getChildByName("myHead").convertToWorldSpaceAR(headImg.getPosition()));
        var betCom = this.betLayer.getComponent("brnnBetLayer");
        var bet = betCom.betArr[betID - 1];
        var betX = betCom.node.convertToNodeSpaceAR(bet.parent.convertToWorldSpaceAR(bet.getPosition())).x;
        var betY = betCom.node.convertToNodeSpaceAR(bet.parent.convertToWorldSpaceAR(bet.getPosition())).y;
        var w = this.betLayerCom.betArr[betID - 1].width;
        var h = this.betLayerCom.betArr[betID - 1].height;
        var len = betCom["betChips" + betID].length > 20 ? 20 : betCom["betChips" + betID].length;
        var chips = [];
        var data = bundle.brnn.data.get(bundle.brnn.key.data.ENTER_ROOM_SUCC);
        var rule = data.RuleData;
        var tableRule = new proto.cmd_game_brnn.TableRule();
        cc.ak.util.tbfUtil.unPackInnerData(tableRule, rule);
        var chipNum = tableRule.CardNumber;
        for (var i = 0; i < len; i++) {
          var val = Math.ceil(Math.random() * (chipNum.length - 1));
          var num = chipNum[val];
          chips.push(num);
        }
        for (var _i8 = 0; _i8 < chips.length; _i8++) {
          var sp_x = Math.floor(Math.random() * (betX + w / 2 - 60 - (betX - w / 2 + 60) + 1) + (betX - w / 2) + 60);
          var sp_y = Math.floor(Math.random() * (betY + h / 2 - 80 - (betY - h / 2 + 80) + 1) + (betY - h / 2) + 80);
          var coin = cc.instantiate(betCom.chipSpPf);
          coin.x = pos.x;
          coin.y = 350;
          coin.getComponent("brnnChipSp").init(chips[_i8], 0);
          this.betLayer.addChild(coin);
          betCom["betChips" + betID].push(coin);
          coin.runAction(cc.moveTo(.4, sp_x, sp_y).easing(cc.easeBackIn()));
        }
        cc.ak.util.audioMgr.playSFX(this.audioBet);
      },
      enterSettlement: function enterSettlement(data) {
        var stateData = new proto.cmd_game_brnn.StateData();
        cc.ak.util.tbfUtil.unPackData(stateData, data);
        var cardsListData = stateData.UserHandCardList;
        for (var i = 0; i < cardsListData.length; i++) {
          var betID = cardsListData[i].BetTableID;
          var cardsData = cardsListData[i].Cards;
          var type = cardsListData[i].Type;
          this.cardLayerCom.creatorCard(betID, cardsData.Cards1, type);
        }
        this.cardLayerCom.showCard();
        var winBet = stateData.WinnerBet;
        for (var p = 0; p < winBet.length; p++) {
          if (0 == winBet[p].BetId) {
            if (4 == winBet[p].WinStatus) {
              this.betLayerCom.betArr[0].getComponent("brnnBet").isVisiLight(true);
              this.betLayerCom.betArr[1].getComponent("brnnBet").isVisiLight(true);
              this.betLayerCom.betArr[2].getComponent("brnnBet").isVisiLight(true);
              this.betLayerCom.betArr[3].getComponent("brnnBet").isVisiLight(true);
            }
            break;
          }
          1 == winBet[p].WinStatus && this.betLayerCom.betArr[winBet[p].BetId - 1].getComponent("brnnBet").isVisiLight(true);
        }
      },
      onDestroy: function onDestroy() {
        clearInterval(this._settlementID);
        clearInterval(this.flyChipTimeID);
        clearInterval(this.coinNumTimeID);
        for (var i = 0; i < this.bankerFlyFreeTimeID.length; i++) clearInterval(this.bankerFlyFreeTimeID);
        this.bankerFlyFreeTimeID.splice(0, this.bankerFlyFreeTimeID.length);
        for (var _i9 = 0; _i9 < this.bankerFlyBetTime.length; _i9++) clearInterval(this.bankerFlyBetTime[_i9]);
        this.bankerFlyBetTime.splice(0, this.bankerFlyBetTime.length);
        cc.ak.event.targetOff(this);
      }
    });
    cc._RF.pop();
  }, {} ],
  brnnMenu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fb57cspOxNLQ7sYchvUPu1z", "brnnMenu");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btnRule: cc.Button,
        btnSetting: cc.Button,
        btnHistory: cc.Button,
        btnBeiLv: cc.Button,
        settingPf: cc.Prefab,
        ruleBeiLvPf: cc.Prefab,
        ruleLayerPf: cc.Prefab
      },
      onLoad: function onLoad() {
        var _this = this;
        this.node.active = false;
        this.node.on("click", function() {
          _this.node.active = false;
        });
        this.btnSetting.node.on("click", function() {
          var setting = cc.instantiate(_this.settingPf);
          _this.node.parent.addChild(setting);
          _this.node.active = false;
        });
        this.btnBeiLv.node.on("click", function() {
          var beiLv = cc.instantiate(_this.ruleBeiLvPf);
          _this.node.parent.addChild(beiLv);
          _this.node.active = false;
        });
        this.btnRule.node.on("click", function() {
          var rule = cc.instantiate(_this.ruleLayerPf);
          _this.node.parent.addChild(rule);
          _this.node.active = false;
        });
        this.btnHistory.node.on("click", function() {
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_brnn.SUB_CMD_GAME.SUB_WINNING_HISTORY_RSQ);
        });
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brnnMyHead: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "08a9aDYkSxJUJzDT/Y4g42s", "brnnMyHead");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        headIcon: cc.Node,
        myName: cc.Label,
        myCoin: cc.Label,
        _chairID: -1,
        chairID: {
          get: function get() {
            return this._chairID;
          }
        },
        _myCoinNum: -1,
        winScore: cc.Label,
        loseScore: cc.Label
      },
      onLoad: function onLoad() {},
      setMyInfo: function setMyInfo(data) {
        void 0 != data.head && this.headIcon.getComponent("headAnthologyItem").setAvatar(data.head);
        data.name = cc.ak.util.utils.FilterFormString(data.name + "");
        data.name = cc.ak.util.utils.nameInterception(data.name);
        this.myName.string = "" + data.name;
        this.upDataCoin(data.coin);
        this._chairID = data.chairID;
      },
      flyScroe: function flyScroe(info) {
        var _this = this;
        if (0 == info.WinAmount) return;
        var that = this;
        if (info.WinAmount / 1e3 > 0) {
          this.winScore.node.active = true;
          var num = Math.floor(info.WinAmount / 10) / 100;
          this.winScore.string = "+" + num;
          this.winScore.node.runAction(cc.sequence(cc.moveTo(3, this.winScore.node.x, this.winScore.node.y + 50), cc.callFunc(function() {
            that.winScore.node.y = 70;
            that.winScore.node.active = false;
            var coinNum = info.AccountA + info.AccountB;
            _this.upDataCoin(coinNum);
          })));
        } else {
          this.loseScore.node.active = true;
          var num = Math.floor(info.WinAmount / 10) / 100;
          this.loseScore.string = "" + num;
          this.loseScore.node.runAction(cc.sequence(cc.moveTo(3, this.loseScore.node.x, this.loseScore.node.y + 50), cc.callFunc(function() {
            that.loseScore.node.y = 70;
            that.loseScore.node.active = false;
            var coinNum = info.AccountA + info.AccountB;
            _this.upDataCoin(coinNum);
          })));
        }
      },
      upDataCoin: function upDataCoin(num) {
        if ("xxxxxx" != num) {
          this.myCoin.string = Math.floor(num / 10) / 100;
          this._myCoinNum = num;
        } else this.myCoin.string = num;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brnnOnline: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "faa94Zd5a5FhJx2/hYKAna5", "brnnOnline");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        labNum: {
          default: null,
          type: cc.Label
        },
        win: cc.Label,
        lose: cc.Label
      },
      start: function start() {},
      setOnlineNum: function setOnlineNum(num) {
        this.labNum.node.active = true;
        this.labNum.string = "" + num;
      },
      coinUpdata: function coinUpdata(score) {
        var winCoinNum = Math.floor(score / 10) / 100;
        if (0 == winCoinNum) return;
        if (winCoinNum > 0) {
          this.win.node.active = true;
          this.win.string = "+" + winCoinNum;
          var that = this;
          this.win.node.runAction(cc.sequence(cc.moveTo(3, this.win.node.x, this.win.node.y + 20), cc.callFunc(function() {
            that.win.node.y = 0;
            that.win.node.active = false;
          })));
        } else {
          this.lose.node.active = true;
          this.lose.string = "" + winCoinNum;
          var that = this;
          this.lose.node.runAction(cc.sequence(cc.moveTo(3, that.lose.node.x, that.lose.node.y + 50), cc.callFunc(function() {
            that.lose.node.y = 0;
            that.lose.node.active = false;
          })));
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  brnnOtherLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6eab3AZcXVH8beAblL2o95P", "brnnOtherLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        clockNode: cc.Node,
        onLineNode: cc.Node,
        betLayer: cc.Node,
        chipLayer: cc.Node,
        cardLayer: cc.Node,
        menuLayer: cc.Node,
        btnBack: cc.Button,
        btnMenu: cc.Button,
        btnBuy: cc.Button,
        bankerPf: cc.Prefab,
        historyPf: cc.Prefab,
        shopPf: cc.Prefab,
        timeAnim: {
          default: [],
          type: cc.Prefab
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        this.btnBack.node.on("click", function() {
          var betLayer = _this.betLayer.getComponent("brnnBetLayer");
          var chipLayer = _this.chipLayer.getComponent("brnnChipLayer");
          if (betLayer.onMybetSucc || chipLayer.bankFlag.node.active) {
            cc.ak.ui.toast(lan.brnn.game.outGameFail);
            return;
          }
          var req = new proto.cmd_room.RoomChairAction();
          req.ActionType = proto.cmd_room.USER_ACTION_TYPE.USER_ACTION_LEAVE;
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ROOM, proto.cmd_net.CMD_ROOM.SUB_USER_ACTION, req);
        });
        this.btnMenu.node.on("click", function() {
          _this.menuLayer.active = true;
        });
        this.btnBuy.node.on("click", function() {
          var shop = cc.instantiate(_this.shopPf);
          shop.y = 0;
          shop.x = 0;
          _this.node.addChild(shop);
          var payData = cc.ak.cache.shopData.getPayData();
          payData && shop.getComponent("shop").setPayWay(payData.pay_types, payData.tips);
          var req = cc.ak.util.http.request(cc.ak.key.http.SHOP, function(data) {
            cc.log("\u5546\u57ce:" + JSON.stringify(data));
            if (0 == data.status) {
              shop.getComponent("shop").setPayWay(data.pay_types, data.tips);
              cc.ak.cache.shopData.parse(data);
            }
          });
        });
        this.animArr = [];
        this.initProto();
        this.init();
      },
      init: function init() {
        this.bankerList = cc.instantiate(this.bankerPf);
        this.node.addChild(this.bankerList);
        this.historyList = cc.instantiate(this.historyPf);
        this.node.addChild(this.historyList);
        for (var i = 0; i < this.timeAnim.length; i++) {
          var anim = cc.instantiate(this.timeAnim[i]);
          anim.active = false;
          this.node.addChild(anim);
          this.animArr.push(anim);
        }
      },
      playTimeAnim: function playTimeAnim(index) {
        var anim = this.animArr[index];
        anim.active = true;
        anim.getComponent(cc.Animation).play();
      },
      initProto: function initProto() {
        var _this2 = this;
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brnn.SUB_CMD_GAME.SUB_WINNING_HISTORY_RSP, function(data) {
          return _this2.showHis(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brnn.SUB_CMD_GAME.SUB_BANKER_LIST_RSP, function(data) {
          return _this2.showBankerList(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brnn.SUB_CMD_GAME.SUB_LEAVE_GAME_WRNN_SCENE_RSP, function() {
          cc.ak.ui.loadLobbyScence();
        }, this);
      },
      showHis: function showHis(data) {
        var his = new proto.cmd_game_brnn.WinningHistory();
        cc.ak.util.tbfUtil.unPackData(his, data);
        var result = [ [], [], [], [] ];
        var winRateArr = [];
        var betInfo = his.BetTableInfo;
        var type = his.Type;
        if (0 == type) {
          for (var i = 0; i < betInfo.length; i++) {
            var betTable = betInfo[i].WinStatus;
            winRateArr.push(betInfo[i].WinRate);
            for (var j = 0; j < betTable.length; j++) result[i].push(betTable[j]);
          }
          cc.log("result : " + result);
          var result1 = new Array();
          for (var p = 0; p < result[0].length; p++) {
            var arr = new Array();
            for (var k = 0; k < result.length; k++) arr.push(result[k][p]);
            result1.push(arr);
          }
          cc.log("result1 : " + result1.length);
          this.historyList.getComponent("brnnHistoryLayer").setResult(result1, winRateArr);
          this.historyList.active = true;
        } else {
          for (var _i = 0; _i < betInfo.length; _i++) {
            var betTable = betInfo[_i].WinStatus;
            for (var _j = 0; _j < betTable.length; _j++) result[_i].push(betTable[_j]);
          }
          cc.log("result : " + result);
          var result1 = new Array();
          for (var _p = 0; _p < result[0].length; _p++) {
            var arr = new Array();
            for (var _k = 0; _k < result.length; _k++) arr.push(result[_k][_p]);
            result1.push(arr);
          }
          var arr = this.betLayer.getComponent("brnnBetLayer").recordSheetNodeArr;
          for (var _j2 = 0; _j2 < result1.length; _j2++) {
            var item = arr[_j2];
            item && item.getComponent("brnnRecordSheetItem").setRecordData(result1[_j2]);
          }
        }
      },
      showPlayerNum: function showPlayerNum(num) {
        this.onLineNode.getComponent("brnnOnline").setOnlineNum(num);
      },
      showBankerList: function showBankerList(data) {
        var listInfo = new proto.cmd_game_brnn.ListPlayerInfo();
        cc.ak.util.tbfUtil.unPackData(listInfo, data);
        var listInfos = [];
        var userInfo = listInfo.UserData;
        var num = listInfo.WaitCountOfFront;
        var userBankStatus = listInfo.UserBankStatus;
        if (null != userInfo) for (var i = 0; i < userInfo.length; i++) {
          var coin = Math.floor((userInfo[i].AccountA + userInfo[i].AccountB) / 10) / 100;
          var info = {
            name: userInfo[i].NickName,
            coin: coin,
            rank: "\u6392\u961f" + (i + 1)
          };
          listInfos.push(info);
        }
        this.bankerList.getComponent("brnnBankerList").setData(num, listInfos, userBankStatus);
      },
      cleanAll: function cleanAll() {
        this.betLayer.getComponent("brnnBetLayer").cleanChips();
        var betArr = this.betLayer.getComponent("brnnBetLayer").betArr;
        for (var i = 0; i < betArr.length; i++) {
          betArr[i].getComponent("brnnBet").betNumChange(0);
          betArr[i].getComponent("brnnBet").selfBetNumChange(0);
          betArr[i].getComponent("brnnBet").isVisiLight(false);
        }
        this.betLayer.getComponent("brnnBetLayer").lessBetNum.string = "0";
        this.betLayer.getComponent("brnnBetLayer").totalBetNum.string = "0";
        this.cardLayer.getComponent("brnnCardLayer").hideCards();
      },
      start: function start() {},
      onDestroy: function onDestroy() {
        cc.ak.event.targetOff(this);
      }
    });
    cc._RF.pop();
  }, {} ],
  brnnRecordSheetItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5831e+NIjZKYYDrLX9VNEg2", "brnnRecordSheetItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        spArr: {
          default: [],
          type: cc.Sprite
        }
      },
      start: function start() {},
      setRecordData: function setRecordData(results) {
        for (var i = 0; i < this.spArr.length; i++) this.spArr[i].node.active = 1 == results[i];
      }
    });
    cc._RF.pop();
  }, {} ],
  brnnRuleBeiLvLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c8661B4EddC+K76Y5555qIk", "brnnRuleBeiLvLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        scroll: cc.ScrollView,
        btnBack: cc.Button,
        item: cc.Prefab
      },
      onLoad: function onLoad() {
        var _this = this;
        this.node.on("click", function() {
          _this.node.destroy();
        });
        this.btnBack.node.on("click", function() {
          _this.node.destroy();
        });
        var data = bundle.brnn.data.get(bundle.brnn.key.data.ENTER_ROOM_SUCC);
        var rule = data.RuleData;
        var tableRule = new proto.cmd_game_brnn.TableRule();
        cc.ak.util.tbfUtil.unPackInnerData(tableRule, rule);
        var rule = tableRule.PaixingBeiLv;
        var ruleJson = JSON.parse(rule);
        var content = this.scroll.content;
        var len = 0;
        for (var i in ruleJson) {
          var lab = cc.instantiate(this.item);
          content.addChild(lab);
          var str = ruleJson[i][1] + "                                  \xd7" + ruleJson[i][0];
          lab.getComponent("brnnRuleItem").setString(str);
          lab.x = 0;
          lab.y = -50 - len * lab.height;
          len++;
        }
        var temp = cc.instantiate(this.item);
        content.height = len * temp.height;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brnnRuleItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "62e14qnybNEaJyBpfuxzTQ+", "brnnRuleItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        lab: cc.Label
      },
      onLoad: function onLoad() {},
      setString: function setString(str) {
        this.lab.string = str;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brnnRuleLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "67800fbYcVA/Jy9Cx6suckR", "brnnRuleLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btnBack: cc.Button
      },
      onLoad: function onLoad() {
        var _this = this;
        this.node.on("click", function() {
          _this.node.destroy();
        });
        this.btnBack.node.on("click", function() {
          _this.node.destroy();
        });
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brnnTime: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "00ca1JTYXhAO5fkQ7sotBoC", "brnnTime");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        timer: {
          default: null,
          type: cc.Label
        },
        timeID: -1,
        time: -1,
        audioTime: {
          default: [],
          type: cc.AudioClip
        }
      },
      onLoad: function onLoad() {
        this.type = -1;
      },
      onEnable: function onEnable() {},
      setTime: function setTime(time, type) {
        this.setStartTime(time, type);
        clearInterval(this.timeID);
        this.timeID = setInterval(this.updateTime.bind(this), 1e3);
      },
      updateTime: function updateTime() {
        0 == this.time-- ? clearInterval(this.timeID) : this.timer && (this.timer.string = this.time.toString());
        0 == this.time ? cc.ak.util.audioMgr.playSFX(this.audioTime[1]) : cc.ak.util.audioMgr.playSFX(this.audioTime[0]);
      },
      setStartTime: function setStartTime(time, type) {
        this.time = time;
        this.timer.string = time.toString();
      },
      onDestroy: function onDestroy() {
        clearInterval(this.timeID);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brnn_loc: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "41f0fnHWcxLlIXvaNLs3JbF", "brnn_loc");
    "use strict";
    window.i18n || (window.i18n = {});
    window.i18n.languages || (window.i18n.languages = {});
    window.i18n.languages.loc || (window.i18n.languages.loc = {});
    window.i18n.languages.loc.brnn = {
      game: {
        betResult5: "\u73a9\u5bb6\u4e0b\u6ce8\u91d1\u989d\u9ad8\u4e8e\u5e84\u5bb6\u5269\u4f59\u91d1\u989d ",
        betResult1: "\u5143\u5b9d\u4e0d\u591f",
        upBankerResult0: "\u7533\u8bf7\u4e0a\u5e84\u6210\u529f",
        upBankerResult1: "\u7533\u8bf7\u5931\u8d25\uff0c\u91d1\u5e01\u4e0d\u8db3",
        upBankerResult3: "\u7533\u8bf7\u4e0a\u5e84\u5931\u8d25",
        upBankerResult2: "\u73a9\u5bb6\u5df2\u5728\u4e0a\u5e84\u5217\u8868\u4e2d",
        DownBankerResult0: "\u4e0b\u5e84\u6210\u529f",
        DownBankerResult3: "\u672c\u5c40\u7ed3\u675f\u540e\u4e0b\u5e84",
        DownBankerResult1: "\u4e0b\u5e84\u5931\u8d25",
        DownBankerResult2: "\u672c\u5c40\u7ed3\u675f\u540e\u4e0b\u5e84,\u81ea\u52a8\u4e0b\u5e84",
        outGameFail: "\u5728\u5e84\u4e0a\u6216\u8005\u5df2\u7ecf\u4e0b\u6ce8\uff0c\u4e0d\u80fd\u9000\u51fa\u6e38\u620f",
        bankerNotBet: "\u5e84\u5bb6\u4e0d\u80fd\u4e0b\u6ce8"
      }
    };
    cc._RF.pop();
  }, {} ],
  cmd_game_brnn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d2ad2pDhmlJcJukNJkWyJAv", "cmd_game_brnn");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_game_brnn = {};
    proto.cmd_game_brnn.__cfg = {};
    (function(cfg) {
      cfg.TableRule = {
        0: {
          na: "BaseRule",
          ty: "byte",
          ar: 1
        },
        1: {
          na: "CardNumber",
          ty: "int",
          ar: 1
        },
        2: {
          na: "BankerBase",
          ty: "int"
        },
        3: {
          na: "PaixingBeiLv",
          ty: "byte",
          sty: "string",
          ar: 1
        }
      };
      cfg.UserInfo = {
        1: {
          na: "Uid",
          ty: "int"
        },
        2: {
          na: "ChairID",
          ty: "int"
        },
        3: {
          na: "Status",
          ty: "int"
        },
        4: {
          na: "Headimg",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        5: {
          na: "Sex",
          ty: "int"
        },
        6: {
          na: "NickName",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        7: {
          na: "IP",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        8: {
          na: "Score",
          ty: "int"
        },
        9: {
          na: "CardCount",
          ty: "int"
        },
        10: {
          na: "Gold",
          ty: "int"
        },
        11: {
          na: "IsLook",
          ty: "int"
        },
        12: {
          na: "Longitude",
          ty: "int"
        },
        13: {
          na: "Latitude",
          ty: "int"
        },
        14: {
          na: "Signature",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        15: {
          na: "TrustStatu",
          ty: "int"
        },
        16: {
          na: "WinAmount",
          ty: "int"
        },
        17: {
          na: "UserPhone",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        18: {
          na: "LastTimeLogin",
          ty: "int"
        },
        19: {
          na: "AccountA",
          ty: "int"
        },
        20: {
          na: "AccountB",
          ty: "int"
        },
        21: {
          na: "Leavel",
          ty: "int"
        },
        22: {
          na: "UserType",
          ty: "int"
        },
        23: {
          na: "HeadImgId",
          ty: "int"
        }
      };
      cfg.EnterRoomSucc = {
        1: {
          na: "Code",
          ty: "int"
        },
        2: {
          na: "PlayCfg",
          ty: "TableRule"
        },
        3: {
          na: "RuleDesc",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        4: {
          na: "GPSDistance",
          ty: "int"
        }
      };
      cfg.HandCardData = {
        1: {
          na: "Cards",
          ty: "byte",
          ar: 1
        },
        2: {
          na: "Cards1",
          ty: "byte",
          ar: 1
        },
        4: {
          na: "Animation",
          ty: "int"
        }
      };
      cfg.WrnnChairInfo = {
        1: {
          na: "LocateID",
          ty: "int"
        },
        2: {
          na: "ChairType",
          ty: "int"
        },
        3: {
          na: "User",
          ty: "UserInfo"
        },
        4: {
          na: "Animation",
          ty: "int"
        },
        5: {
          na: "IsEmpty",
          ty: "int"
        },
        6: {
          na: "WinType",
          ty: "int"
        },
        7: {
          na: "WinBetId",
          ty: "int",
          ar: 1
        },
        8: {
          na: "CoinsNum",
          ty: "int"
        }
      };
      cfg.WrnnUserInfoReq = {
        1: {
          na: "LocateID",
          ty: "int"
        },
        2: {
          na: "ChairID",
          ty: "int"
        }
      };
      cfg.WrnnChairInfoRsp = {
        1: {
          na: "AllChairInfo",
          ty: "WrnnChairInfo",
          ar: 1
        }
      };
      cfg.RobBankerRsq = {
        1: {
          na: "ChairID",
          ty: "int"
        }
      };
      cfg.RobBankerRsp = {
        1: {
          na: "Result",
          ty: "int"
        },
        2: {
          na: "BankerUserInfo",
          ty: "UserInfo"
        }
      };
      cfg.DownBankerRsq = {
        1: {
          na: "ChairID",
          ty: "int"
        }
      };
      cfg.DownBankerRsp = {
        1: {
          na: "Result",
          ty: "int"
        }
      };
      cfg.BankerListRsq = {
        1: {
          na: "ChairID",
          ty: "int"
        }
      };
      cfg.ListPlayerInfo = {
        1: {
          na: "UserData",
          ty: "UserInfo",
          ar: 1
        },
        2: {
          na: "CanRobBaner",
          ty: "int"
        },
        3: {
          na: "WaitCountOfFront",
          ty: "int"
        },
        4: {
          na: "UserBankStatus",
          ty: "int"
        }
      };
      cfg.SetBetTimesRsq = {
        1: {
          na: "BetID",
          ty: "int"
        },
        2: {
          na: "BetChips",
          ty: "int"
        },
        3: {
          na: "ChairID",
          ty: "int"
        },
        4: {
          na: "LocateID",
          ty: "int"
        },
        5: {
          na: "Type",
          ty: "int"
        }
      };
      cfg.RepeatBetInfo = {
        1: {
          na: "BetID",
          ty: "int"
        },
        2: {
          na: "ChipsID",
          ty: "int",
          ar: 1
        },
        3: {
          na: "TotalChips",
          ty: "int"
        },
        4: {
          na: "SelfTotalChips",
          ty: "int"
        }
      };
      cfg.BetTimesRsp = {
        1: {
          na: "BetResult",
          ty: "int"
        },
        2: {
          na: "BetInfo",
          ty: "RepeatBetInfo",
          ar: 1
        },
        3: {
          na: "TotalBetChips",
          ty: "int"
        },
        4: {
          na: "LessChips",
          ty: "int"
        },
        5: {
          na: "BetInfoType",
          ty: "int"
        },
        6: {
          na: "LocateID",
          ty: "int"
        },
        7: {
          na: "ChairID",
          ty: "int"
        },
        8: {
          na: "MyRealCoin",
          ty: "int"
        }
      };
      cfg.RepeatBetStatus = {
        1: {
          na: "Status",
          ty: "int"
        }
      };
      cfg.UserBetTimesInfo = {
        1: {
          na: "ChairID",
          ty: "int"
        },
        2: {
          na: "LocateID",
          ty: "int"
        },
        3: {
          na: "ChipsID",
          ty: "int"
        }
      };
      cfg.OneBetTimesInfo = {
        1: {
          na: "BetID",
          ty: "int"
        },
        2: {
          na: "TotalChips",
          ty: "int"
        },
        3: {
          na: "ChipsID",
          ty: "int",
          ar: 1
        }
      };
      cfg.AllBetTimesInfo = {
        1: {
          na: "AllBetInfo",
          ty: "OneBetTimesInfo",
          ar: 1
        },
        2: {
          na: "TotalBetChips",
          ty: "int"
        },
        3: {
          na: "LessChips",
          ty: "int"
        }
      };
      cfg.WrnnSceneTimer = {
        1: {
          na: "Time",
          ty: "int"
        },
        2: {
          na: "Type",
          ty: "int"
        },
        3: {
          na: "UserOnline",
          ty: "int"
        }
      };
      cfg.BetInfo = {
        1: {
          na: "BetID",
          ty: "int"
        },
        2: {
          na: "TotalChips",
          ty: "int"
        },
        3: {
          na: "ChipsDetail",
          ty: "int",
          ar: 1
        },
        4: {
          na: "SelfTotalChips",
          ty: "int"
        }
      };
      cfg.BetChipsInfo = {
        1: {
          na: "AllBetInfo",
          ty: "BetInfo",
          ar: 1
        },
        2: {
          na: "TotalBetChips",
          ty: "int"
        },
        3: {
          na: "LessChips",
          ty: "int"
        },
        4: {
          na: "CoinsNum",
          ty: "int"
        },
        5: {
          na: "ChairID",
          ty: "int"
        }
      };
      cfg.RoomGameEnd = {
        1: {
          na: "RoomNum",
          ty: "int"
        },
        2: {
          na: "PlayCount",
          ty: "int"
        },
        3: {
          na: "PlayTime",
          ty: "int"
        },
        5: {
          na: "EndTime",
          ty: "int"
        }
      };
      cfg.CardData = {
        1: {
          na: "BetID",
          ty: "int"
        },
        2: {
          na: "Cards",
          ty: "HandCardData"
        },
        3: {
          na: "CardType",
          ty: "int"
        },
        4: {
          na: "WinOrLose",
          ty: "int"
        }
      };
      cfg.PlayGameEnd = {
        1: {
          na: "PassToKill",
          ty: "int"
        },
        2: {
          na: "CardDataList",
          ty: "CardData",
          ar: 1
        },
        3: {
          na: "EndTime",
          ty: "int"
        }
      };
      cfg.UserHandCard = {
        1: {
          na: "BetTableID",
          ty: "int"
        },
        2: {
          na: "Cards",
          ty: "HandCardData"
        },
        3: {
          na: "TotalChips",
          ty: "int"
        },
        4: {
          na: "Type",
          ty: "int"
        }
      };
      cfg.MyselfWinInfo = {
        1: {
          na: "WinType",
          ty: "int"
        },
        2: {
          na: "ChiopsId",
          ty: "int",
          ar: 1
        },
        3: {
          na: "Myself",
          ty: "UserInfo"
        },
        4: {
          na: "WinBetId",
          ty: "int",
          ar: 1
        }
      };
      cfg.BetTableJieSuan = {
        1: {
          na: "BetId",
          ty: "int"
        },
        2: {
          na: "WinStatus",
          ty: "int"
        },
        3: {
          na: "VipLocate",
          ty: "int",
          ar: 1
        },
        4: {
          na: "MyselfWinStatus",
          ty: "int"
        },
        5: {
          na: "GeneralPlayerStatus",
          ty: "int"
        }
      };
      cfg.StateData = {
        1: {
          na: "WinnerBet",
          ty: "BetTableJieSuan",
          ar: 1
        },
        2: {
          na: "UserHandCardList",
          ty: "UserHandCard",
          ar: 1
        },
        3: {
          na: "GenerPlayerTotalInfo",
          ty: "int"
        },
        4: {
          na: "ChairInfo",
          ty: "WrnnChairInfo",
          ar: 1
        },
        5: {
          na: "MyselfInfo",
          ty: "MyselfWinInfo"
        },
        6: {
          na: "NotAllLostFlag",
          ty: "int"
        },
        8: {
          na: "BankerWinNum",
          ty: "int"
        }
      };
      cfg.BetTableHistory = {
        1: {
          na: "WinStatus",
          ty: "int",
          ar: 1
        },
        2: {
          na: "WinRate",
          ty: "int"
        }
      };
      cfg.WinningHistory = {
        1: {
          na: "BetTableInfo",
          ty: "BetTableHistory",
          ar: 1
        },
        2: {
          na: "Type",
          ty: "int"
        }
      };
      cfg.WrnnPlayerStatus = {
        1: {
          na: "IsBet",
          ty: "int"
        },
        2: {
          na: "BankerStatus",
          ty: "int"
        },
        3: {
          na: "MaxChipsId",
          ty: "int"
        },
        4: {
          na: "IsExitGame",
          ty: "int"
        }
      };
    })(proto.cmd_game_brnn.__cfg);
    proto.cmd_game_brnn.TableRule = function() {
      this.__className = "proto.cmd_game_brnn.TableRule";
      this.BaseRule = null;
      this.CardNumber = null;
      this.BankerBase = 0;
      this.PaixingBeiLv = "";
    };
    proto.cmd_game_brnn.UserInfo = function() {
      this.__className = "proto.cmd_game_brnn.UserInfo";
      this.Uid = 0;
      this.ChairID = 0;
      this.Status = 0;
      this.Headimg = "";
      this.Sex = 0;
      this.NickName = "";
      this.IP = "";
      this.Score = 0;
      this.CardCount = 0;
      this.Gold = 0;
      this.IsLook = 0;
      this.Longitude = 0;
      this.Latitude = 0;
      this.Signature = "";
      this.TrustStatu = 0;
      this.WinAmount = 0;
      this.UserPhone = "";
      this.LastTimeLogin = 0;
      this.AccountA = 0;
      this.AccountB = 0;
      this.Leavel = 0;
      this.UserType = 0;
      this.HeadImgId = 0;
    };
    proto.cmd_game_brnn.EnterRoomSucc = function() {
      this.__className = "proto.cmd_game_brnn.EnterRoomSucc";
      this.Code = 0;
      this.PlayCfg = null;
      this.RuleDesc = "";
      this.GPSDistance = 0;
    };
    proto.cmd_game_brnn.HandCardData = function() {
      this.__className = "proto.cmd_game_brnn.HandCardData";
      this.Cards = null;
      this.Cards1 = null;
      this.Animation = 0;
    };
    proto.cmd_game_brnn.WrnnChairInfo = function() {
      this.__className = "proto.cmd_game_brnn.WrnnChairInfo";
      this.LocateID = 0;
      this.ChairType = 0;
      this.User = null;
      this.Animation = 0;
      this.IsEmpty = 0;
      this.WinType = 0;
      this.WinBetId = null;
      this.CoinsNum = 0;
    };
    proto.cmd_game_brnn.WrnnUserInfoReq = function() {
      this.__className = "proto.cmd_game_brnn.WrnnUserInfoReq";
      this.LocateID = 0;
      this.ChairID = 0;
    };
    proto.cmd_game_brnn.WrnnChairInfoRsp = function() {
      this.__className = "proto.cmd_game_brnn.WrnnChairInfoRsp";
      this.AllChairInfo = null;
    };
    proto.cmd_game_brnn.RobBankerRsq = function() {
      this.__className = "proto.cmd_game_brnn.RobBankerRsq";
      this.ChairID = 0;
    };
    proto.cmd_game_brnn.RobBankerRsp = function() {
      this.__className = "proto.cmd_game_brnn.RobBankerRsp";
      this.Result = 0;
      this.BankerUserInfo = null;
    };
    proto.cmd_game_brnn.DownBankerRsq = function() {
      this.__className = "proto.cmd_game_brnn.DownBankerRsq";
      this.ChairID = 0;
    };
    proto.cmd_game_brnn.DownBankerRsp = function() {
      this.__className = "proto.cmd_game_brnn.DownBankerRsp";
      this.Result = 0;
    };
    proto.cmd_game_brnn.BankerListRsq = function() {
      this.__className = "proto.cmd_game_brnn.BankerListRsq";
      this.ChairID = 0;
    };
    proto.cmd_game_brnn.ListPlayerInfo = function() {
      this.__className = "proto.cmd_game_brnn.ListPlayerInfo";
      this.UserData = null;
      this.CanRobBaner = 0;
      this.WaitCountOfFront = 0;
      this.UserBankStatus = 0;
    };
    proto.cmd_game_brnn.SetBetTimesRsq = function() {
      this.__className = "proto.cmd_game_brnn.SetBetTimesRsq";
      this.BetID = 0;
      this.BetChips = 0;
      this.ChairID = 0;
      this.LocateID = 0;
      this.Type = 0;
    };
    proto.cmd_game_brnn.RepeatBetInfo = function() {
      this.__className = "proto.cmd_game_brnn.RepeatBetInfo";
      this.BetID = 0;
      this.ChipsID = null;
      this.TotalChips = 0;
      this.SelfTotalChips = 0;
    };
    proto.cmd_game_brnn.BetTimesRsp = function() {
      this.__className = "proto.cmd_game_brnn.BetTimesRsp";
      this.BetResult = 0;
      this.BetInfo = null;
      this.TotalBetChips = 0;
      this.LessChips = 0;
      this.BetInfoType = 0;
      this.LocateID = 0;
      this.ChairID = 0;
      this.MyRealCoin = 0;
    };
    proto.cmd_game_brnn.RepeatBetStatus = function() {
      this.__className = "proto.cmd_game_brnn.RepeatBetStatus";
      this.Status = 0;
    };
    proto.cmd_game_brnn.UserBetTimesInfo = function() {
      this.__className = "proto.cmd_game_brnn.UserBetTimesInfo";
      this.ChairID = 0;
      this.LocateID = 0;
      this.ChipsID = 0;
    };
    proto.cmd_game_brnn.OneBetTimesInfo = function() {
      this.__className = "proto.cmd_game_brnn.OneBetTimesInfo";
      this.BetID = 0;
      this.TotalChips = 0;
      this.ChipsID = null;
    };
    proto.cmd_game_brnn.AllBetTimesInfo = function() {
      this.__className = "proto.cmd_game_brnn.AllBetTimesInfo";
      this.AllBetInfo = null;
      this.TotalBetChips = 0;
      this.LessChips = 0;
    };
    proto.cmd_game_brnn.WrnnSceneTimer = function() {
      this.__className = "proto.cmd_game_brnn.WrnnSceneTimer";
      this.Time = 0;
      this.Type = 0;
      this.UserOnline = 0;
    };
    proto.cmd_game_brnn.BetInfo = function() {
      this.__className = "proto.cmd_game_brnn.BetInfo";
      this.BetID = 0;
      this.TotalChips = 0;
      this.ChipsDetail = null;
      this.SelfTotalChips = 0;
    };
    proto.cmd_game_brnn.BetChipsInfo = function() {
      this.__className = "proto.cmd_game_brnn.BetChipsInfo";
      this.AllBetInfo = null;
      this.TotalBetChips = 0;
      this.LessChips = 0;
      this.CoinsNum = 0;
      this.ChairID = 0;
    };
    proto.cmd_game_brnn.RoomGameEnd = function() {
      this.__className = "proto.cmd_game_brnn.RoomGameEnd";
      this.RoomNum = 0;
      this.PlayCount = 0;
      this.PlayTime = 0;
      this.EndTime = 0;
    };
    proto.cmd_game_brnn.CardData = function() {
      this.__className = "proto.cmd_game_brnn.CardData";
      this.BetID = 0;
      this.Cards = null;
      this.CardType = 0;
      this.WinOrLose = 0;
    };
    proto.cmd_game_brnn.PlayGameEnd = function() {
      this.__className = "proto.cmd_game_brnn.PlayGameEnd";
      this.PassToKill = 0;
      this.CardDataList = null;
      this.EndTime = 0;
    };
    proto.cmd_game_brnn.UserHandCard = function() {
      this.__className = "proto.cmd_game_brnn.UserHandCard";
      this.BetTableID = 0;
      this.Cards = null;
      this.TotalChips = 0;
      this.Type = 0;
    };
    proto.cmd_game_brnn.MyselfWinInfo = function() {
      this.__className = "proto.cmd_game_brnn.MyselfWinInfo";
      this.WinType = 0;
      this.ChiopsId = null;
      this.Myself = null;
      this.WinBetId = null;
    };
    proto.cmd_game_brnn.BetTableJieSuan = function() {
      this.__className = "proto.cmd_game_brnn.BetTableJieSuan";
      this.BetId = 0;
      this.WinStatus = 0;
      this.VipLocate = null;
      this.MyselfWinStatus = 0;
      this.GeneralPlayerStatus = 0;
    };
    proto.cmd_game_brnn.StateData = function() {
      this.__className = "proto.cmd_game_brnn.StateData";
      this.WinnerBet = null;
      this.UserHandCardList = null;
      this.GenerPlayerTotalInfo = 0;
      this.ChairInfo = null;
      this.MyselfInfo = null;
      this.NotAllLostFlag = 0;
      this.BankerWinNum = 0;
    };
    proto.cmd_game_brnn.BetTableHistory = function() {
      this.__className = "proto.cmd_game_brnn.BetTableHistory";
      this.WinStatus = null;
      this.WinRate = 0;
    };
    proto.cmd_game_brnn.WinningHistory = function() {
      this.__className = "proto.cmd_game_brnn.WinningHistory";
      this.BetTableInfo = null;
      this.Type = 0;
    };
    proto.cmd_game_brnn.WrnnPlayerStatus = function() {
      this.__className = "proto.cmd_game_brnn.WrnnPlayerStatus";
      this.IsBet = 0;
      this.BankerStatus = 0;
      this.MaxChipsId = 0;
      this.IsExitGame = 0;
    };
    proto.cmd_game_brnn.SUB_CMD_GAME = {
      SUB_USER_START_DISMISSION: 1,
      SUB_USER_DISMISSION_REQ: 2,
      SUB_USER_DISMISSION_RSP: 3,
      SUB_USERINFO_PUSH: 4,
      SUB_TRUST_REQ: 5,
      SUB_TRUST_RSP: 6,
      SUB_PLAY_GAME_END: 7,
      SUB_ROOM_GAME_END: 8,
      SUB_ENTER_GAME_SCENCE: 9,
      SUB_SCENCE_DISMISSION: 12,
      SUB_SEND_STATE: 13,
      SUB_WRNN_ROB_BANKER_REQ: 38,
      SUB_ROB_BANKER_RSP: 39,
      SUB_WRNN_DOWN_BANKER_REQ: 40,
      SUB_DOWN_BANKER_RSP: 41,
      SUB_BANKER_LIST_REQ: 42,
      SUB_BANKER_LIST_RSP: 43,
      SUB_SET_BET_NUMS_REQ: 44,
      SUB_SET_BET_NUMS_RSP: 45,
      SUB_BET_TIMES_RESULT_RSP: 48,
      SUB_WRNN_CHAIR_INFO_RSP: 51,
      SUB_WRNN_SCENCE_TIMER: 54,
      SUB_WRNN_BET_INFO_RSP: 56,
      SUB_USER_HAND_CARD: 57,
      SUB_WINNING_HISTORY_RSQ: 58,
      SUB_WINNING_HISTORY_RSP: 59,
      SUB_WRNN_ONTIME_SYNC_BET_RSP: 62,
      SUB_REPEAT_BET_STATUS_RSP: 63,
      SUB_WRNN_PLAYER_STATUS_RSP: 65,
      SUB_WRNN_SCENCE_REQ: 69
    };
    proto.cmd_game_brnn.NN_CARD_TYPE = {
      NO_OX: 0,
      OX_ONE: 1,
      OX_TWO: 2,
      OX_THREE: 3,
      OX_FOUR: 4,
      OX_FIVE: 5,
      OX_SIX: 6,
      OX_SEVEN: 7,
      OX_EIGHT: 8,
      OX_NINE: 9,
      OX_OX: 10,
      BOMB: 11,
      FIVE_FLOWER: 12
    };
    cc._RF.pop();
  }, {} ]
}, {}, [ "brnnInit", "brnnLayer", "brnn_loc", "brnnBankerItme", "brnnBankerList", "brnnBet", "brnnBetLayer", "brnnCard", "brnnCardLayer", "brnnChip", "brnnChipLayer", "brnnChipSp", "brnnMyHead", "brnnBankerHead", "brnnHead", "brnnHeadLayer", "brnnMenu", "brnnHistoryItem", "brnnHistoryLayer", "brnnOnline", "brnnOtherLayer", "brnnRecordSheetItem", "brnnRuleBeiLvLayer", "brnnRuleItem", "brnnRuleLayer", "brnnTime", "cmd_game_brnn" ]);