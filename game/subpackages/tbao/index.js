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
  TbaoBetLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "62501l8zTxIFLiZ8MeHyr3b", "TbaoBetLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        TbaoMgr: {
          default: null,
          type: cc.Node
        },
        TbaoChipLayer: {
          default: null,
          type: cc.Node
        },
        TbaoOtherLayer: {
          default: null,
          type: cc.Node
        },
        chipsRoot: {
          default: null,
          type: cc.Node
        },
        tAreaNode: null,
        tBetNum: null,
        curBetNode: null
      },
      onLoad: function onLoad() {
        var vSize = cc.view.getVisibleSize();
        vSize.width < 1920 && (this.node.scale = vSize.width / 1920);
        var numTemplate = cc.find("numTemplate", this.node);
        this.tAreaNode = {};
        this.tBetNum = {};
        for (var i = 1; i < 8; i++) {
          this.tAreaNode[i - 1] = {};
          this.tBetNum[i - 1] = {};
          for (var j = 1; j < 16; j++) {
            var nodePath = "bet_bg/type" + i + "/area_" + i + "_" + j;
            var areaNode = cc.find(nodePath, this.node);
            if (null == areaNode) break;
            areaNode.on("touchstart", this.onArea, this);
            areaNode.on("touchend", this.onArea, this);
            areaNode.on("touchcancel", this.onArea, this);
            areaNode.opacity = 0;
            this.tAreaNode[i - 1][j - 1] = areaNode;
            var betNum = cc.instantiate(numTemplate);
            this.node.addChild(betNum, 1, "betNum" + i + j);
            betNum.x = areaNode.x;
            betNum.y = areaNode.y + areaNode.height / 2;
            betNum.active = false;
            this.tBetNum[i - 1][j - 1] = betNum;
            4 == i && (betNum.y -= 60);
          }
        }
      },
      start: function start() {},
      betAnimation: function betAnimation(isSelf, nType, nTypeID, nChipID) {
        var name = "chip";
        isSelf && (name = "chip" + nType + nTypeID);
        var tChip = this.TbaoChipLayer.getComponent("TbaoChipLayer").tChip;
        var oChip = cc.instantiate(tChip[nChipID - 1]);
        this.chipsRoot.addChild(oChip, 0, name);
        oChip.removeComponent(cc.Button);
        oChip.setScale(.2);
        oChip.color = cc.color(255, 255, 255);
        oChip.getChildByName("Label").color = cc.color(255, 255, 255);
        var lp1 = null;
        if (isSelf) {
          var wp = tChip[nChipID - 1].parent.convertToWorldSpaceAR(oChip.getPosition());
          lp1 = this.chipsRoot.convertToNodeSpaceAR(wp);
          oChip.setPosition(lp1);
        } else {
          var node = cc.find("onlinePeople", this.TbaoOtherLayer);
          var wp = node.parent.convertToWorldSpaceAR(node.getPosition());
          lp1 = this.chipsRoot.convertToNodeSpaceAR(wp);
          oChip.setPosition(lp1);
        }
        var typeNode = cc.find("bet_bg/type" + nType, this.node);
        var areaNode = cc.find("area_" + nType + "_" + nTypeID, typeNode);
        var nSpaceX = (areaNode.width - 50) / 2 - Math.random() * (areaNode.width - 50);
        var nSpaceY = (areaNode.height - 50) / 2 - Math.random() * (areaNode.height - 50);
        var wp = typeNode.convertToWorldSpaceAR(areaNode.getPosition());
        var lp2 = this.chipsRoot.convertToNodeSpaceAR(wp);
        lp2.x += nSpaceX;
        lp2.y += nSpaceY;
        var nDistance = Math.sqrt((lp1.x - lp2.x) * (lp1.x - lp2.x) + (lp1.y - lp2.y) * (lp1.y - lp2.y));
        var nTime = nDistance / 1e3;
        var mt = cc.moveTo(nTime, lp2).easing(cc.easeExponentialOut());
        var seq = cc.sequence(mt, cc.callFunc(function() {
          isSelf || oChip.runAction(cc.fadeOut(.3));
        }));
        oChip.runAction(seq);
      },
      onArea: function onArea(event) {
        if ("touchstart" == event.type) {
          var nodeName = event.target.name;
          var arr = nodeName.split("_");
          var nType = arr[1];
          var nTypeID = arr[2];
          var nSelectedChipID = this.TbaoChipLayer.getComponent("TbaoChipLayer").getSelectedChipID();
          if (nSelectedChipID <= 0) return;
          this.TbaoMgr.getComponent("TbaoMgr").sendAddBet(nType, nTypeID, nSelectedChipID);
          this.curBetNode = event.target;
          var seq = cc.sequence(cc.delayTime(.16), cc.callFunc(function() {
            this.onArea(event);
          }.bind(this)));
          event.target.runAction(seq);
        } else this.cancelContinuationBet();
      },
      cancelContinuationBet: function cancelContinuationBet() {
        if (null == this.curBetNode) return;
        this.curBetNode.stopAllActions();
        this.curBetNode = null;
      },
      takeBackChips: function takeBackChips() {
        var chipsRoot = this.node.getChildByName("chipsRoot");
        var children = chipsRoot.children;
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          var pos = child.getPosition();
          pos.x = 25 - 50 * Math.random() + pos.x;
          pos.y = 25 - 50 * Math.random() + pos.y;
          var st1 = cc.scaleTo(.5, .5, .5);
          var ft1 = cc.fadeTo(.5, 255);
          var mt1 = cc.moveTo(.5, pos);
          var spawn1 = cc.spawn(st1, ft1, mt1);
          pos.x = 0;
          pos.y = 600;
          var mt2 = cc.moveTo(.5, pos);
          var seq = cc.sequence(spawn1, mt2);
          child.runAction(seq);
        }
      },
      payMoney: function payMoney(tChips, nMoney) {
        var tChipID = [];
        while (true) {
          for (var i = 2; i >= 0; i--) if (nMoney >= tChips[i]) {
            nMoney -= tChips[i];
            tChipID[tChipID.length] = i;
            break;
          }
          if (nMoney <= 0) break;
          if (nMoney < tChips[0]) {
            tChipID[tChipID.length] = 0;
            break;
          }
        }
        var tChip = this.TbaoChipLayer.getComponent("TbaoChipLayer").tChip;
        var vSize = cc.view.getVisibleSize();
        for (var i = 0; i < tChipID.length; i++) {
          if (i > 10) return;
          var oChip = cc.instantiate(tChip[tChipID[i]]);
          oChip.parent = this.chipsRoot;
          oChip.removeComponent(cc.Button);
          oChip.color = cc.color(255, 255, 255);
          oChip.getChildByName("Label").color = cc.color(255, 255, 255);
          oChip.setScale(.4);
          oChip.x = 50 - 150 * Math.random();
          oChip.y = 750 - 150 * Math.random();
          var mb = cc.moveBy(3, cc.v2(-vSize.width / 2 + 100, -1250)).easing(cc.easeExponentialOut());
          var fdo = cc.fadeOut(1.2).easing(cc.easeExponentialIn());
          oChip.runAction(cc.spawn(mb, fdo));
        }
      },
      fadeAction: function fadeAction(nType, nTypeID) {
        var typeNode = cc.find("bet_bg/type" + nType, this.node);
        var areaNode = cc.find("area_" + nType + "_" + nTypeID, typeNode);
        var fadeIn1 = cc.fadeIn(.5);
        var fadeIn2 = cc.fadeIn(.5);
        var fadeIn3 = cc.fadeIn(.5);
        var fadeOut1 = cc.fadeOut(.5);
        var fadeOut2 = cc.fadeOut(.5);
        var fadeOut3 = cc.fadeOut(.5);
        var seq = cc.sequence(cc.delayTime(6.5), fadeIn1, fadeOut1, fadeIn2, fadeOut2, fadeIn3, fadeOut3);
        areaNode.runAction(seq);
      },
      refreshBetMoney: function refreshBetMoney(tArr) {
        for (var i = 0; i < 7; i++) for (var j = 0; j < tArr[i].length; j++) {
          this.tBetNum[i][j].active = tArr[i][j] > 0;
          var label = this.tBetNum[i][j].getChildByName("num");
          label.getComponent(cc.Label).string = Math.floor(tArr[i][j] / 1e3).toString();
        }
      },
      onUserInfo: function onUserInfo(info) {},
      onGameStart: function onGameStart(info) {
        this.refreshBetMoney(info.tSelfBet);
        this.chipsRoot.removeAllChildren();
      },
      onAddScore: function onAddScore(info) {
        this.betAnimation(info.isSelf, info.nType, info.nTypeID, info.nChipID);
        if (info.nSelfBet > 0) {
          var betNum = this.tBetNum[info.nType - 1][info.nTypeID - 1];
          betNum.active = true;
          var label = betNum.getChildByName("num");
          label.getComponent(cc.Label).string = Math.floor(info.nSelfBet / 1e3).toString();
        }
      },
      onBatchAddScore: function onBatchAddScore(info) {},
      onRevokeBet: function onRevokeBet(info) {
        if (info.isSelf) {
          var betNum = this.tBetNum[info.nType - 1][info.nTypeID - 1];
          betNum.active = false;
          var chipsRoot = this.node.getChildByName("chipsRoot");
          var children = chipsRoot.children;
          var name = "chip" + info.nType + info.nTypeID;
          for (var i = 0; i < children.length; i++) children[i].name == name && children[i].destroy();
        }
      },
      onGameOver: function onGameOver(info) {
        info.wintype.typeDaxiao > 0 && this.fadeAction(1, info.wintype.typeDaxiao);
        info.wintype.typeDuizi > 0 && this.fadeAction(2, info.wintype.typeDuizi);
        info.wintype.typeBaozi > 0 && this.fadeAction(3, info.wintype.typeBaozi);
        info.wintype.typeQuanBao > 0 && this.fadeAction(4, info.wintype.typeQuanBao);
        info.wintype.typeHezhi > 0 && this.fadeAction(5, info.wintype.typeHezhi);
        for (var i = 0; i < 3; i++) {
          info.wintype.typeShuangdian[i] > 0 && this.fadeAction(6, info.wintype.typeShuangdian[i]);
          info.wintype.typeDandian[i] > 0 && this.fadeAction(7, info.wintype.typeDandian[i]);
        }
        this.chipsRoot.stopAllActions();
        var seq = cc.sequence(cc.delayTime(8), cc.callFunc(function() {
          this.payMoney(info.tChipValue, info.gameScore);
        }.bind(this)));
        this.chipsRoot.runAction(seq);
        this.cancelContinuationBet();
      },
      onOnlineCount: function onOnlineCount(info) {},
      onErrorMsg: function onErrorMsg(info) {},
      onReconnect: function onReconnect(info) {
        this.chipsRoot.removeAllChildren();
        info.nGameStage == proto.cmd_game_tbao.GAME_STAGE.GAME_ADDSCORE_STAGE && this.refreshBetMoney(info.tSelfBet);
        this.cancelContinuationBet();
      },
      onLeave: function onLeave(info) {}
    });
    cc._RF.pop();
  }, {} ],
  TbaoChipLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5a8394wfI1N64fxaEHjtMAK", "TbaoChipLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        TbaoMgrScript: null,
        tChip: null,
        isChipEnabled: false,
        selTag: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        var vSize = cc.view.getVisibleSize();
        vSize.width < 1920 && (this.node.scale = vSize.width / 1920);
        this.TbaoMgrScript = cc.find("TbaoMgr", this.node.parent).getComponent("TbaoMgr");
        this.tChip = [];
        for (var i = 0; i < 6; i++) {
          this.tChip[i] = cc.find("scrollView/content/chip" + (i + 1).toString(), this.node);
          this.tChip[i].setScale(.85);
          this.tChip[i].on("click", this.onChip, this);
        }
        this.setChipEnabled(false);
      },
      start: function start() {},
      onChip: function onChip(event) {
        var chipName = event.node.name;
        this.setSelectedChip(chipName);
      },
      setSelectedChip: function setSelectedChip(chipName) {
        for (var i = 0; i < this.tChip.length; i++) if (this.tChip[i].name == chipName) {
          this.selTag.position = this.tChip[i].position;
          this.tChip[i].setScale(1);
        } else this.tChip[i].setScale(.85);
      },
      getSelectedChipID: function getSelectedChipID() {
        if (false == this.isChipEnabled) return -1;
        for (var i = 0; i < this.tChip.length; i++) if (this.tChip[i].position.x == this.selTag.position.x) return i + 1;
        return -1;
      },
      setChipEnabled: function setChipEnabled(isEnabled) {
        this.isChipEnabled = isEnabled;
        this.selTag.active = isEnabled;
        var nTotalMoney = 0;
        var tChipValue = [ 0, 0, 0, 0, 0, 0 ];
        if (null != this.TbaoMgrScript.tChipValue) {
          nTotalMoney = this.TbaoMgrScript.tUserInfo.AccountA + this.TbaoMgrScript.tUserInfo.AccountB;
          tChipValue = this.TbaoMgrScript.tChipValue;
        }
        for (var i = 0; i < this.tChip.length; i++) {
          var isCurEnabled = !!isEnabled;
          nTotalMoney < tChipValue[i] && (isCurEnabled = false);
          this.tChip[i].getComponent(cc.Button).interactable = isCurEnabled;
          if (isCurEnabled) {
            this.tChip[i].color = cc.color(255, 255, 255);
            this.tChip[i].getChildByName("Label").color = cc.color(255, 255, 255);
          } else {
            this.tChip[i].color = cc.color(100, 100, 100);
            this.tChip[i].getChildByName("Label").color = cc.color(100, 100, 100);
            this.tChip[i].getChildByName("Label").setScale(1, 1);
          }
        }
        isEnabled && this.setSelectedChip("chip1");
      },
      setChipValue: function setChipValue(tChipValue) {
        for (var i = 0; i < this.tChip.length; i++) {
          var label = this.tChip[i].getChildByName("Label");
          label.getComponent(cc.Label).string = (tChipValue[i] / 1e3).toString();
        }
      },
      onUserInfo: function onUserInfo(info) {},
      onGameStart: function onGameStart(info) {
        this.setChipEnabled(true);
      },
      onAddScore: function onAddScore(info) {},
      onBatchAddScore: function onBatchAddScore(info) {},
      onRevokeBet: function onRevokeBet(info) {},
      onGameOver: function onGameOver(info) {
        this.setChipEnabled(false);
      },
      onOnlineCount: function onOnlineCount(info) {},
      onErrorMsg: function onErrorMsg(info) {},
      onReconnect: function onReconnect(info) {
        this.setChipValue(info.tChipValue);
        info.nGameStage == proto.cmd_game_tbao.GAME_STAGE.GAME_ADDSCORE_STAGE ? this.setChipEnabled(true) : this.setChipEnabled(false);
      },
      onLeave: function onLeave(info) {}
    });
    cc._RF.pop();
  }, {} ],
  TbaoHeadLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5205b/KqbRPmpwqcwUHDq+W", "TbaoHeadLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        nicknameLabel: {
          default: null,
          type: cc.Node
        },
        moneyLabel: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        var vSize = cc.view.getVisibleSize();
        this.node.x = -vSize.width / 2 + 30;
        this.node.y = -vSize.height / 2 + 90;
        vSize.width < 1920 && (this.node.scale = vSize.width / 1920);
        if (null != cc.ak && null != cc.ak.mc && null != cc.ak.mc.userMgr) {
          var avatarScript = cc.find("avatar", this.node).getComponent("headAnthologyItem");
          avatarScript.setAvatar(cc.ak.mc.userMgr.headID);
        }
      },
      start: function start() {},
      setMoney: function setMoney(nMoney) {
        nMoney = Math.floor(nMoney / 10);
        this.moneyLabel.getComponent(cc.Label).string = (nMoney / 100).toString();
      },
      delayRefreshMoney: function delayRefreshMoney(nTotalMoney, nScore) {
        var _this = this;
        var seq = cc.sequence(cc.delayTime(9), cc.callFunc(function() {
          _this.setMoney(nTotalMoney);
          nScore = Math.floor(nScore / 10);
          var label = cc.instantiate(_this.moneyLabel);
          label.getComponent(cc.Label).string = "+" + (nScore / 100).toString();
          label.setScale(1.5);
          label.parent = _this.moneyLabel.parent;
          var mb = cc.moveBy(1, cc.v2(0, 100));
          var spawn = cc.spawn(mb, cc.fadeOut(1));
          var rmself = cc.removeSelf();
          var seq = cc.sequence(spawn, rmself);
          label.runAction(seq);
        }.bind(this)));
        this.moneyLabel.runAction(seq);
      },
      onUserInfo: function onUserInfo(info) {
        this.nicknameLabel.getComponent(cc.Label).string = info.NickName;
        this.setMoney(info.AccountA + info.AccountB);
      },
      onGameStart: function onGameStart(info) {
        this.moneyLabel.stopAllActions();
        this.setMoney(info.nTotalMoney);
      },
      onAddScore: function onAddScore(info) {
        info.isSelf && this.setMoney(info.nSelfTotalMoney);
      },
      onBatchAddScore: function onBatchAddScore(info) {},
      onRevokeBet: function onRevokeBet(info) {
        info.isSelf && this.setMoney(info.nSelfTotalMoney);
      },
      onGameOver: function onGameOver(info) {
        info.gameScore > 0 && this.delayRefreshMoney(info.nTotalMoney, info.gameScore);
      },
      onOnlineCount: function onOnlineCount(info) {},
      onErrorMsg: function onErrorMsg(info) {},
      onReconnect: function onReconnect(info) {
        info.nGameStage == proto.cmd_game_tbao.GAME_STAGE.GAME_ADDSCORE_STAGE && this.setMoney(info.nSelfTotalMoney);
      },
      onLeave: function onLeave(info) {}
    });
    cc._RF.pop();
  }, {} ],
  TbaoMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3d9520HHhlBt5ymYpaCVk8Z", "TbaoMgr");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        TbaoBetLayerScript: null,
        TbaoChipLayerScript: null,
        TbaoHeadLayerScript: null,
        TbaoOtherLayerScript: null,
        tUserInfo: null,
        tChipValue: null,
        tSelfBet: null,
        tTotalBet: null,
        tMaxBet: null,
        tHistory: null,
        tLastRoundBet: null,
        tCurRoundBet: null,
        isBet: false,
        isGameOver: true
      },
      onLoad: function onLoad() {
        if (null == window.bundle) {
          cc.ak = {};
          cc.ak.event = {};
          cc.ak.event.on = function() {};
          cc.ak.util = {};
          cc.ak.util.socketMgr = {};
          cc.ak.util.socketMgr.send = function() {};
        }
        this.tSelfBet = {};
        this.tTotalBet = {};
        this.tMaxBet = {};
        this.tHistory = [];
        this.tLastRoundBet = [];
        this.tCurRoundBet = [];
        this.TbaoBetLayerScript = cc.find("TbaoBetLayer", this.node.parent).getComponent("TbaoBetLayer");
        this.TbaoChipLayerScript = cc.find("TbaoChipLayer", this.node.parent).getComponent("TbaoChipLayer");
        this.TbaoHeadLayerScript = cc.find("TbaoHeadLayer", this.node.parent).getComponent("TbaoHeadLayer");
        this.TbaoOtherLayerScript = cc.find("TbaoOtherLayer", this.node.parent).getComponent("TbaoOtherLayer");
        this.registerMsg(proto.cmd_game_tbao.SUB_CMD_GAME.SUB_USERINFO_PUSH, "UserInfo", "onUserInfo");
        this.registerMsg(proto.cmd_game_tbao.SUB_CMD_GAME.SUB_GAME_START, "GameStart", "onGameStart");
        this.registerMsg(proto.cmd_game_tbao.SUB_CMD_GAME.SUB_ADD_SCORE, "AddScore", "onAddScore");
        this.registerMsg(proto.cmd_game_tbao.SUB_CMD_GAME.SUB_BATCH_ADD_SCORE, "BatchAddScore", "onBatchAddScore");
        this.registerMsg(proto.cmd_game_tbao.SUB_CMD_GAME.SUB_TAKE_BACK_ADD_SCORE, "BackAddScore", "onRevokeBet");
        this.registerMsg(proto.cmd_game_tbao.SUB_CMD_GAME.SUB_GAME_OVER, "GameOver", "onGameOver");
        this.registerMsg(proto.cmd_game_tbao.SUB_CMD_GAME.SUB_ONLINE_PLAYER_NUM, "OnlinePlayerNum", "onOnlineCount");
        this.registerMsg(proto.cmd_game_tbao.SUB_CMD_GAME.SUB_EEROR_MSG, "ErrorMsg", "onErrorMsg");
        this.registerMsg(proto.cmd_game_tbao.SUB_CMD_GAME.SUB_RESTORE_DATA, "RestoreData", "onReconnect");
        this.registerMsg(proto.cmd_game_tbao.SUB_CMD_GAME.SUB_LEAVE_GAME_RESULT, "LeaveGameResult", "onLeave");
      },
      start: function start() {
        cc.ak.util.utils && cc.ak.util.utils.loadGameSceneFinish();
      },
      registerMsg: function registerMsg(nSubID, tabName, fnName) {
        var _this = this;
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_GAME + "-" + nSubID, function(data) {
          cc.log("tbao " + fnName);
          var info = {};
          if (nSubID == proto.cmd_game_tbao.SUB_CMD_GAME.SUB_USERINFO_PUSH) info = new proto.cmd_base_info.UserInfo(); else var info = new proto.cmd_game_tbao[tabName]();
          cc.ak.util.tbfUtil.unPackData(info, data);
          var tRet = _this[fnName](info);
          null != _this.TbaoBetLayerScript[fnName] && _this.TbaoBetLayerScript[fnName](tRet);
          null != _this.TbaoHeadLayerScript[fnName] && _this.TbaoHeadLayerScript[fnName](tRet);
          null != _this.TbaoChipLayerScript[fnName] && _this.TbaoChipLayerScript[fnName](tRet);
          null != _this.TbaoOtherLayerScript[fnName] && _this.TbaoOtherLayerScript[fnName](tRet);
        }, this);
      },
      getSpriteFrame: function getSpriteFrame(frameName) {
        var node = cc.find("frames/" + frameName, this.node);
        var frame = node.getComponent(cc.Sprite).spriteFrame;
        return frame;
      },
      copyToBetArray: function copyToBetArray(tSrc, tDst) {
        tDst[0] = tSrc.typeDaxiao;
        tDst[1] = tSrc.typeDuizi;
        tDst[2] = tSrc.typeBaozi;
        tDst[3] = [ tSrc.typeQuanBao ];
        tDst[4] = tSrc.typeHezhi;
        tDst[5] = tSrc.typeShuangdian;
        tDst[6] = tSrc.typeDandian;
      },
      cleanBetArray: function cleanBetArray() {
        for (var i = 0; i < 7; i++) for (var j = 0; j < this.tSelfBet[i].length; j++) {
          this.tSelfBet[i][j] = 0;
          this.tTotalBet[i][j] = 0;
        }
      },
      curRound2LastRound: function curRound2LastRound() {
        if (this.tCurRoundBet.length > 0) {
          this.tLastRoundBet = this.tCurRoundBet;
          this.tCurRoundBet = [];
        }
      },
      createHistoryItem: function createHistoryItem(tTbaoData) {
        var t = {};
        t[0] = tTbaoData[0];
        t[1] = tTbaoData[1];
        t[2] = tTbaoData[2];
        var sum = t[0] + t[1] + t[2];
        if (t[0] == t[1] && t[1] == t[2]) {
          t.desc = sum + "-\u8c79\u5b50";
          t.desc2 = sum + "\u70b9 \u8c79\u5b50";
          if (3 == sum || 18 == sum) {
            t.desc = "\u8c79\u5b50";
            t.desc2 = "\u8c79\u5b50";
          }
        } else if (sum <= 10) {
          t.desc = sum + " - \u5c0f";
          t.desc2 = sum + "\u70b9 \u5c0f";
        } else {
          t.desc = sum + " - \u5927";
          t.desc2 = sum + "\u70b9 \u5927";
        }
        return t;
      },
      onUserInfo: function onUserInfo(info) {
        this.tUserInfo = info;
        return info;
      },
      onGameStart: function onGameStart(info) {
        this.isGameOver = false;
        this.curRound2LastRound();
        this.cleanBetArray();
        info.tSelfBet = this.tSelfBet;
        info.nTotalMoney = this.tUserInfo.AccountA + this.tUserInfo.AccountB;
        info.tHistory = this.tHistory;
        return info;
      },
      onAddScore: function onAddScore(info) {
        var isSelf = info.adduserChairId == this.tUserInfo.ChairID;
        info.nAddMoney = this.tChipValue[info.addChipId - 1];
        this.tTotalBet[info.addtype - 1][info.typeindex - 1] += info.nAddMoney;
        if (isSelf) {
          this.isBet = true;
          this.tSelfBet[info.addtype - 1][info.typeindex - 1] += info.nAddMoney;
          this.tUserInfo.AccountA -= info.nAddMoney;
          if (this.tUserInfo.AccountA < 0) {
            this.tUserInfo.AccountB += this.tUserInfo.AccountA;
            this.tUserInfo.AccountA = 0;
          }
          var t = {};
          t.nType = info.addtype;
          t.nTypeID = info.typeindex;
          t.nChipID = info.addChipId;
          this.tCurRoundBet[this.tCurRoundBet.length] = t;
        }
        var data = {};
        data.isSelf = isSelf;
        data.nType = info.addtype;
        data.nTypeID = info.typeindex;
        data.nChipID = info.addChipId;
        data.nAddMoney = this.tChipValue[info.addChipId - 1];
        data.nTotalBet = this.tTotalBet[info.addtype - 1][info.typeindex - 1];
        data.nSelfBet = this.tSelfBet[info.addtype - 1][info.typeindex - 1];
        data.nSelfTotalMoney = this.tUserInfo.AccountB + this.tUserInfo.AccountA;
        return data;
      },
      onBatchAddScore: function onBatchAddScore(info) {
        for (var i = 0; i < info.addtype.length; i++) {
          var data = {};
          data.adduserChairId = info.adduserChairId;
          data.addtype = info.addtype[i];
          data.typeindex = info.typeindex[i];
          data.addChipId = info.addChipId[i];
          var tRet = this.onAddScore(data);
          this.TbaoBetLayerScript.onAddScore(tRet);
          this.TbaoHeadLayerScript.onAddScore(tRet);
          this.TbaoChipLayerScript.onAddScore(tRet);
          this.TbaoOtherLayerScript.onAddScore(tRet);
        }
      },
      onRevokeBet: function onRevokeBet(info) {
        var data = {};
        data.isSelf = false;
        data.nType = info.backaddtype;
        data.nTypeID = info.backtypeindex;
        data.nMoney = info.backScore;
        this.tTotalBet[info.backaddtype - 1][info.backtypeindex - 1] -= info.backScore;
        if (info.backUserChairId == this.tUserInfo.ChairID) {
          this.isBet = false;
          data.isSelf = true;
          this.tSelfBet[info.backaddtype - 1][info.backtypeindex - 1] -= info.backScore;
          this.tUserInfo.AccountA += data.nMoney;
          this.tCurRoundBet = [];
          data.nSelfTotalMoney = this.tUserInfo.AccountA + this.tUserInfo.AccountB;
        }
        return data;
      },
      onGameOver: function onGameOver(info) {
        this.isGameOver = true;
        this.isBet = false;
        info.tChipValue = this.tChipValue;
        this.tUserInfo.AccountA += info.gameScore;
        info.nTotalMoney = this.tUserInfo.AccountA + this.tUserInfo.AccountB;
        this.tHistory.unshift(this.createHistoryItem(info.TBaoData.touBao));
        this.tHistory.length > 10 && this.tHistory.splice(10, 1);
        info.tHistory = this.tHistory;
        return info;
      },
      onOnlineCount: function onOnlineCount(info) {
        return info;
      },
      onErrorMsg: function onErrorMsg(info) {
        1 == info.errortype && cc.ak.ui.toast("\u60a8\u7684\u4f59\u989d\u4e0d\u8db3\uff01");
        2 == info.errortype && cc.ak.ui.toast("\u9519\u8bef\u7684\u7b79\u7801\uff0c\u8bf7\u91cd\u542f\u6e38\u620f\uff01");
        3 == info.errortype && cc.ak.ui.toast("\u4e0b\u6ce8\u7c7b\u578b\u9519\u8bef\uff0c\u8bf7\u91cd\u542f\u6e38\u620f\uff01");
        4 == info.errortype && cc.ak.ui.toast("\u4e0b\u6ce8\u7d22\u5f15\u9519\u8bef\uff0c\u8bf7\u91cd\u542f\u6e38\u620f\uff01");
        5 == info.errortype && cc.ak.ui.toast("\u5df2\u8fbe\u4e0b\u6ce8\u4e0a\u9650\uff01");
        return info;
      },
      onReconnect: function onReconnect(info) {
        this.isGameOver = info.gameStage != proto.cmd_game_tbao.GAME_STAGE.GAME_ADDSCORE_STAGE;
        this.tChipValue = info.chouma;
        this.tUserInfo.ChairID = info.connectChairId;
        this.copyToBetArray(info.selfadd, this.tSelfBet);
        this.copyToBetArray(info.addAllScore, this.tTotalBet);
        this.copyToBetArray(info.maxadd, this.tMaxBet);
        var nSelfTotalBet = 0;
        for (var i = 0; i < 7; i++) for (var j = 0; j < this.tSelfBet[i].length; j++) nSelfTotalBet += this.tSelfBet[i][j];
        nSelfTotalBet > 0 && (this.isBet = true);
        var tbaoData = [];
        this.tHistory = [];
        null != info.history && (tbaoData = info.history.touBaoData);
        for (var i = tbaoData.length; i > 0; i -= 3) this.tHistory[this.tHistory.length] = this.createHistoryItem([ tbaoData[i - 3], tbaoData[i - 2], tbaoData[i - 1] ]);
        var data = {};
        data.nGameStage = info.gameStage;
        data.nLeftTime = info.lefttime;
        data.tChipValue = info.chouma;
        data.nSelfTotalBet = nSelfTotalBet;
        data.nSelfTotalMoney = this.tUserInfo.AccountA + this.tUserInfo.AccountB - nSelfTotalBet;
        data.tSelfBet = this.tSelfBet;
        data.tTotalBet = this.tTotalBet;
        data.tMaxBet = this.tMaxBet;
        data.tHistory = this.tHistory;
        return data;
      },
      onLeave: function onLeave(info) {
        info.userId == cc.ak.mc.userMgr.uid && cc.ak.ui.loadLobbyScence();
      },
      sendReturnLobby: function sendReturnLobby() {
        var cmd = new proto.cmd_room.RoomChairAction();
        cmd.ActionType = proto.cmd_room.USER_ACTION_TYPE.USER_ACTION_LEAVE;
        !this.isGameOver && this.isBet ? cc.ak.ui.toast("\u6e38\u620f\u672a\u7ed3\u675f\uff0c\u4e0d\u80fd\u79bb\u5f00") : cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ROOM, proto.cmd_net.CMD_ROOM.SUB_USER_ACTION, cmd);
      },
      sendAddBet: function sendAddBet(nType, nTypeID, nChipID) {
        var nMoney = this.tUserInfo.AccountA + this.tUserInfo.AccountB;
        if (this.tChipValue[nChipID - 1] > nMoney) return cc.ak.ui.toast("\u60a8\u7684\u4f59\u989d\u4e0d\u8db3\uff01");
        var data = new proto.cmd_game_tbao.RequestAddScore();
        data.adduserChairId = this.tUserInfo.ChairID;
        data.addtype = nType;
        data.typeindex = nTypeID;
        data.addChipId = nChipID;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_tbao.SUB_CMD_GAME.SUB_C_ADD_SCORE, data);
      },
      sendRevokeBet: function sendRevokeBet() {
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_tbao.SUB_CMD_GAME.SUB_C_BACK_ADD_SCORE);
      },
      sendRepeatBet: function sendRepeatBet() {
        var sum = 0;
        for (var i = 0; i < 7; i++) for (var j = 0; j < this.tSelfBet[i].length; j++) sum += this.tSelfBet[i][j];
        if (sum > 0) return false;
        var tAddType = [];
        var tTypeIndex = [];
        var tAddChipID = [];
        for (var i = 0; i < this.tLastRoundBet.length; i++) {
          tAddType.push(this.tLastRoundBet[i].nType);
          tTypeIndex.push(this.tLastRoundBet[i].nTypeID);
          tAddChipID.push(this.tLastRoundBet[i].nChipID);
          if (tAddType.length >= 100) {
            this.sendBatchBet(tAddType, tTypeIndex, tAddChipID);
            tAddType = [];
            tTypeIndex = [];
            tAddChipID = [];
          }
        }
        tAddType.length > 0 && this.sendBatchBet(tAddType, tTypeIndex, tAddChipID);
        return true;
      },
      sendBatchBet: function sendBatchBet(tAddType, tTypeIndex, tAddChipID) {
        var data = new proto.cmd_game_tbao.RequestBatchAddScore();
        data.adduserChairId = this.tUserInfo.ChairID;
        data.addtype = tAddType;
        data.typeindex = tTypeIndex;
        data.addChipId = tAddChipID;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_GAME, proto.cmd_game_tbao.SUB_CMD_GAME.SUB_C_BATCH_ADD_SCORE, data);
      }
    });
    cc._RF.pop();
  }, {} ],
  TbaoOtherLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9c863cDxlhMYbzAl33669bw", "TbaoOtherLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        TbaoMgr: {
          default: null,
          type: cc.Node
        },
        TbaoBetLayer: {
          default: null,
          type: cc.Node
        },
        TbaoChipLayer: {
          default: null,
          type: cc.Node
        },
        soundTime1: {
          default: null,
          type: cc.AudioClip
        },
        soundTime2: {
          default: null,
          type: cc.AudioClip
        },
        startSound: {
          default: null,
          type: cc.AudioClip
        },
        stopSound: {
          default: null,
          type: cc.AudioClip
        },
        nPlaySecond: 0,
        tDiceFrame1: [ cc.SpriteFrame ],
        tDiceFrame2: [ cc.SpriteFrame ],
        clockTime: {
          default: null,
          type: cc.Node
        },
        clockProgress: {
          default: null,
          type: cc.Node
        },
        nClockTime: 0,
        touzhong: {
          default: null,
          type: cc.Node
        },
        touzhongAni: {
          default: null,
          type: cc.Node
        },
        onlinePeople: {
          default: null,
          type: cc.Node
        },
        tShakePoint: null,
        nShakeTime: 0,
        result: {
          default: null,
          type: cc.Node
        },
        resultLabel: {
          default: null,
          type: cc.Label
        },
        state: {
          default: null,
          type: cc.Node
        },
        hasRepeatBet: false,
        shopPrefab: cc.Prefab,
        nNoBetRound: 0
      },
      onLoad: function onLoad() {
        var vSize = cc.view.getVisibleSize();
        this.clockTime.parent.active = false;
        this.result.opacity = 0;
        cc.find("buttons/backBtn", this.node).on("click", this.onBack, this);
        cc.find("buttons/settingBtn", this.node).on("click", this.onSettingBtn, this);
        cc.find("buttons/ruleBtn", this.node).on("click", this.onRuleBtn, this);
        cc.find("buttons/bot_right/cancelBtn", this.node).on("click", this.onCancelBet, this);
        cc.find("buttons/bot_right/repeatBtn", this.node).on("click", this.onRepeatBet, this);
        cc.find("buttons/bot_right/buyBtn", this.node).on("click", this.onBuyBtn, this);
        cc.find("TbaoRulePanel/closeBtn", this.node).on("click", function(event) {
          event.node.parent.active = false;
        }, this);
        var botRight = cc.find("buttons/bot_right", this.node);
        if (vSize.width < 1920) {
          botRight.scale = vSize.width / 1920;
          var history = cc.find("history", this.node);
          history.scale = vSize.width / 1920;
        }
        this.tShakePoint = [];
        var p = this.onlinePeople.position;
        this.tShakePoint.push(cc.v2(p.x, p.y));
        this.tShakePoint.push(cc.v2(p.x + 5, p.y - 5));
        this.tShakePoint.push(cc.v2(p.x - 10, p.y));
        this.tShakePoint.push(cc.v2(p.x, p.y - 5));
        this.tShakePoint.push(cc.v2(p.x + 10, p.y + 10));
      },
      start: function start() {},
      update: function update(dt) {
        if (this.clockTime.parent.active) {
          this.nClockTime -= dt;
          if (this.nClockTime <= 0) {
            this.nClockTime = 0;
            this.clockTime.parent.active = false;
            this.TbaoChipLayer.getComponent("TbaoChipLayer").setChipEnabled(false);
            this.showState(1);
            cc.ak.util.audioMgr.playSFX(this.stopSound);
          }
          this.clockTime.getComponent(cc.Label).string = Math.floor(this.nClockTime).toString();
          this.clockProgress.getComponent(cc.ProgressBar).progress = this.nClockTime / 15;
          if (this.nClockTime < 5) {
            if (Math.floor(this.nClockTime) == this.nPlaySecond) return;
            this.nPlaySecond = Math.floor(this.nClockTime);
            cc.ak.util.audioMgr.playSFX(this.nPlaySecond > 0 ? this.soundTime1 : this.soundTime2);
          }
        }
        this.onlinePeopleShake(dt);
      },
      onBack: function onBack(event) {
        this.TbaoMgr.getComponent("TbaoMgr").sendReturnLobby();
      },
      onBuyBtn: function onBuyBtn() {
        var shop = cc.instantiate(this.shopPrefab);
        shop.parent = this.node.parent;
      },
      onSettingBtn: function onSettingBtn() {
        cc.find("TbaoSettingPanel", this.node).active = true;
      },
      onRuleBtn: function onRuleBtn() {
        cc.find("TbaoRulePanel", this.node).active = true;
      },
      onCancelBet: function onCancelBet() {
        this.TbaoMgr.getComponent("TbaoMgr").sendRevokeBet();
      },
      onRepeatBet: function onRepeatBet() {
        if (this.hasRepeatBet) return;
        this.hasRepeatBet = this.TbaoMgr.getComponent("TbaoMgr").sendRepeatBet();
      },
      startClock: function startClock(nClockTime) {
        this.clockTime.parent.active = true;
        this.nClockTime = nClockTime;
        this.nPlaySecond = 10;
      },
      shutdownClock: function shutdownClock() {
        this.clockTime.parent.active = false;
        this.nClockTime = 0;
        this.nPlaySecond = 10;
      },
      onlinePeopleShake: function onlinePeopleShake(dt) {
        if (this.nShakeTime <= 0) return;
        this.nShakeTime -= dt;
        this.nShakeTime <= 0 && (this.nShakeTime = 0);
        var nIndex = Math.floor(this.nShakeTime / .1);
        this.onlinePeople.position = this.tShakePoint[nIndex];
      },
      startShakeOnlinePeople: function startShakeOnlinePeople() {
        this.nShakeTime <= 0 && (this.nShakeTime = .49);
      },
      playDicePop: function playDicePop(nIndex) {
        var dice = cc.find("desk/bRet" + nIndex, this.touzhong);
        dice.setScale(.01, .01);
        dice.active = true;
        var st = cc.scaleTo(.5, 1, 1).easing(cc.easeBackOut());
        dice.runAction(st);
      },
      playDiceAnimation: function playDiceAnimation(tRet) {
        var _this = this;
        var _loop = function _loop(i) {
          dice = cc.find("desk/dice" + i, _this.touzhong);
          diceSprite = dice.getComponent(cc.Sprite);
          diceSprite.spriteFrame = _this.tDiceFrame1[tRet[i - 1] - 1];
          dice.stopAllActions();
          seq = cc.sequence(cc.delayTime(3), cc.callFunc(function() {
            _this.playDicePop(i);
          }.bind(_this)));
          dice.runAction(seq);
          bRet = cc.find("desk/bRet" + i, _this.touzhong);
          bRetSprite = bRet.getComponent(cc.Sprite);
          bRetSprite.spriteFrame = _this.tDiceFrame2[tRet[i - 1] - 1];
          bRet.active = false;
        };
        for (var i = 1; i <= 3; i++) {
          var dice;
          var diceSprite;
          var seq;
          var bRet;
          var bRetSprite;
          _loop(i);
        }
        var desk = cc.find("desk", this.touzhong);
        var seq = cc.sequence(cc.delayTime(6), cc.callFunc(function() {
          _this.touzhong.y = 2e3;
        }));
        desk.stopAllActions();
        desk.runAction(seq);
        var seq = cc.sequence(cc.delayTime(6.5), cc.callFunc(function() {
          _this.TbaoBetLayer.getComponent("TbaoBetLayer").takeBackChips();
        }.bind(this)));
        desk.runAction(seq);
        this.touzhong.y = 0;
        var skAni = this.touzhongAni.getComponent(sp.Skeleton);
        skAni.setAnimation(0, "yaoshaizi", false);
        skAni.addAnimation(0, "qigu", false);
      },
      refreshHistory: function refreshHistory(tHistory) {
        var history = cc.find("history", this.node);
        history.stopAllActions();
        for (var i = 1; i <= 10; i++) {
          var record = cc.find("history/mask/content/record" + i, this.node);
          if (tHistory.length < i) record.active = false; else {
            record.active = true;
            record.getChildByName("desc").getComponent(cc.Label).string = tHistory[i - 1].desc;
            record.getChildByName("dice1").getComponent(cc.Sprite).spriteFrame = this.tDiceFrame2[tHistory[i - 1][0] - 1];
            record.getChildByName("dice2").getComponent(cc.Sprite).spriteFrame = this.tDiceFrame2[tHistory[i - 1][1] - 1];
            record.getChildByName("dice3").getComponent(cc.Sprite).spriteFrame = this.tDiceFrame2[tHistory[i - 1][2] - 1];
          }
        }
      },
      delayRefreshHistory: function delayRefreshHistory(tHistory) {
        var _this2 = this;
        var history = cc.find("history", this.node);
        var seq = cc.sequence(cc.delayTime(7), cc.callFunc(function() {
          _this2.refreshHistory(tHistory);
        }.bind(this)));
        history.runAction(seq);
      },
      showState: function showState(nID) {
        this.state.stopAllActions();
        this.state.getChildByName("0").active = false;
        this.state.getChildByName("1").active = false;
        this.state.getChildByName("2").active = false;
        var sp = this.state.getChildByName(nID.toString());
        if (null == sp) return;
        sp.active = true;
        var tDelayTime = [ 1.5, 1.5, 3 ];
        var seq = cc.sequence(cc.fadeIn(.5), cc.delayTime(tDelayTime[nID]), cc.fadeOut(.5));
        this.state.runAction(seq);
      },
      delayShowWait: function delayShowWait() {
        var _this3 = this;
        var seq = cc.sequence(cc.delayTime(9), cc.callFunc(function() {
          _this3.showState(2);
        }.bind(this)));
        this.state.runAction(seq);
      },
      delayShowResult: function delayShowResult(strResult) {
        this.result.opacity = 0;
        this.resultLabel.string = strResult;
        var seq = cc.sequence(cc.delayTime(4), cc.fadeIn(.5), cc.delayTime(1), cc.fadeOut(.5));
        this.result.runAction(seq);
      },
      onUserInfo: function onUserInfo(info) {},
      onGameStart: function onGameStart(info) {
        var _this4 = this;
        this.nNoBetRound += 1;
        if (this.nNoBetRound >= 6) {
          cc.ak.ui.toast("\u7531\u4e8e\u60a8\u957f\u65f6\u95f4\u672a\u64cd\u4f5c\u88ab\u9000\u51fa\u6e38\u620f\uff01");
          var seq = cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
            _this4.TbaoMgr.getComponent("TbaoMgr").sendReturnLobby();
          }.bind(this)));
          this.node.runAction(seq);
          return;
        }
        this.hasRepeatBet = false;
        this.startClock(info.timeleft);
        this.refreshHistory(info.tHistory);
        this.showState(0);
        this.result.opacity = 0;
        cc.ak.util.audioMgr.playSFX(this.startSound);
      },
      onAddScore: function onAddScore(info) {
        info.isSelf || this.startShakeOnlinePeople();
        info.isSelf && (this.nNoBetRound = 0);
      },
      onBatchAddScore: function onBatchAddScore(info) {},
      onRevokeBet: function onRevokeBet(info) {
        this.hasRepeatBet = false;
      },
      onGameOver: function onGameOver(info) {
        this.shutdownClock();
        this.playDiceAnimation(info.TBaoData.touBao);
        this.delayRefreshHistory(info.tHistory);
        this.delayShowWait();
        this.delayShowResult(info.tHistory[0].desc2);
      },
      onOnlineCount: function onOnlineCount(info) {
        var label = cc.find("onlineCount", this.onlinePeople);
        label.getComponent(cc.Label).string = "\u5728\u7ebf:" + info.onlinenum;
      },
      onErrorMsg: function onErrorMsg(info) {},
      onReconnect: function onReconnect(info) {
        this.touzhong.y = 2e3;
        this.refreshHistory(info.tHistory);
        if (info.nGameStage == proto.cmd_game_tbao.GAME_STAGE.GAME_ADDSCORE_STAGE) {
          this.clockTime.parent.active = true;
          this.nClockTime = info.nLeftTime;
        } else {
          this.clockTime.parent.active = false;
          this.nClockTime = 0;
        }
        info.nGameStage == proto.cmd_game_tbao.GAME_STAGE.GAME_OVER_STAGE && this.showState(2);
        this.result.opacity = 0;
      },
      onLeave: function onLeave(info) {}
    });
    cc._RF.pop();
  }, {} ],
  TbaoSettingPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8c8514T0mFOlqoVpeAR98Cz", "TbaoSettingPanel");
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
        slider.node.getChildByName("progress").width = 918 * nProgress;
      }
    });
    cc._RF.pop();
  }, {} ],
  cmd_game_tbao: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "512955iOhtBz5DxXRloi9qp", "cmd_game_tbao");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_game_tbao = {};
    proto.cmd_game_tbao.__cfg = {};
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
        }
      };
      cfg.AddType = {
        1: {
          na: "typeDaxiao",
          ty: "int",
          ar: 1
        },
        2: {
          na: "typeDuizi",
          ty: "int",
          ar: 1
        },
        3: {
          na: "typeBaozi",
          ty: "int",
          ar: 1
        },
        4: {
          na: "typeQuanBao",
          ty: "int"
        },
        5: {
          na: "typeHezhi",
          ty: "int",
          ar: 1
        },
        6: {
          na: "typeShuangdian",
          ty: "int",
          ar: 1
        },
        7: {
          na: "typeDandian",
          ty: "int",
          ar: 1
        }
      };
      cfg.winType = {
        1: {
          na: "typeDaxiao",
          ty: "int"
        },
        2: {
          na: "typeDuizi",
          ty: "int"
        },
        3: {
          na: "typeBaozi",
          ty: "int"
        },
        4: {
          na: "typeQuanBao",
          ty: "int"
        },
        5: {
          na: "typeHezhi",
          ty: "int"
        },
        6: {
          na: "typeShuangdian",
          ty: "int",
          ar: 1
        },
        7: {
          na: "typeDandian",
          ty: "int",
          ar: 1
        }
      };
      cfg.TouBao = {
        1: {
          na: "touBao",
          ty: "byte",
          ar: 1
        }
      };
      cfg.History = {
        1: {
          na: "touBaoData",
          ty: "int",
          ar: 1
        },
        2: {
          na: "hezhi",
          ty: "int",
          ar: 1
        },
        3: {
          na: "daxiao",
          ty: "int",
          ar: 1
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
      cfg.GameStart = {
        1: {
          na: "bet",
          ty: "int"
        },
        2: {
          na: "timeleft",
          ty: "int"
        }
      };
      cfg.AddScore = {
        1: {
          na: "adduserChairId",
          ty: "int"
        },
        2: {
          na: "addtype",
          ty: "int"
        },
        3: {
          na: "typeindex",
          ty: "int"
        },
        4: {
          na: "addChipId",
          ty: "int"
        }
      };
      cfg.BatchAddScore = {
        1: {
          na: "adduserChairId",
          ty: "int"
        },
        2: {
          na: "addtype",
          ty: "int",
          ar: 1
        },
        3: {
          na: "typeindex",
          ty: "int",
          ar: 1
        },
        4: {
          na: "addChipId",
          ty: "int",
          ar: 1
        }
      };
      cfg.BackAddScore = {
        1: {
          na: "backUserChairId",
          ty: "int"
        },
        2: {
          na: "backaddtype",
          ty: "int"
        },
        3: {
          na: "backtypeindex",
          ty: "int"
        },
        4: {
          na: "backScore",
          ty: "int"
        }
      };
      cfg.RestoreData = {
        1: {
          na: "conenctType",
          ty: "int"
        },
        2: {
          na: "connectChairId",
          ty: "int"
        },
        3: {
          na: "bet",
          ty: "int"
        },
        4: {
          na: "gameStage",
          ty: "int"
        },
        5: {
          na: "totalScore",
          ty: "int"
        },
        6: {
          na: "tableScore",
          ty: "int"
        },
        8: {
          na: "lefttime",
          ty: "int"
        },
        9: {
          na: "maxadd",
          ty: "AddType"
        },
        10: {
          na: "selfadd",
          ty: "AddType"
        },
        11: {
          na: "addAllScore",
          ty: "AddType"
        },
        12: {
          na: "chouma",
          ty: "int",
          ar: 1
        },
        13: {
          na: "history",
          ty: "History"
        }
      };
      cfg.GameOver = {
        1: {
          na: "gameScore",
          ty: "int"
        },
        2: {
          na: "TBaoData",
          ty: "TouBao"
        },
        3: {
          na: "wintype",
          ty: "winType"
        }
      };
      cfg.LeaveGameResult = {
        1: {
          na: "userId",
          ty: "int"
        }
      };
      cfg.OnlinePlayerNum = {
        1: {
          na: "onlinenum",
          ty: "int"
        }
      };
      cfg.ErrorMsg = {
        1: {
          na: "errortype",
          ty: "int"
        }
      };
      cfg.RequestAddScore = {
        1: {
          na: "adduserChairId",
          ty: "int"
        },
        2: {
          na: "addtype",
          ty: "int"
        },
        3: {
          na: "typeindex",
          ty: "int"
        },
        4: {
          na: "addChipId",
          ty: "int"
        }
      };
      cfg.RequestBatchAddScore = {
        1: {
          na: "adduserChairId",
          ty: "int"
        },
        2: {
          na: "addtype",
          ty: "int",
          ar: 1
        },
        3: {
          na: "typeindex",
          ty: "int",
          ar: 1
        },
        4: {
          na: "addChipId",
          ty: "int",
          ar: 1
        }
      };
    })(proto.cmd_game_tbao.__cfg);
    proto.cmd_game_tbao.TableRule = function() {
      this.__className = "proto.cmd_game_tbao.TableRule";
      this.BaseRule = null;
      this.CardNumber = null;
    };
    proto.cmd_game_tbao.AddType = function() {
      this.__className = "proto.cmd_game_tbao.AddType";
      this.typeDaxiao = null;
      this.typeDuizi = null;
      this.typeBaozi = null;
      this.typeQuanBao = 0;
      this.typeHezhi = null;
      this.typeShuangdian = null;
      this.typeDandian = null;
    };
    proto.cmd_game_tbao.winType = function() {
      this.__className = "proto.cmd_game_tbao.winType";
      this.typeDaxiao = 0;
      this.typeDuizi = 0;
      this.typeBaozi = 0;
      this.typeQuanBao = 0;
      this.typeHezhi = 0;
      this.typeShuangdian = null;
      this.typeDandian = null;
    };
    proto.cmd_game_tbao.TouBao = function() {
      this.__className = "proto.cmd_game_tbao.TouBao";
      this.touBao = null;
    };
    proto.cmd_game_tbao.History = function() {
      this.__className = "proto.cmd_game_tbao.History";
      this.touBaoData = null;
      this.hezhi = null;
      this.daxiao = null;
    };
    proto.cmd_game_tbao.EnterRoomSucc = function() {
      this.__className = "proto.cmd_game_tbao.EnterRoomSucc";
      this.Code = 0;
      this.PlayCfg = null;
      this.RuleDesc = "";
      this.GPSDistance = 0;
    };
    proto.cmd_game_tbao.GameStart = function() {
      this.__className = "proto.cmd_game_tbao.GameStart";
      this.bet = 0;
      this.timeleft = 0;
    };
    proto.cmd_game_tbao.AddScore = function() {
      this.__className = "proto.cmd_game_tbao.AddScore";
      this.adduserChairId = 0;
      this.addtype = 0;
      this.typeindex = 0;
      this.addChipId = 0;
    };
    proto.cmd_game_tbao.BatchAddScore = function() {
      this.__className = "proto.cmd_game_tbao.BatchAddScore";
      this.adduserChairId = 0;
      this.addtype = null;
      this.typeindex = null;
      this.addChipId = null;
    };
    proto.cmd_game_tbao.BackAddScore = function() {
      this.__className = "proto.cmd_game_tbao.BackAddScore";
      this.backUserChairId = 0;
      this.backaddtype = 0;
      this.backtypeindex = 0;
      this.backScore = 0;
    };
    proto.cmd_game_tbao.RestoreData = function() {
      this.__className = "proto.cmd_game_tbao.RestoreData";
      this.conenctType = 0;
      this.connectChairId = 0;
      this.bet = 0;
      this.gameStage = 0;
      this.totalScore = 0;
      this.tableScore = 0;
      this.lefttime = 0;
      this.maxadd = null;
      this.selfadd = null;
      this.addAllScore = null;
      this.chouma = null;
      this.history = null;
    };
    proto.cmd_game_tbao.GameOver = function() {
      this.__className = "proto.cmd_game_tbao.GameOver";
      this.gameScore = 0;
      this.TBaoData = null;
      this.wintype = null;
    };
    proto.cmd_game_tbao.LeaveGameResult = function() {
      this.__className = "proto.cmd_game_tbao.LeaveGameResult";
      this.userId = 0;
    };
    proto.cmd_game_tbao.OnlinePlayerNum = function() {
      this.__className = "proto.cmd_game_tbao.OnlinePlayerNum";
      this.onlinenum = 0;
    };
    proto.cmd_game_tbao.ErrorMsg = function() {
      this.__className = "proto.cmd_game_tbao.ErrorMsg";
      this.errortype = 0;
    };
    proto.cmd_game_tbao.RequestAddScore = function() {
      this.__className = "proto.cmd_game_tbao.RequestAddScore";
      this.adduserChairId = 0;
      this.addtype = 0;
      this.typeindex = 0;
      this.addChipId = 0;
    };
    proto.cmd_game_tbao.RequestBatchAddScore = function() {
      this.__className = "proto.cmd_game_tbao.RequestBatchAddScore";
      this.adduserChairId = 0;
      this.addtype = null;
      this.typeindex = null;
      this.addChipId = null;
    };
    proto.cmd_game_tbao.SUB_CMD_GAME = {
      SUB_USER_START_DISMISSION: 1,
      SUB_USER_DISMISSION_REQ: 2,
      SUB_USER_DISMISSION_RSP: 3,
      SUB_USERINFO_PUSH: 4,
      SUB_ENTER_GAME_SCENCE: 5,
      SUB_GAME_START: 6,
      SUB_ADD_SCORE: 7,
      SUB_BATCH_ADD_SCORE: 8,
      SUB_TAKE_BACK_ADD_SCORE: 9,
      SUB_RESTORE_DATA: 10,
      SUB_GAME_OVER: 11,
      SUB_LEAVE_GAME_RESULT: 12,
      SUB_ONLINE_PLAYER_NUM: 13,
      SUB_EEROR_MSG: 14,
      SUB_C_ADD_SCORE: 31,
      SUB_C_BATCH_ADD_SCORE: 32,
      SUB_C_BACK_ADD_SCORE: 33,
      SUB_C_LEAVE_GAME_SCENE: 34,
      SUB_C_ENTER_FINISH: 35
    };
    proto.cmd_game_tbao.TABLE_DISMISSION_STATUS = {
      DISMISSION_STATUS_AGREE: 1,
      DISMISSION_STATUS_DISAGREE: 2
    };
    proto.cmd_game_tbao.TABLE_RULE_ID = {
      RULE_COUNT: 19,
      RULE_PLAY_COIN_TYPE: 101,
      RULE_DI_ZHU: 102,
      RULE_RU_CHANG: 103,
      RULE_LI_CHANG: 104,
      RULE_PAY_COIN_TYPE: 105,
      RULE_PAY_COIN: 106,
      RULE_ROOM_TYPE: 107,
      RULE_GAME_TYPE: 108,
      RULE_AREA_TYPE: 109,
      RULE_PAY_TYPE: 110,
      RULE_PLAY_COUNT: 111,
      RULE_PLAYER_COUNT: 112,
      RULE_OPENED: 113,
      RULE_MIN_DI_ZHU: 114,
      RULE_MAX_DI_ZHU: 115,
      RULE_RU_CHANG_TIMES: 116,
      RULE_LI_CHANG_TIMES: 117,
      RULE_WAYEXPLAIN: 11
    };
    proto.cmd_game_tbao.ADD_TYPE = {
      TYPE_DAXIAO: 1,
      TYPE_DUIZI: 2,
      TYPE_BAOZI: 3,
      TYPE_QUANBAO: 4,
      TYPE_HEZHI: 5,
      TYPE_SHUANGDIAN: 6,
      TYPE_DANDIAN: 7
    };
    proto.cmd_game_tbao.GAME_STAGE = {
      GAME_WAIT_STAGE: 0,
      GAME_ADDSCORE_STAGE: 1,
      GAME_OVER_STAGE: 2
    };
    proto.cmd_game_tbao.THE_ODDS = {
      THE_ODDS_1: 0,
      THE_ODDS_2: 1,
      THE_ODDS_3: 2,
      THE_ODDS_4: 3,
      THE_ODDS_5: 4,
      THE_ODDS_6: 5,
      THE_ODDS_7: 6,
      THE_ODDS_8: 7,
      THE_ODDS_9: 8,
      THE_ODDS_10: 9,
      THE_ODDS_11: 10,
      THE_ODDS_12: 11,
      THE_ODDS_13: 12
    };
    proto.cmd_game_tbao.CONNECT_TYPE = {
      TYPE_RECONNECT: 0,
      TYPE_WATCHER: 1
    };
    cc._RF.pop();
  }, {} ],
  tbaoInit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6d91eBFF1pB3rLxa0Wy9WKM", "tbaoInit");
    "use strict";
    var TbaoInit = cc.Class({
      extends: cc.Component,
      statics: {
        id: "tbao"
      },
      properties: {},
      onLoad: function onLoad() {
        cc.log("tbao module init!");
        bundle.tbao = {};
        bundle.tbao.key = {};
        bundle.tbao.data = new Map();
        this.initGlobalHttpKey();
        this.initGlobalCacheKey();
        this.initGlobalEventKey();
        this.initGlobalDataKey();
        this.initCache();
        this.initGlobalEventHandle();
      },
      start: function start() {},
      initTbaoData: function initTbaoData() {},
      initGlobalHttpKey: function initGlobalHttpKey() {
        bundle.tbao.key.http = {};
      },
      initGlobalCacheKey: function initGlobalCacheKey() {
        bundle.tbao.key.cache = {};
      },
      initGlobalDataKey: function initGlobalDataKey() {
        bundle.tbao.key.data = {
          temp: "temp",
          ENTER_ROOM_SUCC: "enter_room_succ"
        };
      },
      initGlobalEventKey: function initGlobalEventKey() {
        bundle.tbao.key.event = {
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
        cc.ak.event.on(cc.ak.key.event.ENTER_GAME_SCENE + "_" + TbaoInit.id, function(data) {
          bundle.tbao.data.set(bundle.tbao.key.data.ENTER_ROOM_SUCC, data);
          if ("tbaoGame" != cc.director.getScene().name) {
            cc.ak.util.utils.loadGameSceneBegin();
            cc.ak.ui.loadScenceWithPreload("tbaoGame");
          }
        });
        cc.ak.event.on(cc.ak.key.event.POPUP_SUGGAME_ENTRANCE + "_" + TbaoInit.id, function(data, parentNode) {
          cc.log("Handle : " + JSON.stringify(data));
          if (data.id !== TbaoInit.id) return;
          if (!cc.isValid(parentNode)) return;
          var entrance = cc.instantiate(cc.ak.ui.pfsubGameEntrance);
          entrance.parent = parentNode;
          entrance.getComponent("subGameEntrance").setMatchItme(data);
        });
      },
      loadPrefab: function loadPrefab() {}
    });
    module.exports = TbaoInit;
    cc._RF.pop();
  }, {} ]
}, {}, [ "TbaoBetLayer", "TbaoChipLayer", "TbaoHeadLayer", "TbaoMgr", "TbaoOtherLayer", "TbaoSettingPanel", "cmd_game_tbao", "tbaoInit" ]);