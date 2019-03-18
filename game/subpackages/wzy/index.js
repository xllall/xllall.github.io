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
  WzyDiceLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b3d9ap6/YdNIrGIde+V0gn/", "WzyDiceLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        WzyMgrScript: null,
        tDiceSprite: {
          default: [],
          type: cc.SpriteFrame
        },
        tBtnSprite: {
          default: [],
          type: cc.SpriteFrame
        },
        diceRoot0: {
          default: null,
          type: cc.Node
        },
        diceRoot1: {
          default: null,
          type: cc.Node
        },
        openDice: {
          default: null,
          type: cc.Node
        },
        giveUp: {
          default: null,
          type: cc.Node
        },
        chipDown: {
          default: null,
          type: cc.Node
        },
        tSelfDice: null
      },
      onLoad: function onLoad() {
        this.WzyMgrScript = cc.find("WzyMgr", this.node.parent).getComponent("WzyMgr");
        for (var i = 0; i < 5; i++) cc.find("diceRoot0/dice_" + i + "/btn" + i, this.node).on("click", this.onDiceBtn, this);
        this.giveUp.on("click", this.onSelectBtn, this);
        this.chipDown.on("click", this.onSelectBtn, this);
        this.openDice.on("click", this.onOpenDiceBtn, this);
        this.hideAllInfo();
      },
      start: function start() {},
      setBtnShow: function setBtnShow(flag) {
        for (var i = 0; i < 5; i++) cc.find("diceRoot0/dice_" + i + "/btn" + i, this.node).active = flag;
        if (flag && null != this.tSelfDice) for (var i = 0; i < 5; i++) 1 == this.tSelfDice[i] ? cc.find("diceRoot0/dice_" + i + "/btn" + i, this.node).getComponent(cc.Sprite).spriteFrame = this.tBtnSprite[1] : cc.find("diceRoot0/dice_" + i + "/btn" + i, this.node).getComponent(cc.Sprite).spriteFrame = this.tBtnSprite[0];
      },
      onDiceBtn: function onDiceBtn(event) {
        for (var i = 0; i < 5; i++) if (event.node.name == "btn" + i) {
          event.node.getComponent(cc.Sprite).spriteFrame == this.tBtnSprite[1] ? event.node.getComponent(cc.Sprite).spriteFrame = this.tBtnSprite[0] : event.node.getComponent(cc.Sprite).spriteFrame = this.tBtnSprite[1];
          break;
        }
      },
      onSelectBtn: function onSelectBtn(event) {
        "giveUp" == event.node.name ? this.WzyMgrScript.sendSelectType(0) : "chipDown" == event.node.name && this.WzyMgrScript.sendSelectType(1);
      },
      onOpenDiceBtn: function onOpenDiceBtn(event) {
        var tDice = [];
        var flag = false;
        for (var i = 0; i < 5; i++) if (cc.find("diceRoot0/dice_" + i + "/btn" + i, this.node).getComponent(cc.Sprite).spriteFrame == this.tBtnSprite[1]) tDice[i] = 0; else {
          tDice[i] = 1;
          flag = true;
        }
        flag ? this.WzyMgrScript.sendOpenDice(tDice) : cc.ak.ui.toast("\u8bf7\u9009\u62e9\u8981\u6447\u7684\u9ab0\u5b50");
      },
      setDiceInfo: function setDiceInfo(root, tDice) {
        root.active = true;
        if (this.diceRoot0 == root) {
          this.tSelfDice = tDice;
          for (var i = 0; i < 5; i++) 1 == tDice[i] ? cc.find("diceRoot0/dice_" + i + "/btn" + i, this.node).getComponent(cc.Sprite).spriteFrame = this.tBtnSprite[1] : cc.find("diceRoot0/dice_" + i + "/btn" + i, this.node).getComponent(cc.Sprite).spriteFrame = this.tBtnSprite[0];
        }
        for (var i = 0; i < 5; i++) if (tDice[i] >= 1 && tDice[i] <= 6) {
          var dice = cc.find("dice_" + i, root);
          dice.getComponent(cc.Sprite).spriteFrame = this.tDiceSprite[tDice[i] - 1];
          dice.position = cc.v2(0, 0);
          dice.runAction(cc.moveTo(.5, 150 * i - 300, 0).easing(cc.easeBounceIn()));
        }
      },
      hideAllInfo: function hideAllInfo() {
        this.diceRoot0.active = false;
        this.diceRoot1.active = false;
        this.giveUp.active = false;
        this.chipDown.active = false;
        this.openDice.active = false;
      },
      sendChangeDesk: function sendChangeDesk() {
        this.hideAllInfo();
      },
      onUserInfo: function onUserInfo(data) {},
      onGameScene: function onGameScene(data) {
        this.hideAllInfo();
        if (1 == data.gameStage) {
          this.setBtnShow(false);
          var tDice0 = [];
          var tDice1 = [];
          for (var i = 0; i < 10; i++) i < 5 ? tDice0[i] = data.diceArray[i] : tDice1[i - 5] = data.diceArray[i];
          if (0 == data.iView) {
            this.setDiceInfo(this.diceRoot0, tDice0);
            this.setDiceInfo(this.diceRoot1, tDice1);
          } else {
            this.setDiceInfo(this.diceRoot0, tDice1);
            this.setDiceInfo(this.diceRoot1, tDice0);
          }
          if (0 == data.iViewCurrentUser) {
            this.giveUp.active = true;
            this.chipDown.active = true;
          }
        } else if (2 == data.gameStage) {
          var tDice0 = [];
          var tDice1 = [];
          for (var i = 0; i < 10; i++) i < 5 ? tDice0[i] = data.diceArray[i] : tDice1[i - 5] = data.diceArray[i];
          if (0 == data.iView) {
            this.setDiceInfo(this.diceRoot0, tDice0);
            this.setDiceInfo(this.diceRoot1, tDice1);
          } else {
            this.setDiceInfo(this.diceRoot0, tDice1);
            this.setDiceInfo(this.diceRoot1, tDice0);
          }
          if (0 == data.iViewCurrentUser) {
            this.openDice.active = true;
            this.setBtnShow(true);
          } else this.setBtnShow(false);
        }
      },
      onGameStart: function onGameStart(data) {
        var tDice0 = [];
        var tDice1 = [];
        for (var i = 0; i < 10; i++) i < 5 ? tDice0[i] = data.diceArray[i] : tDice1[i - 5] = data.diceArray[i];
        this.setBtnShow(false);
        if (0 == data.iView) {
          this.setDiceInfo(this.diceRoot0, tDice0);
          this.setDiceInfo(this.diceRoot1, tDice1);
        } else {
          this.setDiceInfo(this.diceRoot0, tDice1);
          this.setDiceInfo(this.diceRoot1, tDice0);
        }
        if (0 == data.iViewCurrentUser) {
          this.giveUp.active = true;
          this.chipDown.active = true;
          this.openDice.active = false;
        } else {
          this.giveUp.active = false;
          this.chipDown.active = false;
          this.openDice.active = false;
        }
      },
      onSelectType: function onSelectType(data) {
        this.giveUp.active = false;
        this.chipDown.active = false;
        if (0 == data.typeFlag) ; else if (0 == data.iViewCurrentUser) {
          this.setBtnShow(true);
          this.openDice.active = true;
        }
      },
      onOpenDice: function onOpenDice(data) {
        this.setBtnShow(false);
        this.openDice.active = false;
        0 == data.iViewOpenUser ? this.setDiceInfo(this.diceRoot0, data.diceArray) : this.setDiceInfo(this.diceRoot1, data.diceArray);
        if (0 == data.iViewCurrentUser) {
          this.giveUp.active = true;
          this.chipDown.active = true;
        }
      },
      onGameResult: function onGameResult(data) {
        this.setBtnShow(false);
        this.openDice.active = false;
        this.giveUp.active = false;
        this.chipDown.active = false;
        1 == data.winType && (0 == data.iViewWinUser ? this.setDiceInfo(this.diceRoot1, [ 1, 1, 1, 1, 1 ]) : this.setDiceInfo(this.diceRoot0, [ 1, 1, 1, 1, 1 ]));
      },
      onLeave: function onLeave(data) {}
    });
    cc._RF.pop();
  }, {} ],
  WzyGameLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "63036K6k01CarU+QN/0BJQW", "WzyGameLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        WzyMgrScript: null,
        WzySettingPannel: {
          default: null,
          type: cc.Node
        },
        WzyHelpPannel: {
          default: null,
          type: cc.Node
        },
        tipLabel: {
          default: null,
          type: cc.Label
        },
        chipLable0: {
          default: null,
          type: cc.Label
        },
        chipLable1: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        this.WzyMgrScript = cc.find("WzyMgr", this.node.parent).getComponent("WzyMgr");
        cc.find("buttons/backBtn", this.node).on("click", this.onBackBtn, this);
        cc.find("buttons/settingBtn", this.node).on("click", this.onSettingBtn, this);
        cc.find("buttons/helpBtn", this.node).on("click", this.onHelpBtn, this);
        this.tipLabel.node.active = true;
        this.chipLable0.node.active = false;
        this.chipLable1.node.active = false;
      },
      start: function start() {},
      onBackBtn: function onBackBtn() {
        this.WzyMgrScript.sendExitGame();
      },
      onSettingBtn: function onSettingBtn() {
        this.WzySettingPannel.active = true;
      },
      onHelpBtn: function onHelpBtn() {
        this.WzyHelpPannel.active = true;
      },
      sendChangeDesk: function sendChangeDesk() {
        this.tipLabel.node.active = true;
        this.chipLable0.node.active = false;
        this.chipLable1.node.active = false;
      },
      onUserInfo: function onUserInfo(data) {
        0 != data.iView && (this.tipLabel.node.active = false);
      },
      onGameScene: function onGameScene(data) {
        if (0 == data.gameStage) ; else if (1 == data.gameStage || 2 == data.gameStage) {
          this.tipLabel.node.active = false;
          this.chipLable0.node.active = true;
          this.chipLable1.node.active = true;
          if (0 == data.iView) {
            var nMoney = data.chipScore[0];
            nMoney = Math.floor(nMoney / 10);
            this.chipLable0.string = "\u7b79\u7801\uff1a" + (nMoney / 100).toString();
            var nMoney = data.chipScore[1];
            nMoney = Math.floor(nMoney / 10);
            this.chipLable1.string = "\u7b79\u7801\uff1a" + (nMoney / 100).toString();
          } else {
            var nMoney = data.chipScore[1];
            nMoney = Math.floor(nMoney / 10);
            this.chipLable0.string = "\u7b79\u7801\uff1a" + (nMoney / 100).toString();
            var nMoney = data.chipScore[0];
            nMoney = Math.floor(nMoney / 10);
            this.chipLable1.string = "\u7b79\u7801\uff1a" + (nMoney / 100).toString();
          }
        }
      },
      onGameStart: function onGameStart(data) {
        this.tipLabel.node.active = false;
        this.chipLable0.node.active = true;
        this.chipLable1.node.active = true;
        if (0 == data.iView) {
          var nMoney = data.chipScore[0];
          nMoney = Math.floor(nMoney / 10);
          this.chipLable0.string = "\u7b79\u7801\uff1a" + (nMoney / 100).toString();
          var nMoney = data.chipScore[1];
          nMoney = Math.floor(nMoney / 10);
          this.chipLable1.string = "\u7b79\u7801\uff1a" + (nMoney / 100).toString();
        } else {
          var nMoney = data.chipScore[1];
          nMoney = Math.floor(nMoney / 10);
          this.chipLable0.string = "\u7b79\u7801\uff1a" + (nMoney / 100).toString();
          var nMoney = data.chipScore[0];
          nMoney = Math.floor(nMoney / 10);
          this.chipLable1.string = "\u7b79\u7801\uff1a" + (nMoney / 100).toString();
        }
      },
      onSelectType: function onSelectType(data) {
        if (0 == data.iViewCurrentUser) {
          var nMoney = data.chipScore[data.userSeat];
          nMoney = Math.floor(nMoney / 10);
          this.chipLable0.string = "\u7b79\u7801\uff1a" + (nMoney / 100).toString();
        } else {
          var nMoney = data.chipScore[data.userSeat];
          nMoney = Math.floor(nMoney / 10);
          this.chipLable1.string = "\u7b79\u7801\uff1a" + (nMoney / 100).toString();
        }
      },
      onOpenDice: function onOpenDice(data) {},
      onGameResult: function onGameResult(data) {},
      onLeave: function onLeave(data) {}
    });
    cc._RF.pop();
  }, {} ],
  WzyHelpPannel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ab9f5C67uFD2JRUOJzXkNOm", "WzyHelpPannel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        cc.find("closeBtn", this.node).on("click", this.onCloseBtn, this);
      },
      start: function start() {},
      onCloseBtn: function onCloseBtn() {
        this.node.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  WzyMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dba29iiMJxNZrVgUvOlXAqB", "WzyMgr");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        WzyGameLayerScript: null,
        WzyUserLayerScript: null,
        WzyDiceLayerScript: null,
        WzyResultLayerScript: null,
        nUserID: 0,
        tUserInfo: null,
        cellScore: 10,
        currentUser: -1,
        chipScore: []
      },
      onLoad: function onLoad() {
        var flag = true;
        if (null == cc.ak) {
          cc.ak = {};
          cc.ak.mc = {};
          cc.ak.mc.userMgr = {};
          cc.ak.event = {};
          cc.ak.event.on = function() {};
          cc.ak.util = {};
          cc.ak.util.socketMgr = {};
          cc.ak.util.socketMgr.send = function() {};
          this.tUserInfo = {};
          this.tUserInfo.nChairID = 0;
          this.tUserInfo.strNickname = "";
          this.tUserInfo.nMoney = 0;
          flag = false;
        }
        this.chipScore[0] = 0;
        this.chipScore[1] = 0;
        this.nUserID = cc.ak.mc.userMgr.uid;
        this.WzyGameLayerScript = this.node.parent.getChildByName("WzyGameLayer").getComponent("WzyGameLayer");
        this.WzyUserLayerScript = this.node.parent.getChildByName("WzyUserLayer").getComponent("WzyUserLayer");
        this.WzyDiceLayerScript = this.node.parent.getChildByName("WzyDiceLayer").getComponent("WzyDiceLayer");
        this.WzyResultLayerScript = this.node.parent.getChildByName("WzyResultLayer").getComponent("WzyResultLayer");
        this.registerMsg("SUB_S_USERINFO_PUSH", "S_UserInfo", "onUserInfo");
        this.registerMsg("SUB_S_GAME_SCENE", "S_GameScene", "onGameScene");
        this.registerMsg("SUB_S_GAMESTART", "S_GameStart", "onGameStart");
        this.registerMsg("SUB_S_SELECT_TYPE", "S_SelectType", "onSelectType");
        this.registerMsg("SUB_S_OPEN_DICE", "S_OpenDice", "onOpenDice");
        this.registerMsg("SUB_S_GAME_RESULT", "S_GameResult", "onGameResult");
        this.registerMsg("SUB_S_LEAVE_GAME_RESULT", "S_LeaveGameResult", "onLeave");
        flag && cc.ak.util.utils.loadGameSceneFinish();
        this.sendMsg("SUB_C_ENTER_FINISH");
      },
      start: function start() {},
      registerMsg: function registerMsg(strSubID, tabName, fnName) {
        var _this = this;
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + proto.cmd_game_wzy.SUB_CMD_GAME[strSubID], function(data) {
          cc.log("wzy" + fnName);
          var info = new proto.cmd_game_wzy[tabName]();
          cc.ak.util.tbfUtil.unPackData(info, data);
          var data = _this[fnName](info);
          null != _this.WzyGameLayerScript[fnName] && _this.WzyGameLayerScript[fnName](data);
          null != _this.WzyUserLayerScript[fnName] && _this.WzyUserLayerScript[fnName](data);
          null != _this.WzyDiceLayerScript[fnName] && _this.WzyDiceLayerScript[fnName](data);
          null != _this.WzyResultLayerScript[fnName] && _this.WzyResultLayerScript[fnName](data);
        }, this);
      },
      SwitchSeatToView: function SwitchSeatToView(nChairID) {
        return null == this.tUserInfo ? -1 : nChairID < 0 || nChairID >= 2 ? -1 : nChairID == this.tUserInfo.nChairID ? 0 : 1;
      },
      onUserInfo: function onUserInfo(info) {
        if (info.Uid == this.nUserID) {
          this.tUserInfo = {};
          this.tUserInfo.nChairID = info.ChairID;
          this.tUserInfo.nMoney = info.AccountA + info.AccountB;
          0 == info.Status && cc.ak.ui.loadLobbyScence();
        }
        var data = {};
        data.nChairID = info.ChairID;
        data.strNickname = info.NickName;
        data.nMoney = info.AccountA + info.AccountB;
        data.iView = this.SwitchSeatToView(info.ChairID);
        return data;
      },
      onGameScene: function onGameScene(info) {
        this.cellScore = info.cellScore;
        this.currentUser = info.currentUser;
        this.chipScore[0] = -info.changeScore[0];
        this.chipScore[1] = -info.changeScore[1];
        var data = {};
        data.iView = this.SwitchSeatToView(0);
        data.iViewCurrentUser = this.SwitchSeatToView(info.currentUser);
        data.gameStage = info.gameStage;
        data.cellScore = info.cellScore;
        data.changeScore = info.changeScore;
        data.currentUser = info.currentUser;
        data.userScore = info.userScore;
        data.diceNum = info.diceNum;
        data.diceArray = info.diceArray;
        data.chipScore = this.chipScore;
        return data;
      },
      onGameStart: function onGameStart(info) {
        this.cellScore = info.cellScore;
        this.currentUser = info.currentUser;
        this.chipScore[0] = info.cellScore;
        this.chipScore[1] = info.cellScore;
        var data = {};
        data.iView = this.SwitchSeatToView(0);
        data.iViewCurrentUser = this.SwitchSeatToView(info.currentUser);
        data.cellScore = info.cellScore;
        data.userScore = info.userScore;
        data.diceArray = info.diceArray;
        data.currentUser = info.currentUser;
        data.chipScore = this.chipScore;
        return data;
      },
      onSelectType: function onSelectType(info) {
        info.userSeat == this.nUserID && (this.tUserInfo.nMoney = info.userScore);
        this.chipScore[info.userSeat] += this.cellScore;
        this.currentUser = info.userSeat;
        var data = {};
        data.iViewCurrentUser = this.SwitchSeatToView(info.userSeat);
        data.userSeat = info.userSeat;
        data.userScore = info.userScore;
        data.typeFlag = info.typeFlag;
        data.chipScore = this.chipScore;
        return data;
      },
      onOpenDice: function onOpenDice(info) {
        this.currentUser = info.currentUser;
        var data = {};
        data.iViewCurrentUser = this.SwitchSeatToView(info.currentUser);
        data.iViewOpenUser = this.SwitchSeatToView(info.openUser);
        data.openUser = info.openUser;
        data.diceArray = info.diceArray;
        data.currentUser = info.currentUser;
        return data;
      },
      onGameResult: function onGameResult(info) {
        this.currentUser = -1;
        var data = {};
        data.iView = this.SwitchSeatToView(0);
        data.iViewWinUser = this.SwitchSeatToView(info.winUser);
        data.winType = info.winType;
        data.winUser = info.winUser;
        data.winScore = info.winScore;
        data.winTimes = info.winTimes;
        data.chipScore = info.chipScore;
        data.userScores = info.userScores;
        return data;
      },
      onLeave: function onLeave(info) {
        info.userId == cc.ak.mc.userMgr.uid && cc.ak.ui.loadLobbyScence();
      },
      sendMsg: function sendMsg(strMsgID, data) {
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_wzy.SUB_CMD_GAME[strMsgID], data);
        return true;
      },
      sendExitGame: function sendExitGame() {
        var cmd = new proto.cmd_room.RoomChairAction();
        cmd.ActionType = proto.cmd_room.USER_ACTION_TYPE.USER_ACTION_LEAVE;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ROOM, proto.cmd_net.CMD_ROOM.SUB_USER_ACTION, cmd);
      },
      sendChangeDesk: function sendChangeDesk() {
        var cmd = new proto.cmd_room.RoomChairAction();
        cmd.ActionType = proto.cmd_room.USER_ACTION_TYPE.USER_ACTION_SIT_DOWN;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ROOM, proto.cmd_net.CMD_ROOM.SUB_USER_ACTION, cmd);
        this.WzyGameLayerScript.sendChangeDesk();
        this.WzyUserLayerScript.sendChangeDesk();
        this.WzyDiceLayerScript.sendChangeDesk();
      },
      sendSelectType: function sendSelectType(typeFlag) {
        if (1 == typeFlag && this.tUserInfo.nMoney - this.cellScore < 0) return cc.ak.ui.toast("\u60a8\u7684\u4f59\u989d\u4e0d\u8db3\uff01");
        var data = new proto.cmd_game_wzy.C_SelectType();
        data.typeFlag = typeFlag;
        this.sendMsg("SUB_C_SELECT_TYPE", data);
      },
      sendOpenDice: function sendOpenDice(tDice) {
        var data = new proto.cmd_game_wzy.C_OpenDice();
        data.openPoints = tDice;
        this.sendMsg("SUB_C_OPEN_DICE", data);
      }
    });
    cc._RF.pop();
  }, {} ],
  WzyResultLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "68a05AjSiJHAqHtgAzQZHrq", "WzyResultLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        WzyMgrScript: null,
        resultbgSp: {
          default: null,
          type: cc.Node
        },
        winTimes0Label: {
          default: null,
          type: cc.Label
        },
        winTimes1Label: {
          default: null,
          type: cc.Label
        },
        chipNum0Label: {
          default: null,
          type: cc.Label
        },
        chipNum1Label: {
          default: null,
          type: cc.Label
        },
        winScore0Label: {
          default: null,
          type: cc.Label
        },
        winScore1Label: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        this.WzyMgrScript = cc.find("WzyMgr", this.node.parent).getComponent("WzyMgr");
        cc.find("resultbg/btnClose", this.node).on("click", this.onBtnClose, this);
        cc.find("resultbg/btnContinue", this.node).on("click", this.onBtnContinue, this);
        this.resultbgSp.active = false;
      },
      start: function start() {},
      onBtnClose: function onBtnClose() {
        this.resultbgSp.active = false;
      },
      onBtnContinue: function onBtnContinue() {
        this.resultbgSp.active = false;
        this.WzyMgrScript.sendChangeDesk();
      },
      onUserInfo: function onUserInfo(data) {},
      onGameScene: function onGameScene(data) {
        this.resultbgSp.active = false;
      },
      onGameStart: function onGameStart(data) {
        this.resultbgSp.active = false;
      },
      onSelectType: function onSelectType(data) {},
      onOpenDice: function onOpenDice(data) {},
      onGameResult: function onGameResult(data) {
        this.resultbgSp.active = true;
        this.winTimes0Label.string = data.winTimes[0];
        this.winTimes1Label.string = data.winTimes[1];
        this.chipNum0Label.string = data.chipScore[0];
        this.chipNum1Label.string = data.chipScore[1];
        if (1 == data.winType) {
          this.winScore0Label.string = data.winScore;
          this.winScore1Label.string = data.winScore;
        } else if (0 == data.winUser) {
          this.winScore0Label.string = data.winScore;
          this.winScore1Label.string = 0;
        } else {
          this.winScore0Label.string = 0;
          this.winScore1Label.string = data.winScore;
        }
      },
      onLeave: function onLeave(data) {}
    });
    cc._RF.pop();
  }, {} ],
  WzySettingPannel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "445e7PRS5JA/7cxnMpUVBC9", "WzySettingPannel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        musicSlider: {
          default: null,
          type: cc.Slider
        },
        effectSlider: {
          default: null,
          type: cc.Slider
        }
      },
      onLoad: function onLoad() {
        cc.find("bgSprite/closeBtn", this.node).on("click", this.onCloseBtn, this);
        cc.find("bgSprite/musicSlider", this.node).on("slide", this.onMusicSlide, this);
        cc.find("bgSprite/effectSlider", this.node).on("slide", this.onEffectSlide, this);
        if (null == cc.ak || null == cc.ak.util.audioMgr) {
          this.setProgress(this.musicSlider, 1);
          this.setProgress(this.effectSlider, 1);
          this.musicSlider.progress = 1;
          this.effectSlider.progress = 1;
        } else {
          this.setProgress(this.musicSlider, cc.ak.util.audioMgr.getBGMVolume());
          this.setProgress(this.effectSlider, cc.ak.util.audioMgr.getSFXVolume());
          this.musicSlider.progress = cc.ak.util.audioMgr.getBGMVolume();
          this.effectSlider.progress = cc.ak.util.audioMgr.getSFXVolume();
        }
      },
      start: function start() {},
      onCloseBtn: function onCloseBtn() {
        this.node.active = false;
      },
      onMusicSlide: function onMusicSlide(event) {
        this.setProgress(this.musicSlider, event.progress);
        cc.ak.util.audioMgr.setBGMVolume(event.progress);
      },
      onEffectSlide: function onEffectSlide(event) {
        this.setProgress(this.effectSlider, event.progress);
        cc.ak.util.audioMgr.setSFXVolume(event.progress);
      },
      setProgress: function setProgress(slider, nProgress) {
        slider.node.getChildByName("progress").width = 734 * nProgress;
      }
    });
    cc._RF.pop();
  }, {} ],
  WzyUserLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "304e3/N2fFAEaoxDyS00Kst", "WzyUserLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        WzyMgrScript: null,
        user0: {
          default: null,
          type: cc.Node
        },
        user1: {
          default: null,
          type: cc.Node
        },
        nTimeLeft0: 0,
        nTimeLeft1: 0
      },
      onLoad: function onLoad() {
        this.WzyMgrScript = cc.find("WzyMgr", this.node.parent).getComponent("WzyMgr");
        this.user0.active = false;
        this.user1.active = false;
        this.nTimeLeft0 = 0;
        this.nTimeLeft1 = 0;
        if (null != cc.ak) {
          var data = {};
          data.iView = 0;
          data.strNickname = cc.ak.mc.userMgr.nick;
          data.nMoney = cc.ak.mc.userMgr.coin_bean;
          this.onUserInfo(data);
        }
      },
      start: function start() {},
      update: function update(dt) {
        this.nTimeLeft0 -= dt;
        this.nTimeLeft1 -= dt;
        this.countDown(this.user0, this.nTimeLeft0);
        this.countDown(this.user1, this.nTimeLeft1);
      },
      setUserInfo: function setUserInfo(root, strNickname, nMoney) {
        var label = cc.find("nicknameLabel", root).getComponent(cc.Label);
        label.string = strNickname;
        this.setMoney(root, nMoney);
      },
      setMoney: function setMoney(root, nMoney) {
        var label = cc.find("moneyLabel", root).getComponent(cc.Label);
        nMoney = Math.floor(nMoney / 10);
        label.string = (nMoney / 100).toString();
      },
      countDown: function countDown(root, nTime) {
        var time = cc.find("time", root);
        time.active = nTime > 0;
        if (nTime > 0) {
          var timeLabel = time.getComponent(cc.Label);
          timeLabel.string = Math.floor(nTime).toString();
        }
      },
      startTimer: function startTimer(iView, time) {
        if (0 == iView) {
          this.nTimeLeft0 = time;
          this.nTimeLeft1 = 0;
        } else if (1 == iView) {
          this.nTimeLeft0 = 0;
          this.nTimeLeft1 = time;
        } else {
          this.nTimeLeft0 = 0;
          this.nTimeLeft1 = 0;
        }
      },
      sendChangeDesk: function sendChangeDesk() {
        this.user1.active = false;
      },
      onUserInfo: function onUserInfo(data) {
        if (0 == data.iView) {
          this.user0.active = true;
          this.setUserInfo(this.user0, data.strNickname, data.nMoney);
        } else if (1 == data.iView) {
          this.user1.active = true;
          this.setUserInfo(this.user1, data.strNickname, data.nMoney);
        } else cc.log("wzydata.iView is waning");
      },
      onGameScene: function onGameScene(data) {
        if (data.gameStage > 0) {
          if (0 == data.iView) {
            this.setMoney(this.user0, data.userScore[0]);
            this.setMoney(this.user1, data.userScore[1]);
          } else {
            this.setMoney(this.user0, data.userScore[1]);
            this.setMoney(this.user1, data.userScore[0]);
          }
          this.startTimer(data.iViewCurrentUser, 10);
        } else this.startTimer(-1, 0);
      },
      onGameStart: function onGameStart(data) {
        if (0 == data.iView) {
          this.setMoney(this.user0, data.userScore[0]);
          this.setMoney(this.user1, data.userScore[1]);
        } else {
          this.setMoney(this.user0, data.userScore[1]);
          this.setMoney(this.user1, data.userScore[0]);
        }
        this.startTimer(data.iViewCurrentUser, 10);
      },
      onSelectType: function onSelectType(data) {
        if (0 == data.typeFlag) this.startTimer(-1, 10); else {
          0 == data.iViewCurrentUser ? this.setMoney(this.user0, data.userScore) : this.setMoney(this.user1, data.userScore);
          this.startTimer(data.iViewCurrentUser, 10);
        }
      },
      onOpenDice: function onOpenDice(data) {
        this.startTimer(data.iViewCurrentUser, 10);
      },
      onGameResult: function onGameResult(data) {
        if (0 == data.iView) {
          this.setMoney(this.user0, data.userScores[0]);
          this.setMoney(this.user1, data.userScores[1]);
        } else {
          this.setMoney(this.user0, data.userScores[1]);
          this.setMoney(this.user1, data.userScores[0]);
        }
        this.startTimer(-1, 10);
      }
    });
    cc._RF.pop();
  }, {} ],
  cmd_game_wzy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6e777kbmE5K8agfDwnrlO0u", "cmd_game_wzy");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_game_wzy = {};
    proto.cmd_game_wzy.__cfg = {};
    (function(cfg) {
      cfg.S_UserInfo = {
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
      cfg.S_GameScene = {
        1: {
          na: "gameStage",
          ty: "int"
        },
        2: {
          na: "cellScore",
          ty: "int"
        },
        3: {
          na: "changeScore",
          ty: "int",
          ar: 1
        },
        4: {
          na: "currentUser",
          ty: "int"
        },
        5: {
          na: "userScore",
          ty: "int",
          ar: 1
        },
        6: {
          na: "diceNum",
          ty: "int",
          ar: 1
        },
        7: {
          na: "diceArray",
          ty: "int",
          ar: 1
        }
      };
      cfg.S_GameStart = {
        1: {
          na: "cellScore",
          ty: "int"
        },
        2: {
          na: "userScore",
          ty: "int",
          ar: 1
        },
        3: {
          na: "diceArray",
          ty: "int",
          ar: 1
        },
        4: {
          na: "currentUser",
          ty: "int"
        }
      };
      cfg.S_SelectType = {
        1: {
          na: "userSeat",
          ty: "int"
        },
        2: {
          na: "userScore",
          ty: "int"
        },
        3: {
          na: "typeFlag",
          ty: "int"
        }
      };
      cfg.S_OpenDice = {
        1: {
          na: "openUser",
          ty: "int"
        },
        2: {
          na: "diceArray",
          ty: "int",
          ar: 1
        },
        3: {
          na: "currentUser",
          ty: "int"
        }
      };
      cfg.S_GameResult = {
        1: {
          na: "winType",
          ty: "int"
        },
        2: {
          na: "winUser",
          ty: "int"
        },
        3: {
          na: "winScore",
          ty: "int"
        },
        4: {
          na: "winTimes",
          ty: "int",
          ar: 1
        },
        5: {
          na: "chipScore",
          ty: "int",
          ar: 1
        },
        6: {
          na: "userScores",
          ty: "int",
          ar: 1
        }
      };
      cfg.S_LeaveGameResult = {
        1: {
          na: "userId",
          ty: "int"
        }
      };
      cfg.C_SelectType = {
        1: {
          na: "typeFlag",
          ty: "int"
        }
      };
      cfg.C_OpenDice = {
        1: {
          na: "openPoints",
          ty: "int",
          ar: 1
        }
      };
    })(proto.cmd_game_wzy.__cfg);
    proto.cmd_game_wzy.S_UserInfo = function() {
      this.__className = "proto.cmd_game_wzy.S_UserInfo";
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
    proto.cmd_game_wzy.S_GameScene = function() {
      this.__className = "proto.cmd_game_wzy.S_GameScene";
      this.gameStage = 0;
      this.cellScore = 0;
      this.changeScore = null;
      this.currentUser = 0;
      this.userScore = null;
      this.diceNum = null;
      this.diceArray = null;
    };
    proto.cmd_game_wzy.S_GameStart = function() {
      this.__className = "proto.cmd_game_wzy.S_GameStart";
      this.cellScore = 0;
      this.userScore = null;
      this.diceArray = null;
      this.currentUser = 0;
    };
    proto.cmd_game_wzy.S_SelectType = function() {
      this.__className = "proto.cmd_game_wzy.S_SelectType";
      this.userSeat = 0;
      this.userScore = 0;
      this.typeFlag = 0;
    };
    proto.cmd_game_wzy.S_OpenDice = function() {
      this.__className = "proto.cmd_game_wzy.S_OpenDice";
      this.openUser = 0;
      this.diceArray = null;
      this.currentUser = 0;
    };
    proto.cmd_game_wzy.S_GameResult = function() {
      this.__className = "proto.cmd_game_wzy.S_GameResult";
      this.winType = 0;
      this.winUser = 0;
      this.winScore = 0;
      this.winTimes = null;
      this.chipScore = null;
      this.userScores = null;
    };
    proto.cmd_game_wzy.S_LeaveGameResult = function() {
      this.__className = "proto.cmd_game_wzy.S_LeaveGameResult";
      this.userId = 0;
    };
    proto.cmd_game_wzy.C_SelectType = function() {
      this.__className = "proto.cmd_game_wzy.C_SelectType";
      this.typeFlag = 0;
    };
    proto.cmd_game_wzy.C_OpenDice = function() {
      this.__className = "proto.cmd_game_wzy.C_OpenDice";
      this.openPoints = null;
    };
    proto.cmd_game_wzy.SUB_CMD_GAME = {
      SUB_S_USERINFO_PUSH: 4,
      SUB_S_GAME_SCENE: 5,
      SUB_S_GAMESTART: 6,
      SUB_S_SELECT_TYPE: 7,
      SUB_S_OPEN_DICE: 8,
      SUB_S_GAME_RESULT: 9,
      SUB_S_LEAVE_GAME_RESULT: 10,
      SUB_C_ENTER_FINISH: 35,
      SUB_C_SELECT_TYPE: 36,
      SUB_C_OPEN_DICE: 37,
      SUB_C_LEAVE_GAME_SCENE: 38
    };
    cc._RF.pop();
  }, {} ],
  wzyInit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2ce80UnH5dMyK/uv46g8x4Y", "wzyInit");
    "use strict";
    var WzyInit = cc.Class({
      extends: cc.Component,
      statics: {
        id: "wzy"
      },
      properties: {},
      onLoad: function onLoad() {
        cc.log("wzy module init!");
        bundle.wzy = {};
        bundle.wzy.key = {};
        bundle.wzy.data = new Map();
        this.initGlobalHttpKey();
        this.initGlobalCacheKey();
        this.initGlobalEventKey();
        this.initGlobalDataKey();
        this.initCache();
        this.initGlobalEventHandle();
      },
      start: function start() {},
      initWzyData: function initWzyData() {},
      initGlobalHttpKey: function initGlobalHttpKey() {
        bundle.wzy.key.http = {};
      },
      initGlobalCacheKey: function initGlobalCacheKey() {
        bundle.wzy.key.cache = {};
      },
      initGlobalDataKey: function initGlobalDataKey() {
        bundle.wzy.key.data = {
          temp: "temp",
          ENTER_ROOM_SUCC: "enter_room_succ"
        };
      },
      initGlobalEventKey: function initGlobalEventKey() {
        bundle.wzy.key.event = {
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
        cc.ak.event.on(cc.ak.key.event.ENTER_GAME_SCENE + "_" + WzyInit.id, function(data) {
          bundle.wzy.data.set(bundle.wzy.key.data.ENTER_ROOM_SUCC, data);
          if ("wzyGame" != cc.director.getScene("wzyGame")) {
            cc.ak.util.utils.loadGameSceneBegin();
            cc.director.loadScene("wzyGame");
          }
        });
        cc.ak.event.on(cc.ak.key.event.POPUP_SUGGAME_ENTRANCE, function(data, parentNode) {
          cc.log("Handle : " + JSON.stringify(data));
          if (data.id !== WzyInit.id) return;
          if (!cc.isValid(parentNode)) return;
          var entrance = cc.instantiate(cc.ak.ui.pfsubGameEntrance);
          entrance.parent = parentNode;
          entrance.getComponent("subGameEntrance").setMatchItme(data);
        });
      },
      loadPrefab: function loadPrefab() {}
    });
    module.exports = WzyInit;
    cc._RF.pop();
  }, {} ]
}, {}, [ "WzyDiceLayer", "WzyGameLayer", "WzyHelpPannel", "WzyMgr", "WzyResultLayer", "WzySettingPannel", "WzyUserLayer", "cmd_game_wzy", "wzyInit" ]);