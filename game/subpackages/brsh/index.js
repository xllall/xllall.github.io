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
  brshBankerHead: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "936c1I2t7hIe6vesLwgPcO1", "brshBankerHead");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        headImg: cc.Node,
        labName: cc.Label,
        labMoney: cc.Label,
        btnApply: cc.Button
      },
      onLoad: function onLoad() {
        this.btnApply.node.on("click", function() {
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_brsh.SUB_CMD_GAME.SUB_BANKER_LIST_REQ);
        });
      },
      init: function init(data) {
        data.sp && this.headImg.getComponent("headAnthologyItem").setAvatar(data.sp);
        this.labName.string = data.name;
        this.changeMoney(data.coin);
      },
      changeMoney: function changeMoney(num) {
        this.labMoney.string = "xxxxxx" == num ? num : Math.floor(num / 10) / 100;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brshBankerItme: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f12b42sbe5BwqIjZ6o6As52", "brshBankerItme");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        bankName: {
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
  brshBankerList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dd18bGrTW1DV5K3DldGjFKM", "brshBankerList");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        tipNum: cc.Label,
        pfBankerItme: {
          default: null,
          type: cc.Prefab
        },
        bankerRuleNum: cc.Label,
        close: cc.Button,
        cancle: cc.Button,
        suer: cc.Button,
        down: cc.Button,
        itemContaier: cc.Node,
        labName1: cc.Label,
        labName2: cc.Label,
        labName3: cc.Label,
        labName4: cc.Label
      },
      onLoad: function onLoad() {
        var _this = this;
        this.node.active = false;
        this.close.node.on("click", function() {
          _this.node.active = false;
        });
        this.node.on("click", function() {
          _this.node.active = false;
        });
        this.suer.node.on("click", function() {
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_brsh.SUB_CMD_GAME.SUB_WRNN_ROB_BANKER_REQ);
          _this.node.active = false;
        });
        this.cancle.node.on("click", function() {
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_brsh.SUB_CMD_GAME.SUB_WRNN_DOWN_BANKER_REQ);
          _this.node.active = false;
        });
        this.down.node.on("click", function() {
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_brsh.SUB_CMD_GAME.SUB_WRNN_DOWN_BANKER_REQ);
          _this.node.active = false;
        });
        this.initProto();
        this.nameArr = [];
        for (var i = 0; i < 4; i++) this.nameArr.push(this["labName" + (i + 1)]);
      },
      initProto: function initProto() {
        var _this2 = this;
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brsh.SUB_CMD_GAME.SUB_ROB_BANKER_RSP, function(data) {
          return _this2.bankerResult(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brsh.SUB_CMD_GAME.SUB_DOWN_BANKER_RSP, function(data) {
          return _this2.downBankerResult(data);
        }, this);
      },
      setData: function setData(num, data, btnStauts) {
        this.tipNum.string = num;
        this.suer.node.active = false;
        this.down.node.active = false;
        this.cancle.node.active = false;
        1 == btnStauts ? this.down.node.active = true : 2 == btnStauts ? this.cancle.node.active = true : 3 == btnStauts && (this.suer.node.active = true);
        var data1 = bundle.brsh.data.get(bundle.brsh.key.data.ENTER_ROOM_SUCC);
        var rule = data1.RuleData;
        var tableRule = new proto.cmd_game_brsh.TableRule();
        cc.ak.util.tbfUtil.unPackInnerData(tableRule, rule);
        this.bankerRuleNum.string = "" + Math.floor(tableRule.BankerBase / 1e3);
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
        var result = new proto.cmd_game_brsh.RobBankerRsp();
        cc.ak.util.tbfUtil.unPackData(result, data);
        var str = lan.brsh.game["upBankerResult" + result.Result];
        cc.ak.ui.toast(str);
      },
      downBankerResult: function downBankerResult(data) {
        var result = new proto.cmd_game_brsh.DownBankerRsp();
        cc.ak.util.tbfUtil.unPackData(result, data);
        cc.ak.ui.toast(lan.brsh.game["DownBankerResult" + result.Result]);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brshBetLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2bdf7bejhtDep1oTEuvIBk8", "brshBetLayer");
    "use strict";
    var BetLayer = cc.Class({
      extends: cc.Component,
      properties: {
        chipLayer: {
          default: null,
          type: cc.Node
        },
        chipPf: {
          default: null,
          type: cc.Prefab
        },
        headLayer: {
          default: null,
          type: cc.Node
        },
        totalBetNum: cc.Label,
        lessBetNum: cc.Label,
        betNode1: cc.Node,
        betNode2: cc.Node,
        betNode3: cc.Node,
        betNode4: cc.Node,
        otherLayer: cc.Node,
        recordSheetArr: {
          default: [],
          type: cc.Node
        },
        onMybetSucc: false
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
        var zoom = cc.winSize.width / 1920;
        for (var i = 0; i < this.betArr.length; i++) this.betArr[i].scaleX = zoom;
        for (var _i = 0; _i < this.betArr.length; _i++) {
          var betCop = this.betArr[_i].getComponent("brshBet");
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
        var otherLayer = this.otherLayer.getComponent("brshOtherLayer");
        var x = otherLayer.onLineNode.x;
        var y = otherLayer.onLineNode.y;
      },
      initProto: function initProto() {
        var _this = this;
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brsh.SUB_CMD_GAME.SUB_WRNN_BET_INFO_RSP, function(data) {
          return _this.betPlatformInfo(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brsh.SUB_CMD_GAME.SUB_SET_BET_NUMS_RSP, function(data) {
          return _this.onMyBet(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brsh.SUB_CMD_GAME.SUB_BET_TIMES_RESULT_RSP, function(data) {
          return _this.onVipBet(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brsh.SUB_CMD_GAME.SUB_WRNN_ONTIME_SYNC_BET_RSP, function(data) {
          return _this.onLineBet(data);
        }, this);
      },
      betPlatformInfo: function betPlatformInfo(data) {
        var betInfo = new proto.cmd_game_brsh.BetChipsInfo();
        cc.ak.util.tbfUtil.unPackData(betInfo, data);
        var allBetInfo = betInfo.AllBetInfo;
        this.lessBetNum.string = "" + Math.floor(betInfo.LessChips / 1e3);
        this.totalBetNum.string = "" + Math.floor(betInfo.TotalBetChips / 1e3);
        var coinNum = betInfo.CoinsNum;
        var myChairID = this.chipLayer.getComponent("brshChipLayer").myHead.getComponent("brshMyHead")._chairID;
        myChairID == betInfo.ChairID && this.chipLayer.getComponent("brshChipLayer").myHead.getComponent("brshMyHead").upDataCoin(coinNum);
        for (var i = 0; i < allBetInfo.length; i++) {
          var pos = {};
          cc.log("allBetInfo[i].BetID :" + allBetInfo[i].BetID);
          pos.x = this.betArr[allBetInfo[i].BetID - 1].x;
          pos.y = this.betArr[allBetInfo[i].BetID - 1].y;
          allBetInfo[i].SelfTotalChips && this.betArr[allBetInfo[i].BetID - 1].getComponent("brshBet").selfBetNumChange(allBetInfo[i].SelfTotalChips / 1e3);
          if (null != allBetInfo[i].ChipsDetail) {
            cc.log("allBetInfo[i].ChipsDetail.length :" + allBetInfo[i].ChipsDetail.length + " ,betID :" + allBetInfo[i].BetID);
            for (var j = 0; j < allBetInfo[i].ChipsDetail.length; j++) {
              var chip = cc.instantiate(this.chipPf);
              chip.x = pos.x;
              chip.y = pos.y;
              var chipNum = this.getIndexForValue(allBetInfo[i].ChipsDetail[j]);
              chip.getComponent("brshSpChip").init(chipNum, 9 == allBetInfo[i].ChipsDetail[j] ? this.getSuoHaSp() : allBetInfo[i].ChipsDetail[j] - 1);
              this.node.addChild(chip);
              this["betChips" + allBetInfo[i].BetID].push(chip);
            }
          }
        }
      },
      onMyBet: function onMyBet(data) {
        var betTimes = new proto.cmd_game_brsh.BetTimesRsp();
        cc.ak.util.tbfUtil.unPackData(betTimes, data);
        var betInfo = betTimes.BetInfo;
        var lessChips = betTimes.LessChips;
        var totalBetChips = betTimes.TotalBetChips;
        var myRealCoin = betTimes.MyRealCoin;
        this.lessBetNum.string = "" + Math.floor(lessChips / 1e3);
        this.totalBetNum.string = "" + Math.floor(totalBetChips / 1e3);
        var type = betTimes.BetInfoType;
        var coinNum = this.chipLayer.getComponent("brshChipLayer").myHead.getComponent("brshMyHead");
        var chipCom = this.chipLayer.getComponent("brshChipLayer");
        2 == type && (chipCom.btnContinue.interactable = false);
        if (0 == betTimes.BetResult) {
          for (var i = 0; i < betInfo.length; i++) {
            var betInfoArrS = {
              betID: betInfo[i].BetID,
              chairpsID: betInfo[i].ChipsID
            };
            if (betInfoArrS.chairpsID) {
              this.throwBetIDForchips(1, betInfoArrS, betInfoArrS.chairpsID.length);
              this.betArr[betInfoArrS.betID - 1].getComponent("brshBet").betNumChange(betInfo[i].TotalChips / 1e3);
              this.betArr[betInfoArrS.betID - 1].getComponent("brshBet").selfBetNumChange(betInfo[i].SelfTotalChips / 1e3);
              var coinNum = this.chipLayer.getComponent("brshChipLayer").myHead.getComponent("brshMyHead");
              for (var j = 0; j < betInfo[i].ChipsID.length; j++) {
                var num = this.getIndexForValue(betInfo[i].ChipsID[j]);
                9 == betInfo[i].ChipsID[j] ? coinNum._myCoinNum -= betInfo[i].ChipsValue : coinNum._myCoinNum -= num;
              }
            }
          }
          coinNum.upDataCoin(coinNum._myCoinNum);
          this.onMybetSucc = true;
          this.onMybetSucc && (chipCom.btnWithdraw.interactable = true);
        } else if (5 == betTimes.BetResult) cc.ak.ui.toast(lan.brsh.game.betResult5); else if (1 == betTimes.BetResult) cc.ak.ui.toast(lan.brsh.game.betResult1); else if (7 == betTimes.BetResult) {
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
            this.betArr[betInfoArr.betID - 1].getComponent("brshBet").betNumChange(betInfo[_i3].TotalChips / 1e3);
            this.betArr[betInfoArr.betID - 1].getComponent("brshBet").selfBetNumChange(0);
          }
          chipCom.btnWithdraw.interactable = false;
          this.onMybetSucc = false;
          var chipLayer = this.chipLayer.getComponent("brshChipLayer");
          var myHead = chipLayer.myHead.getComponent("brshMyHead");
          myHead.upDataCoin(myRealCoin);
        } else 2 == betTimes.BetResult && cc.log("\u6570\u636e\u51fa\u9519");
      },
      onVipBet: function onVipBet(data) {
        var betTimes = new proto.cmd_game_brsh.BetTimesRsp();
        cc.ak.util.tbfUtil.unPackData(betTimes, data);
        this.lessBetNum.string = "" + Math.floor(betTimes.LessChips / 1e3);
        this.totalBetNum.string = "" + Math.floor(betTimes.TotalBetChips / 1e3);
        var betInfo = betTimes.BetInfo;
        if (7 == betTimes.BetResult) {
          var avatars = this.headLayer.getComponent("brshHeadLayer").avatars;
          var realCoin = betTimes.MyRealCoin;
          for (var i = 0; i < betInfo.length; i++) {
            var betInfoArr = {
              betID: betInfo[i].BetID,
              chairpsID: betInfo[i].ChipsID
            };
            this.betArr[betInfoArr.betID - 1].getComponent("brshBet").betNumChange(betInfo[i].TotalChips / 1e3);
            this.chipLayer.getComponent("brshChipLayer").myHead.getComponent("brshMyHead").chairID == chairID && this.betArr[betInfoArr.betID - 1].getComponent("brshBet").selfBetNumChange(betInfo[i].SelfTotalChips / 1e3);
            if (0 == betInfo[i].TotalChips) {
              var betArr = this["betChips" + betInfo[i].BetID];
              for (var j = 0; j < betArr.length; j++) betArr[j].destroy();
              betArr.splice(0, betArr.length);
            }
          }
          if (avatars[betTimes.LocateID]) {
            var avatar = avatars[betTimes.LocateID].getChildByName("head").getComponent("brshHead");
            avatar.updataCoin(realCoin);
          }
        } else for (var _i4 = 0; _i4 < betInfo.length; _i4++) {
          var betInfoArr = {
            betID: betInfo[_i4].BetID,
            chairpsID: betInfo[_i4].ChipsID
          };
          this.betArr[betInfoArr.betID - 1].getComponent("brshBet").betNumChange(betInfo[_i4].TotalChips / 1e3);
          this.chipLayer.getComponent("brshChipLayer").myHead.getComponent("brshMyHead")._chairID == chairID && this.betArr[betInfoArr.betID - 1].getComponent("brshBet").selfBetNumChange(betInfo[_i4].SelfTotalChips / 1e3);
        }
        var chairID = betTimes.ChairID;
        if (this.chipLayer.getComponent("brshChipLayer").myHead.getComponent("brshMyHead").chairID == chairID) {
          var avatars = this.headLayer.getComponent("brshHeadLayer").avatars;
          for (var _i5 = 0; _i5 < betInfo.length; _i5++) {
            var chips = betInfo[_i5].ChipsID;
            if (chips) for (var _j2 = 0; _j2 < chips.length; _j2++) {
              var num = 0;
              num = 9 == chips[_j2] ? betInfo[_i5].ChipsValue : this.getIndexForValue(chips[_j2]);
              var coin = avatars[betTimes.LocateID].getChildByName("head").getComponent("brshHead")._coinNum -= num;
              avatars[betTimes.LocateID].getChildByName("head").getComponent("brshHead").updataCoin(coin);
            }
          }
          return;
        }
        var headLayerCom = this.headLayer.getComponent("brshHeadLayer");
        cc.log("onvip length: " + betInfo.length);
        for (var _i6 = 0; _i6 < betInfo.length; _i6++) {
          var betInfoArr = {
            betID: betInfo[_i6].BetID,
            chairpsID: betInfo[_i6].ChipsID,
            locateID: betTimes.LocateID,
            chipsValue: betInfo[_i6].ChipsValue
          };
          if (betInfoArr.chairpsID) {
            cc.log("onvip betID: " + betInfoArr.betID + ",chairpsID : " + betInfoArr.chairpsID.length);
            this.throwBetIDForchips(2, betInfoArr, betInfoArr.chairpsID.length);
          }
        }
      },
      onLineBet: function onLineBet(data) {
        var betTimes = new proto.cmd_game_brsh.AllBetTimesInfo();
        cc.ak.util.tbfUtil.unPackData(betTimes, data);
        this.lessBetNum.string = "" + Math.floor(betTimes.LessChips / 1e3);
        this.totalBetNum.string = "" + Math.floor(betTimes.TotalBetChips / 1e3);
        var allBetInfo = betTimes.AllBetInfo;
        if (null != allBetInfo) for (var i = 0; i < allBetInfo.length; i++) {
          var betInfo = {
            betID: allBetInfo[i].BetID,
            chips: allBetInfo[i].ChipsID,
            totalChips: allBetInfo[i].TotalChips / 1e3
          };
          this.betArr[betInfo.betID - 1].getComponent("brshBet").betNumChange(betInfo.totalChips);
          this.onlineBetAnim(betInfo);
        }
      },
      onlineBetAnim: function onlineBetAnim(data) {
        if (null == data.chips) return;
        var otherLayer = this.otherLayer.getComponent("brshOtherLayer");
        for (var i = 0; i < data.chips.length; i++) {
          var chip = cc.instantiate(this.chipPf);
          chip.x = otherLayer.onLineNode.x;
          chip.y = otherLayer.onLineNode.y;
          this.node.addChild(chip);
          var chipNum = this.getIndexForValue(data.chips[i]);
          chip.getComponent("brshSpChip").init(chipNum, 9 == data.chips[i] ? this.getSuoHaSp() : data.chips[i] - 1);
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
      throwBetIDForchips: function throwBetIDForchips(where, betInfo, len) {
        var size = this["betNode" + betInfo.betID].getContentSize();
        var h = size.height;
        var w = size.width;
        var bet = this.betArr[betInfo.betID - 1];
        var betX = this.node.convertToNodeSpaceAR(bet.parent.convertToWorldSpaceAR(bet.getPosition())).x;
        var betY = this.node.convertToNodeSpaceAR(bet.parent.convertToWorldSpaceAR(bet.getPosition())).y;
        for (var i = 0; i < len; i++) {
          var sp_x = Math.floor(Math.random() * (betX + w / 2 - 60 - (betX - w / 2 + 60) + 1) + (betX - w / 2) + 60);
          var sp_y = Math.floor(Math.random() * (betY + h / 2 - 80 - (betY - h / 2 + 80) + 1) + (betY - h / 2) + 80);
          if (betInfo.chairpsID[i] >= 1 && betInfo.chairpsID[i] <= 9) {
            switch (where) {
             case 1:
              var chip = null;
              chip = 9 == betInfo.chairpsID[i] ? this.chipLayer.getComponent("brshChipLayer").chipArr[5] : this.chipLayer.getComponent("brshChipLayer").chipArr[betInfo.chairpsID[i] - 1];
              var x = this.chipLayer.convertToNodeSpaceAR(chip.parent.convertToWorldSpaceAR(chip.getPosition())).x;
              var y = this.chipLayer.convertToNodeSpaceAR(chip.parent.convertToWorldSpaceAR(chip.getPosition())).y;
              break;

             case 2:
              var avatars = this.headLayer.getComponent("brshHeadLayer").avatars;
              if (avatars[betInfo.locateID]) {
                var x = avatars[betInfo.locateID].x;
                var y = avatars[betInfo.locateID].y;
                var num = 0;
                if (9 == betInfo.chairpsID[i]) {
                  num = betInfo.chipsValue;
                  var avatar = avatars[betInfo.locateID].getChildByName("head").getComponent("brshHead");
                  var coin = avatar._coinNum -= num;
                  avatar.updataCoin(coin);
                } else {
                  num = this.getIndexForValue(betInfo.chairpsID[i]);
                  var _avatar = avatars[betInfo.locateID].getChildByName("head").getComponent("brshHead");
                  var coin = _avatar._coinNum -= num;
                  _avatar.updataCoin(coin);
                }
                this.headLayer.getComponent("brshHeadLayer").vipHeadBetMove(betInfo.locateID);
              }
            }
            var chip = cc.instantiate(this.chipPf);
            chip.x = x;
            chip.y = y;
            this.node.addChild(chip);
            var chipNum = this.getIndexForValue(betInfo.chairpsID[i]);
            chip.getComponent("brshSpChip").init(chipNum, 9 == betInfo.chairpsID[i] ? this.getSuoHaSp() : betInfo.chairpsID[i] - 1);
            chip.runAction(cc.moveTo(.2, sp_x, sp_y));
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
        }
      },
      getIndexForValue: function getIndexForValue(index) {
        if (9 == index) return "\u68ad\u54c8";
        var data = bundle.brsh.data.get(bundle.brsh.key.data.ENTER_ROOM_SUCC);
        var rule = data.RuleData;
        var tableRule = new proto.cmd_game_brsh.TableRule();
        cc.ak.util.tbfUtil.unPackInnerData(tableRule, rule);
        var chipsNum = tableRule.CardNumber;
        var chipNum = -1;
        for (var t = 0; t < chipsNum.length; t++) index == t + 1 && (chipNum = chipsNum[t]);
        return chipNum;
      },
      getSuoHaSp: function getSuoHaSp() {
        var data = bundle.brsh.data.get(bundle.brsh.key.data.ENTER_ROOM_SUCC);
        var rule = data.RuleData;
        var tableRule = new proto.cmd_game_brsh.TableRule();
        cc.ak.util.tbfUtil.unPackInnerData(tableRule, rule);
        var chipsNum = tableRule.CardNumber;
        return chipsNum.length - 1;
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
        for (var i = 0; i < this.betArr.length; i++) this.betArr[i].getComponent("brshBet").canClick(yes);
      },
      start: function start() {},
      onEnable: function onEnable() {
        var _this2 = this;
        for (var i = 0; i < this.betArr.length; i++) this.betArr[i].on("clickBet", function(event) {
          var toastFlag = 0;
          var chipArr = _this2.chipLayer.getComponent("brshChipLayer").chipArr;
          var chipLayer = _this2.chipLayer.getComponent("brshChipLayer");
          for (var j = 0; j < _this2.betArr.length; j++) if (_this2.betArr[j].name == event.name.substring(0, 1)) if (chipLayer.bankFlag.node.active) cc.ak.ui.toast(lan.brsh.game.bankerNotBet); else for (var k = 0; k < chipArr.length; k++) {
            if (chipArr[k].getComponent("brshChip")._hightFlag) {
              var betTime = new proto.cmd_game_brsh.SetBetTimesRsq();
              betTime.BetID = j + 1;
              9 == chipArr[k].name ? betTime.BetChips = 9 : betTime.BetChips = k + 1;
              betTime.Type = 1;
              cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_brsh.SUB_CMD_GAME.SUB_SET_BET_NUMS_REQ, betTime);
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
  brshBet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8461zBoxFFJreNx/H3DHTu", "brshBet");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        sp: {
          default: [],
          type: [ cc.SpriteFrame ]
        },
        spBg: cc.Sprite,
        labBetNum: cc.Label,
        labSelfBetNum: cc.Label,
        betLight: cc.Sprite
      },
      onLoad: function onLoad() {
        this.node.on("click", this.onBet, this);
        this.betLight.node.active = false;
      },
      init: function init(num) {
        this.spBg.spriteFrame = this.sp[num];
      },
      isVisiLight: function isVisiLight(yes) {
        this.betLight.node.active = yes;
        yes && this.betLight.node.runAction(cc.sequence(cc.fadeIn(1).easing(cc.easeSineOut()), cc.fadeOut(1).easing(cc.easeSineOut())).repeatForever());
      },
      betNumChange: function betNumChange(num) {
        this.labBetNum.string = "" + num;
      },
      selfBetNumChange: function selfBetNumChange(num) {
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
  brshCardLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c95fbssmpZPwKFQn6GbFaU9", "brshCardLayer");
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
        typeNiu: {
          default: [],
          type: cc.SpriteFrame
        },
        audioType: {
          type: cc.AudioClip,
          default: []
        },
        typeNiuAnim: {
          default: [],
          type: cc.Prefab
        },
        sp_dealer: cc.Sprite
      },
      statics: {
        POS: [ {
          x: -555,
          y: -110,
          step: 60
        }, {
          x: -100,
          y: 300,
          step: 30
        }, {
          x: -395,
          y: 295,
          step: 30
        }, {
          x: -690,
          y: 285,
          step: 30
        }, {
          x: -990,
          y: 285,
          step: 30
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
        var anim = this.cardNode[betID].getChildByName("type").children[0].getComponent(cc.Animation);
        anim.play();
        cc.ak.util.audioMgr.playSFX(this.audioType[this._type[betID]]);
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
          card.scale = .7;
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
              card.ex = j * pos.step - 180;
              card.ey = 0;
            } else {
              card.ex = 0 + j * pos.step;
              card.ey = 0;
            }
            card.runAction(cc.sequence(cc.delayTime(.05 * j + .4 * Math.floor(i % 5)), cc.rotateTo(.01, -45), cc.spawn(cc.rotateTo(.2, 0), cc.scaleTo(.2, 1, 1), cc.moveTo(.2, card.ex + 50, card.y - 40), cc.callFunc(function() {})), cc.moveTo(.1, card.ex, card.ey), cc.callFunc(function(card) {
              var _this2 = this;
              card.getComponent("card").setBg(0);
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
              }.bind(_this3), 3e3));
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
            card.runAction(cc.sequence(cc.delayTime(.05 * j + .4 * Math.floor(i % 5)), cc.rotateTo(.01, -45), cc.spawn(cc.rotateTo(.2, 0), cc.scaleTo(.2, 1, 1), cc.moveTo(.2, pos.x + 30, pos.y - 30), cc.callFunc(function() {})), cc.callFunc(function(card) {
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
              card.x = -180 * CardLayer.POS[i].step;
              card.y = 0;
            } else {
              card.x = j * CardLayer.POS[i].step;
              card.y = 0;
            }
            card.rotation = 0;
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
  brshCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f4698Vl3qFGabE/ltH+TPPD", "brshCard");
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
  brshChipLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c4d76sl+1PJIdJOpH77sAg", "brshChipLayer");
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
        var data = bundle.brsh.data.get(bundle.brsh.key.data.ENTER_ROOM_SUCC);
        var rule = data.RuleData;
        var tableRule = new proto.cmd_game_brsh.TableRule();
        cc.ak.util.tbfUtil.unPackInnerData(tableRule, rule);
        var chipNum = tableRule.CardNumber;
        for (var i = 0; i < this.chipArr.length - 1; i++) {
          var chipCom = this.chipArr[i].getComponent("brshChip");
          chipCom.init(chipNum[i], i);
          chipCom._hightFlag = false;
          this.chipArr[i].name = "" + i;
        }
        var suoHa = this.chipArr[this.chipArr.length - 1].getComponent("brshChip");
        suoHa.init("\u68ad\u54c8", this.chipArr.length - 1);
        suoHa._hightFlag = false;
        this.chipArr[this.chipArr.length - 1].name = "9";
        this.init();
      },
      init: function init() {
        var _this = this;
        this.btnContinue.node.on("click", function() {
          var betTime = new proto.cmd_game_brsh.SetBetTimesRsq();
          betTime.Type = 2;
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_brsh.SUB_CMD_GAME.SUB_SET_BET_NUMS_REQ, betTime);
        });
        this.btnWithdraw.node.on("click", function() {
          var betTime = new proto.cmd_game_brsh.SetBetTimesRsq();
          betTime.Type = 3;
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_brsh.SUB_CMD_GAME.SUB_SET_BET_NUMS_REQ, betTime);
        });
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brsh.SUB_CMD_GAME.SUB_REPEAT_BET_STATUS_RSP, function(data) {
          return _this.onContinueStatus(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brsh.SUB_CMD_GAME.SUB_USERINFO_PUSH, function(data) {
          return _this.myInfo(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brsh.SUB_CMD_GAME.SUB_WRNN_PLAYER_STATUS_RSP, function(data) {
          return _this.chipStatus(data);
        }, this);
        cc.ak.event.on(cc.ak.key.event.COIN_CHANGE, function(data) {
          if (_this.myHead) {
            var coins = data.Coins;
            var sum = 0;
            var myCoinNum = _this.myHead.getComponent("brshMyHead")._myCoinNum;
            for (var i = 0; i < coins.length; i++) coins[i].CoinID == proto.cmd_sys.COIN_ID.COIN_ID_A ? 1 == coins[i].AddFlag && (sum = coins[i].Amount + myCoinNum) : coins[i].CoinID == proto.cmd_sys.COIN_ID.COIN_ID_B && 1 == coins[i].AddFlag && (sum = coins[i].Amount + myCoinNum);
            _this.myHead.getComponent("brshMyHead").upDataCoin(sum);
          }
        });
      },
      chipStatus: function chipStatus(data) {
        var status = new proto.cmd_game_brsh.WrnnPlayerStatus();
        cc.ak.util.tbfUtil.unPackData(status, data);
        var chipArr = this.chipArr;
        this.chipMinStatus = status.MaxChipsId;
        for (var i = 1; i <= chipArr.length; i++) if (i <= status.MaxChipsId) chipArr[i - 1].getComponent("brshChip").canClick(true); else {
          chipArr[i - 1].getComponent("brshChip").canClick(false);
          chipArr[i - 1].getComponent("brshChip")._hightFlag = false;
          chipArr[i - 1].getComponent("brshChip").refreshChip();
        }
        this.chipArr[chipArr.length - 1].getComponent("brshChip").canClick(0 != status.ShowHand);
        if (!status.ShowHand) {
          this.chipArr[chipArr.length - 1].getComponent("brshChip")._hightFlag = false;
          this.chipArr[chipArr.length - 1].getComponent("brshChip").refreshChip();
        }
      },
      myInfo: function myInfo(data) {
        var Info = new proto.cmd_game_brsh.UserInfo();
        cc.ak.util.tbfUtil.unPackData(Info, data);
        if (Info.ChairID == this.myHead.getComponent("brshMyHead").chairID && proto.cmd_room.USER_STATUS_TYPE.USER_STATUS_NULL == Info.Status) {
          cc.ak.ui.loadLobbyScence();
          return;
        }
        var coinNum = Info.AccountA + Info.AccountB;
        data = {
          name: Info.NickName,
          coin: coinNum,
          chairID: Info.ChairID,
          head: Info.HeadImgId
        };
        Info.Uid == cc.ak.mc.userMgr.uid && this.myHead.getComponent("brshMyHead").setMyInfo(data);
      },
      onContinueStatus: function onContinueStatus(data) {
        var status = new proto.cmd_game_brsh.RepeatBetStatus();
        cc.ak.util.tbfUtil.unPackData(status, data);
        this.btnContinue.getComponent(cc.Button).interactable = 0 != status.Status;
      },
      canClick: function canClick(yes) {
        for (var i = 0; i < this.chipArr.length; i++) this.chipArr[i].getComponent("brshChip").canClick(yes);
      },
      isVisiChips: function isVisiChips(yes) {
        for (var i = 0; i < this.chipArr.length; i++) this.chipArr[i].active = yes;
        this.bankFlag.node.active = !yes;
      },
      onEnable: function onEnable() {
        var _this2 = this;
        for (var i = 0; i < this.chipArr.length; i++) this.chipArr[i].on("checkHight", function(event) {
          var chipArr = _this2.chipArr;
          for (var j = 0; j < chipArr.length; j++) {
            var chip = chipArr[j].getComponent("brshChip");
            if (chipArr[j].name == event.name.substring(0, 1)) {
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
  brshChip: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "12d58jYq3JFnqD9/eTkBGfz", "brshChip");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _hightFlag: false,
        numStyle: {
          default: [],
          type: cc.LabelAtlas
        },
        num: {
          default: null,
          type: cc.Label
        },
        sp: {
          default: [],
          type: [ cc.SpriteFrame ]
        },
        chipK: cc.Sprite,
        kStyle: {
          default: [],
          type: cc.SpriteFrame
        },
        _chipNum: -1
      },
      onLoad: function onLoad() {
        this.node.on("click", this.chipCallBack, this);
      },
      chipCallBack: function chipCallBack(event) {
        this._hightFlag = !this._hightFlag;
        this.node.emit("checkHight", this);
      },
      start: function start() {},
      init: function init(num, sp) {
        if ("\u68ad\u54c8" != num) {
          this._chipNum = num / 1e3;
          this.num.font = this.numStyle[sp];
          if (this._chipNum >= 1e3) {
            this.num.string = "" + parseInt(num / 1e3 / 1e3);
            this.num.node.x = -20;
            this.chipK.node.active = true;
            this.chipK.spriteFrame = this.kStyle[sp];
          } else {
            this.num.node.x = 0;
            this.chipK.node.active = false;
            this.num.string = "" + num / 1e3;
          }
        } else this.num.string = "";
        this.getComponent(cc.Sprite).spriteFrame = this.sp[sp];
      },
      getChip: function getChip() {
        return this._chipNum;
      },
      canClick: function canClick(yes) {
        this.getComponent(cc.Button).interactable = yes;
      },
      refreshChip: function refreshChip() {
        true == this._hightFlag ? this.node.y = -15 : false == this._hightFlag && (this.node.y = -45);
      },
      cleanChipHightFlag: function cleanChipHightFlag() {
        this._hightFlag = null;
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ],
  brshHeadLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "44f8dqKbGVDYJvaTOeJKxYI", "brshHeadLayer");
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
        this.chipLayerCom = this.chipLayer.getComponent("brshChipLayer");
        this.initProto();
        this.btnBanker.node.on("click", function() {
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_brsh.SUB_CMD_GAME.SUB_BANKER_LIST_REQ);
        });
      },
      start: function start() {},
      initProto: function initProto() {
        var _this = this;
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brsh.SUB_CMD_GAME.SUB_WRNN_CHAIR_INFO_RSP, function(data) {
          return _this.upDataOne(data);
        }, this);
      },
      upDataOne: function upDataOne(data) {
        for (var p = 0; p < 7; p++) this.avatars[p] = null;
        var userInfos = new proto.cmd_game_brsh.WrnnChairInfoRsp();
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
                sp: chairsInfo[i].User.HeadImgId
              };
              var name = cc.ak.util.utils.FilterFormString(info.name + "");
              name = cc.ak.util.utils.nameInterception(info.name);
              this.bankNode.getComponent("brshBankerHead").init(info);
              void 0 != this.chipLayerCom && (chairsInfo[i].User.ChairID == this.chipLayerCom.myHead.getComponent("brshMyHead")._chairID ? this.chipLayerCom.isVisiChips(false) : this.chipLayerCom.isVisiChips(true));
              continue;
            }
            this.chipLayerCom.isVisiChips(true);
            var info = {
              name: "\u5e84\u5bb6",
              coin: "xxxxxx",
              sp: 1
            };
            this.bankNode.getComponent("brshBankerHead").init(info);
            continue;
          }
          var userInfo = null;
          if (chairsInfo[i].User) {
            var coin = chairsInfo[i].CoinsNum;
            userInfo = {
              name: chairsInfo[i].User.NickName,
              coin: coin,
              head: null
            };
          }
          var head = this["headNode" + (chairsInfo[i].LocateID + 1)];
          head.active = true;
          var headNode = head.getChildByName("head");
          var headCopm = headNode.getComponent("brshHead");
          userInfo && headCopm.setParame(chairsInfo[i].LocateID, userInfo);
          this.avatars[chairsInfo[i].LocateID] = head;
        }
      },
      vipUpdataCoinNum: function vipUpdataCoinNum(wrnnArr) {
        for (var i = 0; i < wrnnArr.length; i++) for (var j = 0; j < this.avatars.length; j++) if (this.avatars[j]) {
          var headCop = this.avatars[j].getChildByName("head").getComponent("brshHead");
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
          index < 3 ? this.head[index].runAction(cc.sequence(cc.moveTo(.2, x + 30, y - 30), cc.moveTo(.2, x, y), cc.callFunc(function() {
            that.headPos[index] = 0;
          }))) : this.head[index].runAction(cc.sequence(cc.moveTo(.2, x - 30, y - 30), cc.moveTo(.2, x, y), cc.callFunc(function() {
            that.headPos[index] = 0;
          })));
        }
      },
      bankerFlyScoreAnim: function bankerFlyScoreAnim(num, info) {
        var winScore = this.bankNode.getChildByName("bankerBg").getChildByName("winScroe");
        var loseScore = this.bankNode.getChildByName("bankerBg").getChildByName("loseScroe");
        var score = null;
        if (0 == num) return;
        score = Math.floor(num / 10) / 100;
        cc.log("\u5e84\u5bb6 :" + score + ", num : " + num);
        var that = this;
        if (score > 0) {
          winScore.active = true;
          winScore.getComponent(cc.Label).string = "+" + score;
          winScore.runAction(cc.sequence(cc.moveTo(4.5, winScore.x, winScore.y - 50), cc.callFunc(function() {
            winScore.y = 0;
            winScore.active = false;
            if (info) {
              var coin = info.AccountA + info.AccountB;
              that.bankNode.getComponent("brshBankerHead").changeMoney(coin);
            }
          })));
        } else {
          loseScore.active = true;
          loseScore.getComponent(cc.Label).string = "" + score;
          loseScore.runAction(cc.sequence(cc.moveTo(4.5, loseScore.x, loseScore.y - 50), cc.callFunc(function() {
            loseScore.y = 0;
            loseScore.active = false;
            if (info) {
              var coin = info.AccountA + info.AccountB;
              that.bankNode.getComponent("brshBankerHead").changeMoney(coin);
            }
          })));
        }
      }
    }, _defineProperty(_cc$Class, "start", function start() {}), _defineProperty(_cc$Class, "onDestroy", function onDestroy() {
      cc.ak.event.targetOff(this);
    }), _cc$Class));
    cc._RF.pop();
  }, {} ],
  brshHead: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "398dbT/kSRKxbqX1Q2GxP8w", "brshHead");
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
        void 0 != data.head && this.headIcon.getComponent("headAnthologyItem").setAvatar(data.head);
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
        var _this = this;
        var winCoinNum = Math.floor(userInfo.WinAmount / 10) / 100;
        if (0 == winCoinNum) return;
        if (this._locateID > 3) {
          this.winScore.node.x = -120;
          this.loseScore.node.x = -120;
        } else {
          this.winScore.node.x = 120;
          this.loseScore.node.x = 120;
        }
        if (winCoinNum > 0) {
          this.winScore.node.active = true;
          this.winScore.string = "+" + winCoinNum;
          var that = this;
          this.winScore.node.runAction(cc.sequence(cc.moveTo(4.5, that.winScore.node.x, that.winScore.node.y + 50), cc.callFunc(function() {
            that.winScore.node.y = -80;
            that.winScore.node.active = false;
            var coinNum = userInfo.AccountA + userInfo.AccountB;
            _this.updataCoin(coinNum);
          })));
        } else {
          this.loseScore.node.active = true;
          this.loseScore.string = "" + winCoinNum;
          var that = this;
          this.loseScore.node.runAction(cc.sequence(cc.moveTo(4.5, that.loseScore.node.x, that.loseScore.node.y + 50), cc.callFunc(function() {
            that.loseScore.node.y = -80;
            that.loseScore.node.active = false;
            var coinNum = userInfo.AccountA + userInfo.AccountB;
            _this.updataCoin(coinNum);
          })));
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brshHistoryItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "53ae5K0n65MQJO79t/TtcBc", "brshHistoryItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        resultSp: cc.Sprite,
        spArr: {
          default: [],
          type: cc.SpriteFrame
        }
      },
      onLoad: function onLoad() {},
      init: function init(results) {
        this.resultSp.spriteFrame = this.spArr[results];
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brshHistoryLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "07ec4cYm7BEi4XsiOq7A0/W", "brshHistoryLayer");
    "use strict";
    var HistoryLayer = cc.Class({
      extends: cc.Component,
      properties: {
        itemPf: cc.Prefab,
        scroll: cc.Node,
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
      setResult: function setResult(data) {
        var content = this.scroll;
        content.destroyAllChildren();
        var temp = cc.instantiate(this.itemPf);
        for (var i = 0; i < data.length; i++) {
          var restleArr = data[i].WinStatus;
          for (var j = 0; j < restleArr.length; j++) {
            var item = cc.instantiate(this.itemPf);
            item.x = 80 * j - 350;
            item.y = 180 - 110 * i;
            content.addChild(item);
            item.getComponent("brshHistoryItem").init(restleArr[j]);
          }
          this.labWinRate[i].string = data[i].WinRate + "%";
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brshInit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8086cyr3JVBzYuh7nUDaWB/", "brshInit");
    "use strict";
    var BrshInit = cc.Class({
      extends: cc.Component,
      statics: {
        id: "brsh"
      },
      properties: {},
      onLoad: function onLoad() {
        cc.log("brsh module init!");
        bundle.brsh = {};
        bundle.brsh.key = {};
        bundle.brsh.data = new Map();
        this.initGlobalHttpKey();
        this.initGlobalCacheKey();
        this.initGlobalEventKey();
        this.initGlobalDataKey();
        this.initCache();
        this.initGlobalEventHandle();
      },
      start: function start() {},
      initBrshData: function initBrshData() {},
      initGlobalHttpKey: function initGlobalHttpKey() {
        bundle.brsh.key.http = {};
      },
      initGlobalCacheKey: function initGlobalCacheKey() {
        bundle.brsh.key.cache = {};
      },
      initGlobalDataKey: function initGlobalDataKey() {
        bundle.brsh.key.data = {
          temp: "temp",
          ENTER_ROOM_SUCC: "enter_room_succ"
        };
      },
      initGlobalEventKey: function initGlobalEventKey() {
        bundle.brsh.key.event = {
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
        cc.ak.event.on(cc.ak.key.event.ENTER_GAME_SCENE + "_" + BrshInit.id, function(data) {
          bundle.brsh.data.set(bundle.brsh.key.data.ENTER_ROOM_SUCC, data);
          if ("brshGame" != cc.director.getScene().name) {
            cc.ak.util.utils.loadGameSceneBegin();
            cc.ak.ui.loadScenceWithPreload("brshGame");
          }
          cc.log("enter BrshGame Sence");
        });
        cc.ak.event.on(cc.ak.key.event.POPUP_SUGGAME_ENTRANCE + "_" + BrshInit.id, function(data, parentNode) {
          cc.log("Handle : " + JSON.stringify(data));
          if (data.id !== BrshInit.id) return;
          if (!cc.isValid(parentNode)) return;
          var entrance = cc.instantiate(cc.ak.ui.pfsubGameEntrance);
          entrance.parent = parentNode;
          entrance.getComponent("subGameEntrance").setMatchItme(data);
        });
      },
      loadPrefab: function loadPrefab() {}
    });
    module.exports = BrshInit;
    cc._RF.pop();
  }, {} ],
  brshLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aa205bQPTxHwrs770Gyatal", "brshLayer");
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
        audioTime: {
          type: cc.AudioClip,
          default: []
        },
        _settlementID: -1,
        coinNumTimeID: -1,
        flyChipTimeID: -1
      },
      onLoad: function onLoad() {
        cc.ak.util.audioMgr.playBGM(this.audioBg);
        this.bankerFlyBetTime = [];
        this.bankerFlyFreeTimeID = [], this.cardLayerCom = this.cardLayer.getComponent("brshCardLayer");
        this.betLayerCom = this.betLayer.getComponent("brshBetLayer");
        this.chipLayerCom = this.chipLayer.getComponent("brshChipLayer");
        this.initProtr();
      },
      start: function start() {
        cc.ak.util.utils.loadGameSceneFinish();
      },
      initProtr: function initProtr() {
        var _this = this;
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brsh.SUB_CMD_GAME.SUB_WRNN_SCENCE_TIMER, function(data) {
          return _this.enterScence(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brsh.SUB_CMD_GAME.SUB_SEND_STATE, function(data) {
          return _this.settlement(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brsh.SUB_CMD_GAME.SUB_USER_HAND_CARD, function(data) {
          return _this.enterSettlement(data);
        }, this);
      },
      enterScence: function enterScence(data) {
        var timer = new proto.cmd_game_brsh.WrnnSceneTimer();
        cc.ak.util.tbfUtil.unPackData(timer, data);
        var time = timer.Time;
        var type = timer.Type;
        var onlineNum = timer.UserOnline;
        var otherLayer = this.otherLayer.getComponent("brshOtherLayer");
        var betLayer = this.betLayer.getComponent("brshBetLayer");
        var chipLayer = this.chipLayer.getComponent("brshChipLayer");
        otherLayer.clockNode && otherLayer.clockNode.getComponent("brshTime").setTime(time);
        otherLayer.playTimeAnim(type - 1);
        otherLayer.showPlayerNum(onlineNum);
        switch (type) {
         case 1:
          otherLayer.cleanAll();
          betLayer.canClick(false);
          chipLayer.canClick(false);
          for (var i = 0; i < this.bankerFlyBetTime.length; i++) clearInterval(this.bankerFlyBetTime[i]);
          this.bankerFlyBetTime.splice(0, this.bankerFlyBetTime.length);
          for (var _i = 0; _i < this.bankerFlyFreeTimeID.length; _i++) clearInterval(this.bankerFlyFreeTimeID);
          this.bankerFlyFreeTimeID.splice(0, this.bankerFlyFreeTimeID.length);
          chipLayer.btnWithdraw.interactable = false;
          chipLayer.btnContinue.interactable = false;
          otherLayer.clockNode.active = false;
          break;

         case 2:
          if (betLayer) {
            betLayer.onMybetSucc = false;
            betLayer.myBetChipsFlag = 0;
          }
          otherLayer.cleanAll();
          chipLayer.btnWithdraw.interactable = false;
          chipLayer.btnContinue.interactable = false;
          var chipArr = chipLayer.chipArr;
          for (var _i2 = 0; _i2 < chipArr.length; _i2++) {
            var chip = chipArr[_i2].getComponent("brshChip");
            chip._hightFlag = false;
            chip.refreshChip();
          }
          betLayer.canClick(true);
          chipLayer.canClick(true);
          cc.ak.util.audioMgr.playSFX(this.audioTime[0]);
          otherLayer.clockNode.active = true;
          break;

         case 3:
          betLayer && (betLayer.onMybetSucc = false);
          chipLayer.btnWithdraw.interactable = false;
          chipLayer.btnContinue.interactable = false;
          betLayer.canClick(false);
          chipLayer.canClick(false);
          cc.ak.util.audioMgr.playSFX(this.audioTime[1]);
          otherLayer.clockNode.active = false;
        }
      },
      settlement: function settlement(data) {
        var _this2 = this;
        var stateData = new proto.cmd_game_brsh.StateData();
        cc.ak.util.tbfUtil.unPackData(stateData, data);
        var playerStatus = stateData.GenerPlayerTotalInfo;
        var myWinType = stateData.MyselfInfo.WinType;
        var allLostFlag = stateData.NotAllLostFlag;
        var myInfo = stateData.MyselfInfo;
        var playerWinCoinNum = stateData.GenerPlayerTotalInfo;
        var bankerWinNum = stateData.BankerWinNum;
        var cardsListData = stateData.UserHandCardList;
        for (var i = 0; i < cardsListData.length; i++) {
          var betID = cardsListData[i].BetTableID;
          var cardsData = cardsListData[i].Cards;
          var type = cardsListData[i].Type;
          this.cardLayerCom.creatorCard(betID, cardsData.Cards1, type);
        }
        var chipLayer = this.chipLayer.getComponent("brshChipLayer");
        var myHead = chipLayer.myHead.getComponent("brshMyHead");
        this.cardLayerCom.sendCardAnim();
        var winBet = stateData.WinnerBet;
        var chairInfo = stateData.ChairInfo;
        var bankerUseInfo = null;
        var vipLocate = [];
        for (var k = 0; k < chairInfo.length; k++) {
          chairInfo[k].User && vipLocate.push(chairInfo[k]);
          0 == chairInfo[k].LocateID && chairInfo[k].User && (bankerUseInfo = chairInfo[k].User);
        }
        clearInterval(this._settlementID);
        this._settlementID = setTimeout(function() {
          for (var p = 0; p < winBet.length; p++) {
            if (0 == winBet[p].BetId) {
              if (4 == winBet[p].WinStatus) {
                _this2.betLayerCom.betArr[0].getComponent("brshBet").isVisiLight(true);
                _this2.betLayerCom.betArr[1].getComponent("brshBet").isVisiLight(true);
                _this2.betLayerCom.betArr[2].getComponent("brshBet").isVisiLight(true);
                _this2.betLayerCom.betArr[3].getComponent("brshBet").isVisiLight(true);
              }
              break;
            }
            1 == winBet[p].WinStatus && _this2.betLayerCom.betArr[winBet[p].BetId - 1].getComponent("brshBet").isVisiLight(true);
          }
          var betCom = _this2.betLayer.getComponent("brshBetLayer");
          var headLayer = _this2.headLayer.getComponent("brshHeadLayer");
          var other = _this2.otherLayer.getComponent("brshOtherLayer");
          var _loop = function _loop(_i3) {
            if (0 != winBet[_i3].BetId) {
              0 == winBet[_i3].WinStatus && _this2.freeChipsFlyBanker(winBet[_i3].BetId);
              if (1 == winBet[_i3].WinStatus) {
                _this2.bankerFlyBetTime.push(_i3);
                clearInterval(_this2.bankerFlyBetTime[_i3]);
                _this2.bankerFlyBetTime[_i3] = setTimeout(function() {
                  this.bankerChipsFlyBetID(winBet[_i3].BetId);
                }.bind(_this2), 2e3);
                _this2.bankerFlyFreeTimeID.push(_i3);
                clearInterval(_this2.bankerFlyFreeTimeID[_i3]);
                _this2.bankerFlyFreeTimeID[_i3] = setTimeout(function() {
                  this.betIDFlyChipsToFree(betCom["betChips" + winBet[_i3].BetId], vipLocate, myInfo, winBet[_i3].BetId, allLostFlag);
                }.bind(_this2), 4e3);
              }
            } else switch (winBet[_i3].WinStatus) {
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
            if (_i3 == winBet.length - 1) {
              clearInterval(_this2.coinNumTimeID);
              _this2.coinNumTimeID = setTimeout(function() {
                headLayer.vipUpdataCoinNum(vipLocate);
                myHead.flyScroe(myInfo.Myself);
                headLayer.bankerFlyScoreAnim(bankerWinNum, bankerUseInfo);
                other.onLineNode.getComponent("brshOnline").coinUpdata(playerWinCoinNum);
              }.bind(_this2), 5e3);
            }
          };
          for (var _i3 = 0; _i3 < winBet.length; _i3++) {
            var _ret = _loop(_i3);
            if ("object" === ("undefined" === typeof _ret ? "undefined" : _typeof(_ret))) return _ret.v;
          }
        }, 12e3);
      },
      bankerAllLose: function bankerAllLose(playerWinCoinNum, chairInfo, myInfo, allLostFlag, bankerWinNum, bankerUseInfo) {
        for (var i = 1; i < 5; i++) this.bankerChipsFlyBetID(i);
        clearInterval(this.coinNumTimeID);
        if (this.headLayer) {
          var headLayer = this.headLayer.getComponent("brshHeadLayer");
          var chipLayer = this.chipLayer.getComponent("brshChipLayer");
          var headLayer = this.headLayer.getComponent("brshHeadLayer");
          var chipLayer = this.chipLayer.getComponent("brshChipLayer");
          var myHead = chipLayer.myHead.getComponent("brshMyHead");
          var other = this.otherLayer.getComponent("brshOtherLayer");
          var betCom = this.betLayer.getComponent("brshBetLayer");
          clearInterval(this.flyChipTimeID);
          this.flyChipTimeID = setTimeout(function() {
            for (var _i4 = 1; _i4 < 5; _i4++) this.betIDFlyChipsToFree(betCom["betChips" + _i4], chairInfo, myInfo, _i4, allLostFlag);
          }.bind(this), 2e3);
          this.coinNumTimeID = setTimeout(function() {
            headLayer.vipUpdataCoinNum(chairInfo);
            myHead.flyScroe(myInfo.Myself);
            headLayer.bankerFlyScoreAnim(bankerWinNum, bankerUseInfo);
            other.onLineNode.getComponent("brshOnline").coinUpdata(playerWinCoinNum);
          }.bind(this), 4e3);
        }
      },
      betIDFlyChipsToFree: function betIDFlyChipsToFree(chipArr, chairInfo, myInfo, betID, allLostFlag) {
        var locateArr = [];
        if (this.headLayer) {
          var headLayer = this.headLayer.getComponent("brshHeadLayer");
          var chipLayer = this.chipLayer.getComponent("brshChipLayer");
          var otherLayer = this.otherLayer.getComponent("brshOtherLayer");
          for (var i = 0; i < chairInfo.length; i++) if (0 != chairInfo[i].LocateID && 1 == chairInfo[i].WinType) {
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
          if (null != myInfo.WinBetId) for (var _i5 = 0; _i5 < myInfo.WinBetId.length; _i5++) {
            var betiD = myInfo.WinBetId[_i5];
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
            var _loop2 = function _loop2(_i6) {
              chip = chipArr[_i6];
              chip.runAction(cc.sequence(cc.delayTime(.15), cc.moveTo(.85, locateArr[_i6 % locateArr.length].x, locateArr[_i6 % locateArr.length].y).easing(cc.easeBackIn()), cc.callFunc(function() {
                chipArr[_i6] && chipArr[_i6].destroy();
                _i6 == chipArr.length - 1 && chipArr.splice(0, chipArr.length);
              })));
            };
            for (var _i6 = 0; _i6 < chipArr.length; _i6++) {
              var chip;
              _loop2(_i6);
            }
          }
        }
      },
      bankerAllwin: function bankerAllwin(playerWinCoinNum, chairInfo, myInfo, bankerWinNum, bankerUseInfo) {
        for (var j = 1; j < 5; j++) this.freeChipsFlyBanker(j);
        clearInterval(this.coinNumTimeID);
        if (this.headLayer) {
          var headLayer = this.headLayer.getComponent("brshHeadLayer");
          var chipLayer = this.chipLayer.getComponent("brshChipLayer");
          var myHead = chipLayer.myHead.getComponent("brshMyHead");
          var other = this.otherLayer.getComponent("brshOtherLayer");
          this.coinNumTimeID = setTimeout(function() {
            headLayer.vipUpdataCoinNum(chairInfo);
            myHead.flyScroe(myInfo);
            headLayer.bankerFlyScoreAnim(bankerWinNum, bankerUseInfo);
            other.onLineNode.getComponent("brshOnline").coinUpdata(playerWinCoinNum);
          }.bind(this), 1e3);
        }
      },
      freeChipsFlyBanker: function freeChipsFlyBanker(betID) {
        if (this.headLayer) {
          var betCom = this.betLayer.getComponent("brshBetLayer");
          var headCop = this.headLayer.getComponent("brshHeadLayer");
          var headImg = headCop.bankNode.getComponent("brshBankerHead").headImg;
          var pos = headCop.bankNode.convertToNodeSpaceAR(headCop.bankNode.getChildByName("bankerBg").convertToWorldSpaceAR(headImg.getPosition()));
          for (var i = 0; i < betCom["betChips" + betID].length; i++) {
            var coin = betCom["betChips" + betID][i];
            void 0 != coin && null != coin && coin.runAction(cc.sequence(cc.delayTime(.15), cc.moveTo(.75, pos.x, 350).easing(cc.easeBackIn()), cc.callFunc(function(coin, i) {
              coin.destroy();
              betCom["betChips" + betID][i].destroy();
              i == betCom["betChips" + betID].length - 1 && betCom["betChips" + betID].splice(0, betCom["betChips" + betID].length);
            }.bind(this), coin, i)));
          }
        }
      },
      bankerChipsFlyBetID: function bankerChipsFlyBetID(betID) {
        if (this.headLayer) {
          var headCom = this.headLayer.getComponent("brshHeadLayer");
          var headImg = headCom.bankNode.getComponent("brshBankerHead").headImg;
          var pos = headCom.bankNode.convertToNodeSpaceAR(headCom.bankNode.getChildByName("bankerBg").convertToWorldSpaceAR(headImg.getPosition()));
          var betCom = this.betLayer.getComponent("brshBetLayer");
          var bet = betCom.betArr[betID - 1];
          var betX = betCom.node.convertToNodeSpaceAR(bet.parent.convertToWorldSpaceAR(bet.getPosition())).x;
          var betY = betCom.node.convertToNodeSpaceAR(bet.parent.convertToWorldSpaceAR(bet.getPosition())).y;
          var w = this.betLayerCom.betArr[betID - 1].width;
          var h = this.betLayerCom.betArr[betID - 1].height;
          var len = betCom["betChips" + betID].length > 20 ? 20 : betCom["betChips" + betID].length;
          var chips = [];
          var data = bundle.brsh.data.get(bundle.brsh.key.data.ENTER_ROOM_SUCC);
          var rule = data.RuleData;
          var tableRule = new proto.cmd_game_brsh.TableRule();
          cc.ak.util.tbfUtil.unPackInnerData(tableRule, rule);
          var chipNum = tableRule.CardNumber;
          for (var i = 0; i < len; i++) {
            var val = Math.ceil(2 * Math.random() - 1);
            var num = chipNum[val];
            chips.push(num);
          }
          for (var _i7 = 0; _i7 < chips.length; _i7++) {
            var sp_x = Math.floor(Math.random() * (betX + w / 2 - 60 - (betX - w / 2 + 60) + 1) + (betX - w / 2) + 60);
            var sp_y = Math.floor(Math.random() * (betY + h / 2 - 80 - (betY - h / 2 + 80) + 1) + (betY - h / 2) + 80);
            var coin = cc.instantiate(betCom.chipPf);
            coin.x = pos.x;
            coin.y = 400;
            coin.getComponent("brshSpChip").init(chips[_i7], 0);
            this.betLayer.addChild(coin);
            betCom["betChips" + betID].push(coin);
            coin.runAction(cc.moveTo(.4, sp_x, sp_y).easing(cc.easeBackIn()));
          }
        }
      },
      enterSettlement: function enterSettlement(data) {
        var stateData = new proto.cmd_game_brsh.StateData();
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
              this.betLayerCom.betArr[0].getComponent("brshBet").isVisiLight(true);
              this.betLayerCom.betArr[1].getComponent("brshBet").isVisiLight(true);
              this.betLayerCom.betArr[2].getComponent("brshBet").isVisiLight(true);
              this.betLayerCom.betArr[3].getComponent("brshBet").isVisiLight(true);
            }
            break;
          }
          1 == winBet[p].WinStatus && this.betLayerCom.betArr[winBet[p].BetId - 1].getComponent("brshBet").isVisiLight(true);
        }
      },
      onDestroy: function onDestroy() {
        clearInterval(this._settlementID);
        clearInterval(this.flyChipTimeID);
        clearInterval(this.coinNumTimeID);
        for (var i = 0; i < this.bankerFlyFreeTimeID.length; i++) clearInterval(this.bankerFlyFreeTimeID);
        this.bankerFlyFreeTimeID.splice(0, this.bankerFlyFreeTimeID.length);
        for (var _i8 = 0; _i8 < this.bankerFlyBetTime.length; _i8++) clearInterval(this.bankerFlyBetTime[_i8]);
        this.bankerFlyBetTime.splice(0, this.bankerFlyBetTime.length);
        cc.ak.event.targetOff(this);
      }
    });
    cc._RF.pop();
  }, {} ],
  brshMenu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b0f13r9TxKpLIEJiCa1OCn", "brshMenu");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btnRule: cc.Button,
        btnSetting: cc.Button,
        btnHistory: cc.Button,
        settingPf: cc.Prefab,
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
          _this.node.addChild(setting);
        });
        this.btnRule.node.on("click", function() {
          var rule = cc.instantiate(_this.ruleLayerPf);
          _this.node.parent.addChild(rule);
          _this.node.active = false;
        });
        this.btnHistory.node.on("click", function() {
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_brsh.SUB_CMD_GAME.SUB_WINNING_HISTORY_RSQ);
        });
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brshMyHead: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "afc49psn0ZNmZkA5FS8DD16", "brshMyHead");
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
        cc.log("\u81ea\u5df1 :" + Math.floor(info.WinAmount / 1e3 * 100) / 100 + ", num : " + info.WinAmount);
        var winAmount = Math.floor(info.WinAmount / 10) / 100;
        if (info.WinAmount / 1e3 > 0) {
          this.winScore.node.active = true;
          this.winScore.string = "+" + winAmount;
          this.winScore.node.runAction(cc.sequence(cc.moveTo(4.5, this.winScore.node.x, this.winScore.node.y + 50), cc.callFunc(function() {
            that.winScore.node.y = 0;
            that.winScore.node.active = false;
            var coinNum = info.AccountA + info.AccountB;
            _this.upDataCoin(coinNum);
          })));
        } else {
          this.loseScore.node.active = true;
          this.loseScore.string = "" + winAmount;
          this.loseScore.node.runAction(cc.sequence(cc.moveTo(4.5, this.loseScore.node.x, this.loseScore.node.y + 50), cc.callFunc(function() {
            that.loseScore.node.y = 0;
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
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brshOnline: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "72f8dfVatBGo5x6/XF0Efw0", "brshOnline");
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
        this.labNum.string = num;
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
  brshOtherLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "47091D9wjNFJIGgqMQjBRaW", "brshOtherLayer");
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
        btnRepeat: cc.Button,
        btnCancel: cc.Button,
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
          var betLayer = _this.betLayer.getComponent("brshBetLayer");
          var chipLayer = _this.chipLayer.getComponent("brshChipLayer");
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
      initProto: function initProto() {
        var _this2 = this;
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brsh.SUB_CMD_GAME.SUB_NORMAL_PLAYER_COUNT_RSP, function(data) {
          return _this2.showPlayerNum(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brsh.SUB_CMD_GAME.SUB_WINNING_HISTORY_RSP, function(data) {
          return _this2.showHis(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brsh.SUB_CMD_GAME.SUB_BANKER_LIST_RSP, function(data) {
          return _this2.showBankerList(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_brsh.SUB_CMD_GAME.SUB_LEAVE_GAME_WRNN_SCENE_RSP, function() {
          cc.ak.ui.loadLobbyScence();
        }, this);
      },
      showHis: function showHis(data) {
        var his = new proto.cmd_game_brsh.WinningHistory();
        cc.ak.util.tbfUtil.unPackData(his, data);
        var betInfo = his.BetTableInfo;
        if (0 === his.Type) {
          this.historyList.getComponent("brshHistoryLayer").setResult(betInfo);
          this.historyList.active = true;
        } else {
          var result = [ [], [], [], [] ];
          for (var i = 0; i < betInfo.length; i++) {
            var betTable = betInfo[i].WinStatus;
            for (var j = 0; j < betTable.length; j++) result[i].push(betTable[j]);
          }
          cc.log("result : " + result);
          var result1 = new Array();
          for (var p = 0; p < result[0].length; p++) {
            var arr = new Array();
            for (var k = 0; k < result.length; k++) arr.push(result[k][p]);
            result1.push(arr);
          }
          var recordArr = this.betLayer.getComponent("brshBetLayer").recordSheetArr;
          for (var _i = 0; _i < recordArr.length; _i++) {
            var item = recordArr[_i];
            item && item.getComponent("brshRecordSheetItem").setRecordData(result1[_i]);
          }
        }
      },
      showPlayerNum: function showPlayerNum(num) {
        this.onLineNode.getComponent("brshOnline").setOnlineNum(num);
      },
      showBankerList: function showBankerList(data) {
        var listInfo = new proto.cmd_game_brsh.ListPlayerInfo();
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
        this.bankerList.getComponent("brshBankerList").setData(num, listInfos, userBankStatus);
      },
      playTimeAnim: function playTimeAnim(index) {
        var anim = this.animArr[index];
        anim.active = true;
        anim.getComponent(cc.Animation).play();
      },
      cleanAll: function cleanAll() {
        this.betLayer.getComponent("brshBetLayer").cleanChips();
        this.cardLayer.getComponent("brshCardLayer").hideCards();
        var betArr = this.betLayer.getComponent("brshBetLayer").betArr;
        for (var i = 0; i < betArr.length; i++) {
          betArr[i].getComponent("brshBet").betNumChange(0);
          betArr[i].getComponent("brshBet").selfBetNumChange(0);
          betArr[i].getComponent("brshBet").isVisiLight(false);
        }
        this.betLayer.getComponent("brshBetLayer").lessBetNum.string = "0";
        this.betLayer.getComponent("brshBetLayer").totalBetNum.string = "0";
      },
      start: function start() {},
      onDestroy: function onDestroy() {
        cc.ak.event.targetOff(this);
      }
    });
    cc._RF.pop();
  }, {} ],
  brshRecordSheetItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1503fHDv7ZJcZ2TTsypNDBU", "brshRecordSheetItem");
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
  brshRuleItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d54f3c65etDR7xROJoPK9w0", "brshRuleItem");
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
  brshRuleLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b9c8mIxm9CNqOhgaZ56WVA", "brshRuleLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        ruleItem: cc.Prefab,
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
  brshSpChip: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d7864Q75ApBF7nqKYS6xP2z", "brshSpChip");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        num: {
          default: null,
          type: cc.Label
        },
        spBg: {
          default: [],
          type: [ cc.SpriteFrame ]
        },
        chipSp: cc.Sprite
      },
      start: function start() {},
      init: function init(num, sp) {
        this.num.string = "\u68ad\u54c8" != num ? "" + num / 1e3 : "\u68ad\u54c8";
        this.chipSp.spriteFrame = this.spBg[sp];
      }
    });
    cc._RF.pop();
  }, {} ],
  brshTime: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3935cdnsqRM7q1PBhIMGL1Z", "brshTime");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        timer: {
          default: null,
          type: cc.Label
        },
        timeID: -1,
        time: -1
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
      },
      setStartTime: function setStartTime(time, type) {
        this.time = time;
        this.timer.string = time.toString();
      },
      setChangeTips: function setChangeTips(type) {
        switch (type) {
         case 1:
         case 2:
         case 3:
          break;

         default:
          cc.log("time Type error ");
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  brsh_loc: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a0bfdwgaGhN0ItaFDV+urlW", "brsh_loc");
    "use strict";
    window.i18n || (window.i18n = {});
    window.i18n.languages || (window.i18n.languages = {});
    window.i18n.languages.loc || (window.i18n.languages.loc = {});
    window.i18n.languages.loc.brsh = {
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
  cmd_game_brsh: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a1fb9n+cT9JSKnLVunrNaYO", "cmd_game_brsh");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_game_brsh = {};
    proto.cmd_game_brsh.__cfg = {};
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
          na: "ChiopsId",
          ty: "int",
          ar: 1
        },
        8: {
          na: "WinBetId",
          ty: "int",
          ar: 1
        },
        9: {
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
      cfg.WrnnUserInfoRsp = {
        1: {
          na: "User",
          ty: "UserInfo"
        }
      };
      cfg.WrnnMyselfInfoRsp = {
        1: {
          na: "Myself",
          ty: "UserInfo"
        }
      };
      cfg.WrnnChairInfoRsp = {
        1: {
          na: "AllChairInfo",
          ty: "WrnnChairInfo",
          ar: 1
        }
      };
      cfg.FaPaiInfoRsp = {
        1: {
          na: "FapaiTimer",
          ty: "int"
        },
        2: {
          na: "AllCards",
          ty: "HandCardData",
          ar: 1
        },
        3: {
          na: "FirstLocal",
          ty: "int"
        }
      };
      cfg.SendCardData = {
        1: {
          na: "cardList",
          ty: "FaPaiInfoRsp",
          ar: 1
        }
      };
      cfg.UpLocateReq = {
        1: {
          na: "LocateID",
          ty: "int"
        },
        2: {
          na: "ChairID",
          ty: "int"
        }
      };
      cfg.WrnnKikeXianjiaRsp = {
        1: {
          na: "LocateID",
          ty: "int"
        }
      };
      cfg.UpLocateResult = {
        1: {
          na: "Result",
          ty: "int"
        }
      };
      cfg.ReplaceLocateReq = {
        1: {
          na: "LocateID",
          ty: "int"
        },
        2: {
          na: "TargetID",
          ty: "int"
        },
        3: {
          na: "ChairID",
          ty: "int"
        }
      };
      cfg.ReplaceLocateResult = {
        1: {
          na: "Result",
          ty: "int"
        }
      };
      cfg.KickedOutLocateReq = {
        1: {
          na: "LocateID",
          ty: "int"
        },
        3: {
          na: "ChairID",
          ty: "int"
        }
      };
      cfg.FreshUserInfoAtLocate = {
        1: {
          na: "LocateID",
          ty: "int"
        },
        2: {
          na: "UserData",
          ty: "UserInfo"
        },
        3: {
          na: "Type",
          ty: "int"
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
      cfg.NewPlayerIntoBanker = {
        1: {
          na: "Status",
          ty: "int"
        }
      };
      cfg.StartBetRsp = {
        1: {
          na: "Times",
          ty: "int",
          ar: 1
        },
        2: {
          na: "LeaveTime",
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
        },
        5: {
          na: "ChipsValue",
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
      cfg.BetTimesResult = {
        1: {
          na: "TotalBetChips",
          ty: "int"
        },
        2: {
          na: "ChairID",
          ty: "int"
        },
        3: {
          na: "LocateID",
          ty: "int"
        },
        4: {
          na: "LessChips",
          ty: "int"
        },
        5: {
          na: "BetInfo",
          ty: "RepeatBetInfo",
          ar: 1
        },
        6: {
          na: "BetInfoType",
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
      cfg.UserChips = {
        1: {
          na: "ChairID",
          ty: "int"
        },
        2: {
          na: "Chips",
          ty: "int"
        }
      };
      cfg.HandleDetail = {
        1: {
          na: "ChairID",
          ty: "int"
        },
        2: {
          na: "Banker",
          ty: "int"
        },
        3: {
          na: "BankerWin",
          ty: "int"
        },
        4: {
          na: "BankerLose",
          ty: "int"
        },
        5: {
          na: "PlayerWin",
          ty: "int"
        },
        6: {
          na: "PlayerLose",
          ty: "int"
        },
        7: {
          na: "Score",
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
        4: {
          na: "UserDetail",
          ty: "HandleDetail",
          ar: 1
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
      cfg.BankerScoreData = {
        1: {
          na: "LocateID",
          ty: "int"
        },
        2: {
          na: "BankerScore",
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
          na: "BankerScoreList",
          ty: "BankerScoreData",
          ar: 1
        },
        4: {
          na: "EndTime",
          ty: "int"
        }
      };
      cfg.WinnerInfo = {
        1: {
          na: "UserData",
          ty: "UserInfo"
        },
        2: {
          na: "WinCoin",
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
          na: "BigWinner",
          ty: "WinnerInfo"
        },
        2: {
          na: "WinnerBet",
          ty: "BetTableJieSuan",
          ar: 1
        },
        3: {
          na: "UserHandCardList",
          ty: "UserHandCard",
          ar: 1
        },
        4: {
          na: "GenerPlayerTotalInfo",
          ty: "int"
        },
        5: {
          na: "ChairInfo",
          ty: "WrnnChairInfo",
          ar: 1
        },
        6: {
          na: "MyselfInfo",
          ty: "MyselfWinInfo"
        },
        7: {
          na: "NotAllLostFlag",
          ty: "int"
        },
        8: {
          na: "BankerWinNum",
          ty: "int"
        }
      };
      cfg.SortCardData = {
        1: {
          na: "UserHandCardList",
          ty: "UserHandCard",
          ar: 1
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
        },
        5: {
          na: "ShowHand",
          ty: "int"
        }
      };
    })(proto.cmd_game_brsh.__cfg);
    proto.cmd_game_brsh.TableRule = function() {
      this.__className = "proto.cmd_game_brsh.TableRule";
      this.BaseRule = null;
      this.CardNumber = null;
      this.BankerBase = 0;
      this.PaixingBeiLv = "";
    };
    proto.cmd_game_brsh.UserInfo = function() {
      this.__className = "proto.cmd_game_brsh.UserInfo";
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
    proto.cmd_game_brsh.EnterRoomSucc = function() {
      this.__className = "proto.cmd_game_brsh.EnterRoomSucc";
      this.Code = 0;
      this.PlayCfg = null;
      this.RuleDesc = "";
      this.GPSDistance = 0;
    };
    proto.cmd_game_brsh.HandCardData = function() {
      this.__className = "proto.cmd_game_brsh.HandCardData";
      this.Cards = null;
      this.Cards1 = null;
      this.Animation = 0;
    };
    proto.cmd_game_brsh.WrnnChairInfo = function() {
      this.__className = "proto.cmd_game_brsh.WrnnChairInfo";
      this.LocateID = 0;
      this.ChairType = 0;
      this.User = null;
      this.Animation = 0;
      this.IsEmpty = 0;
      this.WinType = 0;
      this.ChiopsId = null;
      this.WinBetId = null;
      this.CoinsNum = 0;
    };
    proto.cmd_game_brsh.WrnnUserInfoReq = function() {
      this.__className = "proto.cmd_game_brsh.WrnnUserInfoReq";
      this.LocateID = 0;
      this.ChairID = 0;
    };
    proto.cmd_game_brsh.WrnnUserInfoRsp = function() {
      this.__className = "proto.cmd_game_brsh.WrnnUserInfoRsp";
      this.User = null;
    };
    proto.cmd_game_brsh.WrnnMyselfInfoRsp = function() {
      this.__className = "proto.cmd_game_brsh.WrnnMyselfInfoRsp";
      this.Myself = null;
    };
    proto.cmd_game_brsh.WrnnChairInfoRsp = function() {
      this.__className = "proto.cmd_game_brsh.WrnnChairInfoRsp";
      this.AllChairInfo = null;
    };
    proto.cmd_game_brsh.FaPaiInfoRsp = function() {
      this.__className = "proto.cmd_game_brsh.FaPaiInfoRsp";
      this.FapaiTimer = 0;
      this.AllCards = null;
      this.FirstLocal = 0;
    };
    proto.cmd_game_brsh.SendCardData = function() {
      this.__className = "proto.cmd_game_brsh.SendCardData";
      this.cardList = null;
    };
    proto.cmd_game_brsh.UpLocateReq = function() {
      this.__className = "proto.cmd_game_brsh.UpLocateReq";
      this.LocateID = 0;
      this.ChairID = 0;
    };
    proto.cmd_game_brsh.WrnnKikeXianjiaRsp = function() {
      this.__className = "proto.cmd_game_brsh.WrnnKikeXianjiaRsp";
      this.LocateID = 0;
    };
    proto.cmd_game_brsh.UpLocateResult = function() {
      this.__className = "proto.cmd_game_brsh.UpLocateResult";
      this.Result = 0;
    };
    proto.cmd_game_brsh.ReplaceLocateReq = function() {
      this.__className = "proto.cmd_game_brsh.ReplaceLocateReq";
      this.LocateID = 0;
      this.TargetID = 0;
      this.ChairID = 0;
    };
    proto.cmd_game_brsh.ReplaceLocateResult = function() {
      this.__className = "proto.cmd_game_brsh.ReplaceLocateResult";
      this.Result = 0;
    };
    proto.cmd_game_brsh.KickedOutLocateReq = function() {
      this.__className = "proto.cmd_game_brsh.KickedOutLocateReq";
      this.LocateID = 0;
      this.ChairID = 0;
    };
    proto.cmd_game_brsh.FreshUserInfoAtLocate = function() {
      this.__className = "proto.cmd_game_brsh.FreshUserInfoAtLocate";
      this.LocateID = 0;
      this.UserData = null;
      this.Type = 0;
    };
    proto.cmd_game_brsh.RobBankerRsq = function() {
      this.__className = "proto.cmd_game_brsh.RobBankerRsq";
      this.ChairID = 0;
    };
    proto.cmd_game_brsh.RobBankerRsp = function() {
      this.__className = "proto.cmd_game_brsh.RobBankerRsp";
      this.Result = 0;
      this.BankerUserInfo = null;
    };
    proto.cmd_game_brsh.DownBankerRsq = function() {
      this.__className = "proto.cmd_game_brsh.DownBankerRsq";
      this.ChairID = 0;
    };
    proto.cmd_game_brsh.DownBankerRsp = function() {
      this.__className = "proto.cmd_game_brsh.DownBankerRsp";
      this.Result = 0;
    };
    proto.cmd_game_brsh.BankerListRsq = function() {
      this.__className = "proto.cmd_game_brsh.BankerListRsq";
      this.ChairID = 0;
    };
    proto.cmd_game_brsh.ListPlayerInfo = function() {
      this.__className = "proto.cmd_game_brsh.ListPlayerInfo";
      this.UserData = null;
      this.CanRobBaner = 0;
      this.WaitCountOfFront = 0;
      this.UserBankStatus = 0;
    };
    proto.cmd_game_brsh.NewPlayerIntoBanker = function() {
      this.__className = "proto.cmd_game_brsh.NewPlayerIntoBanker";
      this.Status = 0;
    };
    proto.cmd_game_brsh.StartBetRsp = function() {
      this.__className = "proto.cmd_game_brsh.StartBetRsp";
      this.Times = null;
      this.LeaveTime = 0;
    };
    proto.cmd_game_brsh.SetBetTimesRsq = function() {
      this.__className = "proto.cmd_game_brsh.SetBetTimesRsq";
      this.BetID = 0;
      this.BetChips = 0;
      this.ChairID = 0;
      this.LocateID = 0;
      this.Type = 0;
    };
    proto.cmd_game_brsh.RepeatBetInfo = function() {
      this.__className = "proto.cmd_game_brsh.RepeatBetInfo";
      this.BetID = 0;
      this.ChipsID = null;
      this.TotalChips = 0;
      this.SelfTotalChips = 0;
      this.ChipsValue = 0;
    };
    proto.cmd_game_brsh.BetTimesRsp = function() {
      this.__className = "proto.cmd_game_brsh.BetTimesRsp";
      this.BetResult = 0;
      this.BetInfo = null;
      this.TotalBetChips = 0;
      this.LessChips = 0;
      this.BetInfoType = 0;
      this.LocateID = 0;
      this.ChairID = 0;
      this.MyRealCoin = 0;
    };
    proto.cmd_game_brsh.BetTimesResult = function() {
      this.__className = "proto.cmd_game_brsh.BetTimesResult";
      this.TotalBetChips = 0;
      this.ChairID = 0;
      this.LocateID = 0;
      this.LessChips = 0;
      this.BetInfo = null;
      this.BetInfoType = 0;
    };
    proto.cmd_game_brsh.RepeatBetStatus = function() {
      this.__className = "proto.cmd_game_brsh.RepeatBetStatus";
      this.Status = 0;
    };
    proto.cmd_game_brsh.UserBetTimesInfo = function() {
      this.__className = "proto.cmd_game_brsh.UserBetTimesInfo";
      this.ChairID = 0;
      this.LocateID = 0;
      this.ChipsID = 0;
    };
    proto.cmd_game_brsh.OneBetTimesInfo = function() {
      this.__className = "proto.cmd_game_brsh.OneBetTimesInfo";
      this.BetID = 0;
      this.TotalChips = 0;
      this.ChipsID = null;
    };
    proto.cmd_game_brsh.AllBetTimesInfo = function() {
      this.__className = "proto.cmd_game_brsh.AllBetTimesInfo";
      this.AllBetInfo = null;
      this.TotalBetChips = 0;
      this.LessChips = 0;
    };
    proto.cmd_game_brsh.WrnnSceneTimer = function() {
      this.__className = "proto.cmd_game_brsh.WrnnSceneTimer";
      this.Time = 0;
      this.Type = 0;
      this.UserOnline = 0;
    };
    proto.cmd_game_brsh.BetInfo = function() {
      this.__className = "proto.cmd_game_brsh.BetInfo";
      this.BetID = 0;
      this.TotalChips = 0;
      this.ChipsDetail = null;
      this.SelfTotalChips = 0;
    };
    proto.cmd_game_brsh.BetChipsInfo = function() {
      this.__className = "proto.cmd_game_brsh.BetChipsInfo";
      this.AllBetInfo = null;
      this.TotalBetChips = 0;
      this.LessChips = 0;
      this.CoinsNum = 0;
      this.ChairID = 0;
    };
    proto.cmd_game_brsh.UserChips = function() {
      this.__className = "proto.cmd_game_brsh.UserChips";
      this.ChairID = 0;
      this.Chips = 0;
    };
    proto.cmd_game_brsh.HandleDetail = function() {
      this.__className = "proto.cmd_game_brsh.HandleDetail";
      this.ChairID = 0;
      this.Banker = 0;
      this.BankerWin = 0;
      this.BankerLose = 0;
      this.PlayerWin = 0;
      this.PlayerLose = 0;
      this.Score = 0;
    };
    proto.cmd_game_brsh.RoomGameEnd = function() {
      this.__className = "proto.cmd_game_brsh.RoomGameEnd";
      this.RoomNum = 0;
      this.PlayCount = 0;
      this.PlayTime = 0;
      this.UserDetail = null;
      this.EndTime = 0;
    };
    proto.cmd_game_brsh.CardData = function() {
      this.__className = "proto.cmd_game_brsh.CardData";
      this.BetID = 0;
      this.Cards = null;
      this.CardType = 0;
      this.WinOrLose = 0;
    };
    proto.cmd_game_brsh.BankerScoreData = function() {
      this.__className = "proto.cmd_game_brsh.BankerScoreData";
      this.LocateID = 0;
      this.BankerScore = 0;
    };
    proto.cmd_game_brsh.PlayGameEnd = function() {
      this.__className = "proto.cmd_game_brsh.PlayGameEnd";
      this.PassToKill = 0;
      this.CardDataList = null;
      this.BankerScoreList = null;
      this.EndTime = 0;
    };
    proto.cmd_game_brsh.WinnerInfo = function() {
      this.__className = "proto.cmd_game_brsh.WinnerInfo";
      this.UserData = null;
      this.WinCoin = 0;
    };
    proto.cmd_game_brsh.UserHandCard = function() {
      this.__className = "proto.cmd_game_brsh.UserHandCard";
      this.BetTableID = 0;
      this.Cards = null;
      this.TotalChips = 0;
      this.Type = 0;
    };
    proto.cmd_game_brsh.MyselfWinInfo = function() {
      this.__className = "proto.cmd_game_brsh.MyselfWinInfo";
      this.WinType = 0;
      this.ChiopsId = null;
      this.Myself = null;
      this.WinBetId = null;
    };
    proto.cmd_game_brsh.BetTableJieSuan = function() {
      this.__className = "proto.cmd_game_brsh.BetTableJieSuan";
      this.BetId = 0;
      this.WinStatus = 0;
      this.VipLocate = null;
      this.MyselfWinStatus = 0;
      this.GeneralPlayerStatus = 0;
    };
    proto.cmd_game_brsh.StateData = function() {
      this.__className = "proto.cmd_game_brsh.StateData";
      this.BigWinner = null;
      this.WinnerBet = null;
      this.UserHandCardList = null;
      this.GenerPlayerTotalInfo = 0;
      this.ChairInfo = null;
      this.MyselfInfo = null;
      this.NotAllLostFlag = 0;
      this.BankerWinNum = 0;
    };
    proto.cmd_game_brsh.SortCardData = function() {
      this.__className = "proto.cmd_game_brsh.SortCardData";
      this.UserHandCardList = null;
    };
    proto.cmd_game_brsh.BetTableHistory = function() {
      this.__className = "proto.cmd_game_brsh.BetTableHistory";
      this.WinStatus = null;
      this.WinRate = 0;
    };
    proto.cmd_game_brsh.WinningHistory = function() {
      this.__className = "proto.cmd_game_brsh.WinningHistory";
      this.BetTableInfo = null;
      this.Type = 0;
    };
    proto.cmd_game_brsh.WrnnPlayerStatus = function() {
      this.__className = "proto.cmd_game_brsh.WrnnPlayerStatus";
      this.IsBet = 0;
      this.BankerStatus = 0;
      this.MaxChipsId = 0;
      this.IsExitGame = 0;
      this.ShowHand = 0;
    };
    proto.cmd_game_brsh.SUB_CMD_GAME = {
      SUB_USER_START_DISMISSION: 1,
      SUB_USER_DISMISSION_REQ: 2,
      SUB_USER_DISMISSION_RSP: 3,
      SUB_USERINFO_PUSH: 4,
      SUB_TRUST_REQ: 5,
      SUB_TRUST_RSP: 6,
      SUB_PLAY_GAME_END: 7,
      SUB_ROOM_GAME_END: 8,
      SUB_ENTER_GAME_SCENCE: 9,
      SUB_USER_AUTO_READY: 10,
      SUB_USER_AUTO_PLAY: 11,
      SUB_SCENCE_DISMISSION: 12,
      SUB_SEND_STATE: 13,
      SUB_CARD_INFO_RSP: 31,
      SUB_UP_LOCATE_ID_REQ: 32,
      SUB_UP_LOCATE_ID_RSP: 33,
      SUB_REPLACE_LOCATE_REQ: 34,
      SUB_REPLACE_LOCATE_RSP: 35,
      SUB_LIVE_OUT_LOCATE_REQ: 36,
      SUB_FRESHS_USER_INFO_ATLOCATE_RSP: 37,
      SUB_WRNN_ROB_BANKER_REQ: 38,
      SUB_ROB_BANKER_RSP: 39,
      SUB_WRNN_DOWN_BANKER_REQ: 40,
      SUB_DOWN_BANKER_RSP: 41,
      SUB_BANKER_LIST_REQ: 42,
      SUB_BANKER_LIST_RSP: 43,
      SUB_SET_BET_NUMS_REQ: 44,
      SUB_SET_BET_NUMS_RSP: 45,
      SUB_START_BET_RSP: 47,
      SUB_BET_TIMES_RESULT_RSP: 48,
      SUB_WRNN_USER_INFO_REQ: 49,
      SUB_WRNN_USER_INFO_RSP: 50,
      SUB_WRNN_CHAIR_INFO_RSP: 51,
      SUB_WRNN_BANKER_LIST_BEGIN: 52,
      SUB_WRNN_BANKER_LIST_END: 53,
      SUB_WRNN_SCENCE_TIMER: 54,
      SUB_WRNN_BET_INFO_RSP: 56,
      SUB_USER_HAND_CARD: 57,
      SUB_WINNING_HISTORY_RSQ: 58,
      SUB_WINNING_HISTORY_RSP: 59,
      SUB_WINNING_MYSELF_RSP: 60,
      SUB_WRNN_KICK_XIANJIA_RSP: 61,
      SUB_WRNN_ONTIME_SYNC_BET_RSP: 62,
      SUB_REPEAT_BET_STATUS_RSP: 63,
      SUB_WRNN_PLAYER_STATUS_RSP: 65,
      SUB_NEW_PLAYER_INTO_ZHUANGJIA: 66,
      SUB_LEAVE_GAME_WRNN_SCENE_RSQ: 67,
      SUB_LEAVE_GAME_WRNN_SCENE_RSP: 68,
      SUB_WRNN_SCENCE_REQ: 69
    };
    proto.cmd_game_brsh.SH_CARD_TYPE = {
      GAOPAI: 0,
      DUIZI: 1,
      LIANGDUI: 2,
      SANTIAO: 3,
      SHUNZI: 4,
      TONGHUA: 5,
      HULU: 6,
      SITIAO: 7,
      TONGHUASHUN: 8,
      HJTONGHUSHUN: 9
    };
    cc._RF.pop();
  }, {} ]
}, {}, [ "brshInit", "brshLayer", "brsh_loc", "brshBankerItme", "brshBankerList", "brshBet", "brshBetLayer", "brshCard", "brshCardLayer", "brshChip", "brshChipLayer", "brshMyHead", "brshSpChip", "brshBankerHead", "brshHead", "brshHeadLayer", "brshMenu", "brshHistoryItem", "brshHistoryLayer", "brshOnline", "brshOtherLayer", "brshRecordSheetItem", "brshRuleItem", "brshRuleLayer", "brshTime", "cmd_game_brsh" ]);