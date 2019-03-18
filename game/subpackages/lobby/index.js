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
  LayerMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2ea90N+OmxF0pB6+KGQpx2Z", "LayerMgr");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        pfStartLayer: cc.Prefab,
        pfLoginLayer: cc.Prefab,
        pfLobbyLayer: cc.Prefab
      },
      onLoad: function onLoad() {
        this.layers = null;
      },
      start: function start() {},
      _removeCurrLayer: function _removeCurrLayer() {
        this.layer = null;
        this.node.destroyAllChildren();
      },
      _loadLayer: function _loadLayer(pf) {
        this._removeCurrLayer();
        this.layer = cc.instantiate(pf);
        this.node.addChild(this.layer);
      },
      loadStartLayer: function loadStartLayer() {
        if (this.layer && "start" == this._currName) return;
        this._currName = "start";
        this._loadLayer(this.pfStartLayer);
      },
      loadLoginLayer: function loadLoginLayer() {
        if (this.layer && "login" == this._currName) return;
        this._currName = "login";
        this._loadLayer(this.pfLoginLayer);
      },
      loadLobbyLayer: function loadLobbyLayer() {
        if (this.layer && "lobby" == this._currName) return;
        this._currName = "lobby";
        this._loadLayer(this.pfLobbyLayer);
      }
    });
    cc._RF.pop();
  }, {} ],
  bankListItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "294395YlLBD3IlyBlcqGW6S", "bankListItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        labName: cc.Label,
        id: 0,
        btn: cc.Button
      },
      start: function start() {},
      init: function init(data) {
        var _this = this;
        this.id = data.id;
        this.labName.string = data.name;
        this.btn.node.on("click", function() {
          _this.node.emit("bankItem", {
            id: _this.id
          });
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  bankList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "30fcf1vrHxFNKxR4c5qhF8v", "bankList");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        scroll: cc.ScrollView,
        pfBankItem: cc.Prefab,
        id: 0
      },
      onLoad: function onLoad() {
        var _this = this;
        this.node.on("click", function() {
          _this.node.active = false;
        });
        this.getComponent(cc.Button)._soundOn = false;
      },
      bankListData: function bankListData(data) {
        var content = this.scroll.content;
        content.destroyAllChildren();
        this.bank = [];
        for (var i = 0; i < data.length; i++) {
          var item = cc.instantiate(this.pfBankItem);
          item.x = 0;
          item.y = -25 - i * item.height;
          content.addChild(item);
          item.getComponent("bankListItem").init(data[i]);
          this.bank.push(item);
        }
        var temp = cc.instantiate(this.pfBankItem);
        content.height = temp.height * data.length;
      },
      start: function start() {},
      onEnable: function onEnable() {
        var _this2 = this;
        for (var i = 0; i < this.bank.length; i++) this.bank[i].on("bankItem", function(id) {
          _this2.node.active = false;
          _this2.id = id;
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  billItme: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b7cfbsUJOJHXYyEcuNmZuwB", "billItme");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        date: cc.Label,
        sum: cc.Label,
        gameType: cc.Label
      },
      start: function start() {},
      setData: function setData(data) {
        data.time && (this.date.string = data.time);
        data.amount && (this.sum.string = data.amount);
        data.type && (this.gameType.string = data.type);
      }
    });
    cc._RF.pop();
  }, {} ],
  bill: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b02a1Wb935CsaJhcdOSEwJf", "bill");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        data: null,
        nCurPage: 0,
        sumTotal: 0,
        sumPage: 0
      },
      onLoad: function onLoad() {
        cc.find("closeBtn", this.node).on("click", this.onCloseBtn, this);
        cc.find("preBtn", this.node).on("click", this.onPrePage, this);
        cc.find("nextBtn", this.node).on("click", this.onNextPage, this);
        this.getComponent(cc.Button)._soundOn = false;
        this.nCurPage = 1;
        this.requestData(this.nCurPage);
        this.setData([]);
      },
      start: function start() {},
      onCloseBtn: function onCloseBtn() {
        this.node.destroy();
      },
      onPrePage: function onPrePage() {
        if (this.nCurPage <= 1) return;
        this.requestData(--this.nCurPage);
      },
      onNextPage: function onNextPage() {
        if (this.data.length < 7) return;
        this.requestData(++this.nCurPage);
      },
      requestData: function requestData(nPage) {
        var _this = this;
        var cmd = cc.ak.key.http.BILL;
        var req = cc.ak.util.http.request({
          cmd: cmd,
          data: {
            page: nPage,
            pageSize: 7,
            getTotal: 1
          }
        }, function(data) {
          cc.log("data : " + JSON.stringify(data));
          0 == data.status ? _this.setData(data) : cc.ak.ui.toast(data.statusnote);
        });
      },
      setData: function setData(data) {
        data.total && (this.sumTotal = data.total);
        if (0 == this.sumTotal) {
          cc.find("preBtn", this.node).active = false;
          cc.find("nextBtn", this.node).active = false;
          return;
        }
        this.sumPage = Math.ceil(this.sumTotal / 7);
        cc.find("nextBtn", this.node).active = this.sumPage > this.nCurPage;
        cc.find("preBtn", this.node).active = this.nCurPage > 1;
        this.data = data.data;
        for (var i = 0; i < 7; i++) {
          var item = cc.find("data/item" + i, this.node);
          item.active = i < this.data.length;
          if (i < this.data.length) {
            item.getChildByName("time").getComponent(cc.Label).string = "" + this.data[i].time;
            item.getChildByName("amount").getComponent(cc.Label).string = "" + this.data[i].amount;
            item.getChildByName("type").getComponent(cc.Label).string = "" + this.data[i].type;
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  bindGuide: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "270ebY/0whHxq9zzg2f0tue", "bindGuide");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        spGray: cc.Node,
        spBox: cc.Node,
        btnClose: cc.Button,
        btnGoto: cc.Button,
        labGold: cc.Label
      },
      onLoad: function onLoad() {
        this.spGray.on(cc.Node.EventType.TOUCH_START, function() {}, this);
        this.btnClose.node.on("click", this.onButtonClose, this);
        this.btnGoto.node.on("click", this.onButtonGoto, this);
        this.updateData();
      },
      onButtonClose: function onButtonClose() {
        this.node.removeFromParent();
      },
      onButtonGoto: function onButtonGoto() {
        cc.ak.mc.missionMgr.gotoMission(proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_MOBILE, true);
        this.onButtonClose();
      },
      updateData: function updateData() {
        var mission = cc.ak.mc.missionMgr.getTargetMission(proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_MOBILE);
        this.labGold.string = Math.floor(mission.Coin / 1e3);
      }
    });
    cc._RF.pop();
  }, {} ],
  brItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f05cd1ohPJAcaP+9XNEHGpe", "brItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        labLevel: cc.Label,
        labDetail: cc.Label,
        btnEnter: cc.Button,
        labDescribe: cc.Label
      },
      start: function start() {},
      setData: function setData(level, detail, describe) {
        this.labLevel.string = "" + level;
        this.labDetail.string = "\u5e95\u5206:" + detail;
        if (describe <= cc.ak.mc.userMgr.coin_bean) {
          this.btnEnter.interactable = true;
          this.labDescribe.string = "\u8fdb\u5165";
        } else {
          this.btnEnter.interactable = false;
          this.labDescribe.string = "\u9700\u8981" + describe + "\u91d1\u5e01";
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  brnnEntranceItme: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b0f65iQbwtHPo2ANC2TCWpN", "brnnEntranceItme");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        labRoomLevel: cc.Label,
        labOnlineNum: cc.Label,
        labTips: cc.Label,
        btnEnter: cc.Button,
        scroll: cc.ScrollView,
        pfRecordItem: cc.Prefab
      },
      onLoad: function onLoad() {
        this.content = this.scroll.content;
      },
      setData: function setData(level, num, tipScroe, canEnter, data) {
        this.labRoomLevel.string = "" + level;
        this.labOnlineNum.string = "\u5728\u7ebf\u4eba\u6570:" + num;
        if (canEnter) {
          this.labTips.string = "";
          this.btnEnter.interactable = true;
        } else {
          this.labTips.string = "\u9700" + tipScroe + "\u91d1\u5e01";
          this.btnEnter.interactable = false;
        }
        var temp = cc.instantiate(this.pfRecordItem);
        var spacing = 0;
        this.content.width = data.length * (temp.width + spacing);
        for (var i = 0; i < data.length; i++) {
          var item = cc.instantiate(this.pfRecordItem);
          item.x = i * item.width - 225;
          item.y = -50;
          this.content.addChild(item);
          item.getComponent("recordItem").setData(data[i]);
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  btnStyle2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dac8bgcyrhLEpu/5krC1OsX", "btnStyle2");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        spTip: cc.Sprite,
        spfTips: {
          default: [],
          type: cc.SpriteFrame
        }
      },
      onLoad: function onLoad() {},
      setSpTip: function setSpTip(type) {
        this.spTip.spriteFrame = this.spfTips[type - 1];
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  cardBind: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1beb6lJJ45BI4FlLqCrpM13", "cardBind");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        cardNode: cc.Node,
        aliNode: cc.Node,
        aliAccount: cc.EditBox,
        aliName: cc.EditBox,
        cardAccount: cc.EditBox,
        cardName: cc.EditBox,
        btnBind: cc.Button,
        btnBankListShow: cc.Button,
        btnBankListHide: cc.Button,
        btnBack: cc.Button,
        bankNameLab: cc.Label,
        bankList: cc.Node,
        titleSp: {
          default: [],
          type: cc.SpriteFrame
        },
        title: cc.Sprite
      },
      onLoad: function onLoad() {
        var _this = this;
        this.bankNameList = [ {
          id: 1,
          name: "\u4e2d\u56fd\u5de5\u5546\u94f6\u884c"
        }, {
          id: 2,
          name: "\u4e2d\u56fd\u519c\u4e1a\u94f6\u884c"
        }, {
          id: 3,
          name: "\u4e2d\u56fd\u94f6\u884c"
        }, {
          id: 4,
          name: "\u4e2d\u56fd\u5efa\u8bbe\u94f6\u884c"
        }, {
          id: 5,
          name: "\u4ea4\u901a\u94f6\u884c"
        }, {
          id: 6,
          name: "\u4e2d\u56fd\u90ae\u653f\u50a8\u84c4\u94f6\u884c"
        }, {
          id: 7,
          name: "\u4e2d\u56fd\u5149\u5927\u94f6\u884c"
        }, {
          id: 8,
          name: "\u4e2d\u56fd\u6c11\u751f\u94f6\u884c"
        }, {
          id: 9,
          name: "\u62db\u5546\u94f6\u884c"
        }, {
          id: 10,
          name: "\u4e2d\u4fe1\u94f6\u884c"
        }, {
          id: 11,
          name: "\u534e\u590f\u94f6\u884c"
        }, {
          id: 12,
          name: "\u4e0a\u6d77\u6d66\u4e1c\u53d1\u5c55\u94f6\u884c"
        }, {
          id: 13,
          name: "\u5e73\u5b89\u94f6\u884c"
        }, {
          id: 14,
          name: "\u5e7f\u53d1\u94f6\u884c"
        }, {
          id: 15,
          name: "\u5174\u4e1a\u94f6\u884c"
        }, {
          id: 16,
          name: "\u6d59\u5546\u94f6\u884c"
        }, {
          id: 17,
          name: "\u6e24\u6d77\u94f6\u884c"
        }, {
          id: 18,
          name: "\u6052\u4e30\u94f6\u884c"
        } ];
        this.getComponent(cc.Button)._soundOn = false;
        this.node.on("click", function() {});
        this.btnBack.node.on("click", function() {
          _this.node.destroy();
        });
        this.btnBankListShow.node.on("click", function() {
          _this.bankList.active = true;
          _this.bankList.getComponent("bankList").id = 0;
        });
        this.bankList.getComponent("bankList").bankListData(this.bankNameList);
        this.bankList.active = false;
        this.btnBankListHide.node.active = false;
        this.btnBankListHide.node.on("click", function() {
          _this.bankList.active = false;
        });
        this.cardNode.active = false;
        this.aliNode.active = false;
      },
      start: function start() {},
      init: function init(type) {
        var _this2 = this;
        this.title.spriteFrame = this.titleSp[type - 1];
        if (1 == type) {
          this.aliNode.active = true;
          this.cardNode.active = false;
          this.btnBind.node.on("click", function() {
            if ("" == _this2.aliAccount.string || "" == _this2.aliName.string) cc.ak.ui.toast("\u8bf7\u586b\u5199\u8d26\u53f7\u6216\u59d3\u540d"); else {
              var cmd = cc.ak.key.http.UPDATE_ALIPAY;
              var req = cc.ak.util.http.request({
                cmd: cmd,
                data: {
                  alipay: _this2.aliAccount.string,
                  ali_name: _this2.aliName.string
                }
              }, function(data) {
                cc.log("data : " + JSON.stringify(data));
                if (0 == data.status) {
                  cc.ak.event.emit(cc.ak.key.event.ACCOUNT_BIND, {
                    type: 1,
                    no: _this2.aliAccount.string
                  });
                  _this2.node.destroy();
                }
              });
            }
          });
        } else {
          this.aliNode.active = false;
          this.cardNode.active = true;
          this.btnBind.node.on("click", function() {
            var cmd = cc.ak.key.http.UPDATE_BANKCARD;
            if ("" == _this2.cardAccount.string || "" == _this2.cardName.string || 0 == _this2.bankList.getComponent("bankList").id) cc.ak.ui.toast("\u8bf7\u586b\u5199\u8d26\u53f7\u59d3\u540d\u6216\u9009\u62e9\u5f00\u6237\u94f6\u884c"); else var req = cc.ak.util.http.request({
              cmd: cmd,
              data: {
                bank_no: _this2.cardAccount.string,
                bank_name: _this2.cardName.string,
                bank_type: _this2.bankList.getComponent("bankList").id
              }
            }, function(data) {
              cc.log("data : " + JSON.stringify(data));
              if (0 == data.status) {
                cc.ak.event.emit(cc.ak.key.event.ACCOUNT_BIND, {
                  type: 2,
                  no: _this2.cardAccount.string
                });
                _this2.node.destroy();
              }
            });
          });
        }
      },
      onEnable: function onEnable() {},
      update: function update(dt) {
        if (this.bankList.active) {
          this.btnBankListHide.node.active = true;
          this.btnBankListShow.node.active = false;
        } else {
          this.btnBankListHide.node.active = false;
          this.btnBankListShow.node.active = true;
        }
        if (0 != this.bankList.getComponent("bankList").id) {
          var id = this.bankList.getComponent("bankList").id.id;
          this.bankNameLab.string = this.bankNameList[id - 1].name;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  checkin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "84d1fZ+585NVbHysLVvJZ0W", "checkin");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        spGray: cc.Node,
        btnClose: cc.Button,
        btnReward: cc.Button,
        ndItems: [ cc.Node ],
        _missionList: [],
        _checkIndex: -1,
        _checkTime: 0,
        _currIndex: -1
      },
      onLoad: function onLoad() {
        this.spGray.on(cc.Node.EventType.TOUCH_START, function() {}, this);
        this.btnClose.node.on("click", this.onButtonClose, this);
        this.btnReward.node.on("click", this.onButtonReward, this);
        cc.ak.event.on(cc.ak.mc.missionMgr.key.STATUS_NOTIFY, this.onRewardNotify, this);
        this._currIndex = -1;
        this.updateData();
        this.updateButton();
      },
      onButtonClose: function onButtonClose() {
        cc.ak.event.off(cc.ak.mc.missionMgr.key.STATUS_NOTIFY, this.onRewardNotify, this);
        this.node.removeFromParent();
      },
      onButtonReward: function onButtonReward() {
        var index = this.getCurrIndex();
        var mission = this._missionList[index];
        if (null == mission) return;
        cc.ak.mc.missionMgr.requestClientResult(mission.MissionId);
        cc.log("[checkin] missionID: " + mission.MissionId);
        this.btnReward.interactable = false;
        this.scheduleOnce(this.updateButton, 3);
      },
      onRewardNotify: function onRewardNotify(event) {
        var mission = event.getUserData();
        if (mission.TargetType != proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_CHECKIN) return;
        if (mission.Status && mission.Status.Status == proto.cmd_mission.MISSION_STATUS_TYPE.MISSION_STATUS_TYPE_FINISH) {
          cc.log("\u7b7e\u5230\u6210\u529f");
          this.onButtonClose();
        }
      },
      updateData: function updateData() {
        this._missionList = [];
        var curr = cc.ak.mc.missionMgr.getRootMission(proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_CHECKIN);
        this._missionList.push(curr);
        for (var i = 1; i < 7; i++) {
          if (null == curr) continue;
          curr = cc.ak.mc.missionMgr.getNextMission(curr.MissionId);
          this._missionList.push(curr);
        }
        var isFinishToday = cc.ak.mc.missionMgr.isMissionDoneToday(proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_CHECKIN);
        for (var i = 0; i < this._missionList.length; i++) {
          var mission = this._missionList[i];
          if (null == mission) continue;
          this.ndItems[i].getChildByName("lab_gold").getComponent(cc.Label).string = (mission.Coin / 1e3).toFixed(2);
          if (mission.Status) if (mission.Status.Status >= proto.cmd_mission.MISSION_STATUS_TYPE.MISSION_STATUS_TYPE_FINISH) this.ndItems[i].getChildByName("sp_done").active = true; else if (false == isFinishToday && this._currIndex < 0) {
            this._currIndex = i;
            this.ndItems[i].getChildByName("sp_active").active = true;
          }
        }
      },
      updateButton: function updateButton() {
        cc.ak.mc.missionMgr.isMissionDoneToday(proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_CHECKIN) ? this.btnReward.interactable = false : this.btnReward.interactable = true;
      },
      getCurrIndex: function getCurrIndex() {
        return this._currIndex;
      }
    });
    cc._RF.pop();
  }, {} ],
  coinRecordingItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "510bfr49T1AEauXCyR75z/u", "coinRecordingItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        num: cc.Label,
        time: cc.Label,
        coin: cc.Label,
        status: cc.Label
      },
      start: function start() {},
      setRecordingItemData: function setRecordingItemData(data) {
        this.num.string = data.num;
        this.time.string = data.time;
        this.coin.string = data.coin;
        this.status.string = data.status;
      }
    });
    cc._RF.pop();
  }, {} ],
  coinRecording: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a9430PcV/FJPbkKa0su9HYf", "coinRecording");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btnBack: cc.Button,
        scroll: cc.ScrollView,
        _inedx: null,
        coinRecoringItem: cc.Prefab
      },
      onLoad: function onLoad() {
        var _this = this;
        this.node.on("click", function() {});
        this.btnBack.node.on("click", function() {
          _this.node.destroy();
        });
      },
      start: function start() {},
      setCoinRecorindData: function setCoinRecorindData(data) {
        var content = this.scroll.content;
        content.destroyAllChildren();
        for (var i = 0; i < data.length; i++) {
          var item = cc.instantiate(this.coinRecoringItem);
          item.y = -35 - (item.height + 5) * i;
          item.x = 0;
          content.addChild(item);
          var itemData = {
            coin: data[i].rebate,
            num: i + 1,
            time: data[i].post_date,
            status: data[i].state
          };
          item.getComponent("coinRecordingItem").setRecordingItemData(itemData);
        }
        var temp = cc.instantiate(this.coinRecoringItem);
        content.height = (temp.height + 5) * data.length;
      }
    });
    cc._RF.pop();
  }, {} ],
  extension: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1be46tn/YBCbopZWab98zdP", "extension");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        labLink: cc.Label,
        btnClose: cc.Button,
        btnCoin: cc.Button,
        btnRule: cc.Button,
        btnCopy: cc.Button,
        coinNode: cc.Node,
        ruleNode: cc.Node,
        ruleCfgItemPf: cc.Prefab,
        qrCodeSp: cc.Button,
        ruleScroll: cc.ScrollView,
        saveUrl: null,
        btnSpArr: {
          default: [],
          type: cc.SpriteFrame
        },
        btnCoinRecording: cc.Button,
        coinRecordingPf: cc.Prefab,
        myNum: cc.Label,
        fNum: cc.Label,
        myCoinNum: cc.Label
      },
      onLoad: function onLoad() {
        var _this = this;
        this.node.on("click", function() {});
        this.getComponent(cc.Button)._soundOn = false;
        this.initBtn();
        this.coinNode.active = false;
        this.ruleNode.active = true;
        this.qrCodeSp.node.on("click", function() {
          if (_this.saveUrl) {
            var native = cc.ak.util.native;
            native.invoke(native.name.SAVE_IMG, {
              url: _this.saveUrl,
              isOpenWx: 1
            });
          }
        });
        this.btnCoinRecording.node.on("click", function() {
          var req = cc.ak.util.http.request(cc.ak.key.http.REBATE_USER_LIST, function(data) {
            cc.log("\u63a8\u5e7f\u4f63\u91d1 :" + JSON.stringify(data));
            if (0 == data.status) {
              var coin = cc.instantiate(_this.coinRecordingPf);
              _this.node.parent.addChild(coin);
              coin.getComponent("coinRecording").setCoinRecorindData(data.data.rebate);
            } else cc.ak.ui.toast(data.statusnote);
          });
        });
      },
      initBtn: function initBtn() {
        var _this2 = this;
        this.btnClose.node.on("click", function() {
          _this2.node.destroy();
        });
        this.btnCoin.node.on("click", function() {
          _this2.coinNode.active = true;
          _this2.ruleNode.active = false;
          _this2.btnCoin.getComponent(cc.Sprite).spriteFrame = _this2.btnSpArr[0];
          _this2.btnRule.getComponent(cc.Sprite).spriteFrame = _this2.btnSpArr[1];
        });
        this.btnRule.node.on("click", function() {
          _this2.coinNode.active = false;
          _this2.ruleNode.active = true;
          _this2.btnCoin.getComponent(cc.Sprite).spriteFrame = _this2.btnSpArr[1];
          _this2.btnRule.getComponent(cc.Sprite).spriteFrame = _this2.btnSpArr[0];
        });
        this.btnCopy.node.on("click", function() {
          var native = cc.ak.util.native;
          var str = _this2.labLink.string;
          native.invoke(native.name.COPY_OPEN, {
            content: str,
            isOpenWx: 1
          });
        });
      },
      start: function start() {},
      setQRLinkData: function setQRLinkData(data) {
        var _this3 = this;
        var url = data.share_qrcode_url;
        this.labLink.string = data.share_url;
        cc.ak.ui.imgLoad.loadImg(url, function(img) {
          _this3.qrCodeSp.getComponent(cc.Sprite).spriteFrame = img;
        });
      },
      setRebateCfg: function setRebateCfg(data) {
        var cfg = data.rebate_cfg;
        var content = this.ruleScroll.content;
        for (var i = 0; i < cfg.length; i++) {
          var item = cc.instantiate(this.ruleCfgItemPf);
          item.x = 0;
          item.y = -40 - (item.height + 5) * i;
          content.addChild(item);
          var max = cfg[i].bet_man;
          var rate = cfg[i].rate;
          item.getComponent("rebateCfgItem").setSumAndRate(max, rate);
        }
        var temp = cc.instantiate(this.ruleCfgItemPf);
        content.height = (temp.height + 5) * cfg.length;
      },
      setCoinNodeData: function setCoinNodeData(data) {
        this.myNum.string = data.self_flow;
        this.fNum.string = data.all_flow;
        this.myCoinNum.string = data.today_commission;
      },
      setSaveQRCode: function setSaveQRCode(data) {
        this.saveUrl = data.share_img_url;
      }
    });
    cc._RF.pop();
  }, {} ],
  gameItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8df09gJVqhBxr02AoXXaXRH", "gameItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _gid: 0,
        bgSpf: {
          default: [],
          type: cc.SpriteFrame
        },
        spMaks: cc.Sprite,
        spTips: cc.Sprite,
        progessBar: cc.ProgressBar,
        progessBg: cc.Sprite,
        labProgress: cc.Label,
        labTips: cc.Sprite,
        nameSP: cc.Sprite,
        bgNameSp: {
          default: [],
          type: cc.SpriteFrame
        },
        pfItemAnim: {
          default: [],
          type: cc.Prefab
        }
      },
      onLoad: function onLoad() {
        this.progessBar.progress = 0;
        this.labProgress.strting = "";
        this.startX = 0;
        this.locationX = 0;
        this.moveFlag = false;
        this._touchEnable = true;
      },
      init: function init(gid, isUpdate, enable, callBack) {
        var _this = this;
        this._gid = gid;
        if (!enable) {
          this.clean();
          this._touchEnable = false;
          this.labTips.node.active = true;
          this.spMaks.node.active = true;
        } else {
          this._touchEnable = true;
          this.labTips.node.active = false;
          isUpdate || this.clean();
        }
        for (var i = 0; i < this.bgSpf.length; i++) this.bgSpf[i].name == "gameitem" + gid && (this.node.getComponent(cc.Sprite).spriteFrame = this.bgSpf[i]);
        for (var _i = 0; _i < this.bgNameSp.length; _i++) this.bgNameSp[_i].name == "itemText" + gid && (this.nameSP.spriteFrame = this.bgNameSp[_i]);
        for (var _i2 = 0; _i2 < this.node.children.length; _i2++) this.node.children[_i2].zIndex = 1;
        for (var _i3 = 0; _i3 < this.pfItemAnim.length; _i3++) if (this.pfItemAnim[_i3].name == "itemAnim" + gid) {
          var anim = cc.instantiate(this.pfItemAnim[_i3]);
          this.node.addChild(anim, 0, "itemAnim" + gid);
          var spine = anim.getChildByName("skeleton");
          var ske = spine.getComponent(sp.Skeleton);
          ske.setCompleteListener(function(trackEntry) {});
          ske.clearTracks();
          ske.setAnimation(0, "animation", true);
        }
        this.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          if (_this._touchEnable) {
            _this.startX = event.getStartLocation().x;
            _this.moveFlag = false;
          }
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          if (_this._touchEnable) {
            _this.locationX = event.getLocation().x;
            _this.moveFlag = true;
          }
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function(event) {
          _this._touchEnable && (!_this.moveFlag || Math.abs(_this.locationX - _this.startX) < 6) && callBack(gid);
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(event) {
          _this._touchEnable && Math.abs(_this.locationX - _this.startX) > 6;
        }, this);
      },
      getGid: function getGid() {
        return this._gid;
      },
      clean: function clean() {
        this.spMaks.node.active = false;
        this.spTips.node.active = false;
        this.progessBar.node.active = false;
        this.labProgress.node.active = false;
        this.progessBg.node.active = false;
        this.labTips.node.active = false;
      },
      upData: function upData(progress) {
        this.spTips.node.active = false;
        this.labProgress.node.active = true;
        this.progessBar.progress = progress;
        this.labProgress.strting = Math.floor(100 * progress) + "%";
        1 == progress && this.clean();
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  gameTurnTable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c7397yemW9IW5P1Cb5UV/de", "gameTurnTable");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        pageView: cc.PageView
      },
      onLoad: function onLoad() {
        this.cotent = this.pageView.content;
      },
      onPageEvent: function onPageEvent(sender, eventType) {
        eventType == cc.PageView.EventType.PAGE_VIEW;
        if (eventType == cc.PageView.EventType.PAGE_TURNING) for (var i = 0; i < this.content.getChildren().length; i++) ;
        eventType == cc.PageView.EventType.PAGE_RULE;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  headAnthologyItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3f4e1XLqXNMgqUWFbGsY+3V", "headAnthologyItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        headSpf: {
          default: [],
          type: cc.SpriteFrame
        },
        sprite: {
          default: null,
          type: cc.Sprite
        }
      },
      onLoad: function onLoad() {},
      start: function start() {},
      setAvatar: function setAvatar(nHeadID) {
        if (nHeadID < 1) return;
        if (nHeadID >= this.headSpf.length) return;
        this.sprite.spriteFrame = this.headSpf[nHeadID - 1];
      }
    });
    cc._RF.pop();
  }, {} ],
  headAnthology: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0b39g2DFRCQ6lD0clFH5O+", "headAnthology");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        content: cc.Node
      },
      onLoad: function onLoad() {
        cc.find("bgSprite/frame/closeBtn", this.node).on("click", function() {
          this.node.destroy();
        }, this);
        for (var i = 0; i < this.content.children.length; i++) {
          var btn = this.content.getChildByName(i.toString());
          btn.getChildByName("sp").active = false;
          btn.on("click", this.onAvatarBtn, this);
        }
      },
      start: function start() {},
      update: function update(dt) {},
      onAvatarBtn: function onAvatarBtn(event) {
        for (var i = 0; i < this.content.children.length; i++) {
          var btn = this.content.getChildByName(i.toString());
          btn.getChildByName("sp").active = btn.name == event.node.name;
        }
        var nHeadID = parseInt(event.node.name);
        var changeHead = new proto.cmd_lobby.ChangeHeadIdData();
        changeHead.Id = nHeadID + 1;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ACCOUNTS, proto.cmd_net.CMD_ACCOUNTS.SUB_PERSON_CHANGE_HEADID_REQS, changeHead);
      }
    });
    cc._RF.pop();
  }, {} ],
  lobbyBackG: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c74ac+zyftM8LnGsfhqZqM6", "lobbyBackG");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {},
      setBgMask: function setBgMask(sp) {}
    });
    cc._RF.pop();
  }, {} ],
  lobbyBottom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1fe7ddgRCtGEZxs/MEis1gc", "lobbyBottom");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        withDraw: cc.Prefab,
        extensionPf: cc.Prefab,
        shopPf: cc.Prefab,
        settingPf: cc.Prefab,
        checkPf: cc.Prefab,
        noticePf: cc.Prefab,
        btnSetting: cc.Button,
        btnNotice: cc.Button,
        btnCommission: cc.Button,
        btnCheck: cc.Button,
        btnCustomer: cc.Button,
        btnPutForward: cc.Button,
        btnBuy: cc.Button,
        customerBabge: cc.Sprite,
        testBtn: cc.Button,
        audioSetting: {
          default: null,
          type: cc.AudioClip
        },
        audioMessage: {
          default: null,
          type: cc.AudioClip
        },
        audioTuiguang: {
          default: null,
          type: cc.AudioClip
        },
        audioService: {
          default: null,
          type: cc.AudioClip
        },
        audioRecharge: {
          default: null,
          type: cc.AudioClip
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        var self = this;
        if (cc.ak.conf.debug) {
          this.testBtn.node.active = true;
          this.testBtn.node.on("click", function() {
            var enterRoom = new proto.cmd_room.EnterRoomReq();
            enterRoom.PlayID = 6;
            enterRoom.SubPlayID = 13;
            cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ROOM, proto.cmd_net.CMD_ROOM.SUB_ENTER_ROOM_ASK, enterRoom);
          });
        }
        this.btnPutForward.node.on("click", function() {
          if (cc.ak.mc.userMgr.isbinded) {
            var withDraw = cc.instantiate(_this.withDraw);
            withDraw.y = 0;
            withDraw.x = 0;
            self.node.parent.addChild(withDraw);
            var req = cc.ak.util.http.request(cc.ak.key.http.WITHDRAW_USER_INFO, function(data) {
              cc.log("\u63d0\u73b0:" + JSON.stringify(data));
              0 == data.status && withDraw.getComponent("withdraw").setWithDrawData(data.data);
            });
          } else cc.ak.ui.alert({
            text: lan.com.lbl.notBindPhone,
            btns: [ lan.com.lbl.cancel, lan.com.lbl.bindPhone ],
            callback: function callback(idx) {
              if (1 === idx) {
                var event = new cc.Event.EventCustom(cc.ak.key.event.POPUP_LOBBY_BOX);
                event.setUserData({
                  type: 4,
                  name: cc.ak.const.box.lobbyBox
                });
                cc.ak.event.dispatchEvent(event);
              }
            }
          });
        });
        this.btnCommission.node.on("click", function() {
          var extension = cc.instantiate(_this.extensionPf);
          extension.y = 0;
          extension.x = 0;
          self.node.parent.addChild(extension);
          var req = cc.ak.util.http.request(cc.ak.key.http.SHARE_QRCODE, function(data) {
            cc.log("\u4e8c\u7ef4\u7801:" + JSON.stringify(data));
            0 == data.status ? extension.getComponent("extension").setQRLinkData(data.data) : cc.ak.ui.toast(data.statusnote);
          });
          var req = cc.ak.util.http.request(cc.ak.key.http.SHARE_IMG, function(data) {
            cc.log("shareImg:" + JSON.stringify(data));
            0 == data.status ? extension.getComponent("extension").setSaveQRCode(data.data) : cc.ak.ui.toast(data.statusnote);
          });
          var req = cc.ak.util.http.request(cc.ak.key.http.REBATE_CFG_LIST, function(data) {
            cc.log("\u63a8\u5e7f\u89c4\u5219 :" + JSON.stringify(data));
            0 == data.status ? extension.getComponent("extension").setRebateCfg(data.data) : cc.ak.ui.toast(data.statusnote);
          });
          var req = cc.ak.util.http.request(cc.ak.key.http.USER_COIN_FLOW, function(data) {
            cc.log("\u6211\u7684\u6d41\u6c34 :" + JSON.stringify(data));
            0 == data.status ? extension.getComponent("extension").setCoinNodeData(data.data) : cc.ak.ui.toast(data.statusnote);
          });
          cc.ak.util.audioMgr.playSFX(_this.audioTuiguang);
        });
        this.btnBuy.node.on("click", function() {
          var shop = cc.instantiate(_this.shopPf);
          shop.y = 0;
          shop.x = 0;
          self.node.parent.addChild(shop);
          var payData = cc.ak.cache.shopData.getPayData();
          payData && shop.getComponent("shop").setPayWay(payData.pay_types, payData.tips);
          var req = cc.ak.util.http.request(cc.ak.key.http.SHOP, function(data) {
            cc.log("\u5546\u57ce:" + JSON.stringify(data));
            if (0 == data.status) {
              shop.getComponent("shop").setPayWay(data.pay_types, data.tips);
              cc.ak.cache.shopData.parse(data);
            }
          });
          cc.ak.util.audioMgr.playSFX(_this.audioRecharge);
        });
        this.btnCustomer.node.on("click", function() {
          cc.ak.ui.alert({
            text: lan.com.lbl.customer,
            btns: [ lan.com.lbl.cancel, lan.com.lbl.sure ],
            callback: function callback(inx) {
              if (1 == inx) {
                var native = cc.ak.util.native;
                native.invoke(native.name.CUSTOMER_SERVICE);
              }
            }
          });
          cc.ak.util.audioMgr.playSFX(_this.audioService);
        });
        var staus = cc.ak.data.get(cc.ak.key.data.SHOW_BADGE);
        cc.log("staus : " + staus);
        this.customerBabge.node.active = !!staus;
        this.btnSetting.node.on("click", function() {
          var setting = cc.instantiate(_this.settingPf);
          setting.y = 0;
          setting.x = 0;
          self.node.parent.addChild(setting);
          cc.ak.util.audioMgr.playSFX(_this.audioSetting);
        });
        this.btnCheck.node.on("click", function() {
          var check = cc.instantiate(_this.checkPf);
          check.x = 0;
          check.y = 0;
          self.node.parent.addChild(check);
        });
        this.btnNotice.node.on("click", function() {
          var notice = cc.instantiate(_this.noticePf);
          notice.x = 0;
          notice.y = 0;
          self.node.parent.addChild(notice);
          cc.ak.util.audioMgr.playSFX(_this.audioMessage);
        });
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  lobbyMiddle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0a7424OKw9AzpydmCzNKWBU", "lobbyMiddle");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        turntale: cc.Node
      },
      onLoad: function onLoad() {
        cc.log("middleNode onLoad");
      },
      init: function init(callBack) {
        this.turntale.getComponent("turntable").init(callBack);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  lobbyTop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1aeb3uhgMNA/64g/NY3brOw", "lobbyTop");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btnAdd: cc.Button,
        btnHead: cc.Button,
        btnGoldFrame: cc.Button,
        btnActivity: cc.Button,
        labName: cc.Label,
        labCoin: cc.Label,
        labLevel: cc.Label,
        spfHead: {
          default: [],
          type: cc.SpriteFrame
        },
        pfUserInfo: cc.Prefab,
        shopPf: cc.Prefab,
        pfMission: cc.Prefab,
        pfCheckin: cc.Prefab,
        pfbLoginBox: cc.Prefab,
        pfRebate: cc.Prefab,
        pfBindGuide: cc.Prefab
      },
      onLoad: function onLoad() {
        var _this = this;
        cc.ak.event.on(cc.ak.key.event.LOBBY_PREPARED, function() {
          _this.prepared();
        }, this);
        this.btnAdd.node.on("click", function() {
          var shop = cc.instantiate(_this.shopPf);
          shop.x = 0;
          shop.y = 0;
          _this.node.parent.addChild(shop);
          var payData = cc.ak.cache.shopData.getPayData();
          payData && shop.getComponent("shop").setPayWay(payData.pay_types, payData.tips);
          var req = cc.ak.util.http.request(cc.ak.key.http.SHOP, function(data) {
            if (0 == data.status) {
              shop.getComponent("shop").setPayWay(data.pay_types, data.tips);
              cc.ak.cache.shopData.parse(data);
            }
          });
        });
        this.btnGoldFrame.node.on("click", function() {
          var shop = cc.instantiate(_this.shopPf);
          shop.x = 0;
          shop.y = 0;
          _this.node.parent.addChild(shop);
          var payData = cc.ak.cache.shopData.getPayData();
          payData && shop.getComponent("shop").setPayWay(payData.pay_types, payData.tips);
          var req = cc.ak.util.http.request(cc.ak.key.http.SHOP, function(data) {
            if (0 == data.status) {
              shop.getComponent("shop").setPayWay(data.pay_types, data.tips);
              cc.ak.cache.shopData.parse(data);
            }
          });
        });
        this.btnHead.node.on("click", function() {
          var userInfo = cc.instantiate(_this.pfUserInfo);
          userInfo.x = 0;
          userInfo.y = 0;
          _this.node.parent.addChild(userInfo);
        });
        this.btnActivity.node.getChildByName("badge").active = !cc.ak.mc.missionMgr.isBadgeClear();
        this.btnActivity.node.on("click", function() {
          var box = cc.instantiate(_this.pfMission);
          box.parent = _this.node.parent;
        });
        cc.ak.event.on(cc.ak.key.event.COIN_CHANGE, function(data) {
          _this.labCoin && (_this.labCoin.string = Math.floor(cc.ak.mc.userMgr.coin_bean / 10) / 100);
        }, this);
        cc.ak.event.on(cc.ak.key.event.NAME_CHANGE, function() {
          _this.labName && (_this.labName.string = cc.ak.mc.userMgr.nick);
        }, this);
        cc.ak.event.on(cc.ak.key.event.HEAN_CHANGE, function() {
          if (_this.btnHead) {
            _this.labName.string = cc.ak.mc.userMgr.nick;
            _this.btnHead.getComponent(cc.Sprite).spriteFrame = _this.spfHead[cc.ak.mc.userMgr.headID - 1];
          }
        }, this);
        var login = cc.instantiate(this.pfbLoginBox);
        login.parent = this.node.parent;
        login.zIndex = 100;
        this.loginBox = login.getComponent("loginBox");
        this.loginBox.init();
      },
      prepared: function prepared() {
        this.labName.string = cc.ak.mc.userMgr.nick;
        this.labCoin.string = Math.floor(cc.ak.mc.userMgr.coin_bean / 10) / 100;
        this.labLevel.string = "" + cc.ak.mc.userMgr.userType;
        this.btnHead.getComponent(cc.Sprite).spriteFrame = this.spfHead[cc.ak.mc.userMgr.headID - 1];
      },
      start: function start() {
        cc.ak.util.utils.isAfterHotFixReEnter() || this.prepared();
      },
      onEnable: function onEnable() {
        var _this2 = this;
        cc.ak.event.on(cc.ak.key.event.POPUP_LOBBY_BOX, function(event) {
          var data = event.getUserData();
          switch (data.name) {
           case cc.ak.const.box.mission:
            switch (data.type) {
             case proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_CHECKIN:
              var box = cc.instantiate(_this2.pfCheckin);
              box.parent = _this2.node.parent;
              break;

             case proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_FIRST_BUY:
             case proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_FIRST_BUY_BACK:
              var box = cc.instantiate(_this2.pfRebate);
              box.parent = _this2.node.parent;
              break;

             case proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_MOBILE:
              if (true == data.data) _this2.loginBox.showBox(_this2.loginBox.BoxType.BIND_PHONE); else {
                var box = cc.instantiate(_this2.pfBindGuide);
                box.parent = _this2.node.parent;
              }
              break;

             case proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_BUY:
              _this2.btnAdd.node.emit("click", _this2.btnAdd);
              break;

             case proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_GAMES:
             case proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_ROUNDS:
              break;

             case "UPDATE_BADGE":
              _this2.btnActivity.node.getChildByName("badge").active = data.data;
            }
            break;

           case cc.ak.const.box.lobbyBox:
            switch (data.type) {
             case _this2.loginBox.BoxType.LOGIN_PHONE:
             case _this2.loginBox.BoxType.LOGIN_PSWD:
             case _this2.loginBox.BoxType.FORGOT_PSWD:
              break;

             case _this2.loginBox.BoxType.MODIFY_PSWD:
              _this2.loginBox.showBox(_this2.loginBox.BoxType.MODIFY_PSWD);
              break;

             case _this2.loginBox.BoxType.BIND_PHONE:
              _this2.loginBox.showBox(_this2.loginBox.BoxType.BIND_PHONE);
              break;

             case _this2.loginBox.BoxType.UNBIND_PHONE:
              _this2.loginBox.showBox(_this2.loginBox.BoxType.UNBIND_PHONE);
              break;

             case _this2.loginBox.BoxType.VERIFY_CODE:
              _this2.loginBox.showBox(_this2.loginBox.BoxType.VERIFY_CODE);
            }
          }
        }, this);
      }
    });
    cc._RF.pop();
  }, {} ],
  lobby: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5ffe5/CDyJKjY9LOlyFEGtf", "lobby");
    "use strict";
    var Lobby = cc.Class({
      extends: cc.Component,
      properties: {
        _subGameEntrance: cc.Node,
        middleNode: cc.Node,
        audioBg: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u80cc\u666f\u97f3\u6548"
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        cc.ak.event.on(cc.ak.key.event.START_STATUS_HOTFIX_PROGRESS, function(data) {
          var gameItemArr = _this.middleNode.getComponent("lobbyMiddle").turntale.getComponent("turntable").itemArr;
          var gid = null;
          for (var i in cc.ak.cache.bundleMgr.gamesMap) cc.ak.cache.bundleMgr.gamesMap[i].id === data.rootBundleId && (gid = cc.ak.cache.bundleMgr.gamesMap[i].gid);
          var seg = 1 / data.bundlesLen;
          var off = data.bundleIdx / data.bundlesLen;
          var progress = seg * data.eventAssetsManager.getPercentByFile() + off;
          for (var _i = 0; _i < gameItemArr.length; _i++) {
            var item = gameItemArr[_i];
            item.getComponent("gameItem").getGid() == gid && item.getComponent("gameItem").upData(progress);
          }
          cc.log("START_STATUS_HOTFIX_PROGRESS progress=" + progress + ",off=" + off);
        }, this);
        cc.ak.event.on(cc.ak.key.event.LOBBY_PREPARED, function() {
          _this.prepared();
        }, this);
        cc.ak.event.on(cc.ak.key.event.BUNDLES_CHANGE, function() {
          _this.middleNode.getComponent("lobbyMiddle").turntale.getComponent("turntable").repaint(_this.onSubGameClick.bind(_this), _this);
        }, this);
        this._subGameEntrance = new cc.Node();
        this._subGameEntrance.x = 0;
        this._subGameEntrance.y = 0;
        this._subGameEntrance.width = cc.winSize.width;
        this._subGameEntrance.height = cc.winSize.height;
        this._subGameEntrance.parent = this.node;
        this._subGameEntrance.zIndex = 100;
      },
      start: function start() {
        this._prepared();
        this.middleNode.getComponent("lobbyMiddle").init(this.onSubGameClick.bind(this), this);
      },
      _prepared: function _prepared() {
        cc.ak.util.utils.isAfterHotFixReEnter() || this.prepared();
      },
      prepared: function prepared() {
        cc.sys.localStorage.removeItem(cc.ak.key.cache.REENTER_SUBGAME);
        if (cc.ak.conf.invoke_pair) {
          var pair = cc.ak.conf.invoke_pair;
          cc.ak.event.emit("invoke_" + pair.route, pair);
        }
        cc.ak.conf.invoke_pair = null;
      },
      onEnable: function onEnable() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
      },
      onDestroy: function onDestroy() {
        cc.ak.event.targetOff(this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
      },
      onKeyDown: function onKeyDown() {
        cc.ak.ui.alert({
          text: lan.com.lbl.isExit,
          btns: [ lan.com.lbl.cancel, lan.com.lbl.exit ],
          callback: function callback(idx) {
            1 === idx && cc.game.end();
          }
        });
      },
      onSubGameClick: function onSubGameClick(gid) {
        var _this2 = this;
        cc.log("onSubGameclick");
        cc.ak.key.cache.GAMEID_CLICKED = gid;
        cc.ak.ui.waiting(10, "");
        var gameValid = cc.ak.cache.bundleMgr.validGame(gid);
        Promise.resolve().then(this._reqSubGameConf.bind(this, gid)).then(function(data) {
          return cc.ak.util.hotfixMgr.hotUpdate(data.id, data);
        }).then(function(data) {
          var bundle = cc.ak.cache.bundleMgr.gamesMap[gid];
          if (gameValid) {
            cc.ak.cache.bundleMgr.loadSubGamePackage(gid).then(function() {
              cc.ak.ui.waitingHide();
              cc.log("\u53d1\u9001\u6570\u636e\u7ed9\u5b50\u6e38\u620f");
              _this2._subGameEntrance.destroyAllChildren();
              cc.ak.event.emit(cc.ak.key.event.POPUP_SUGGAME_ENTRANCE + "_" + bundle.id, data, _this2._subGameEntrance);
            });
            return;
          }
          cc.ak.cache.bundleMgr.initPkgBundles().then(cc.ak.cache.bundleMgr.loadSubGamePackage.bind(cc.ak.cache.bundleMgr, gid)).then(function() {
            cc.ak.ui.waitingHide();
            cc.log("\u53d1\u9001\u6570\u636e\u7ed9\u5b50\u6e38\u620f");
            _this2._subGameEntrance.destroyAllChildren();
            cc.ak.event.emit(cc.ak.key.event.POPUP_SUGGAME_ENTRANCE + "_" + bundle.id, data, _this2._subGameEntrance);
          });
        }).catch(function(e) {
          if (e.code === cc.ak.err.CODE.HotFixing) {
            cc.ak.ui.toast(lan.com.lbl.hotfixing);
            return;
          }
          cc.ak.util.utils.HandleError(e);
        });
      },
      _reqSubGameConf: function _reqSubGameConf(gid) {
        return new Promise(function(resolve, reject) {
          var cmd = cc.ak.key.http.SUBGAME;
          var req = cc.ak.util.http.request({
            cmd: cmd,
            data: {
              gid: gid
            }
          }, function(data) {
            cc.ak.ui.waitingHide();
            cc.log("\u5b50\u6e38\u620f\u914d\u7f6e:" + JSON.stringify(data));
            if (0 == data.status) resolve(data.data); else {
              data.cmd = cmd;
              reject(new cc.ak.err.Error(cc.ak.err.CODE.NetDataInvalid, data.statusnote, cc.js.formatStr(lan.com.err.action.httpSubGame, lan.data.statusnote, lan.com.err.sol.retryLater), data));
            }
          });
          cc.ak.ui.rejectErrorWhenHttpErr(reject, req, cmd, lan.com.err.action.httpSubGame);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  loginBox: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d636bC02CFN46Lo2l8A8lee", "loginBox");
    "use strict";
    var PHONE_NUM = 11;
    var CODE_NUM = 4;
    cc.Class({
      extends: cc.Component,
      properties: {
        ndGray: cc.Node,
        btnClose: cc.Button,
        btnOK: cc.Button,
        btnCode: cc.Button,
        btnExtra: cc.Button,
        spTitle: cc.Sprite,
        ndInputPhone: cc.Node,
        ndInputPswd: cc.Node,
        ndInputCode: cc.Node,
        spfTitle: [ cc.SpriteFrame ],
        _boxType: 0,
        _timeNum: 60,
        _needVerify: false,
        _operateKey: ""
      },
      init: function init() {
        this.BoxType = {
          LOGIN_PHONE: 0,
          LOGIN_PSWD: 1,
          FORGOT_PSWD: 2,
          MODIFY_PSWD: 3,
          BIND_PHONE: 4,
          UNBIND_PHONE: 5,
          VERIFY_CODE: 6
        };
        this.TipsType = {
          NORMAL: 0,
          RIGHT: 1,
          WARN: 2,
          ERROR: 3
        };
        this.colorNormal = cc.color(160, 140, 120, 255);
        this.colorRight = cc.color(120, 170, 100, 255);
        this.colorError = cc.color(200, 65, 65, 255);
        this.pos0 = cc.v2(-20, 30);
        this.pos1 = cc.v2(-20, 120);
        this.pos2 = cc.v2(-20, -50);
        this.ndGray.on(cc.Node.EventType.TOUCH_START, function() {}, this);
        this.btnClose.node.on("click", this.onButtonClose, this);
        this.btnCode.node.on("click", this.onButtonCode, this);
        this.btnOK.node.on("click", this.onButtonOK, this);
        this.btnExtra.node.on("click", this.onButtonExtra, this);
        this.ndInputAgain = cc.instantiate(this.ndInputPswd);
        this.ndInputAgain.parent = this.ndInputPswd.parent;
        this.ndInputAgain.position = this.pos2;
        this.hideBox();
      },
      showBox: function showBox(boxType) {
        this.node.active = true;
        this.setBoxType(boxType, true);
      },
      hideBox: function hideBox() {
        this.clear();
        this.node.active = false;
      },
      clear: function clear() {
        this.setInputText(this.ndInputPhone, "", "", "");
        this.setInputText(this.ndInputPswd, "", "", "");
        this.setInputText(this.ndInputCode, "", "", "");
        this.setInputText(this.ndInputAgain, "", "", "");
        this.setInputTips(this.ndInputPhone, "");
        this.setInputTips(this.ndInputPswd, "");
        this.setInputTips(this.ndInputCode, "");
        this.setInputTips(this.ndInputAgain, "");
        this.setExtraText("");
        this.ndInputPhone.active = false;
        this.ndInputPswd.active = false;
        this.ndInputCode.active = false;
        this.ndInputAgain.active = false;
      },
      onButtonClose: function onButtonClose() {
        this.hideBox();
      },
      onButtonCode: function onButtonCode() {
        var _this = this;
        var phone = this.getInputText(this.ndInputPhone);
        var msg = {
          cmd: "sms_send",
          data: {
            phone: phone
          }
        };
        if (this._boxType == this.BoxType.LOGIN_PHONE) {
          if (false == this.checkPhone()) return;
          msg = {
            cmd: "sms_send",
            data: {
              phone: phone
            }
          };
        } else if (this._boxType == this.BoxType.FORGOT_PSWD) {
          if (false == this.checkPhone()) return;
          msg = {
            cmd: "sms_forgot_pwd_send",
            data: {
              phone: phone
            }
          };
        } else if (this._boxType == this.BoxType.MODIFY_PSWD) {
          msg = {
            cmd: "sms_changepwd_send",
            data: {
              token: cc.ak.mc.userMgr.token
            }
          };
          phone = cc.ak.mc.userMgr.phoneNum;
        } else if (this._boxType == this.BoxType.BIND_PHONE) {
          if (false == this.checkPhone()) return;
          msg = {
            cmd: "sms_bind_phone_send",
            data: {
              token: cc.ak.mc.userMgr.token,
              phone: phone
            }
          };
        } else {
          if (this._boxType != this.BoxType.UNBIND_PHONE) return;
          if (this._needVerify) {
            msg = {
              cmd: "sms_unbind_oldphone_send",
              data: {
                token: cc.ak.mc.userMgr.token
              }
            };
            phone = cc.ak.mc.userMgr.phoneNum;
          } else {
            if (false == this.checkPhone()) return;
            msg = {
              cmd: "sms_unbind_newphone_send",
              data: {
                token: cc.ak.mc.userMgr.token,
                new_phone: phone
              }
            };
          }
        }
        cc.log(msg);
        var req = cc.ak.util.http.request(msg, function(data) {
          cc.log(data);
          if (0 == data.status) {
            var tips = "\u9a8c\u8bc1\u7801\u5df2\u7ecf\u53d1\u9001\u5230\u624b\u673a " + phone;
            _this.setInputTips(_this.ndInputCode, tips, _this.TipsType.RIGHT);
            cc.ak.ui.toast(tips);
            _this.setCodeLimit(true);
          } else cc.ak.ui.toast("" + data.statusnote);
        });
      },
      onButtonOK: function onButtonOK() {
        var _this2 = this;
        var phone = this.getInputText(this.ndInputPhone);
        var code = this.getInputText(this.ndInputCode);
        var pswd = this.getInputText(this.ndInputPswd);
        var again = this.getInputText(this.ndInputAgain);
        switch (this._boxType) {
         case this.BoxType.LOGIN_PHONE:
          if (false == this.checkPhone() || false == this.checkCode()) return;
          var token = cc.sys.localStorage.getItem(cc.ak.key.cache.TOKEN) ? cc.sys.localStorage.getItem(cc.ak.key.cache.TOKEN) : "";
          var pro = cc.ak.conf.project;
          var msg = {
            cmd: "phonelogin",
            data: {
              phone: phone,
              smsCode: code,
              token: token,
              client_id: pro.cid,
              client_id_sub: pro.sid,
              os: pro.os,
              game_version: pro.ver
            }
          };
          var req = cc.ak.util.http.request(msg, function(data) {
            cc.log(data);
            if (0 == data.status) {
              cc.ak.mc.userMgr.isbinded = data.isbinded;
              cc.ak.mc.userMgr.token = data.data.token;
              cc.ak.event.emit(cc.ak.key.event.CONNECT_SOCKET, 0);
              _this2.hideBox();
            } else cc.ak.ui.toast(data.statusnote);
          });
          break;

         case this.BoxType.LOGIN_PSWD:
          if (false == this.checkPhone() || false == this.checkPswd()) return;
          var msg = {
            cmd: "login_pwd",
            data: {
              phone: phone,
              pwd: pswd
            }
          };
          var req = cc.ak.util.http.request(msg, function(data) {
            cc.log(data);
            if (0 == data.status) {
              cc.ak.mc.userMgr.isbinded = true;
              cc.ak.mc.userMgr.token = data.data.token;
              cc.ak.event.emit(cc.ak.key.event.CONNECT_SOCKET, 0);
              _this2.hideBox();
            } else cc.ak.ui.toast(data.statusnote);
          });
          break;

         case this.BoxType.FORGOT_PSWD:
          if (false == this.checkPhone() || false == this.checkCode()) return;
          var msg = {
            cmd: "forgot_pwd_check",
            data: {
              phone: phone,
              code: code
            }
          };
          var req = cc.ak.util.http.request(msg, function(data) {
            cc.log(data);
            if (0 == data.status) {
              _this2._operateKey = data.data.chang_pwd_key;
              _this2.setBoxType(_this2.BoxType.MODIFY_PSWD, false);
            } else cc.ak.ui.toast(data.statusnote);
          });
          break;

         case this.BoxType.MODIFY_PSWD:
          if (this._needVerify) {
            if (false == this.checkCode()) return;
            var msg = {
              cmd: "changepwd_check",
              data: {
                token: cc.ak.mc.userMgr.token,
                phone: cc.ak.mc.userMgr.phoneNum,
                code: code
              }
            };
            var req = cc.ak.util.http.request(msg, function(data) {
              cc.log(data);
              if (0 == data.status) {
                _this2._operateKey = data.data.chang_pwd_key;
                _this2.setBoxType(_this2.BoxType.MODIFY_PSWD, false);
              } else cc.ak.ui.toast(data.statusnote);
            });
          } else {
            if (false == this.checkPswd() || false == this.checkAgain()) return;
            var msg = {
              cmd: "changepwd",
              data: {
                chang_pwd_key: this._operateKey,
                pwd: pswd,
                comfirmpwd: again
              }
            };
            var req = cc.ak.util.http.request(msg, function(data) {
              cc.log(data);
              if (0 == data.status) {
                cc.ak.ui.toast("\u64cd\u4f5c\u6210\u529f\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55");
                _this2.hideBox();
              } else cc.ak.ui.toast(data.statusnote);
            });
          }
          break;

         case this.BoxType.BIND_PHONE:
          if (false == this.checkPhone() || false == this.checkCode()) return;
          var msg = {
            cmd: "bindphone",
            data: {
              token: cc.ak.mc.userMgr.token,
              phone: phone,
              code: code
            }
          };
          var req = cc.ak.util.http.request(msg, function(data) {
            cc.log(data);
            if (0 == data.status) {
              cc.ak.mc.userMgr.isbinded = true;
              cc.ak.mc.userMgr.phoneNum = data.data.phone;
              _this2._operateKey = data.data.chang_pwd_key;
              _this2.setBoxType(_this2.BoxType.MODIFY_PSWD, false);
            } else cc.ak.ui.toast(data.statusnote);
          });
          break;

         case this.BoxType.UNBIND_PHONE:
          if (this._needVerify) {
            if (false == this.checkCode()) return;
            var msg = {
              cmd: "unbind_phone_check",
              data: {
                token: cc.ak.mc.userMgr.token,
                phone: cc.ak.mc.userMgr.phoneNum,
                code: code
              }
            };
            var req = cc.ak.util.http.request(msg, function(data) {
              cc.log(data);
              if (0 == data.status) {
                _this2._operateKey = data.data.unbind_phone_key;
                _this2.setBoxType(_this2.BoxType.UNBIND_PHONE, false);
                _this2.setCodeLimit(false);
              } else cc.ak.ui.toast(data.statusnote);
            });
          } else {
            if (false == this.checkPhone() || false == this.checkCode()) return;
            var msg = {
              cmd: "unbind_phone",
              data: {
                token: cc.ak.mc.userMgr.token,
                unbind_phone_key: this._operateKey,
                new_phone: phone,
                new_code: code
              }
            };
            var req = cc.ak.util.http.request(msg, function(data) {
              cc.log(data);
              if (0 == data.status) {
                cc.ak.mc.userMgr.isbinded = false;
                cc.ak.mc.userMgr.phoneNum = "";
                _this2._operateKey = data.data.chang_pwd_key;
                _this2.setBoxType(_this2.BoxType.MODIFY_PSWD, false);
              } else cc.ak.ui.toast(data.statusnote);
            });
          }
        }
      },
      onButtonExtra: function onButtonExtra() {
        this._boxType == this.BoxType.LOGIN_PSWD && this.setBoxType(this.BoxType.FORGOT_PSWD);
      },
      setBoxType: function setBoxType(boxType, needVerify) {
        this.clear();
        this._boxType = boxType;
        this._needVerify = needVerify;
        this.setBoxTitle(boxType);
        switch (boxType) {
         case this.BoxType.LOGIN_PHONE:
          this.setInputText(this.ndInputPhone, "\u624b\u673a\u53f7\uff1a", "\u8bf7\u8f93\u516511\u4f4d\u624b\u673a\u53f7\u7801", "\u8bf7\u8f93\u516511\u4f4d\u624b\u673a\u53f7\u7801", this.pos1);
          this.setInputText(this.ndInputCode, "\u9a8c\u8bc1\u7801\uff1a", "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801", "\u8bf7\u8f93\u5165\u6536\u5230\u7684\u624b\u673a\u9a8c\u8bc1\u7801", this.pos2);
          break;

         case this.BoxType.LOGIN_PSWD:
          this.setInputText(this.ndInputPhone, "\u624b\u673a\u53f7\uff1a", "\u8bf7\u8f93\u516511\u4f4d\u624b\u673a\u53f7\u7801", "\u8bf7\u8f93\u516511\u4f4d\u624b\u673a\u53f7\u7801", this.pos1);
          this.setInputText(this.ndInputPswd, "\u5bc6\u7801\uff1a", "", "\u8bf7\u8f93\u5165\u767b\u5f55\u5bc6\u7801", this.pos2);
          this.setExtraText("\u5fd8\u8bb0\u5bc6\u7801");
          break;

         case this.BoxType.FORGOT_PSWD:
          this.setInputText(this.ndInputPhone, "\u624b\u673a\u53f7\uff1a", "\u8bf7\u8f93\u516511\u4f4d\u624b\u673a\u53f7\u7801", "\u8bf7\u8f93\u516511\u4f4d\u624b\u673a\u53f7\u7801", this.pos1);
          this.setInputText(this.ndInputCode, "\u9a8c\u8bc1\u7801\uff1a", "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801", "\u8bf7\u8f93\u5165\u6536\u5230\u7684\u624b\u673a\u9a8c\u8bc1\u7801", this.pos2);
          break;

         case this.BoxType.MODIFY_PSWD:
          if (this._needVerify) this.setInputText(this.ndInputCode, "\u9a8c\u8bc1\u7801\uff1a", "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801", "\u8bf7\u8f93\u5165\u6536\u5230\u7684\u624b\u673a\u9a8c\u8bc1\u7801", this.pos0); else {
            this.setInputText(this.ndInputPswd, "\u65b0\u5bc6\u7801\uff1a", "", "\u5bc6\u7801\u957f\u5ea66-18\u4f4d\u6570\u5b57\u6216\u5b57\u7b26", this.pos1);
            this.setInputText(this.ndInputAgain, "\u786e\u8ba4\u5bc6\u7801\uff1a", "", "\u8bf7\u518d\u6b21\u8f93\u5165\u76f8\u540c\u7684\u5bc6\u7801", this.pos2);
          }
          break;

         case this.BoxType.BIND_PHONE:
          this.setInputText(this.ndInputPhone, "\u624b\u673a\u53f7\uff1a", "\u8bf7\u8f93\u516511\u4f4d\u624b\u673a\u53f7\u7801", "\u8bf7\u8f93\u516511\u4f4d\u624b\u673a\u53f7\u7801", this.pos1);
          this.setInputText(this.ndInputCode, "\u9a8c\u8bc1\u7801\uff1a", "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801", "\u8bf7\u8f93\u5165\u6536\u5230\u7684\u624b\u673a\u9a8c\u8bc1\u7801", this.pos2);
          break;

         case this.BoxType.UNBIND_PHONE:
          if (this._needVerify) this.setInputText(this.ndInputCode, "\u9a8c\u8bc1\u7801\uff1a", "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801", "\u8bf7\u8f93\u5165\u6536\u5230\u7684\u624b\u673a\u9a8c\u8bc1\u7801", this.pos0); else {
            this.setInputText(this.ndInputPhone, "\u65b0\u624b\u673a\u53f7\uff1a", "\u8bf7\u8f93\u516511\u4f4d\u624b\u673a\u53f7\u7801", "\u8bf7\u8f93\u516511\u4f4d\u624b\u673a\u53f7\u7801", this.pos1);
            this.setInputText(this.ndInputCode, "\u9a8c\u8bc1\u7801\uff1a", "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801", "\u8bf7\u8f93\u5165\u6536\u5230\u7684\u624b\u673a\u9a8c\u8bc1\u7801", this.pos2);
          }
        }
      },
      setBoxTitle: function setBoxTitle(index) {
        if (index < 0 || index > 6) return;
        this.spTitle.spriteFrame = this.spfTitle[index];
      },
      setExtraText: function setExtraText(text) {
        if (null == text || "" == text) this.btnExtra.node.active = false; else {
          this.btnExtra.node.active = true;
          this.btnExtra.getComponent(cc.Label).string = text;
        }
      },
      setInputText: function setInputText(node, name, placeholder, tips, pos) {
        node.active = true;
        node.position = null == pos ? this.pos1 : pos;
        var labName = node.getChildByName("lab_name").getComponent(cc.Label);
        var labTips = node.getChildByName("lab_tips").getComponent(cc.Label);
        var editBox = node.getChildByName("edit_box").getComponent(cc.EditBox);
        labName.string = name;
        labTips.string = tips;
        editBox.string = "";
        editBox.placeholder = placeholder;
        this.setInputLabs(node, "");
        this.setInputTips(node, tips);
      },
      getInputText: function getInputText(node) {
        var editBox = node.getChildByName("edit_box").getComponent(cc.EditBox);
        return editBox.string;
      },
      setInputTips: function setInputTips(node, tips, type) {
        var labTips = node.getChildByName("lab_tips").getComponent(cc.Label);
        labTips.string = tips;
        type == this.TipsType.RIGHT ? labTips.node.color = this.colorRight : type == this.TipsType.ERROR ? labTips.node.color = this.colorError : labTips.node.color = this.colorNormal;
      },
      setInputLabs: function setInputLabs(node, text) {
        var count = 0;
        node.name == this.ndInputPhone.name ? count = PHONE_NUM : node.name == this.ndInputCode.name && (count = CODE_NUM);
        var ndNums = node.getChildByName("nd_nums");
        for (var i = 0; i < count; i++) {
          var lab = ndNums.getChildByName("" + i).getChildByName("num").getComponent(cc.Label);
          lab.string = text ? text.substr(i, 1) : "";
        }
      },
      setCodeLimit: function setCodeLimit(val) {
        this._timeNum = 60;
        var labTimer = this.ndInputCode.getChildByName("lab_timer").getComponent(cc.Label);
        if (val) {
          this.btnCode.interactable = false;
          labTimer.node.active = true;
          labTimer.string = this._timeNum;
          this.schedule(this.updateTimer, 1, this._timeNum);
        } else {
          this.btnCode.interactable = true;
          labTimer.node.active = false;
          this.unschedule(this.updateTimer);
        }
      },
      updateTimer: function updateTimer() {
        var labTimer = this.ndInputCode.getChildByName("lab_timer").getComponent(cc.Label);
        this._timeNum--;
        if (this._timeNum < 0) {
          this._timeNum = 0;
          this.btnCode.interactable = true;
          labTimer.node.active = false;
        }
        labTimer.string = this._timeNum;
      },
      checkPhone: function checkPhone() {
        var text = this.getInputText(this.ndInputPhone);
        if (11 == text.length) return true;
        text.length > 0 ? cc.ak.ui.toast(lan.com.lbl.register.phoneErrTips.err1) : cc.ak.ui.toast(lan.com.lbl.register.phoneErrTips.err2);
        return false;
      },
      checkCode: function checkCode() {
        var text = this.getInputText(this.ndInputCode);
        if (4 == text.length) return true;
        cc.ak.ui.toast(lan.com.lbl.register.phoneErrTips.err3);
        return false;
      },
      checkPswd: function checkPswd() {
        var text = this.getInputText(this.ndInputPswd);
        if (text.length >= 6 && text.length <= 18) return true;
        if (text.length > 0) {
          cc.ak.ui.toast("\u5bc6\u7801\u957f\u5ea6\u4e0d\u7b26\u5408\u89c4\u8303");
          return false;
        }
        cc.ak.ui.toast("\u8bf7\u8f93\u5165\u5bc6\u7801");
        return false;
      },
      checkAgain: function checkAgain() {
        var text = this.getInputText(this.ndInputAgain);
        if (text.length > 0) {
          if (text == this.getInputText(this.ndInputPswd)) return true;
          cc.ak.ui.toast("\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u4e00\u81f4");
          return false;
        }
        cc.ak.ui.toast("\u8bf7\u518d\u6b21\u8f93\u5165\u5bc6\u7801");
        return false;
      },
      onEditDidBegan: function onEditDidBegan(node, data) {
        "phone" == data ? this.ndInputPhone.getChildByName("edit_box").scale = 0 : "code" == data && (this.ndInputCode.getChildByName("edit_box").scale = 0);
      },
      onEditTextChanged: function onEditTextChanged(text, node, data) {
        "phone" == data ? this.setInputLabs(this.ndInputPhone, text) : "code" == data && this.setInputLabs(this.ndInputCode, text);
      },
      onEditDidEnded: function onEditDidEnded(node, data) {
        "phone" == data ? this.ndInputPhone.getChildByName("edit_box").scale = 1 : "code" == data && (this.ndInputCode.getChildByName("edit_box").scale = 1);
      },
      onEditDidReturn: function onEditDidReturn(node, data) {
        cc.log("data: " + data);
      }
    });
    cc._RF.pop();
  }, {} ],
  login: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6fca3DKRXhIeJpRBen+7Z+S", "login");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        svTestToken: cc.ScrollView,
        svTestHost: cc.ScrollView,
        btnClearToken: cc.Button,
        pfLoginBox: cc.Prefab,
        btnLoginFast: cc.Button,
        btnLoginPhone: cc.Button,
        btnLoginPswd: cc.Button
      },
      onLoad: function onLoad() {
        this.initTest();
        this.btnLoginFast.node.on("click", this.onButtonLoginFast, this);
        this.btnLoginPhone.node.on("click", this.onButtonLoginPhone, this);
        this.btnLoginPswd.node.on("click", this.onButtonLoginPswd, this);
        var box = cc.instantiate(this.pfLoginBox);
        box.parent = this.node;
        this.loginBox = box.getComponent("loginBox");
        this.loginBox.init();
        var token = cc.sys.localStorage.getItem(cc.ak.key.cache.TOKEN);
        cc.log("cid: " + cc.ak.conf.project.cid + ", token: " + token);
        if (cc.ak.conf.project.cid == cc.ak.const.channel.INVITE) if (null == token || token.length <= 0) {
          cc.log("\u9080\u8bf7\u5305 - \u9996\u6b21\u767b\u5f55");
          this.btnLoginFast.node.active = false;
          this.btnLoginPhone.node.x = -300;
          this.btnLoginPswd.node.x = 300;
        } else cc.log("\u9080\u8bf7\u5305 - \u5feb\u901f\u767b\u5f55"); else null == token || token.length <= 0 ? cc.log("\u79cd\u5b50\u5305 - \u6e38\u5ba2\u767b\u5f55") : cc.log("\u79cd\u5b50\u5305 - \u5feb\u901f\u767b\u5f55");
      },
      start: function start() {},
      onButtonLoginFast: function onButtonLoginFast() {
        var value = cc.sys.localStorage.getItem(cc.ak.key.cache.TOKEN);
        var token = value || "";
        var req = cc.ak.util.http.request({
          cmd: "login",
          data: {
            token: token
          }
        }, function(data) {
          cc.log(data);
          if (0 == data.status) {
            cc.ak.mc.userMgr.isbinded = data.isbinded;
            cc.ak.mc.userMgr.token = data.data.token;
            cc.ak.event.emit(cc.ak.key.event.CONNECT_SOCKET, 0);
          } else cc.ak.ui.toast(data.statusnote);
        });
      },
      onButtonLoginPhone: function onButtonLoginPhone() {
        this.loginBox.showBox(this.loginBox.BoxType.LOGIN_PHONE);
      },
      onButtonLoginPswd: function onButtonLoginPswd() {
        this.loginBox.showBox(this.loginBox.BoxType.LOGIN_PSWD);
      },
      onButtonForgotPswd: function onButtonForgotPswd() {
        this.loginBox.showBox(this.loginBox.BoxType.FORGOT_PSWD);
      },
      gameRepair: function gameRepair() {
        cc.ak.util.utils.gameRepair();
      },
      initTest: function initTest() {
        if (cc.ak.conf.debug && cc.ak.conf.debug.token) {
          this.svTestToken.active = true;
          this.svTestHost.active = true;
          this.btnClearToken.node.active = true;
          var contentTestToken = this.svTestToken.content;
          var contentTestHost = this.svTestHost.content;
          var spacing = 0;
          var template = cc.instantiate(cc.ak.ui.pfCommonBtn);
          contentTestToken.height = cc.ak.conf.debug.token.length * (template.height + spacing);
          for (var i = 0; i < cc.ak.conf.debug.token.length; i++) {
            var item = cc.instantiate(cc.ak.ui.pfCommonBtn);
            contentTestToken.addChild(item);
            item.x = 0;
            item.y = -item.height * (.5 + i) - spacing * (i + 1);
            item.width = 350;
            item.name = "" + i;
            var itemCmp = item.getComponent("uiBtnCommon");
            itemCmp.setStyleSure();
            itemCmp.lblText.string = cc.ak.util.utils.CutStr(cc.ak.conf.debug.token[i], 20);
            item.on("click", this.onTestTokenClick, this);
          }
          contentTestHost.height = cc.ak.conf.debug.gate.length * template.height;
          for (var j = 0; j < cc.ak.conf.debug.gate.length; j++) {
            var _item = cc.instantiate(cc.ak.ui.pfCommonBtn);
            contentTestHost.addChild(_item);
            _item.width = 300;
            _item.x = 0;
            _item.y = -60 - j * _item.height;
            var _itemCmp = _item.getComponent("uiBtnCommon");
            _itemCmp.setStyleSure();
            _item.name = "" + j;
            _itemCmp.lblText.string = cc.ak.conf.debug.gate[j].ip;
            _item.on("click", this.onTestHostClick, this);
          }
          this.btnClearToken.node.on("click", function() {
            cc.sys.localStorage.setItem(cc.ak.key.cache.TOKEN, "");
          }, this);
        } else {
          this.svTestToken.active = false;
          this.svTestHost.active = false;
          this.btnClearToken.node.active = false;
        }
      },
      onTestHostClick: function onTestHostClick(btn) {
        cc.log("IP: " + cc.ak.conf.debug.gate[btn.name.substring(0, 1)].ip);
        cc.ak.cache.ipList.setDebugGate(cc.ak.conf.debug.gate[btn.name.substring(0, 1)]);
      },
      onTestTokenClick: function onTestTokenClick(btn) {
        cc.log("Token: " + cc.ak.conf.debug.token[btn.name.substring(0, 1)]);
        var token = cc.ak.conf.debug.token[btn.name.substring(0, 1)];
        token = token.substr(token.indexOf(":") + 1);
        cc.ak.mc.userMgr.token = token;
        cc.ak.mc.userMgr.isbinded = false;
        cc.ak.event.emit(cc.ak.key.event.CONNECT_SOCKET, 0);
      }
    });
    cc._RF.pop();
  }, {} ],
  mission: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1bfaoitctBlrQY4tHRG0DD", "mission");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        spGray: cc.Node,
        btnClose: cc.Button,
        btnMission: [ cc.Button ],
        btnTest: cc.Button,
        Scroll: cc.ScrollView,
        ndContent: cc.Node,
        ndItem: cc.Node,
        _loopType: 0,
        audioTask: {
          default: null,
          type: cc.AudioClip
        }
      },
      onLoad: function onLoad() {
        this.spGray.on(cc.Node.EventType.TOUCH_START, function() {}, this);
        this.btnClose.node.on("click", this.onButtonClose, this);
        this.btnTest.node.on("click", this.onButtonTest, this);
        cc.ak.event.on(cc.ak.mc.missionMgr.key.STATUS_NOTIFY, this.onRewardNotify, this);
        this.ndItem.active = false;
        for (var i = 0; i < this.btnMission.length; i++) this.btnMission[i].node.on("click", this.onTaskSelected, this);
        this.btnMission[0].node.emit("click", this.btnMission[0]);
        cc.ak.util.audioMgr.playSFX(this.audioTask);
      },
      start: function start() {
        this.updateBadge();
      },
      onTaskSelected: function onTaskSelected(node) {
        var loopType = 0;
        for (var i = 0; i < this.btnMission.length; i++) {
          var btn = this.btnMission[i];
          if (node.name == btn.name) {
            loopType = proto.cmd_mission.MISSION_LOOP_TYPE.MISSION_LOOP_TYPE_ONCE + i;
            btn.interactable = false;
          } else btn.interactable = true;
        }
        this._loopType = loopType;
        this.updateList();
      },
      onDoMission: function onDoMission(node, mission) {
        cc.ak.mc.missionMgr.gotoMission(mission.TargetType);
        mission.TargetType == proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_GAMES ? this.onButtonClose() : mission.TargetType == proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_ROUNDS && this.onButtonClose();
      },
      onGetReward: function onGetReward(node, mission) {
        cc.ak.mc.missionMgr.requestObtainPrize(mission.MissionId);
      },
      onRewardNotify: function onRewardNotify(event) {
        var mission = event.getUserData();
        mission.TargetType == proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_MOBILE || mission.TargetType == proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_BUY || mission.TargetType == proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_FIRST_BUY || mission.TargetType == proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_FIRST_BUY_BACK || mission.TargetType == proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_CHECKIN || mission.TargetType == proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_GAMES || mission.TargetType == proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_ROUNDS;
        if (mission.Status && mission.Status.Status == proto.cmd_mission.MISSION_STATUS_TYPE.MISSION_STATUS_TYPE_FINISH) {
          var msg = "\u6210\u529f\u9886\u53d6" + (mission.Coin / 1e3).toFixed(2) + "\u5143";
          cc.log(msg);
          cc.ak.ui.alert({
            text: msg,
            btns: [ "\u786e\u5b9a" ]
          });
        }
        this.updateList();
        this.updateBadge();
      },
      onButtonClose: function onButtonClose() {
        cc.ak.event.off(cc.ak.mc.missionMgr.key.STATUS_NOTIFY, this.onRewardNotify, this);
        this.node.removeFromParent();
        cc.audioEngine.stopAllEffects();
      },
      onButtonTest: function onButtonTest() {
        cc.sys.localStorage.setItem(cc.ak.mc.missionMgr.key.CHECKIN_TIME, 0);
        cc.sys.localStorage.setItem(cc.ak.mc.missionMgr.key.REBATE_TIME, 0);
        cc.sys.localStorage.setItem(cc.ak.mc.missionMgr.key.TODAY_POPUP_TIME, 0);
      },
      updateList: function updateList() {
        var missionList = this.selectList(this._loopType);
        var space = 10;
        var size = this.ndItem.getContentSize();
        this.ndContent.removeAllChildren(true);
        this.ndContent.y = this.Scroll.node.height / 2;
        this.ndContent.height = (size.height + space) * missionList.length;
        for (var i = 0; i < missionList.length; i++) {
          var y = -size.height / 2 - (size.height + space) * i;
          var item = cc.instantiate(this.ndItem);
          item.position = cc.v2(0, y);
          item.parent = this.ndContent;
          item.active = true;
          this.setItemInfo(item, missionList[i]);
        }
      },
      selectList: function selectList(loopType) {
        var missionList = cc.ak.mc.missionMgr.missionList;
        var tempList = [];
        for (var i = 0; i < missionList.length; i++) {
          var mission = missionList[i];
          if (1 != mission.Show) continue;
          loopType == mission.LoopType && tempList.push(mission);
        }
        tempList.sort(function(a, b) {
          return a.SortId < b.SortId ? 1 : a.SortId > b.SortId ? -1 : 0;
        });
        return this.filterList(tempList);
      },
      filterList: function filterList(missionList) {
        if (false == cc.ak.mc.missionMgr.isMissionFinish(proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_FIRST_BUY)) for (var i = missionList.length - 1; i >= 0; i--) missionList[i].TargetType == proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_FIRST_BUY_BACK && missionList.splice(i, 1);
        var undo = [];
        var wait = [];
        var done = [];
        for (var i = 0; i < missionList.length; i++) {
          var mission = missionList[i];
          if (null == mission.Status) continue;
          mission.Status.Status == proto.cmd_mission.MISSION_STATUS_TYPE.MISSION_STATUS_TYPE_UNREACH ? undo.push(mission) : mission.Status.Status == proto.cmd_mission.MISSION_STATUS_TYPE.MISSION_STATUS_TYPE_UNOBTAIN ? wait.push(mission) : done.push(mission);
        }
        missionList = wait;
        missionList = missionList.concat(undo);
        missionList = missionList.concat(done);
        return missionList;
      },
      setItemInfo: function setItemInfo(item, mission) {
        var _this = this;
        item.getChildByName("lab_name").getComponent(cc.Label).string = mission.Name;
        item.getChildByName("lab_detail").getComponent(cc.Label).string = mission.Content;
        if (mission.Status) {
          var targetNum = mission.TargetNum;
          var progress = mission.Status.Progress;
          var status = mission.Status.Status;
          var showBtnFinish = 1 == mission.ShowBtnFinish;
          var showBtnUnfinish = 1 == mission.ShowBtnUnfinish;
          var actionLabel = mission.ActionLabel.length > 0 ? mission.ActionLabel : "\u524d\u5f80";
          var showBadge = true;
          if (mission.TargetType == proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_CHECKIN) {
            status = proto.cmd_mission.MISSION_STATUS_TYPE.MISSION_STATUS_TYPE_UNREACH;
            showBtnUnfinish = true;
            actionLabel = "\u524d\u5f80";
            showBadge = false == cc.ak.mc.missionMgr.isMissionDoneToday(mission.TargetType);
          } else if (mission.TargetType == proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_FIRST_BUY_BACK) {
            status = proto.cmd_mission.MISSION_STATUS_TYPE.MISSION_STATUS_TYPE_UNREACH;
            showBtnUnfinish = true;
            actionLabel = "\u524d\u5f80";
            showBadge = false == cc.ak.mc.missionMgr.isMissionDoneToday(mission.TargetType);
          } else if (mission.TargetType == proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_FIRST_BUY) {
            targetNum = Math.floor(targetNum / 1e3);
            progress = Math.floor(progress / 1e3);
          }
          item.getChildByName("lab_progress").getComponent(cc.Label).string = progress + "/" + targetNum;
          item.getChildByName("progress_bar").getComponent(cc.ProgressBar).progress = progress / targetNum;
          var btn = item.getChildByName("btn_do");
          if (status == proto.cmd_mission.MISSION_STATUS_TYPE.MISSION_STATUS_TYPE_UNREACH) {
            btn.active = showBtnUnfinish;
            btn.getChildByName("text").getComponent(cc.Label).string = actionLabel;
            btn.getChildByName("badge").active = showBadge;
            btn.on("click", function() {
              _this.onDoMission(item, mission);
            }, this);
          } else if (status == proto.cmd_mission.MISSION_STATUS_TYPE.MISSION_STATUS_TYPE_UNOBTAIN) {
            btn.active = showBtnFinish;
            btn.getChildByName("text").getComponent(cc.Label).string = "\u9886\u53d6\u5956\u52b1";
            btn.getChildByName("badge").active = showBadge;
            btn.on("click", function() {
              _this.onGetReward(item, mission);
            }, this);
          } else if (status == proto.cmd_mission.MISSION_STATUS_TYPE.MISSION_STATUS_TYPE_FINISH) {
            btn.getComponent(cc.Button).interactable = false;
            btn.getChildByName("text").getComponent(cc.Label).string = "\u5df2\u9886\u53d6";
            btn.getChildByName("badge").active = false;
          } else if (status == proto.cmd_mission.MISSION_STATUS_TYPE.MISSION_STATUS_TYPE_INVALID) {
            btn.getComponent(cc.Button).interactable = false;
            btn.getChildByName("text").getComponent(cc.Label).string = "\u5df2\u5931\u6548";
            btn.getChildByName("badge").active = false;
          } else btn.active = false;
        }
      },
      updateBadge: function updateBadge() {
        var allclear = true;
        for (var i = 1; i <= 3; i++) {
          var clear = cc.ak.mc.missionMgr.isBadgeClear(i);
          var badge = null;
          if (i == proto.cmd_mission.MISSION_LOOP_TYPE.MISSION_LOOP_TYPE_ONCE) badge = this.btnMission[0].node.getChildByName("badge"); else if (i == proto.cmd_mission.MISSION_LOOP_TYPE.MISSION_LOOP_TYPE_DAY) badge = this.btnMission[1].node.getChildByName("badge"); else {
            if (i != proto.cmd_mission.MISSION_LOOP_TYPE.MISSION_LOOP_TYPE_WEEK) break;
            badge = this.btnMission[2].node.getChildByName("badge");
          }
          badge.active = !clear;
          clear || (allclear = false);
        }
        allclear && cc.ak.mc.missionMgr.requestUpdateBadge(false);
      }
    });
    cc._RF.pop();
  }, {} ],
  notice: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7c404jgkrpLkaO0CLJ8+x5Q", "notice");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        item: {
          default: null,
          type: cc.Node
        },
        scrollView: {
          default: null,
          type: cc.Node
        },
        textContent: {
          default: null,
          type: cc.Node
        },
        tMailList: null,
        tCurMail: null
      },
      onLoad: function onLoad() {
        cc.find("bgSprite/frame/closeBtn", this.node).on("click", this.onCloseBtn, this);
        cc.find("bgSprite/textContent/delBtn", this.node).on("click", this.onDelMail, this);
        this.scrollView = cc.find("bgSprite/scrollView", this.node);
        this.textContent = cc.find("bgSprite/textContent", this.node);
        this.textContent.active = false;
        this.item.active = false;
        this.refreshMailList();
        cc.ak.event.on(cc.ak.key.event.UPDATE_MAIL, function() {
          this.refreshMailList();
        }.bind(this));
      },
      start: function start() {},
      onCloseBtn: function onCloseBtn() {
        if (this.scrollView.active) return this.node.destroy();
        this.scrollView.active = true;
        this.textContent.active = false;
      },
      onItem: function onItem(event) {
        var nMailID = parseInt(event.node.name);
        var tMail = null;
        for (var i = 0; i < this.tMailList.length; i++) if (this.tMailList[i].MailId == nMailID) {
          tMail = this.tMailList[i];
          this.tCurMail = tMail;
          break;
        }
        this.setMailReaded(tMail);
        this.scrollView.active = false;
        this.textContent.active = true;
        cc.find("title", this.textContent).getComponent(cc.Label).string = tMail.MailTitle;
        cc.find("text", this.textContent).getComponent(cc.Label).string = tMail.MailMsg;
      },
      onDelMail: function onDelMail() {
        var tMail = this.tCurMail;
        this.requestReaded(tMail.MailId, 2);
        for (var i = 0; i < this.tMailList.length; i++) this.tMailList[i].MailId == tMail.MailId && this.tMailList.splice(i, 1);
        cc.ak.data.set(cc.ak.key.data.MAIL_LIST, this.tMailList);
        this.refreshMailList();
        this.onCloseBtn();
      },
      requestReaded: function requestReaded(nMailID, nType) {
        var data = new proto.cmd_message.CMailMsgHandInfo();
        data.MailId = nMailID;
        data.Type = nType;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_MSG, proto.cmd_net.CMD_MSG.CMD_MSG_MAILMSG_HANDLE_REQ, data);
      },
      setMailReaded: function setMailReaded(tMail) {
        tMail.Readed = 1;
        cc.ak.data.set(cc.ak.key.data.MAIL_LIST, this.tMailList);
        this.requestReaded(tMail.MailId, 1);
        var item = this.item.parent.getChildByName(tMail.MailId.toString());
        item.getChildByName("dot").active = false;
        item.getChildByName("state").getComponent(cc.Label).string = "\u5df2\u8bfb";
        cc.find("mailTag/mail0", item).active = false;
        var hasNotRead = false;
        for (var i = 0; i < this.tMailList.length; i++) 0 == this.tMailList[i].Readed && (hasNotRead = true);
        false == hasNotRead && cc.ak.mc.badgeMgr.readed(12);
      },
      refreshMailList: function refreshMailList() {
        if (null == this.node) return;
        var children = this.item.parent.children;
        for (var i = 0; i < children.length; i++) "item" != children[i].name && children[i].destroy();
        var tMailList = cc.ak.data.get(cc.ak.key.data.MAIL_LIST);
        if (null == tMailList) return;
        for (var i = 0; i < tMailList.length; i++) {
          var item = cc.instantiate(this.item);
          item.parent = this.item.parent;
          item.name = tMailList[i].MailId.toString();
          item.active = true;
          item.y = -100 - 200 * i;
          item.on("click", this.onItem, this);
          cc.find("title", item).getComponent(cc.Label).string = tMailList[i].MailTitle;
          cc.find("state", item).getComponent(cc.Label).string = 1 == tMailList[i].Readed ? "\u5df2\u8bfb" : "\u672a\u8bfb";
          cc.find("time", item).getComponent(cc.Label).string = new Date(1e3 * parseInt(tMailList[i].Posttime)).toLocaleString().replace(/:\d{1,2}$/, " ");
          cc.find("dot", item).active = 0 == tMailList[i].Readed;
          cc.find("mailTag/mail0", item).active = 0 == tMailList[i].Readed;
        }
        this.item.parent.height = 200 * tMailList.length + 100;
        this.tMailList = tMailList;
      }
    });
    cc._RF.pop();
  }, {} ],
  preloadScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a1329Y1opZLs4uPar8aCZZ6", "preloadScene");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {},
      onScenceProgress: function onScenceProgress(completedCount, totalCount, item) {
        var progress = cc.find("progress", this.node).getComponent(cc.Label);
        var nPercent = Math.floor(completedCount / totalCount * 100);
        progress.string = nPercent.toString() + "%";
        var progressBar = cc.find("progressBar", this.node).getComponent(cc.ProgressBar);
        progressBar.progress = completedCount / totalCount;
      },
      onScenceLoaded: function onScenceLoaded(error, asset) {}
    });
    cc._RF.pop();
  }, {} ],
  rebateCfgItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d34c4XXYXJFBYJ+swqTQJiO", "rebateCfgItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        labSum: cc.Label,
        labRate: cc.Label
      },
      start: function start() {},
      setSumAndRate: function setSumAndRate(sum, rate) {
        var str = "";
        sum / 1e3 / 1e4 < 1e4 && (str = parseInt(sum / 1e3 / 1e4) + "\u4e07");
        sum / 1e3 / 1e4 > 1e4 && (str = parseInt(sum / 1e3 / 1e4) + "\u4ebf");
        this.labSum.string = "" + str;
        this.labRate.string = (100 * rate).toFixed(1) + "%";
      }
    });
    cc._RF.pop();
  }, {} ],
  rebate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c24daz1o/1Gu69v3L/UQuhP", "rebate");
    "use strict";
    var KEY_TIME = "rebate_time";
    var KEY_INDEX = "rebate_index";
    cc.Class({
      extends: cc.Component,
      properties: {
        spGray: cc.Node,
        btnClose: cc.Button,
        btnReward: cc.Button,
        btnRecharge: cc.Button,
        labTotal: cc.Label,
        ndItems: [ cc.Node ],
        _missionList: [],
        _checkIndex: -1,
        _checkTime: 0,
        _currIndex: -1
      },
      onLoad: function onLoad() {
        this.spGray.on(cc.Node.EventType.TOUCH_START, function() {}, this);
        this.btnClose.node.on("click", this.onButtonClose, this);
        this.btnReward.node.on("click", this.onButtonReward, this);
        this.btnRecharge.node.on("click", this.onButtonRecharge, this);
        cc.ak.event.on(cc.ak.mc.missionMgr.key.STATUS_NOTIFY, this.onRewardNotify, this);
        this._currIndex = -1;
        this.updateData();
        this.updateButton();
      },
      onButtonClose: function onButtonClose() {
        cc.ak.event.off(cc.ak.mc.missionMgr.key.STATUS_NOTIFY, this.onRewardNotify, this);
        this.node.removeFromParent();
      },
      onButtonRecharge: function onButtonRecharge() {
        cc.ak.mc.missionMgr.gotoMission(proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_BUY);
        this.onButtonClose();
      },
      onButtonReward: function onButtonReward() {
        var index = this.getCurrIndex();
        var mission = this._missionList[index];
        if (null == mission) return;
        cc.ak.mc.missionMgr.requestClientResult(mission.MissionId);
        cc.log("[rebate] missionID: " + mission.MissionId);
        this.btnReward.interactable = false;
        this.scheduleOnce(this.updateButton, 3);
      },
      onRewardNotify: function onRewardNotify(event) {
        var mission = event.getUserData();
        if (mission.TargetType != proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_FIRST_BUY_BACK) return;
        if (mission.Status && mission.Status.Status == proto.cmd_mission.MISSION_STATUS_TYPE.MISSION_STATUS_TYPE_FINISH) {
          cc.log("\u9886\u53d6\u8fd4\u5229\u6210\u529f");
          this.onButtonClose();
        }
      },
      updateData: function updateData() {
        this._missionList = [];
        var curr = cc.ak.mc.missionMgr.getRootMission(proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_FIRST_BUY_BACK);
        this._missionList.push(curr);
        for (var i = 1; i < 7; i++) {
          if (null == curr) continue;
          curr = cc.ak.mc.missionMgr.getNextMission(curr.MissionId);
          this._missionList.push(curr);
        }
        cc.log(this._missionList);
        var isFinishToday = cc.ak.mc.missionMgr.isMissionDoneToday(proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_FIRST_BUY_BACK);
        var coin = 0;
        for (var i = 0; i < this._missionList.length; i++) {
          var mission = this._missionList[i];
          if (null == mission) continue;
          this.ndItems[i].getChildByName("lab_gold").getComponent(cc.Label).string = (mission.Coin / 1e3).toFixed(2);
          coin += mission.Coin;
          if (mission.Status) if (mission.Status.Status >= proto.cmd_mission.MISSION_STATUS_TYPE.MISSION_STATUS_TYPE_FINISH) this.ndItems[i].getChildByName("sp_done").active = true; else if (false == isFinishToday && this._currIndex < 0) {
            this._currIndex = i;
            this.ndItems[i].getChildByName("sp_active").active = true;
          }
        }
        this.labTotal.string = Math.floor(coin / 1e3);
      },
      updateButton: function updateButton() {
        if (cc.ak.mc.missionMgr.isMissionFinish(proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_FIRST_BUY)) {
          this.btnReward.node.active = true;
          this.btnRecharge.node.active = false;
          cc.ak.mc.missionMgr.isMissionDoneToday(proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_FIRST_BUY_BACK) ? this.btnReward.interactable = false : this.btnReward.interactable = true;
        } else {
          this.btnRecharge.node.active = true;
          this.btnReward.node.active = false;
        }
      },
      getCurrIndex: function getCurrIndex() {
        return this._currIndex;
      }
    });
    cc._RF.pop();
  }, {} ],
  recordItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a3255YtSe9PurBWV+cMFOWO", "recordItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        spfResult: {
          default: [],
          type: cc.SpriteFrame
        },
        spResult: {
          default: [],
          type: cc.Sprite
        }
      },
      setData: function setData(data) {
        for (var i = 0; i < data.length; i++) this.spResult[i].spriteFrame = this.spfResult[data[i]];
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  registered: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "56384oJ0l1H5L6apEX1tmyh", "registered");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btnBack: cc.Button,
        btnSendSms: cc.Button,
        btnBindPhone: cc.Button,
        phoneNum: cc.EditBox,
        code: cc.EditBox,
        labSendSmsTip: cc.Label
      },
      onLoad: function onLoad() {
        var _this = this;
        this.getComponent(cc.Button)._soundOn = false;
        this.node.on("click", function() {});
        this.btnBack.node.on("click", function() {
          _this.node.destroy();
        });
        this.btnSendSms.node.on("click", function() {
          if (_this.checkPhoneNum()) var req = cc.ak.util.http.request({
            cmd: "sms_send",
            data: {
              phone: _this.phoneNum.string
            }
          }, function(data) {
            if (0 == data.status) {
              cc.ak.ui.toast(lan.com.lbl.register.phoneSendTips);
              _this.btnSendSms.interactable = false;
              _this.setTime(60);
            } else {
              cc.log("sendSms data.status : " + data.status);
              cc.ak.ui.toast("" + data.status);
            }
          });
        });
        this.btnBindPhone.node.on("click", function() {
          if (_this.checkPhoneNum() && _this.checkCode()) {
            if (cc.ak.mc.userMgr.uid) if (cc.ak.mc.userMgr.phoneNum) {
              var data = {
                phone: _this.phoneNum.string,
                smsCode: _this.code.string
              };
              cc.ak.util.http.add_param("token", "");
            } else var data = {
              phone: _this.phoneNum.string,
              smsCode: _this.code.string,
              token: cc.ak.mc.userMgr.token
            }; else {
              var data = {
                phone: _this.phoneNum.string,
                smsCode: _this.code.string
              };
              cc.ak.util.http.add_param("token", "");
            }
            var req = cc.ak.util.http.request({
              cmd: "phonelogin",
              data: data
            }, function(data) {
              if (0 == data.status) {
                cc.ak.mc.userMgr.token = data.data.token;
                cc.ak.util.socketMgr.is_connected() || cc.ak.event.emit(cc.ak.key.event.CONNECT_SOCKET, 0);
              } else {
                cc.ak.ui.toast("" + data.statusnote);
                cc.log("sendSms data.status : " + data.status);
              }
            });
          }
        });
      },
      onDestroy: function onDestroy() {
        clearInterval(this.timeID);
      },
      setTime: function setTime(time) {
        this.setStartTime(time);
        clearInterval(this.timeID);
        this.timeID = setInterval(this.updateTime.bind(this), 1e3);
      },
      updateTime: function updateTime() {
        if (0 == this.time--) {
          clearInterval(this.timeID);
          this.labSendSmsTip.string = lan.com.lbl.register.sendSms;
          this.btnSendSms.interactable = true;
        } else this.labSendSmsTip && (this.labSendSmsTip.string = this.time.toString());
      },
      setStartTime: function setStartTime(time) {
        this.time = time;
        this.labSendSmsTip.string = time.toString();
      },
      start: function start() {},
      phoneEditTxt: function phoneEditTxt(sender) {
        cc.log("phoneEdit : " + this.phoneNum.string);
      },
      codeEditTxt: function codeEditTxt(sender) {
        cc.log("codeEdit : " + this.code.string);
      },
      checkPhoneNum: function checkPhoneNum() {
        if (11 != this.phoneNum.string.length) {
          if (null == this.phoneNum.string.length) {
            cc.ak.ui.toast(lan.com.lbl.register.phoneErrTips.err2);
            return false;
          }
          cc.ak.ui.toast(lan.com.lbl.register.phoneErrTips.err1);
          return false;
        }
        return true;
      },
      checkCode: function checkCode() {
        if (null != this.code.string) return true;
        cc.ak.ui.toast(lan.com.lbl.register.phoneErrTips.err3);
        return false;
      }
    });
    cc._RF.pop();
  }, {} ],
  shop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a67ad+V441ImZNFgnlOtmwD", "shop");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        close: cc.Button,
        btnAliPay: cc.Button,
        btnWxPay: cc.Button,
        btnGiftCode: cc.Button,
        btnVipPay: cc.Button,
        wxListNode: cc.Node,
        wxEdit: cc.EditBox,
        btnWxSubmit: cc.Button,
        aliListNode: cc.Node,
        aliEdit: cc.EditBox,
        btnAliSubmit: cc.Button,
        giftListNode: cc.Node,
        giftBtn: cc.Button,
        giftEdit: cc.EditBox,
        vipListNode: cc.Node,
        vipScroll: cc.ScrollView,
        vipTips: cc.Label,
        vipItemPf: cc.Prefab,
        btnSpArr: {
          default: [],
          type: cc.SpriteFrame
        },
        btnClickSpArr: {
          default: [],
          type: cc.SpriteFrame
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        this.node.on("click", function() {});
        this.close.node.on("click", function() {
          _this.node.destroy();
        });
        this.getComponent(cc.Button)._soundOn = false;
        this.btnArr = [];
        this.btnArr.push(this.btnAliPay);
        this.btnArr.push(this.btnWxPay);
        this.btnArr.push(this.btnGiftCode);
        this.btnArr.push(this.btnVipPay);
        this.listNode = [];
        this.listNode.push(this.aliListNode);
        this.listNode.push(this.wxListNode);
        this.listNode.push(this.giftListNode);
        this.listNode.push(this.vipListNode);
        var _loop = function _loop(i) {
          btn = _this.btnArr[i];
          btn.node.on("click", function() {
            for (var j = 0; j < _this.listNode.length; j++) {
              var node = _this.listNode[j];
              node.active = j == i;
            }
          });
        };
        for (var i = 0; i < this.btnArr.length; i++) {
          var btn;
          _loop(i);
        }
      },
      setPayWay: function setPayWay(data) {
        for (var i = 0; i < data.length; i++) {
          this.btnArr[i].node.active = true;
          var product = data[i].pay_product;
          var payType = data[i].pay_type_id;
          var inputAmount = data[i].input_amount;
          if (product) for (var j = 0; j < product.length; j++) {
            var children = this.listNode[i].getChildByName("layout").children;
            if (children[j]) {
              var item = children[j].getComponent("wxAliPayItem");
              item.init(payType, product[j].product_id, product[j].amount, product[j].product_name);
              this.listNode[i].getChildByName("bommon").active = 0 != inputAmount;
            }
          }
          var serviceList = data[i].service_list;
          if (serviceList) {
            var content = this.vipScroll.content;
            content.destroyAllChildren();
            for (var k in serviceList) {
              var vipItem = cc.instantiate(this.vipItemPf);
              vipItem.x = k * (vipItem.width + 20) - 280;
              vipItem.y = -130;
              content.addChild(vipItem);
              var name = serviceList[k].name;
              var subname = serviceList[k].subname;
              var wx = serviceList[k].wx;
              vipItem.getComponent("vipPayItem").init(name, subname, wx);
            }
            var temp = cc.instantiate(this.vipItemPf);
            content.width = (temp.width + 20) * serviceList.length;
          }
          this.listNode[0].active = true;
        }
      },
      start: function start() {},
      update: function update(dt) {
        for (var i = 0; i < this.listNode.length; i++) this.listNode[i].active ? this.btnArr[i].getComponent(cc.Sprite).spriteFrame = this.btnClickSpArr[i] : this.btnArr[i].getComponent(cc.Sprite).spriteFrame = this.btnSpArr[i];
      }
    });
    cc._RF.pop();
  }, {} ],
  start: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0402dvciOJBsawAzpETjBH0", "start");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        lblTip: cc.Label,
        lblProgress: cc.Label,
        lblVer: cc.Label,
        lblDetail: cc.Label,
        totalProgress: cc.ProgressBar
      },
      onLoad: function onLoad() {
        var _this = this;
        cc.ak.event.once(cc.ak.key.event.START_STATUS_IPLIST, function() {
          _this.lblTip.string = lan.com.lbl.reqInit;
        }, this);
        cc.ak.event.once(cc.ak.key.event.START_STATUS_UPDATE, function() {
          _this.lblTip.string = lan.com.lbl.reqUpdate;
        }, this);
        cc.ak.event.once(cc.ak.key.event.START_STATUS_HOTFIX_BEGIN, function() {
          _this.lblTip.string = lan.com.lbl.startHot;
          var ver = "App v" + cc.ak.conf.dev_info.romVer + " | Res ";
          var bundles = cc.ak.cache.bundleMgr.bundlesMap;
          ver += cc.ak.const.bundle.idCoreCocos + " v" + bundles[cc.ak.const.bundle.idCoreCocos].version;
          ver += ";" + cc.ak.const.bundle.idCoreCommon + " v" + bundles[cc.ak.const.bundle.idCoreCommon].version;
          ver += ";" + cc.ak.const.bundle.idCoreLobby + " v" + bundles[cc.ak.const.bundle.idCoreLobby].version;
          _this.lblVer.string = ver;
        }, this);
        cc.ak.event.once(cc.ak.key.event.START_STATUS_HOTFIX_VER_CHECK, function(bundleId) {
          var ver = "App v" + cc.ak.conf.dev_info.romVer + " | Res ";
          var bundles = cc.ak.cache.bundleMgr.bundlesMap;
          ver += cc.ak.const.bundle.idCoreCocos + " v" + bundles[cc.ak.const.bundle.idCoreCocos].version + "=>" + bundles[cc.ak.const.bundle.idCoreCocos].remoteVersion;
          ver += ";" + cc.ak.const.bundle.idCoreCommon + " v" + bundles[cc.ak.const.bundle.idCoreCommon].version + "=>" + bundles[cc.ak.const.bundle.idCoreCommon].remoteVersion;
          ver += ";" + cc.ak.const.bundle.idCoreLobby + " v" + bundles[cc.ak.const.bundle.idCoreLobby].version + "=>" + bundles[cc.ak.const.bundle.idCoreLobby].remoteVersion;
          _this.lblVer.string = ver;
        }, this);
        cc.ak.event.on(cc.ak.key.event.START_STATUS_HOTFIX_PROGRESS, function(data) {
          var seg = 1 / data.bundlesLen;
          var off = data.bundleIdx / data.bundlesLen;
          var event = data.eventAssetsManager;
          var progress = seg * event.getPercentByFile() + off;
          _this.totalProgress.progress = progress;
          _this.lblProgress.string = Math.floor(100 * progress) + "%";
          cc.log("percentByFile:" + event.getPercentByFile() + "%,assetId:" + event.getAssetId() + ",percent:" + event.getPercent() + "%,files:" + event.getDownloadedFiles() + " / " + event.getTotalFiles() + ",bytes:" + event.getDownloadedBytes() + " / " + event.getTotalBytes());
          _this.lblDetail.string = data.bundleIdx + "/" + data.bundlesLen + "  " + cc.ak.util.utils.humanFileSize(event.getDownloadedBytes()) + " / " + cc.ak.util.utils.humanFileSize(event.getTotalBytes());
        }, this);
      },
      start: function start() {},
      onDestroy: function onDestroy() {
        cc.ak.event.targetOff(this);
      }
    });
    cc._RF.pop();
  }, {} ],
  subGameEntrance: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "91c5fpoj6pIZKpknZGByXzl", "subGameEntrance");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        scrollView: {
          default: null,
          type: cc.Node
        },
        item: {
          default: null,
          type: cc.Node
        },
        itemSpriteFrame: {
          default: [],
          type: cc.SpriteFrame
        },
        gameSound: {
          default: [],
          type: cc.AudioClip
        },
        settingPrefab: {
          default: null,
          type: cc.Prefab
        },
        titleSpriteFrame: {
          default: [],
          type: cc.SpriteFrame
        },
        headAnthologyItem: {
          default: null,
          type: cc.Node
        },
        data: null
      },
      onLoad: function onLoad() {
        var vSize = cc.view.getVisibleSize();
        this.scrollView.width = vSize.width;
        cc.find("userInfo", this.node).x = -vSize.width / 2 + 80;
        cc.find("top_right", this.node).x = vSize.width / 2;
        cc.find("bgSprite/topSprite", this.node).x = -vSize.width / 2;
        cc.find("top_right/backBtn", this.node).on("click", this.onBackBtn, this);
        cc.find("top_right/settingBtn", this.node).on("click", this.onSettingBtn, this);
        cc.find("startBtn", this.node).on("click", this.onStartBtn, this);
        this.headAnthologyItem.getComponent("headAnthologyItem").setAvatar(cc.ak.mc.userMgr.headID);
        this.setUserInfo();
      },
      start: function start() {},
      onDestroy: function onDestroy() {
        cc.audioEngine.stopAllEffects();
      },
      onBackBtn: function onBackBtn() {
        this.node.destroy();
      },
      onSettingBtn: function onSettingBtn() {
        var setting = cc.instantiate(this.settingPrefab);
        setting.parent = this.node;
      },
      onStartBtn: function onStartBtn() {
        var event = {};
        event.node = {};
        event.node.name = "0";
        this.onRoom(event);
      },
      setUserInfo: function setUserInfo() {
        var nickLabel = cc.find("userInfo/nicknameLabel", this.node).getComponent(cc.Label);
        nickLabel.string = cc.ak.mc.userMgr.nick;
      },
      onRoom: function onRoom(event) {
        var i = parseInt(event.node.name);
        if (cc.ak.mc.userMgr.coin_bean < this.data.grounds[i].limitCoin / 1e3) return cc.ak.ui.toast("\u60a8\u7684\u4f59\u989d\u4e0d\u8db3\uff01");
        var enterRoom = new proto.cmd_room.EnterRoomReq();
        enterRoom.PlayID = this.data.gid;
        enterRoom.SubPlayID = this.data.grounds[i].id;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ROOM, proto.cmd_net.CMD_ROOM.SUB_ENTER_ROOM_ASK, enterRoom);
      },
      setMatchItme: function setMatchItme(data) {
        this.data = data;
        for (var i = 0; i < data.grounds.length; i++) {
          var nType = this.getGroundType(data.grounds[i].name);
          var item = cc.instantiate(this.item);
          item.parent = this.item.parent;
          item.name = i.toString();
          item.x = 300 + 500 * i;
          item.on("click", this.onRoom, this);
          item.getComponent(cc.Sprite).spriteFrame = this.itemSpriteFrame[nType];
          item.getChildByName("name").getComponent(cc.Label).string = data.grounds[i].name;
          item.getChildByName("base").getComponent(cc.Label).string = Math.floor(data.grounds[i].rate / 1e3) + "\u5143";
          item.getChildByName("entrance").getComponent(cc.Label).string = Math.floor(data.grounds[i].limitCoin / 1e3) + "\u5143";
        }
        this.item.parent.width = 500 * data.grounds.length;
        this.item.destroy();
        if (this.titleSpriteFrame[data.gid]) {
          var titleSprite = cc.find("bgSprite/topSprite/titleSprite", this.node).getComponent(cc.Sprite);
          titleSprite.spriteFrame = this.titleSpriteFrame[data.gid];
        }
        cc.ak.util.audioMgr.playSFX(this.gameSound[data.gid]);
      },
      getGroundType: function getGroundType(strName) {
        if ("\u4e2d\u7ea7\u573a" == strName) return 1;
        if ("\u9ad8\u7ea7\u573a" == strName) return 2;
        if ("\u5927\u5e08\u573a" == strName) return 3;
        return 0;
      }
    });
    cc._RF.pop();
  }, {} ],
  transfer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "74750Ocy/dAi5mhyiVF+ED6", "transfer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        coinEdit: cc.EditBox,
        payeeEdit: cc.EditBox,
        btnTransfer: cc.Button,
        btnBack: cc.Button,
        radioButton: {
          default: [],
          type: cc.Toggle
        },
        accountA: cc.Label,
        accountB: cc.Label,
        curAccount: 0
      },
      onLoad: function onLoad() {
        var _this = this;
        this.accountA.string = "" + Math.floor(cc.ak.mc.userMgr.coins[proto.cmd_sys.COIN_ID.COIN_ID_A] / 10) / 100;
        this.accountB.string = "" + Math.floor(cc.ak.mc.userMgr.coins[proto.cmd_sys.COIN_ID.COIN_ID_B] / 10) / 100;
        this.btnTransfer.node.on("click", function() {
          var req = new proto.cmd_lobby.CoinTransferReq();
          req.CoinType = 0 == _this.curAccount ? proto.cmd_sys.COIN_ID.COIN_ID_A : proto.cmd_sys.COIN_ID.COIN_ID_B;
          req.ToUid = Number(_this.payeeEdit.string);
          req.Value = 1e3 * Number(_this.coinEdit.string);
          if (0 == _this.curAccount) {
            if (Number(_this.coinEdit.string) > cc.ak.mc.userMgr.coins[proto.cmd_sys.COIN_ID.COIN_ID_A]) {
              cc.ak.ui.toast("\u6b64\u8d26\u6237\u4f59\u989d\u4e0d\u8db3,\u66f4\u6362\u8d26\u6237\u6216\u8bf7\u5145\u503c");
              return;
            }
          } else if (Number(_this.coinEdit.string) > cc.ak.mc.userMgr.coins[proto.cmd_sys.COIN_ID.COIN_ID_B]) {
            cc.ak.ui.toast("\u6b64\u8d26\u6237\u4f59\u989d\u4e0d\u8db3,\u66f4\u6362\u8d26\u6237\u6216\u8bf7\u5145\u503c");
            return;
          }
          if (0 == Number(_this.coinEdit.string)) {
            cc.ak.ui.toast("0\u5143\u4e0d\u80fd\u8f6c\u7ed9\u5176\u4ed6\u7528\u6237,\u8bf7\u91cd\u65b0\u8f93\u5165\u91d1\u989d");
            return;
          }
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_LOBBY, proto.cmd_net.CMD_LOBBY.CMD_LOBBY_COIN_TRANSFER_REQ, req);
          _this.node.destroy();
        });
        this.btnBack.node.on("click", function() {
          _this.node.destroy();
        });
      },
      start: function start() {},
      radioButtonClicked: function radioButtonClicked(toggle) {
        var index = this.radioButton.indexOf(toggle);
        switch (index) {
         case 0:
          this.curAccount = 0;
          this.payeeEdit.string = "";
          this.coinEdit.string = "";
          break;

         case 1:
          this.curAccount = 1;
          this.payeeEdit.string = "";
          this.coinEdit.string = "";
        }
      },
      getChangeCoinString: function getChangeCoinString(sender) {
        cc.log(sender.node.name + " single line editBoxDidEndEditing: " + this.coinEdit.string);
      },
      getChangePayeeID: function getChangePayeeID(sender) {
        cc.log(sender.node.name + " single line editBoxDidEndEditing: " + this.payeeEdit.string);
      },
      getEndCoinString: function getEndCoinString(sender) {},
      getEndPayeeIDString: function getEndPayeeIDString(sender) {},
      update: function update(dt) {
        this.payeeEdit.string && "" !== this.payeeEdit.string && this.coinEdit.string && "" !== this.coinEdit.string ? this.btnTransfer.interactable = true : this.btnTransfer.interactable = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  turntable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "99d66ZkeTtOE6IbC7NJwkFj", "turntable");
    "use strict";
    var Turntable = cc.Class({
      extends: cc.Component,
      statics: {
        SLIDING_STATUS: {
          nul: 0,
          start: 1,
          move: 2,
          end: 3,
          calibration: 4,
          cancel: 5
        },
        MAXSPEED: 4e3,
        ANGLE: 30,
        DISPEARDIS: 1600,
        RADIUS: 800,
        A: -2e3,
        SOUND_VALUE: .2,
        SOUND_MAX_X: 40,
        SOUND_MIN_X: -40,
        SHOW_ITEM_ARR: "SHOW_ITEM_ARR",
        HIND_ITEM_ARR: "HIND_ITEM_ARR"
      },
      properties: {
        itemPf: cc.Prefab,
        slideAudio: {
          default: null,
          type: cc.AudioClip
        },
        touchID: void 0
      },
      onLoad: function onLoad() {
        this.len = 10;
        this.speed = 0;
        this._direction = false;
        this.easTime = 1.5;
        this._slidingStatus = Turntable.SLIDING_STATUS.nul;
        this.itemArr = [];
        var temp = cc.instantiate(this.itemPf);
      },
      test: function test() {
        var item = cc.instantiate(this.itemPf);
        this.node.addChild(item);
        item.getComponent("gameItem").init(1);
      },
      onEnable: function onEnable() {
        cc.log("width " + this.node.width);
      },
      init: function init(callBack) {
        if (void 0 != this.showItemArr) {
          this.showItemArr.splice(0, this.showItemArr.length);
          this.hindItemArr.splice(0, this.hindItemArr.length);
          this.node.destroyAllChildren();
        } else {
          this.showItemArr = [];
          this.hindItemArr = [];
        }
        0 != this.itemArr.length && this.itemArr.splice(0, this.itemArr.length);
        var map = cc.ak.cache.bundleMgr.gamesMap;
        for (var i in map) if (map[i].show) {
          var item = cc.instantiate(this.itemPf);
          this.node.addChild(item);
          item.getComponent("gameItem").init(i, !!map[i].update && map[i].update, map[i].enable, callBack);
          this.itemArr.push(item);
        }
        if (-1 === cc.ak.key.cache.GAMEID_CLICKED) for (var _i = 0; _i < this.itemArr.length; _i++) {
          var item = this.itemArr[_i];
          if (_i < 7) this.showItemArr.push(item); else {
            item.scale = 0;
            this.hindItemArr.push(item);
          }
        } else for (var _i2 = 0; _i2 < this.itemArr.length; _i2++) {
          var item = this.itemArr[_i2];
          var gid = item.getComponent("gameItem").getGid();
          if (gid == cc.ak.key.cache.GAMEID_CLICKED) {
            this.itemArrangement(_i2);
            break;
          }
        }
        var temp = cc.instantiate(this.itemPf);
        Turntable.RADIUS = cc.winSize.width / 2 - (temp.width / 2 + 150);
        this.disItemArr();
        this.setTouchListener();
      },
      itemArrangement: function itemArrangement(index) {
        var sub = null;
        if (index - 3 >= 0) {
          sub = index - 3;
          var a = this.itemArr.slice(0, sub);
          var b = this.itemArr.slice(sub, this.itemArr.length);
          var c = b.concat(a);
          for (var i = 0; i < c.length; i++) if (i < 7) this.showItemArr.push(c[i]); else {
            c[i].scale = 0;
            this.hindItemArr.push(c[i]);
          }
        } else {
          sub = index - 3 + this.itemArr.length;
          var a = this.itemArr.slice(0, sub);
          var b = this.itemArr.slice(sub, this.itemArr.length);
          var c = b.concat(a);
          for (var _i3 = 0; _i3 < c.length; _i3++) if (_i3 < 7) this.showItemArr.push(c[_i3]); else {
            c[_i3].scale = 0;
            this.hindItemArr.push(c[_i3]);
          }
        }
      },
      disItemArr: function disItemArr() {
        for (var i = 0; i < this.showItemArr.length; i++) {
          var item = this.showItemArr[i];
          item.angle = 180 - i * Turntable.ANGLE;
          this.setItemPos(item);
        }
        for (var _i4 = 0; _i4 < this.hindItemArr.length; _i4++) {
          var item = this.hindItemArr[_i4];
          item.scale = 0;
        }
      },
      setTouchListener: function setTouchListener() {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          if (_this.touchID) return;
          _this.touchID = event.touch.getID();
          _this.startLocationX = event.getStartLocation().x;
          _this._slidingStatus = Turntable.SLIDING_STATUS.start;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          if (_this.touchID != event.touch.getID()) return;
          _this.locationX = event.getLocation().x;
          var moveDis = _this.startLocationX - _this.locationX;
          _this._slidingStatus = Turntable.SLIDING_STATUS.move;
          moveDis > 0 ? _this._direction = true : moveDis < 0 && (_this._direction = false);
          _this.slidingItem(moveDis);
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function(event) {
          if (_this.touchID != event.touch.getID()) return;
          _this.touchID = null;
          _this._slidingStatus = Turntable.SLIDING_STATUS.end;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(event) {
          if (_this.touchID != event.touch.getID()) return;
          _this.locationX = event.getLocation().x;
          _this.touchID = null;
          _this._slidingStatus = Turntable.SLIDING_STATUS.cancel;
        }, this);
      },
      slidingItem: function slidingItem(moveDis) {
        for (var i = 0; i < this.showItemArr.length; i++) {
          var item = this.showItemArr[i];
          this.changedItemPos(item, moveDis);
        }
        this._direction ? this.leftSlidingFind0Angle() : this.rightSlidingFind180Angle();
      },
      changedItemPos: function changedItemPos(item, movedis) {
        var radDis = 2 * Math.PI * Turntable.RADIUS / 360;
        item.angle = item.angle + movedis / radDis;
        var rad = Math.PI / 180 * item.angle;
        item.x = Math.round(Math.cos(rad) * Turntable.RADIUS);
        (item.x < Turntable.SOUND_MIN_X || item.x > Turntable.SOUND_MAX_X) && (item.inner = false);
        item.x > Turntable.SOUND_MIN_X && item.x < Turntable.SOUND_MAX_X ? item.soundFlag = true : item.soundFlag = false;
        if (!item.inner && item.soundFlag) {
          cc.ak.util.audioMgr.playSFX(this.slideAudio);
          var native = cc.ak.util.native;
          native.invoke(native.name.VIBRATE_FEEDBACK);
          item.inner = true;
        }
        item.scale = this.scaleProportion(rad);
        item.angle <= -30 && (item.angle = item.angle + 210);
        item.angle > -30 && item.angle < 0 && (item.scale = 0);
        item.angle > 180 && item.angle < 210 && (item.scale = 0);
        item.angle >= 210 && (item.angle = item.angle - 210);
        item.zIndex = Math.abs(100 * Math.sin(rad));
      },
      scaleProportion: function scaleProportion(rad) {
        return (Turntable.DISPEARDIS - (Turntable.RADIUS - Math.sin(rad) * Turntable.RADIUS)) / Turntable.DISPEARDIS;
      },
      setItemPos: function setItemPos(item) {
        var rad = Math.PI / 180 * item.angle;
        item.x = Math.cos(rad) * Turntable.RADIUS;
        item.scale = this.scaleProportion(rad);
        item.angle <= 90 || item.angle >= 88;
        item.zIndex = Math.abs(100 * Math.sin(rad));
      },
      leftSlidingFind0Angle: function leftSlidingFind0Angle() {
        Array.prototype.insert = function(index, item) {
          this.splice(index, 0, item);
        };
        var isActiviChanged = false;
        var angle = 0;
        var item = this.showItemArr[0];
        if (0 == item.scale) {
          isActiviChanged = true;
          angle = item.angle;
        }
        if (isActiviChanged) {
          var showitem = this.showItemArr[0];
          var hinditem = this.hindItemArr[0];
          this.showItemArr.insert(this.showItemArr.length, hinditem);
          this.hindItemArr.insert(this.hindItemArr.length, showitem);
          this.showItemArr.splice(0, 1);
          this.hindItemArr.splice(0, 1);
          this.showItemArr[6].angle = angle - 210;
        }
      },
      rightSlidingFind180Angle: function rightSlidingFind180Angle() {
        Array.prototype.insert = function(index, item) {
          this.splice(index, 0, item);
        };
        var isActiviChanged = false;
        var angle = 0;
        var item = this.showItemArr[6];
        if (0 == item.scale) {
          isActiviChanged = true;
          angle = item.angle;
        }
        if (isActiviChanged) {
          var showitem = this.showItemArr[6];
          var hinditem = this.hindItemArr[this.hindItemArr.length - 1];
          this.showItemArr.insert(0, hinditem);
          this.hindItemArr.insert(0, showitem);
          this.showItemArr.splice(this.showItemArr.length - 1);
          this.hindItemArr.splice(this.hindItemArr.length - 1);
          this.showItemArr[0].angle = 210 + angle;
        }
      },
      start: function start() {},
      update: function update(dt) {
        if (this._slidingStatus == Turntable.SLIDING_STATUS.nul) return;
        if (this._slidingStatus == Turntable.SLIDING_STATUS.start) {
          this._slidingStatus = Turntable.SLIDING_STATUS.nul;
          this.speed = 0;
        }
        if (this._slidingStatus == Turntable.SLIDING_STATUS.move) {
          this.speed = Math.abs((this.locationX - this.startLocationX) / dt);
          this.speed > Turntable.MAXSPEED && (this.speed = Turntable.MAXSPEED);
          this.startLocationX = this.locationX;
          return;
        }
        var distance = this.speed * dt + Turntable.A * dt * dt / 2;
        if (this._slidingStatus == Turntable.SLIDING_STATUS.end) {
          this.speed > 10 ? this._direction ? distance > 0 ? this.slidingItem(distance) : this._slidingStatus = Turntable.SLIDING_STATUS.nul : -distance < -5 ? this.slidingItem(-distance) : this._slidingStatus = Turntable.SLIDING_STATUS.nul : this._slidingStatus = Turntable.SLIDING_STATUS.nul;
          this.speed = this.speed + Turntable.A * dt;
        }
        if (this._slidingStatus == Turntable.SLIDING_STATUS.cancel) {
          this.speed = Math.abs((this.locationX - this.startLocationX) / dt);
          this.speed > Turntable.MAXSPEED && (this.speed = Turntable.MAXSPEED);
          this.speed > 10 ? this._slidingStatus = Turntable.SLIDING_STATUS.end : this._slidingStatus = Turntable.SLIDING_STATUS.nul;
        }
      },
      repaint: function repaint(callBack) {
        this._slidingStatus = Turntable.SLIDING_STATUS.nul;
        this.node.destroyAllChildren();
        this.node.off(this);
        if (this.showItemArr) {
          this.showItemArr.splice(0, this.showItemArr.length);
          this.hindItemArr.splice(0, this.hindItemArr.length);
        }
        this.init(callBack);
      },
      onDestroy: function onDestroy() {}
    });
    cc._RF.pop();
  }, {} ],
  userInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ca745OX7v9IP51QcAPGzQU6", "userInfo");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        editName: cc.EditBox,
        labName: cc.Label,
        labID: cc.Label,
        labPhone: cc.Label,
        lablogin: cc.Label,
        labSum: cc.Label,
        labAccountA: cc.Label,
        labAccountB: cc.Label,
        labAccountDetail: cc.Label,
        btnKeep: cc.Button,
        btnChange: cc.Button,
        btnCopy: cc.Button,
        btnBind: cc.Button,
        btnUnbind: cc.Button,
        btnAdd: cc.Button,
        btnPut: cc.Button,
        btnBack: cc.Button,
        btnLogout: cc.Button,
        btnHead: cc.Button,
        btnPassword: cc.Button,
        btnTransfer: cc.Button,
        registered: cc.Prefab,
        headImg: cc.Sprite,
        spfHead: {
          default: [],
          type: cc.SpriteFrame
        },
        pfbLoginBox: cc.Prefab,
        pfTransfer: cc.Prefab,
        pfShop: cc.Prefab,
        pfWithdraw: cc.Prefab,
        pfHeadAnthology: cc.Prefab,
        audioPersonal: {
          default: null,
          type: cc.AudioClip
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        this.node.on("click", function(event) {});
        this.getComponent(cc.Button)._soundOn = false;
        this.initLab();
        this.initBtn();
        cc.log(cc.ak.mc.userMgr);
        if (true == cc.ak.mc.userMgr.isbinded) {
          this.btnBind.node.active = false;
          this.btnUnbind.node.active = true;
          this.btnPassword.node.active = true;
        } else {
          this.btnBind.node.active = true;
          this.btnUnbind.node.active = false;
          this.btnPassword.node.active = false;
        }
        this.btnTransfer.node.active = !!cc.ak.mc.userMgr.power;
        this.btnTransfer.node.on("click", function() {
          var tansfer = cc.instantiate(_this.pfTransfer);
          _this.node.parent.addChild(tansfer);
        });
        this.btnCopy.node.on("click", function() {
          var native = cc.ak.util.native;
          var str = _this.labID.string;
          native.invoke(native.name.COPY_OPEN, {
            content: str,
            isOpenWx: 0
          });
        });
        this.headImg.spriteFrame = this.spfHead[cc.ak.mc.userMgr.headID - 1];
        this.btnAdd.node.on("click", function() {
          var shop = cc.instantiate(_this.pfShop);
          _this.node.parent.addChild(shop);
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
        this.btnPut.node.on("click", function() {
          if (cc.ak.mc.userMgr.isbinded) {
            var whitdraw = cc.instantiate(_this.pfWithdraw);
            _this.node.parent.addChild(whitdraw);
            var req = cc.ak.util.http.request(cc.ak.key.http.WITHDRAW_USER_INFO, function(data) {
              cc.log("\u63d0\u73b0:" + JSON.stringify(data));
              0 == data.status && whitdraw.getComponent("withdraw").setWithDrawData(data.data);
            });
          } else cc.ak.ui.alert({
            text: lan.com.lbl.notBindPhone,
            btns: [ lan.com.lbl.cancel, lan.com.lbl.bindPhone ],
            callback: function callback(idx) {
              if (1 === idx) {
                var event = new cc.Event.EventCustom(cc.ak.key.event.POPUP_LOBBY_BOX);
                event.setUserData({
                  type: 4,
                  name: cc.ak.const.box.lobbyBox
                });
                cc.ak.event.dispatchEvent(event);
              }
            }
          });
        });
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_ACCOUNTS + "-" + proto.cmd_net.CMD_ACCOUNTS.SUB_PERSON_CHANGE_HEADID_RSP, function(dv) {
          var data = new proto.cmd_lobby.ChangeHeadIdResult();
          cc.ak.util.tbfUtil.unPackData(data, dv);
          if (1 == data.Result) {
            if (data.ChangeHeadIdDataInfo.Id) {
              cc.ak.mc.userMgr.headID = data.ChangeHeadIdDataInfo.Id;
              _this.headImg.spriteFrame = _this.spfHead[cc.ak.mc.userMgr.headID - 1];
              cc.ak.event.emit(cc.ak.key.event.HEAN_CHANGE);
            }
            if (data.ChangeHeadIdDataInfo.Nickname) {
              _this.labName.node.active = true;
              _this.labName.string = data.ChangeHeadIdDataInfo.Nickname;
              cc.ak.mc.userMgr.nick = data.ChangeHeadIdDataInfo.Nickname;
              cc.ak.event.emit(cc.ak.key.event.NAME_CHANGE);
            }
          }
        }, this);
        cc.ak.util.audioMgr.playSFX(this.audioPersonal);
      },
      initBtn: function initBtn() {
        var _this2 = this;
        this.btnBack.node.on("click", function() {
          cc.audioEngine.stopAllEffects();
          _this2.node.destroy();
        });
        this.btnLogout.node.on("click", function() {
          cc.ak.event.emit(cc.ak.key.event.LOGOUT);
        });
        this.btnHead.node.on("click", function() {
          var node = cc.instantiate(_this2.pfHeadAnthology);
          _this2.node.parent.addChild(node);
        });
        this.btnChange.node.on("click", function() {
          _this2.labName.node.active = false;
          _this2.editName.node.active = true;
          _this2.btnKeep.node.active = true;
          _this2.editName.setFocus(true);
        });
        this.btnKeep.node.on("click", function() {
          _this2.labName.node.active = true;
          _this2.editName.node.active = false;
          _this2.btnKeep.node.active = false;
          _this2.editName.setFocus(false);
          if (null != _this2.editName.string) {
            var changeHead = new proto.cmd_lobby.ChangeHeadIdData();
            changeHead.Nickname = _this2.editName.string;
            cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ACCOUNTS, proto.cmd_net.CMD_ACCOUNTS.SUB_PERSON_CHANGE_HEADID_REQS, changeHead);
            _this2.editName.string = "";
          }
        });
        this.btnPassword.node.on("click", function() {
          var event = new cc.Event.EventCustom(cc.ak.key.event.POPUP_LOBBY_BOX);
          event.setUserData({
            type: 3,
            name: cc.ak.const.box.lobbyBox
          });
          cc.ak.event.dispatchEvent(event);
        });
        this.btnBind.node.on("click", function() {
          var event = new cc.Event.EventCustom(cc.ak.key.event.POPUP_LOBBY_BOX);
          event.setUserData({
            type: 4,
            name: cc.ak.const.box.lobbyBox
          });
          cc.ak.event.dispatchEvent(event);
        });
        this.btnUnbind.node.on("click", function() {
          var event = new cc.Event.EventCustom(cc.ak.key.event.POPUP_LOBBY_BOX);
          event.setUserData({
            type: 5,
            name: cc.ak.const.box.lobbyBox
          });
          cc.ak.event.dispatchEvent(event);
        });
      },
      initLab: function initLab() {
        var _this3 = this;
        this.labName.string = cc.ak.mc.userMgr.nick;
        this.labID.string = cc.ak.mc.userMgr.uid;
        this.labPhone.string = cc.ak.mc.userMgr.phoneNum;
        var date = new Date(1e3 * cc.ak.mc.userMgr.lastTimeLogin);
        var Y = date.getFullYear() + "/";
        var M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "/";
        var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
        var h = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
        var m = (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":";
        var s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        this.lablogin.string = Y + M + D;
        this.labAccountA.string = "" + Math.floor(cc.ak.mc.userMgr.coins[proto.cmd_sys.COIN_ID.COIN_ID_A] / 10) / 100;
        this.labAccountB.string = "" + Math.floor(cc.ak.mc.userMgr.coins[proto.cmd_sys.COIN_ID.COIN_ID_B] / 10) / 100;
        this.labSum.string = Math.floor(cc.ak.mc.userMgr.coin_bean / 10) / 100;
        this.labAccountDetail.string = cc.ak.mc.userMgr.accuntDetail;
        cc.ak.event.on(cc.ak.key.event.COIN_CHANGE, function(data) {
          _this3.labAccountA && (_this3.labAccountA.string = "" + Math.floor(cc.ak.mc.userMgr.coins[proto.cmd_sys.COIN_ID.COIN_ID_A] / 10) / 100);
          _this3.labAccountB && (_this3.labAccountB.string = "" + Math.floor(cc.ak.mc.userMgr.coins[proto.cmd_sys.COIN_ID.COIN_ID_B] / 10) / 100);
          _this3.labSum && (_this3.labSum.string = "" + Math.floor(cc.ak.mc.userMgr.coin_bean / 10) / 100);
        }, this);
      },
      onEnable: function onEnable() {},
      singleLine: function singleLine(sender) {},
      onDestroy: function onDestroy() {
        cc.ak.event.targetOff(this);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  verificationCode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fc9a5bOR9lNj5RrII/mXWmL", "verificationCode");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btnBack: cc.Button,
        numArr: {
          default: [],
          type: cc.Label
        },
        btnCode: cc.Button,
        btnWithdraw: cc.Button,
        phoneLab: cc.Label,
        codeEdit: cc.EditBox,
        accountType: 0,
        coinNum: 0,
        timeLab: cc.Label,
        _timeNum: 0
      },
      onLoad: function onLoad() {
        var _this = this;
        this.node.active = false;
        this.getComponent(cc.Button)._soundOn = false;
        this.btnBack.node.on("click", function() {
          for (var i = 0; i < _this.numArr.length; i++) _this.numArr[i].string = "";
          _this.node.active = false;
          _this.unschedule(_this.updateTimer);
        });
        this.btnCode.node.on("click", function() {
          _this.setCodeLimit();
          var req = cc.ak.util.http.request(cc.ak.key.http.SMS_WITHDRAW_SEND, function(data) {
            if (0 == data.status) ; else {
              cc.log("\u63d0\u73b0\u9a8c\u8bc1\u7801\u83b7\u53d6\u5931\u8d25");
              cc.ak.ui.toast("" + data.statusnote);
            }
          });
        });
        this.btnWithdraw.node.on("click", function() {
          var cmd = cc.ak.key.http.WITHDRAW_APPLY;
          var req = cc.ak.util.http.request({
            cmd: cmd,
            data: {
              withdraw_type: _this.accountType,
              amounts: _this.coinNum,
              code: _this.codeEdit.string
            }
          }, function(data) {
            0 == data.status ? cc.ak.ui.alert({
              text: lan.com.lbl.withdrawSucc,
              btns: lan.com.lbl.sure,
              callback: function callback(inx) {
                cc.ak.event.emit(cc.ak.key.event.ACCOUNT_BIND, {
                  type: 3
                });
                _this.node.destroy();
              }
            }) : cc.ak.ui.toast("" + data.statusnote);
          });
        });
        this.phoneLab.string = "" + cc.ak.mc.userMgr.phoneNum;
      },
      onEditStart: function onEditStart(sender) {
        this.codeEdit.node.scale = 0;
      },
      onEditChange: function onEditChange(sender) {
        cc.log("this.codeEdit.string : " + this.codeEdit.string);
        for (var i = 0; i < this.numArr.length; i++) this.numArr[i].string = "";
        var len = this.codeEdit.string.length;
        for (var _i = 0; _i < len; _i++) this.codeEdit.string.substr(_i, 1) ? this.numArr[_i].string = this.codeEdit.string.substr(_i, 1) : this.numArr[_i].string = "";
      },
      onEditEnd: function onEditEnd(sender) {
        this.codeEdit.node.scale = 1;
      },
      onEnable: function onEnable() {
        var _this2 = this;
        cc.ak.event.on(cc.ak.key.event.WITHDARWALS_NOTICE, function(data) {
          _this2.accountType = data.accounType;
          _this2.coinNum = data.num;
        });
      },
      setCodeLimit: function setCodeLimit() {
        this._timeNum = 60;
        this.btnCode.interactable = false;
        this.timeLab.node.active = true;
        this.timeLab.string = this._timeNum;
        this.schedule(this.updateTimer, 1, this._timeNum);
      },
      updateTimer: function updateTimer() {
        this._timeNum--;
        if (this._timeNum < 0) {
          this._timeNum = 0;
          this.btnCode.interactable = true;
          this.timeLab.node.active = false;
          this.unschedule(this.updateTimer);
        }
        this.timeLab.string = this._timeNum;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  vipPayItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0ce5em4SHBImJupMHJiwQAM", "vipPayItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        labName: cc.Label,
        labSubName: cc.Label,
        labWx: cc.Label,
        btnCopy: cc.Button
      },
      start: function start() {},
      init: function init(name, subname, wx) {
        if (name) {
          this.labName.string = name;
          this.labSubName.string = subname;
          this.labWx.string = wx;
          this.btnCopy.node.on("click", function() {
            var native = cc.ak.util.native;
            native.invoke(native.name.COPY_OPEN, {
              content: wx,
              isOpenWx: 1
            });
          });
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  withdrawalsRecord: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8bfcf4pDdJNr4fQj3JIRxN6", "withdrawalsRecord");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btnBack: cc.Button,
        itemArr: {
          default: [],
          type: cc.Node
        },
        btnNexPage: cc.Button,
        btnPreviousPage: cc.Button,
        data: null,
        nCurPage: 0,
        sumTotal: 0,
        sumPage: 0
      },
      onLoad: function onLoad() {
        var _this = this;
        this.btnBack.node.on("click", function() {
          _this.node.destroy();
        });
        this.getComponent(cc.Button)._soundOn = false;
        for (var i = 0; i < this.itemArr.length; i++) {
          var item = this.itemArr[i];
          item.getChildByName("style").getComponent(cc.Label).string = "";
          item.getChildByName("account").getComponent(cc.Label).string = "";
          item.getChildByName("num").getComponent(cc.Label).string = "";
          item.getChildByName("time").getComponent(cc.Label).string = "";
          item.getChildByName("status").getComponent(cc.Label).string = "";
        }
        this.nCurPage = 1;
        this.requestData(this.nCurPage);
      },
      requestData: function requestData(nPage) {
        var _this2 = this;
        var cmd = cc.ak.key.http.WITHDRAW_USER_LIST;
        var req = cc.ak.util.http.request({
          cmd: cmd,
          data: {
            page: nPage,
            pageSize: 7,
            getTotal: 1
          }
        }, function(data) {
          cc.log("data : " + JSON.stringify(data));
          0 == data.status ? _this2.setData(data.data, data.total) : cc.ak.ui.toast(data.statusnote);
        });
      },
      setData: function setData(data, total) {
        total && (this.sumTotal = total);
        if (0 == this.sumTotal) {
          this.btnNexPage.node.active = false;
          this.btnPreviousPage.node.active = false;
          return;
        }
        this.sumPage = Math.ceil(this.sumTotal / 7);
        this.btnNexPage.node.active = this.sumPage > this.nCurPage;
        this.btnPreviousPage.node.active = this.nCurPage > 1;
        for (var i = 0; i < this.itemArr.length; i++) {
          var item = this.itemArr[i];
          item.active = i < data.length;
          if (i < data.length) {
            var type = "";
            type = 1 == data[i].apply_type ? "\u652f\u4ed8\u5b9d" : "\u94f6\u884c\u5361";
            var status = "";
            switch (data[i].status) {
             case 0:
              status = "\u7533\u8bf7\u4e2d";
              break;

             case 1:
              status = "\u5df2\u901a\u8fc7";
              break;

             case 2:
              status = "\u5df2\u9a73\u56de";
              break;

             case 3:
              status = "\u5df2\u63d0\u73b0";
              break;

             case 4:
              status = "\u63d0\u73b0\u5931\u8d25";
              break;

             default:
              cc.log("\u63d0\u73b0\u72b6\u6001\u9519\u8bef : " + data[i].status);
            }
            item.getChildByName("style").getComponent(cc.Label).string = "" + type;
            item.getChildByName("account").getComponent(cc.Label).string = "" + data[i].apply_account;
            item.getChildByName("num").getComponent(cc.Label).string = "" + data[i].amount;
            item.getChildByName("time").getComponent(cc.Label).string = "" + data[i].apply_time;
            item.getChildByName("status").getComponent(cc.Label).string = "" + status;
          }
        }
      },
      onPrePage: function onPrePage() {
        if (this.nCurPage <= 1) return;
        this.requestData(--this.nCurPage);
      },
      onNextPage: function onNextPage() {
        if (this.data.length < 7) return;
        this.requestData(++this.nCurPage);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  withdraw: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4ec3eCnLiFI8rHaGjFfYu8l", "withdraw");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        closeBtn: cc.Button,
        accountBLab: cc.Label,
        aliAccount: cc.Label,
        cardAccount: cc.Label,
        withNum: cc.EditBox,
        btnWithDraw: cc.Button,
        btnWithDrawR: cc.Button,
        btnAliBind: cc.Button,
        btnCardBind: cc.Button,
        pfCardBind: cc.Prefab,
        radioButton: {
          default: [],
          type: cc.Toggle
        },
        tipsLab: {
          default: [],
          type: cc.Label
        },
        pfWithdrawals: cc.Prefab,
        curAccount: 1,
        pfVerificationCode: cc.Prefab
      },
      onLoad: function onLoad() {
        var _this = this;
        var codeNode = cc.instantiate(this.pfVerificationCode);
        codeNode.zIndex = 100;
        this.node.parent.addChild(codeNode);
        this.getComponent(cc.Button)._soundOn = false;
        this.closeBtn.node.on("click", function() {
          _this.node.destroy();
        });
        this.btnAliBind.node.on("click", function() {
          var bind = cc.instantiate(_this.pfCardBind);
          _this.node.parent.addChild(bind);
          bind.getComponent("cardBind").init(1);
        });
        this.btnCardBind.node.on("click", function() {
          var bind = cc.instantiate(_this.pfCardBind);
          _this.node.parent.addChild(bind);
          bind.getComponent("cardBind").init(2);
        });
        this.btnWithDrawR.node.on("click", function() {
          var withdrawals = cc.instantiate(_this.pfWithdrawals);
          _this.node.parent.addChild(withdrawals);
        });
        this.btnWithDraw.node.on("click", function() {
          if (_this.checkParameter()) {
            codeNode.active = true;
            cc.ak.event.emit(cc.ak.key.event.WITHDARWALS_NOTICE, {
              accounType: _this.curAccount,
              num: _this.withNum.string
            });
          } else cc.ak.ui.toast("\u67e5\u770b\u63d0\u73b0\u91d1\u989d\u662f\u5426\u5927\u4e8e\u8d26\u6237\u91d1\u989d\u6216\u7ed1\u5b9a\u8d26\u53f7\u8f93\u5165\u63d0\u73b0\u91d1\u989d");
        });
      },
      checkParameter: function checkParameter() {
        if (1 == this.curAccount && "" == this.aliAccount.string) return false;
        if (2 == this.curAccount && "" == this.cardAccount.string) return false;
        if ("" == this.withNum.string) return false;
        if (cc.ak.mc.userMgr.coins[proto.cmd_sys.COIN_ID.COIN_ID_B] < this.withNum.string) return false;
        return true;
      },
      setWithDrawData: function setWithDrawData(data) {
        this.accountBLab.string = "" + data.coin;
        this.aliAccount.string = "" + data.alipay_id;
        this.cardAccount.string = "" + data.bank_id;
        var tips = data.tips;
        for (var i = 0; i < this.tipsLab.length; i++) this.tipsLab[i].string = "" + tips[i];
      },
      radioButtonClicked: function radioButtonClicked(toggle) {
        var index = this.radioButton.indexOf(toggle);
        switch (index) {
         case 0:
          this.curAccount = 1;
          break;

         case 1:
          this.curAccount = 2;
        }
      },
      start: function start() {},
      onEnable: function onEnable() {
        var _this2 = this;
        cc.ak.event.on(cc.ak.key.event.ACCOUNT_BIND, function(data) {
          1 == data.type ? _this2.aliAccount.string = data.no : 2 == data.type ? _this2.cardAccount.string = data.no : 3 == data.type && _this2.node.destroy();
        });
      },
      onGetCodeBtn: function onGetCodeBtn() {},
      onOKBtn: function onOKBtn() {}
    });
    cc._RF.pop();
  }, {} ],
  wxAliPayItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fa317bTQx5FDoDB4xIh/7SM", "wxAliPayItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        lab: cc.Label
      },
      onLoad: function onLoad() {},
      init: function init(type, productId, amount, productName) {
        this.lab.string = "" + productName;
        this.node.on("click", function() {
          cc.log("type : " + type + " ,productId :" + productId + " ,amount : " + amount);
          var req = cc.ak.util.http.request({
            cmd: cc.ak.key.http.PAY_ORDER,
            data: {
              amount: amount,
              pay_type_id: type,
              product_id: productId
            }
          }, function(data) {
            cc.log("\u4e0b\u5355:" + JSON.stringify(data));
            0 == data.status ? cc.sys.openURL(data.order_url) : cc.ak.ui.alert({
              text: data.statusnote,
              btns: lan.com.lbl.cancel
            });
          });
        });
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "LayerMgr", "bankList", "bankListItem", "bill", "billItme", "bindGuide", "btnStyle2", "cardBind", "checkin", "coinRecording", "coinRecordingItem", "extension", "gameItem", "headAnthology", "headAnthologyItem", "loginBox", "mission", "notice", "preloadScene", "rebate", "rebateCfgItem", "registered", "shop", "transfer", "turntable", "userInfo", "verificationCode", "vipPayItem", "withdraw", "withdrawalsRecord", "wxAliPayItem", "gameTurnTable", "lobby", "lobbyBackG", "lobbyBottom", "lobbyMiddle", "lobbyTop", "login", "start", "brItem", "brnnEntranceItme", "recordItem", "subGameEntrance" ]);