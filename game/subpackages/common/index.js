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
  AppInit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d65b2Y6gg1HtKPJ7EgX5wmE", "AppInit");
    "use strict";
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    var AppInit = {};
    AppInit.init = function() {
      window.Promise || (window.Promise = require("es6-promise.auto.min"));
      window.lan = window.i18n.languages.loc;
      var ak = cc.ak = cc.ak || {};
      ak.namespace = function(ns_string) {
        var parts = ns_string.split("."), parent = cc.ak, i;
        "cc" === parts[0] && "ak" === parts[1] && (parts = parts.slice(2));
        for (i = 0; i < parts.length; i++) {
          "undefined" === typeof parent[parts[i]] && (parent[parts[i]] = {});
          parent = parent[parts[i]];
        }
        return parent;
      };
      ak.log = log;
      ak.i18n = require("LanguageData");
      ak.i18n.init("loc");
      ak.util = {};
      ak.cache = {};
      ak.mc = {};
      ak.key = {};
      ak.const = {};
      ak.err = require("ErrorDef");
      initGlobalConst();
      initGlobalHttpKey();
      initGlobalCacheKey();
      initGlobalEventKey();
      initGlobalDataKey();
      initJsApiHook();
      ak.conf = require("config");
      ak.util.utils = require("Utils");
      ak.event = new cc.EventTarget();
      var http = ak.util.http = require("Http");
      http.set_param(JSON.parse(JSON.stringify(cc.ak.conf.project)), cc.ak.conf.aes_key);
      ak.data = new Map();
      ak.util.cacheHelper = require("CacheHelper");
      ak.util.native = require("native");
      ak.util.tbfUtil = require("TbfUtil");
      ak.util.socketMgr = require("SocketMgr");
      ak.util.hotfixMgr = require("HotfixMgr").create();
      initConfByPlatform();
      ak.util.audioMgr = require("AudioMgr").create();
      ak.mc.userMgr = require("UserMgr").create();
      cc.ak.mc.userMgr.init();
      ak.mc.badgeMgr = require("BadgeMgr").create();
      ak.mc.missionMgr = require("MissionMgr").create();
      initEventHandle();
      initCache();
      cc.ak.ui = cc.find("Global").getComponent("GlobalUIMgr");
      cc.ak.ui.init();
      window.bundle = {};
    };
    AppInit.initBundles = function() {
      return cc.ak.cache.bundleMgr.initPkgBundles();
    };
    var log = function log(tag, msg) {
      cc.log("[" + tag + "]" + msg);
    };
    var initGlobalConst = function initGlobalConst() {
      cc.ak.const.bundle = {
        idCoreCocos: "cocos",
        idCoreCommon: "common",
        idCoreLobby: "lobby"
      };
      cc.ak.const.channel = {
        INVITE: 1e5,
        ROOT_OFFICE: 100001
      };
      cc.ak.const.box = {
        mission: "mission",
        lobbyBox: "lobbyBox"
      };
    };
    var initGlobalHttpKey = function initGlobalHttpKey() {
      var _cc$ak$key$http;
      cc.ak.key.http = (_cc$ak$key$http = {
        IPLIST: "iplist",
        UPDATE: "update",
        EVENT: "eventlog",
        THIRD_LOGIN: "thirdlogin",
        SHOP: "mall",
        PAY: "wxpay",
        HISTORY: "battle",
        CLUB_HISTORY: "pvt_report_battle",
        CLUB_HISTORY_READED: "pvt_report_battle_byread",
        CLUB_HISTORY_DETAIL: "pvt_report_battle_view",
        REPLAY: "replay",
        HISTORY_DETAIL: "battlelist",
        SHARE_INFO: "share_gift_info",
        SHARE_GIFT: "share_gift",
        SHARE_REPLAY: "share_replay",
        SHARE_GAME: "share",
        SHARE_CLUB: "share_club",
        LOBBY: "lobby",
        SUBGAME: "subgame",
        PROMOTION: "promo_info",
        PROMOTION_BIND: "promo_send"
      }, _defineProperty(_cc$ak$key$http, "REPLAY", "replay"), _defineProperty(_cc$ak$key$http, "SND_UPLOAD", "sound_up"), 
      _defineProperty(_cc$ak$key$http, "SND_DOWNLOAD", "sound_down"), _defineProperty(_cc$ak$key$http, "EVENT_LOG", "eventlog"), 
      _defineProperty(_cc$ak$key$http, "CLUB_REPORT_DATE", "pvt_report_battle"), _defineProperty(_cc$ak$key$http, "PHONE_VERIFY_CODE", "getsmscode"), 
      _defineProperty(_cc$ak$key$http, "ID_CARD_VERIFY", "idcard_send"), _defineProperty(_cc$ak$key$http, "ID_CARD_INFO", "idcard_info"), 
      _defineProperty(_cc$ak$key$http, "AGENT_REG_INFO", "agent_reg_info"), _defineProperty(_cc$ak$key$http, "AGENT_REG_SEND", "agent_reg_send"), 
      _defineProperty(_cc$ak$key$http, "MARQUEE", "notice"), _defineProperty(_cc$ak$key$http, "PAY_ORDER", "pay_order"), 
      _defineProperty(_cc$ak$key$http, "BILL", "user_bill"), _defineProperty(_cc$ak$key$http, "SHARE_QRCODE", "share_qrcode"), 
      _defineProperty(_cc$ak$key$http, "SHARE_IMG", "share_img"), _defineProperty(_cc$ak$key$http, "REBATE_USER_LIST", "rebate_user_list"), 
      _defineProperty(_cc$ak$key$http, "REBATE_CFG_LIST", "rebate_cfg_list"), _defineProperty(_cc$ak$key$http, "USER_COIN_FLOW", "user_coin_flow"), 
      _defineProperty(_cc$ak$key$http, "UPDATE_BANKCARD", "update_bankcard"), _defineProperty(_cc$ak$key$http, "UPDATE_ALIPAY", "update_alipay"), 
      _defineProperty(_cc$ak$key$http, "WITHDRAW_USER_INFO", "withdraw_user_info"), _defineProperty(_cc$ak$key$http, "WITHDRAW_APPLY", "withdraw_apply"), 
      _defineProperty(_cc$ak$key$http, "SMS_WITHDRAW_SEND", "sms_withdraw_send"), _defineProperty(_cc$ak$key$http, "WITHDRAW_USER_LIST", "withdraw_user_list"), 
      _defineProperty(_cc$ak$key$http, "PUSH_INFO_UPDATE", "push_info_update"), _cc$ak$key$http);
    };
    var initGlobalCacheKey = function initGlobalCacheKey() {
      cc.ak.key.cache = {
        AUTHOR_INFO: "AUTHOR_INFO",
        IPLIST: "IPLIST",
        LOBBY: "LOBBY",
        BUNDLE: "Bundle",
        TOKEN: "TOKEN",
        REENTER_SUBGAME: "REENTER_SUBGAME",
        RENTER_ROOM: "RENTER_ROOM",
        GAME_USE_TIMER: "game_use_timer",
        GAMEID_CLICKED: -1,
        SHOP_LIST: "shop_list"
      };
    };
    var initGlobalDataKey = function initGlobalDataKey() {
      cc.ak.key.data = {
        ENTER_ROOM_SUCC: "ENTER_ROOM_SUCC",
        SHOW_BADGE: "SHOW_BADGE",
        MAIL_LIST: "MAIL_LIST",
        GAME_MSG_LIST: "GAME_MSG_LIST",
        GAME_MSG_FLAG: "GAME_MSG_FLAG"
      };
    };
    var initGlobalEventKey = function initGlobalEventKey() {
      cc.ak.key.event = {
        CONNECT_SOCKET: "CONNECT_SOCKET",
        SOCKET_CONN_SUCC: "SOCKET_CONN_SUCC",
        SOCKET_CONN_FAIL: "SOCKET_CONN_FAIL",
        SOCKET_CONN_SHUT: "SOCKET_CONN_SHUT",
        START_STATUS_IPLIST: "START_STATUS_IPLIST",
        START_STATUS_UPDATE: "START_STATUS_UPDATE",
        START_STATUS_HOTFIX_BEGIN: "START_STATUS_HOTFIX_BEGIN",
        START_STATUS_HOTFIX_VER_CHECK: "START_STATUS_HOTFIX_VER_CHECK",
        START_STATUS_HOTFIX_PROGRESS: "START_STATUS_HOTFIX_PROGRESS",
        START_STATUS_FINISH: "START_STATUS_FINISH",
        LOBBY_PREPARED: "LOBBY_PREPARED",
        LOGOUT: "LOGOUT",
        ENTER_GAME_SCENE: "ENTER_GAME_SCENE",
        POPUP_SUGGAME_ENTRANCE: "POPUP_SUGGAME_ENTRANCE",
        BADGE_SHOW_CHANGED: "BADGE_SHOW_CHANGED",
        COIN_CHANGE: "COIN_CHANGE",
        NAME_CHANGE: "NAME_CHANGE",
        HEAN_CHANGE: "HEAD_CHANGE",
        BUNDLES_CHANGE: "BUNDLES_CHANGE",
        ACCOUNT_BIND: "ACCOUNT_BIND",
        POPUP_LOBBY_BOX: "POPUP_LOBBY_BOX",
        UPDATE_MAIL: "UPDATE_MAIL",
        WITHDARWALS_NOTICE: "WITHDARWALS_NOTICE",
        app_cash_lobby: "app_cash_lobby",
        app_login_lobby: "app_login_lobby",
        app_tran_lobby: "app_tran_lobby"
      };
    };
    var initConfByPlatform = function initConfByPlatform() {
      var conf = cc.ak.conf;
      if (window._AKDebug) {
        conf.debug = window._AKDebug;
        if (true, window._AKDebug.project) {
          conf.project = window._AKDebug.project;
          delete conf.debug.project;
        }
        window._AKDebug = void 0;
      }
      var os_cfg = cc.ak.conf.platform[cc.sys.os];
      var native = cc.ak.util.native;
      var invoke_info = native.invoke(native.name.JS_READY, {
        wx_app_id: conf.wx_app_id,
        wx_app_secret: conf.wx_app_secret
      });
      if (invoke_info.url) {
        cc.ak.log("invoke_url", invoke_info.url);
        conf.invoke_pair = cc.ak.util.utils.ParseUrlKeyPair(invoke_info.url);
      }
      var info = native.invoke(native.name.GET_MISC_INFO);
      if (!cc.ak.util.utils.IsObjEmpty(info)) {
        var app_info = info.app_info;
        conf.app_ver = app_info.version_name;
        conf.app_build = app_info.version_code;
        conf.project.pkg = app_info.package_name;
        conf.dev_info = info.dev_info;
      }
      conf.project.ver = conf.app_ver;
      conf.project.hotVer = conf.curr_hot_ver;
      conf.project.os = os_cfg.os;
    };
    var initCache = function initCache() {
      var iplist = cc.ak.cache.ipList = require("CacheIpList").create(cc.ak.key.cache.IPLIST);
      iplist.load();
      var cacheAuth = cc.ak.cache.auth = require("CacheAuth").create(cc.ak.key.cache.AUTHOR_INFO);
      cacheAuth.load();
      cc.ak.cache.lobby = require("CacheLobbyConf").create(cc.ak.key.cache.LOBBY);
      cc.ak.cache.lobby.load();
      cc.ak.cache.bundleMgr = require("CacheBundlesConf").create(cc.ak.key.cache.BUNDLE);
      cc.ak.cache.shopData = require("CacheShopList").create(cc.ak.key.cache.SHOP_LIST);
      cc.ak.cache.shopData.load();
    };
    var initEventHandle = function initEventHandle() {
      cc.ak.event.on(cc.ak.util.native.nname.URL_INVOKE, function(data) {
        var url = data.url;
        if (!url) return;
        var pair = ParseUrlKeyPair(data.url);
        cc.ak.log("do invoke_url", JSON.stringify(pair));
        /^wx[\w\d]+:\/\/oauth/.test(url) ? cc.ak.log("do invoke_url", "test pass : " + pair.code) : cc.ak.event.emit("invoke_" + pair.route, pair);
      });
      cc.ak.event.on(cc.ak.util.native.nname.MEMORY_WARNING, function() {
        cc.ak.util.utils.wLog(2e3, "\u6536\u5230\u5185\u5b58\u8b66\u544a");
      });
      cc.ak.event.on(cc.ak.util.native.nname.SHOW_BADGE, function(data) {
        cc.log("\u76d1\u542c\u5c0f\u7ea2\u70b9 :" + JSON.stringify(data));
        data.status && cc.ak.data.set(cc.ak.key.data.SHOW_BADGE, data.status);
      });
    };
    var initJsApiHook = function initJsApiHook() {
      Date.prototype.format = function(format) {
        var o = {
          "M+": this.getMonth() + 1,
          "d+": this.getDate(),
          "h+": this.getHours(),
          "m+": this.getMinutes(),
          "s+": this.getSeconds(),
          "q+": Math.floor((this.getMonth() + 3) / 3),
          S: this.getMilliseconds()
        };
        /(y+)/.test(format) && (format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var k in o) new RegExp("(" + k + ")").test(format) && (format = format.replace(RegExp.$1, 1 == RegExp.$1.length ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)));
        return format;
      };
    };
    var processMap = {};
    processMap.reqIplist = {};
    processMap.reqIplist.fun = function(currProcess) {
      if (currProcess.fun !== processMap.reqIplist.fun) return currProcess;
      var promise = new Promise(function(resolve, reject) {
        cc.log("[Begin process] reqIplist");
        cc.ak.event.emit(cc.ak.key.event.START_STATUS_IPLIST);
        var iplist = cc.ak.cache.ipList;
        iplist.batch_req(function() {
          cc.ak.log("CHECK_REVIEW", "\u5f53\u524d\u5ba1\u6838\u72b6\u6001 : " + iplist.is_review());
          if (iplist.is_review()) {
            resolve(processMap.enterApp);
            return;
          }
          resolve(processMap.reqUpdate);
        });
      });
      return promise;
    };
    processMap.reqUpdate = {};
    processMap.reqUpdate.fun = function(currProcess) {
      if (currProcess.fun !== processMap.reqUpdate.fun) return currProcess;
      var promise = new Promise(function(resolve, reject) {
        cc.log("[Begin process] reqUpdate");
        cc.ak.event.emit(cc.ak.key.event.START_STATUS_UPDATE);
        var req = cc.ak.util.http.request(cc.ak.key.http.UPDATE, function(data) {
          if (!data) {
            reject(new cc.ak.err.Fatal(cc.ak.err.CODE.NetDataInvalid, null, cc.js.formatStr(lan.com.err.action.httpUpdate, lan.com.err.reason.serverResponse, lan.com.err.sol.restart), "data is null"));
            return;
          }
          processMap.hotFix.data = data;
          cc.log("update req:" + JSON.stringify(data));
          if (0 != data.status) {
            data.cmd = cc.ak.key.http.UPDATE;
            var tt = cc.ak.i18n.t;
            reject(new cc.ak.err.Fatal(cc.ak.err.CODE.NetDataInvalid, null, cc.js.formatStr(tt("com.err.action.httpUpdate"), data.statusnote, tt("com.err.sol.restart")), data));
            return;
          }
          var update = data.data.update;
          0 === update.flag ? cc.ak.ui.alert({
            text: update.msg,
            btns: [ lan.com.lbl.cancel, lan.com.lbl.update ],
            callback: function callback(idx) {
              1 === idx ? native.invoke(native.name.UPDATE_APP, {
                url: update.downloadurl
              }) : resolve(processMap.hotFix);
            }
          }) : 1 === update.flag ? cc.ak.ui.alert({
            text: update.msg,
            btns: lan.com.lbl.update,
            callback: function callback() {
              native.invoke(native.name.UPDATE_APP, {
                url: update.downloadurl
              });
            }
          }) : 2 === update.flag && resolve(processMap.hotFix);
        }, null, null, true);
        req.ontimeout = function() {
          reject(new cc.ak.err.Fatal(cc.ak.err.CODE.NetTimeout, null, cc.js.formatStr(lan.com.err.action.httpUpdate, lan.com.err.reason.netTimeOut, lan.com.err.sol.restart)));
        };
        req.onerror = function() {
          reject(new cc.ak.err.Fatal(cc.ak.err.CODE.NetError, null, cc.js.formatStr(lan.com.err.action.httpUpdate, lan.com.err.reason.netErr, lan.com.err.sol.restart)));
        };
      });
      return promise;
    };
    processMap.hotFix = {};
    processMap.hotFix.fun = function(currProcess) {
      if (currProcess.fun !== processMap.hotFix.fun) return currProcess;
      return new Promise(function(resolve, reject) {
        cc.log("[Begin process] hotFix");
        cc.ak.event.emit(cc.ak.key.event.START_STATUS_HOTFIX_BEGIN);
        var conf = cc.ak.conf;
        var data = currProcess.data.data.update;
        var coreBundle = data.bundles;
        if (!coreBundle) {
          reject(new cc.ak.err.Fatal(cc.ak.err.CODE.NetError, null, cc.js.formatStr(lan.com.err.action.httpUpdate, lan.com.err.reason.serverResponse, lan.com.err.sol.restart)));
          return;
        }
        cc.ak.cache.bundleMgr.parse(data.bundles);
        if (!data.hotManifest || !data.hotPackage) {
          reject(new cc.ak.err.Fatal(cc.ak.err.CODE.NetDataInvalid, null, cc.js.formatStr(lan.com.err.action.httpUpdate, lan.com.err.reason.serverResponse, lan.com.err.sol.restart), "hotManifest is null!"));
          return;
        }
        cc.ak.cache.ipList.parseHotfixUrl(data);
        cc.ak.util.hotfixMgr.hotUpdate(cc.ak.const.bundle.idCoreLobby).then(function() {
          return resolve(processMap.enterApp);
        }, function(e) {
          reject(e);
        });
      });
    };
    processMap.enterApp = {};
    processMap.enterApp.fun = function() {
      cc.log("[Begin process] enterApp");
      cc.ak.util.native.invoke(cc.ak.util.native.name.JPUSH_SET_TAGS, {
        tags: "ver" + cc.ak.conf.app_ver + ",hot_c" + cc.ak.conf.curr_hot_ver + ",hot_o" + cc.ak.conf.orig_hot_ver
      });
      cc.ak.event.emit(cc.ak.key.event.START_STATUS_FINISH);
    };
    AppInit.launch = function() {
      return new Promise(function(resolve, reject) {
        Promise.resolve().then(function() {
          if (cc.ak.util.utils.isAfterHotFixReEnter()) {
            var token = cc.sys.localStorage.getItem(cc.ak.key.cache.TOKEN);
            if (token && token.length > 0) {
              cc.ak.mc.userMgr.token = token;
              return processMap.enterApp;
            }
          }
          return processMap.reqIplist;
        }).then(processMap.reqIplist.fun).then(processMap.reqUpdate.fun).then(processMap.hotFix.fun).then(processMap.enterApp.fun).then(function() {
          return resolve();
        }).catch(function(e) {
          reject(e);
        });
      });
    };
    module.exports = AppInit;
    cc._RF.pop();
  }, {
    AudioMgr: "AudioMgr",
    BadgeMgr: "BadgeMgr",
    CacheAuth: "CacheAuth",
    CacheBundlesConf: "CacheBundlesConf",
    CacheHelper: "CacheHelper",
    CacheIpList: "CacheIpList",
    CacheLobbyConf: "CacheLobbyConf",
    CacheShopList: "CacheShopList",
    ErrorDef: "ErrorDef",
    HotfixMgr: "HotfixMgr",
    Http: "Http",
    LanguageData: void 0,
    MissionMgr: "MissionMgr",
    SocketMgr: "SocketMgr",
    TbfUtil: "TbfUtil",
    UserMgr: "UserMgr",
    Utils: "Utils",
    config: "config",
    "es6-promise.auto.min": "es6-promise.auto.min",
    native: "native"
  } ],
  AudioMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e27d1kXKABPIpygKrovqocb", "AudioMgr");
    "use strict";
    var AudioMgr = cc.Class({
      statics: {
        _instance: null,
        instance: function instance() {
          if (!this._instance) {
            this._instance = new this();
            this._instance.init();
          }
          return this._instance;
        },
        create: function create() {
          this._instance = null;
          return this.instance();
        }
      },
      properties: {
        bgmVolume: .7,
        sfxVolume: 1,
        bgmAudioID: -1
      },
      init: function init() {
        var t = cc.sys.localStorage.getItem("bgmVolume");
        null != t && (this.bgmVolume = parseFloat(t));
        var t = cc.sys.localStorage.getItem("sfxVolume");
        null != t && (this.sfxVolume = parseFloat(t));
        cc.game.on(cc.game.EVENT_HIDE, function() {
          console.log("cc.audioEngine.pauseAll");
          cc.audioEngine.pauseAll();
        });
        cc.game.on(cc.game.EVENT_SHOW, function() {
          console.log("cc.audioEngine.resumeAll");
          cc.audioEngine.resumeAll();
        });
      },
      _playBGM: function _playBGM(audioClip) {
        this.bgmAudioID >= 0 && cc.audioEngine.stop(this.bgmAudioID);
        this.bgmAudioID = cc.audioEngine.play(audioClip, true, this.bgmVolume);
      },
      playBGM: function playBGM(urlOrAudioClip) {
        urlOrAudioClip instanceof cc.AudioClip ? this._playBGM(urlOrAudioClip) : "string" == typeof urlOrAudioClip ? cc.loader.loadRes(urlOrAudioClip, cc.AudioClip, function(error, audio) {
          this._playBGM(audio);
        }) : cc.ak.util.utils.Err("Invalid arguments!");
      },
      _playSFX: function _playSFX(audioClip) {
        if (this.sfxVolume > 0) var audioId = cc.audioEngine.play(audioClip, false, this.sfxVolume);
      },
      playSFX: function playSFX(urlOrAudioClip) {
        urlOrAudioClip instanceof cc.AudioClip ? this._playSFX(urlOrAudioClip) : "string" == typeof urlOrAudioClip ? cc.loader.loadRes(urlOrAudioClip, cc.AudioClip, function(error, audio) {
          this._playSFX(audio);
        }) : cc.ak.util.utils.Err("Invalid arguments!");
      },
      setSFXVolume: function setSFXVolume(v) {
        if (this.sfxVolume != v) {
          cc.sys.localStorage.setItem("sfxVolume", v);
          this.sfxVolume = v;
        }
      },
      setBGMVolume: function setBGMVolume(v, unsave) {
        this.bgmAudioID >= 0 && (v > 0 ? cc.audioEngine.resume(this.bgmAudioID) : cc.audioEngine.pause(this.bgmAudioID));
        if (!unsave) if (v || 0 === v) {
          this.bgmVolume = v;
          cc.sys.localStorage.setItem("bgmVolume", v);
        } else cc.error("setBGMVolume error,unvalid v!v=" + v);
        this.bgmVolume = v;
        cc.audioEngine.setVolume(this.bgmAudioID, v);
      },
      getBGMVolume: function getBGMVolume() {
        return this.bgmVolume;
      },
      getSFXVolume: function getSFXVolume() {
        return this.sfxVolume;
      },
      pauseAll: function pauseAll() {
        cc.audioEngine.pauseAll();
      },
      resumeAll: function resumeAll() {
        cc.audioEngine.resumeAll();
      }
    });
    module.exports = AudioMgr;
    cc._RF.pop();
  }, {} ],
  BadgeMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c9ad66mc/RGSqZveQo7MmMd", "BadgeMgr");
    "use strict";
    var BadgeMgr = cc.Class({
      statics: {
        _instance: null,
        instance: function instance() {
          if (!this._instance) {
            this._instance = new this();
            this._instance.init();
          }
          return this._instance;
        },
        create: function create() {
          this._instance = null;
          return this.instance();
        }
      },
      properties: {
        nodesTree: null,
        nodesMap: null
      },
      init: function init() {
        var _this = this;
        this.nodesMap = {};
        this.nodesTree = {
          1: {
            desc: "\u793c\u5305",
            childs: {}
          },
          2: {
            desc: "\u63a8\u5e7f\u4f63\u91d1",
            childs: {}
          },
          3: {
            desc: "\u63d0\u73b0",
            childs: {}
          },
          4: {
            desc: "\u5ba2\u670d",
            childs: {}
          },
          5: {
            desc: "\u8d26\u5355",
            childs: {}
          },
          6: {
            desc: "\u5145\u503c",
            childs: {}
          },
          7: {
            desc: "\u5934\u50cf",
            childs: {}
          },
          8: {
            desc: "\u6d3b\u52a8",
            childs: {
              9: {
                desc: "\u65e5\u5e38\u4efb\u52a1",
                childs: {}
              },
              10: {
                desc: "\u9650\u65f6\u4efb\u52a1",
                childs: {}
              },
              11: {
                desc: "\u6210\u5c31\u4efb\u52a1",
                childs: {}
              }
            }
          },
          12: {
            desc: "\u90ae\u7bb1",
            childs: {}
          }
        };
        this._treeToMap(null, this.nodesTree);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_LOBBY + "-" + proto.cmd_net.CMD_LOBBY.CMD_LOBBY_BADGE_INIT_RESP, function(dv) {
          var data = new proto.cmd_lobby.CBadgeList();
          cc.ak.util.tbfUtil.unPackData(data, dv);
          for (var i = 0; i < data.Badges.length; i++) {
            var badge = data.Badges[i];
            var node = _this.nodesMap[badge.NodeID];
            if (!node) {
              cc.warn("node unexists in client! nodeid=" + badge.NodeID);
              continue;
            }
            node.globalEnable = badge.GlobalEnable;
            node.selfEnable = badge.SelfEnable;
            node.unread = badge.unread;
            _this._nodeSelfOn(node);
          }
          for (var id in _this.nodesMap) {
            var node = _this.nodesMap[id];
            cc.ak.util.utils.IsObjEmpty(node.childs) && _this._anlyTreeOn(node, null, true);
          }
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_LOBBY + "-" + proto.cmd_net.CMD_LOBBY.CMD_LOBBY_BADGE_GLOBAL_RESP, function(dv) {
          var data = new proto.cmd_lobby.CBadgeEnable();
          cc.ak.util.tbfUtil.unPackData(data, dv);
          var node = _this.nodesMap[data.NodeID];
          node.globalEnable = data.Enable;
          data.Enable && (node.unread = 1);
          _this._nodeBadgeEnableChanged(node);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_LOBBY + "-" + proto.cmd_net.CMD_LOBBY.CMD_LOBBY_BADGE_SELF_RESP, function(dv) {
          var data = new proto.cmd_lobby.CBadgeEnable();
          cc.ak.util.tbfUtil.unPackData(data, dv);
          var node = _this.nodesMap[data.NodeID];
          node.selfEnable = data.Enable;
          data.Enable && (node.unread = 1);
          _this._nodeBadgeEnableChanged(node);
        }, this);
      },
      readed: function readed(nodeId) {
        var node = this.nodesMap[nodeId];
        if (!node) return;
        if (0 == node.unread) return;
        node.unread = 0;
        this._nodeBadgeEnableChanged(node);
        var data = new proto.cmd_lobby.CBadgeReaded();
        data.NodeID = nodeId;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_LOBBY, proto.cmd_net.CMD_LOBBY.CMD_LOBBY_BADGE_READED_REQ, data);
      },
      _treeToMap: function _treeToMap(parent, childs) {
        for (var id in childs) {
          var node = this.nodesMap[id] = childs[id];
          node.id = id;
          node.parent = parent;
          node.globalEnable = 0;
          node.selfEnable = 0;
          node.unread = 0;
          node.selfOn = 0;
          node.realOn = 0;
          cc.ak.util.utils.IsObjEmpty(node.childs) || this._treeToMap(node, node.childs);
        }
      },
      _anlyTreeOn: function _anlyTreeOn(node, child, isEmit) {
        if (!node) return;
        var oldRealOn = node.realOn;
        cc.ak.util.utils.IsObjEmpty(node.childs) ? node.realOn = node.selfOn : node.realOn = node.selfOn | child.realOn;
        node.realOn != oldRealOn && isEmit && cc.ak.event.emit(cc.ak.key.event.BADGE_SHOW_CHANGED, node.id, node.realOn);
        node.parent && this._anlyTreeOn(node.parent, node, isEmit);
      },
      _nodeSelfOn: function _nodeSelfOn(node) {
        node.selfOn = (node.globalEnable | node.selfEnable) & node.unread;
        return node.selfOn;
      },
      _nodeBadgeEnableChanged: function _nodeBadgeEnableChanged(node) {
        this._nodeSelfOn(node);
        var oldRealOn = node.realOn;
        node.realOn = node.selfOn;
        if (cc.ak.util.utils.IsObjEmpty(node.childs)) ; else for (var i in node.childs) {
          var child = node.childs[i];
          node.realOn |= child.realOn;
        }
        if (node.realOn != oldRealOn) {
          cc.ak.event.emit(cc.ak.key.event.BADGE_SHOW_CHANGED, node.id, node.realOn);
          this._anlyTreeOn(node.parent, node, true);
        }
      }
    });
    module.exports = BadgeMgr;
    cc._RF.pop();
  }, {} ],
  1: [ function(require, module, exports) {
    var process = module.exports = {};
    var cachedSetTimeout;
    var cachedClearTimeout;
    function defaultSetTimout() {
      throw new Error("setTimeout has not been defined");
    }
    function defaultClearTimeout() {
      throw new Error("clearTimeout has not been defined");
    }
    (function() {
      try {
        cachedSetTimeout = "function" === typeof setTimeout ? setTimeout : defaultSetTimout;
      } catch (e) {
        cachedSetTimeout = defaultSetTimout;
      }
      try {
        cachedClearTimeout = "function" === typeof clearTimeout ? clearTimeout : defaultClearTimeout;
      } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
      }
    })();
    function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
      }
      try {
        return cachedSetTimeout(fun, 0);
      } catch (e) {
        try {
          return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
          return cachedSetTimeout.call(this, fun, 0);
        }
      }
    }
    function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
      }
      try {
        return cachedClearTimeout(marker);
      } catch (e) {
        try {
          return cachedClearTimeout.call(null, marker);
        } catch (e) {
          return cachedClearTimeout.call(this, marker);
        }
      }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    function cleanUpNextTick() {
      if (!draining || !currentQueue) return;
      draining = false;
      currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1;
      queue.length && drainQueue();
    }
    function drainQueue() {
      if (draining) return;
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
      var len = queue.length;
      while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) currentQueue && currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
    }
    process.nextTick = function(fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
      queue.push(new Item(fun, args));
      1 !== queue.length || draining || runTimeout(drainQueue);
    };
    function Item(fun, array) {
      this.fun = fun;
      this.array = array;
    }
    Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    process.title = "browser";
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = "";
    process.versions = {};
    function noop() {}
    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;
    process.listeners = function(name) {
      return [];
    };
    process.binding = function(name) {
      throw new Error("process.binding is not supported");
    };
    process.cwd = function() {
      return "/";
    };
    process.chdir = function(dir) {
      throw new Error("process.chdir is not supported");
    };
    process.umask = function() {
      return 0;
    };
  }, {} ],
  CacheAuth: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "50b426CngZG/rYTAWAugi9H", "CacheAuth");
    "use strict";
    var CacheModleBase = require("CacheModleBase");
    var CacheAuth = cc.Class({
      extends: CacheModleBase,
      properties: {
        third_type: 1,
        info_obj: null,
        access_token: ""
      },
      type: function type() {
        return this.third_type;
      },
      parse: function parse(data) {
        this.third_type = data.type;
        this.info_obj = data;
        data.hasOwnProperty("expires_time") ? this.timestamp = data.expires_time : this.timestamp = 0;
        data.hasOwnProperty("access_token") && (this.access_token = data.access_token);
      },
      get_data: function get_data(fake) {
        if (fake) return {
          thirdid: this.third_type,
          thirdinfo: {
            mocks: 1,
            nickname: "\u86cb\u86cb\u7684\u5fe7\u4f24" + (1e3 * Math.random() | 0),
            thirdid: 1e4 + 9e4 * Math.random() | 0,
            headimgurl: "https://mjdownload.xiangruizc.com/static/head/" + (10 * Math.random() | 0) + ".jpg"
          }
        };
        return {
          thirdid: this.third_type,
          thirdinfo: {
            sex: this.info_obj.sex,
            nickname: this.info_obj.nickname,
            thirdid: this.info_obj.unionid,
            thirdtoken: this.access_token,
            headimgurl: this.info_obj.headimgurl
          }
        };
      }
    });
    cc._RF.pop();
  }, {
    CacheModleBase: "CacheModleBase"
  } ],
  CacheBundlesConf: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b070alF4lFJwbf4iJGvOdIG", "CacheBundlesConf");
    "use strict";
    var CacheModleBase = require("CacheModleBase");
    var CacheBundlesConf = cc.Class({
      extends: CacheModleBase,
      properties: {
        conf: null,
        gamesMap: null,
        bundlesMap: null
      },
      isCoreBundle: function isCoreBundle(bundleId) {
        return bundleId === cc.ak.const.bundle.idCoreLobby || bundleId === cc.ak.const.bundle.idCoreCommon || bundleId === cc.ak.const.bundle.idCoreCocos;
      },
      initPkgBundles: function initPkgBundles() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          var oldBundles = _this.bundlesMap;
          _this.bundlesMap = {};
          _this.gamesMap = {};
          var bundleIds = [];
          cc.log("CC_PREVIEW=false,platfrom=" + cc.sys.platform);
          cc.loader.loadResDir("manifest", cc.JsonAsset, function(err, assets, urls) {
            for (var i = 0; i < assets.length; i++) {
              var url = urls[i].split("/");
              var bundleName = url[1];
              var confName = url[2];
              if ("bundle" !== confName) continue;
              var m = assets[i].json;
              cc.log("load temp bundle manifest:" + JSON.stringify(m));
              _this.bundlesMap[m.id] = m;
              bundleIds.push(m.id);
              oldBundles && oldBundles[m.id] && (m.inited = oldBundles[m.id].inited);
            }
            cc.loader.releaseResDir("manifest");
            if (!window.jsb) {
              _this.load();
              resolve();
              return;
            }
            Promise.all(bundleIds.map(_this._loadMani.bind(_this))).then(function() {
              for (var _i in _this.bundlesMap) cc.log("local(hot) exitBundle:" + _i);
              _this.load();
              resolve();
            }).catch(function(err) {
              reject(err);
            });
          });
        });
      },
      _loadMani: function _loadMani(id) {
        var _this2 = this;
        return new Promise(function(resolve, reject) {
          var manifestStr = null;
          var maniPath = cc.ak.util.hotfixMgr.getBundleManifestPath(id);
          Promise.resolve().then(function() {
            return new Promise(function(res, rej) {
              if (cc.ak.util.hotfixMgr.includeHotManifest(id)) {
                manifestStr = jsb.fileUtils.getStringFromFile(maniPath);
                res(manifestStr);
              } else cc.loader.loadRes("manifest/" + id + "/project", function(err, file) {
                cc.log("initPkgBundles " + id + "  " + file.nativeUrl);
                manifestStr = jsb.fileUtils.getStringFromFile(file.nativeUrl);
                err ? cc.warn(JSON.stringify(err)) : cc.loader.release(file);
                res(manifestStr);
              });
            });
          }).then(function(manifestStr) {
            if (manifestStr) try {
              var mani = JSON.parse(manifestStr);
              _this2.bundlesMap[id].version = mani.version;
            } catch (e) {
              reject(e);
              return;
            } else {
              delete _this2.bundlesMap[id];
              cc.log("remove local(hot) unexit bundle:" + id);
            }
            resolve();
          });
        });
      },
      loadSubGamePackage: function loadSubGamePackage(gid) {
        var _this3 = this;
        return new Promise(function(resolve, reject) {
          var bun = _this3.gamesMap[gid];
          if (bun.inited) {
            resolve();
            return;
          }
          var allSubPackages = [ bun ];
          allSubPackages = bun.allDependence.concat(allSubPackages);
          Promise.all(allSubPackages.filter(function(b) {
            return !b.inited;
          }).map(_this3._loadSubPackage.bind(_this3))).then(function() {
            return new Promise(function(res, rej) {
              allSubPackages.filter(function(m) {
                return !m.inited && m.init && m.init.length > 0;
              }).map(function(m) {
                try {
                  var Clazz = require(m.init);
                  if (!Clazz) return;
                  var obj = new Clazz();
                  obj.onLoad();
                  m.inited = true;
                } catch (e) {
                  cc.log(e.toString());
                }
              });
              res();
            });
          }).then(function() {
            resolve();
          }).catch(function(err) {
            return reject(new cc.ak.err.Fatal(cc.ak.err.CODE.Unknown, err.message, cc.js.formatStr(lan.com.err.action.loadBundle, "", lan.com.err.sol.restart)));
          });
        });
      },
      _loadSubPackage: function _loadSubPackage(m) {
        var _this4 = this;
        return new Promise(function(resolve, reject) {
          if (false, cc.sys.platform == cc.sys.QQ_PLAY) {
            resolve();
            return;
          }
          if (_this4.isCoreBundle(m.id)) {
            resolve();
            return;
          }
          _this4._loadSubpackageHook(m.id, function(err) {
            err ? reject(err) : resolve();
          });
        });
      },
      _loadSubpackageHook: function _loadSubpackageHook(name, completeCallback) {
        var downloader = cc.loader.downloader;
        var pac = downloader._subpackages[name];
        pac && !pac.path.endsWith("index.js") && (pac.path = pac.path.replace("index.js"));
        downloader.loadSubpackage(name, completeCallback);
      },
      parseBundles: function parseBundles(data) {
        var bundlesMap = this.bundlesMap;
        if (cc.ak.conf.debug && cc.ak.conf.debug.ignoreHotfix) for (var i in this.bundlesMap) {
          var remoteBundle = bundlesMap[i];
          remoteBundle.enable = true;
          remoteBundle.show = true;
          this.parseBundle(remoteBundle);
        } else for (var _i2 = 0; _i2 < data.length; _i2++) {
          var _remoteBundle = data[_i2];
          this.parseBundle(_remoteBundle);
        }
        this.anlySubGame(bundlesMap[cc.ak.const.bundle.idCoreLobby]);
        for (var gid in this.gamesMap) {
          var game = this.gamesMap[gid];
          this.anlySubGame(game);
        }
      },
      parseBundle: function parseBundle(data) {
        var remoteBundle = data;
        var bundlesMap = this.bundlesMap;
        var bundle = bundlesMap[remoteBundle.id];
        if (bundle) {
          bundle.remoteVersion = remoteBundle.version;
          bundle.dependence = remoteBundle.dependence;
        } else {
          bundle = bundlesMap[remoteBundle.id] = remoteBundle;
          bundle.remoteVersion = remoteBundle.version;
          bundle.version = "0.0.0";
        }
        bundle.show = remoteBundle.show;
        bundle.enable = remoteBundle.enable;
        cc.ak.util.utils.VerCompare(bundle.remoteVersion, bundle.version) > 0 && (bundle.update = true);
        bundle.gid && (this.gamesMap[bundle.gid] = bundle);
        return bundle;
      },
      parseSubGame: function parseSubGame(data) {
        var rawBundles = this.conf;
        for (var i = 0; i < rawBundles.length; i++) {
          var rawBundle = rawBundles[i];
          if (rawBundle.id === data.id) {
            rawBundles[i] = data;
            break;
          }
        }
        this.cache(this.conf);
        var bundle = this.parseBundle(data);
        return bundle;
      },
      parse: function parse(data) {
        this.conf = data || [];
        for (var i = 0; i < this.conf.length; i++) {
          var dep = this.conf[i].dependence;
          if ("string" === typeof dep) {
            if (!dep) {
              this.conf[i].dependence = [];
              continue;
            }
            this.conf[i].dependence = dep.split(",");
          }
        }
        this._super(this.conf);
        this.parseBundles(JSON.parse(JSON.stringify(this.conf)));
      },
      anlySubGame: function anlySubGame(bundle) {
        bundle.tempUpdateMap = {};
        bundle.updateList = [];
        bundle.allDependence = [];
        bundle.tempAllDependence = [];
        this._anlyBundle(bundle, bundle, this.bundlesMap);
        bundle.updateList.reverse();
        bundle.tempAllDependence.reverse();
        delete bundle.tempUpdateMap;
        var depSet = new Set(bundle.tempAllDependence);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = void 0;
        try {
          for (var _iterator = depSet[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var bid = _step.value;
            bundle.allDependence.push(this.bundlesMap[bid]);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            !_iteratorNormalCompletion && _iterator.return && _iterator.return();
          } finally {
            if (_didIteratorError) throw _iteratorError;
          }
        }
        delete bundle.tempAllDependence;
      },
      _anlyBundle: function _anlyBundle(gameBundle, currBundle) {
        if (!currBundle) return;
        if (currBundle.update && !gameBundle.tempUpdateMap[currBundle.id]) {
          gameBundle.tempUpdateMap[currBundle.id] = currBundle;
          gameBundle.updateList.push(currBundle);
        }
        if (!currBundle.dependence || currBundle.dependence.length <= 0) return;
        gameBundle.tempAllDependence = gameBundle.tempAllDependence.concat(currBundle.dependence);
        for (var i = 0; i < currBundle.dependence.length; i++) {
          var id = currBundle.dependence[i];
          var bundle = this.bundlesMap[id];
          if (!bundle) throw new cc.ak.err.Fatal(cc.ak.err.CODE.Unknown, "bundle not exists", cc.js.formatStr(lan.com.err.action.httpSubGame, lan.com.err.reason.dataExpire, lan.com.err.sol.restart), {
            rootBundle: gameBundle.id,
            unExistsBundle: id
          });
          this._anlyBundle(gameBundle, bundle);
        }
      },
      getBundle: function getBundle(id) {
        return this.bundlesMap[id];
      },
      empty: function empty() {
        return null === this.conf;
      },
      hasGame: function hasGame(gameId) {
        var bundle = this.gamesMap[gameId];
        return bundle;
      },
      validGame: function validGame(gameId) {
        var bundle = this.gamesMap[gameId];
        if (!bundle) return false;
        return !bundle.updateList || bundle.updateList.length <= 0;
      }
    });
    module.exports = CacheBundlesConf;
    cc._RF.pop();
  }, {
    CacheModleBase: "CacheModleBase"
  } ],
  CacheHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e05f8pYshCGoor30SYhfMG", "CacheHelper");
    "use strict";
    var CacheHelper = cc.Class({
      statics: {
        load: function load(cache_key, onParse) {
          if (void 0 === cache_key) {
            cc.ak.util.utils.Err("cache key undefined!");
            return;
          }
          var json = cc.sys.localStorage.getItem(cache_key);
          var data = null;
          if (json) {
            data = json = JSON.parse(json);
            if ("function" === typeof onParse) try {
              data = onParse(json);
              cc.ak.log("CacheDataBase::load", cache_key + " \u8bfb\u53d6\u7f13\u5b58\u6210\u529f");
            } catch (e) {
              cc.ak.log("CacheDataBase::load", cache_key + " \u8bfb\u53d6\u7f13\u5b58\u5931\u8d25 => " + e.message);
            } else cc.ak.log("CacheDataBase::load" + cache_key + " \u6ca1\u6709\u5b9e\u73b0 onParse \u63a5\u53e3");
          }
          return data;
        },
        cache: function cache(cache_key, data) {
          cc.sys.localStorage.setItem(cache_key, JSON.stringify(data));
          cc.ak.log("CacheDataBase::cache ", cache_key + " \u5199\u5165\u7f13\u5b58\u6210\u529f");
          return data;
        },
        remove: function remove(cache_key) {
          cc.sys.localStorage.removeItem(cache_key);
        }
      }
    });
    module.exports = CacheHelper;
    cc._RF.pop();
  }, {} ],
  CacheIpList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "de248zQGcVPx6MFyqj9czdW", "CacheIpList");
    "use strict";
    var CacheModleBase = require("CacheModleBase");
    var CacheIpList = cc.Class({
      extends: CacheModleBase,
      properties: {
        iplist: [],
        review: false,
        xhr_arr: null,
        req_cb: null,
        xhr_count: null,
        gates: [],
        logs: [],
        currWorkIdx: 0,
        currWorkGateIdx: 0,
        _hotPackage: null,
        hotPackage: {
          get: function get() {
            if (this._hotPackage.startsWith("http")) return this._hotPackage;
            return this.get() + this._hotPackage;
          }
        },
        _hotManifest: null,
        hotManifest: {
          get: function get() {
            if (this._hotManifest.startsWith("http")) return this._hotManifest;
            return this.get() + this._hotManifest;
          }
        }
      },
      get: function get(idx) {
        void 0 == idx && (idx = this.currWorkIdx);
        return this.iplist[idx];
      },
      workIdxToNext: function workIdxToNext() {
        this.currWorkIdx++;
        this.currWorkIdx >= this.iplist.length && (this.currWorkIdx = 0);
      },
      size: function size() {
        return this.iplist.length;
      },
      get_gate: function get_gate(idx) {
        void 0 == idx && (idx = this.currWorkGateIdx);
        return this.gates[idx];
      },
      geteWorkIdxToNext: function geteWorkIdxToNext() {
        this.currWorkGateIdx++;
        this.currWorkGateIdx >= this.gates.length && (this.currWorkGateIdx = 0);
      },
      gate_size: function gate_size() {
        return this.gates.length;
      },
      is_review: function is_review() {
        return this.review;
      },
      getLogUrl: function getLogUrl(idx) {
        return this.logs[idx];
      },
      getLogSize: function getLogSize() {
        return this.logs.length;
      },
      valid: function valid() {
        return false;
      },
      parse: function parse(data) {
        this._super(data);
        if (data) {
          data.hasOwnProperty("timestamp") || (data.timestamp = 1e3 * data.ttl + new Date().getTime());
          this.timestamp = data.timestamp;
          this.review = 1 === data.bycheck;
          var cfg = data.iplist[0];
          if (cfg) {
            this.gates = cfg.gate || this.gates;
            this.iplist = cfg.apilist || this.iplist;
            this.logs = cfg.loglist || this.logs;
            this.gates.sort(function() {
              return .5 - Math.random();
            });
          }
          (!this.iplist || this.size() <= 0) && (this.iplist = cc.ak.conf.api);
          cc.ak.conf.api = this.iplist;
          cc.ak.log("iplist", cc.ak.util.utils.Dump(this.iplist));
        } else this.iplist = cc.ak.conf.api;
        cc.ak.conf.api.sort(function() {
          return .5 - Math.random();
        });
        if (cc.ak.conf.debug && cc.ak.conf.debug.api) {
          this.iplist = cc.ak.conf.debug.api;
          cc.ak.conf.api = this.iplist;
        }
        cc.ak.conf.debug && cc.ak.conf.debug.gate && this.setDebugGate(cc.ak.conf.debug.gate[cc.ak.conf.debug.gateIdx]);
        return this;
      },
      setDebugGate: function setDebugGate(gate) {
        this.gates = [ gate ];
      },
      batch_req: function batch_req(cb) {
        this.req_cb = cb;
        this.xhr_arr = [];
        var http = cc.ak.util.http;
        var api = cc.ak.conf.api;
        for (var i = 0; i < api.length; i++) {
          var req = http.requestWithUrl(api[i], cc.ak.key.http.IPLIST, this.on_complete, true, 1, null, true, true);
          req.ontimeout = this.on_timeout;
          req.onerror = this.on_error;
          req.target = this;
          this.xhr_arr[i] = req.xhr;
        }
      },
      on_complete: function on_complete(data) {
        data && 0 === data.status ? this.parse(data) : cc.ak.ui.alertRestart("\u670d\u52a1\u5668\u5730\u5740\u6570\u636e\u51fa\u9519");
        cc.log("iplist response:" + JSON.stringify(data));
        for (var i = 0; i < this.xhr_arr.length; i++) {
          var xhr = this.xhr_arr[i];
          xhr.abort();
        }
        this.xhr_arr = null;
        if ("function" === typeof this.req_cb) {
          this.req_cb();
          this.req_cb = null;
        }
      },
      on_error: function on_error(req, err) {
        var idx = this.xhr_arr.indexOf(req.xhr);
        idx > -1 && this.xhr_arr.splice(idx, 1);
        cc.log("error:" + err.message);
        0 === this.xhr_arr.length && cc.ak.ui.alertRestart("\u83b7\u53d6\u670d\u52a1\u5668\u5217\u8868\u65f6\u53d1\u751f\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u5c1d\u8bd5\u91cd\u542f\u6e38\u620f\u3002");
      },
      on_timeout: function on_timeout(req) {
        var idx = this.xhr_arr.indexOf(req.xhr);
        idx > -1 && this.xhr_arr.splice(idx, 1);
        0 === this.xhr_arr.length && cc.ak.ui.alertRestart("\u83b7\u53d6\u670d\u52a1\u5668\u5217\u8868\u8d85\u65f6\uff0c\u8bf7\u5c1d\u8bd5\u91cd\u542f\u6e38\u620f\u3002");
      },
      parseHotfixUrl: function parseHotfixUrl(data) {
        this._hotPackage = data.hotPackage;
        this._hotManifest = data.hotManifest;
      }
    });
    module.exports = CacheIpList;
    cc._RF.pop();
  }, {
    CacheModleBase: "CacheModleBase"
  } ],
  CacheLobbyConf: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f6a4cO1RSRO/qB2T6CvZ2Kx", "CacheLobbyConf");
    "use strict";
    var CacheModleBase = require("CacheModleBase");
    var CacheLobbyConf = cc.Class({
      extends: CacheModleBase,
      properties: {
        conf: null
      },
      parse: function parse(data) {
        this.conf = data;
        this._super(data);
      },
      empty: function empty() {
        return null === this.conf;
      },
      get_act_url: function get_act_url() {
        return this.conf.acturl;
      },
      is_promp_mode: function is_promp_mode() {
        return 1 == this.conf.promomode;
      },
      getCustomWechat: function getCustomWechat() {
        return this.conf.kfwx;
      },
      getCardLimitForClubCreate: function getCardLimitForClubCreate() {
        return this.conf ? this.conf.clubcoins : 0;
      },
      isAgent: function isAgent() {
        return 1 === this.conf.agent;
      }
    });
    module.exports = CacheLobbyConf;
    cc._RF.pop();
  }, {
    CacheModleBase: "CacheModleBase"
  } ],
  CacheModleBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3f4f8685dtMu5msICiBbmck", "CacheModleBase");
    "use strict";
    var CacheHelper = require("CacheHelper");
    var CacheModleBase = cc.Class({
      statics: {
        _instance: null,
        instance: function instance(key) {
          if (!this._instance) {
            this._instance = new this();
            this._instance.init(key);
          }
          return this._instance;
        },
        create: function create(key) {
          this._instance = null;
          return this.instance(key);
        }
      },
      properties: {
        key: "",
        timestamp: 0
      },
      init: function init(key) {
        this.key = key;
      },
      parse: function parse(data) {
        if (data) this.cache(data); else {
          cc.warn("data is null,key=" + this.key);
          this.clear();
        }
      },
      valid: function valid() {
        return this.timestamp > new Date().getTime();
      },
      load: function load() {
        return CacheHelper.load(this.key, this.parse.bind(this));
      },
      cache: function cache(data) {
        return CacheHelper.cache(this.key, data);
      },
      clear: function clear() {
        this.timestamp = 0;
        CacheHelper.remove(this.key);
      }
    });
    module.exports = CacheModleBase;
    cc._RF.pop();
  }, {
    CacheHelper: "CacheHelper"
  } ],
  CacheShopList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a9c3fSI63RP6JKtZT+O9g1O", "CacheShopList");
    "use strict";
    var CacheModleBase = require("CacheModleBase");
    var CacheShopList = cc.Class({
      extends: CacheModleBase,
      properties: {
        data: null
      },
      start: function start() {},
      parse: function parse(data) {
        this._super(data);
        data && (this.data = data);
        return this;
      },
      getPayData: function getPayData() {
        return this.data;
      }
    });
    module.exports = CacheShopList;
    cc._RF.pop();
  }, {
    CacheModleBase: "CacheModleBase"
  } ],
  CocosMd5: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3b5631mQFdPwoDFVfRtJSej", "CocosMd5");
    "use strict";
    module.exports = function(data) {
      function fflog(msg) {
        try {
          console.log(msg);
        } catch (e) {}
      }
      function to_zerofilled_hex(n) {
        var t1 = (n >>> 24).toString(16);
        var t2 = (16777215 & n).toString(16);
        return "00".substr(0, 2 - t1.length) + t1 + "000000".substr(0, 6 - t2.length) + t2;
      }
      function int64_to_bytes(num) {
        var retval = [];
        for (var i = 0; i < 8; i++) {
          retval.push(255 & num);
          num >>>= 8;
        }
        return retval;
      }
      function rol(num, places) {
        return num << places & 4294967295 | num >>> 32 - places;
      }
      function fF(b, c, d) {
        return b & c | ~b & d;
      }
      function fG(b, c, d) {
        return d & b | ~d & c;
      }
      function fH(b, c, d) {
        return b ^ c ^ d;
      }
      function fI(b, c, d) {
        return c ^ (b | ~d);
      }
      function bytes_to_int32(arr, off) {
        return arr[off + 3] << 24 | arr[off + 2] << 16 | arr[off + 1] << 8 | arr[off];
      }
      function int128le_to_hex(a, b, c, d) {
        var ra = "";
        var t = 0;
        var ta = 0;
        for (var i = 3; i >= 0; i--) {
          ta = arguments[i];
          t = 255 & ta;
          ta >>>= 8;
          t <<= 8;
          t |= 255 & ta;
          ta >>>= 8;
          t <<= 8;
          t |= 255 & ta;
          ta >>>= 8;
          t <<= 8;
          t |= ta;
          ra += to_zerofilled_hex(t);
        }
        return ra;
      }
      if (!data instanceof Uint8Array) {
        fflog("input data type mismatch only support Uint8Array");
        return null;
      }
      var databytes = [];
      for (var i = 0; i < data.byteLength; i++) databytes.push(data[i]);
      var org_len = databytes.length;
      databytes.push(128);
      var tail = databytes.length % 64;
      if (tail > 56) {
        for (var i = 0; i < 64 - tail; i++) databytes.push(0);
        tail = databytes.length % 64;
      }
      for (i = 0; i < 56 - tail; i++) databytes.push(0);
      databytes = databytes.concat(int64_to_bytes(8 * org_len));
      var h0 = 1732584193;
      var h1 = 4023233417;
      var h2 = 2562383102;
      var h3 = 271733878;
      var a = 0, b = 0, c = 0, d = 0;
      function _add(n1, n2) {
        return 4294967295 & n1 + n2;
      }
      var updateRun = function updateRun(nf, sin32, dw32, b32) {
        var temp = d;
        d = c;
        c = b;
        b = _add(b, rol(_add(a, _add(nf, _add(sin32, dw32))), b32));
        a = temp;
      };
      for (i = 0; i < databytes.length / 64; i++) {
        a = h0;
        b = h1;
        c = h2;
        d = h3;
        var ptr = 64 * i;
        updateRun(fF(b, c, d), 3614090360, bytes_to_int32(databytes, ptr), 7);
        updateRun(fF(b, c, d), 3905402710, bytes_to_int32(databytes, ptr + 4), 12);
        updateRun(fF(b, c, d), 606105819, bytes_to_int32(databytes, ptr + 8), 17);
        updateRun(fF(b, c, d), 3250441966, bytes_to_int32(databytes, ptr + 12), 22);
        updateRun(fF(b, c, d), 4118548399, bytes_to_int32(databytes, ptr + 16), 7);
        updateRun(fF(b, c, d), 1200080426, bytes_to_int32(databytes, ptr + 20), 12);
        updateRun(fF(b, c, d), 2821735955, bytes_to_int32(databytes, ptr + 24), 17);
        updateRun(fF(b, c, d), 4249261313, bytes_to_int32(databytes, ptr + 28), 22);
        updateRun(fF(b, c, d), 1770035416, bytes_to_int32(databytes, ptr + 32), 7);
        updateRun(fF(b, c, d), 2336552879, bytes_to_int32(databytes, ptr + 36), 12);
        updateRun(fF(b, c, d), 4294925233, bytes_to_int32(databytes, ptr + 40), 17);
        updateRun(fF(b, c, d), 2304563134, bytes_to_int32(databytes, ptr + 44), 22);
        updateRun(fF(b, c, d), 1804603682, bytes_to_int32(databytes, ptr + 48), 7);
        updateRun(fF(b, c, d), 4254626195, bytes_to_int32(databytes, ptr + 52), 12);
        updateRun(fF(b, c, d), 2792965006, bytes_to_int32(databytes, ptr + 56), 17);
        updateRun(fF(b, c, d), 1236535329, bytes_to_int32(databytes, ptr + 60), 22);
        updateRun(fG(b, c, d), 4129170786, bytes_to_int32(databytes, ptr + 4), 5);
        updateRun(fG(b, c, d), 3225465664, bytes_to_int32(databytes, ptr + 24), 9);
        updateRun(fG(b, c, d), 643717713, bytes_to_int32(databytes, ptr + 44), 14);
        updateRun(fG(b, c, d), 3921069994, bytes_to_int32(databytes, ptr), 20);
        updateRun(fG(b, c, d), 3593408605, bytes_to_int32(databytes, ptr + 20), 5);
        updateRun(fG(b, c, d), 38016083, bytes_to_int32(databytes, ptr + 40), 9);
        updateRun(fG(b, c, d), 3634488961, bytes_to_int32(databytes, ptr + 60), 14);
        updateRun(fG(b, c, d), 3889429448, bytes_to_int32(databytes, ptr + 16), 20);
        updateRun(fG(b, c, d), 568446438, bytes_to_int32(databytes, ptr + 36), 5);
        updateRun(fG(b, c, d), 3275163606, bytes_to_int32(databytes, ptr + 56), 9);
        updateRun(fG(b, c, d), 4107603335, bytes_to_int32(databytes, ptr + 12), 14);
        updateRun(fG(b, c, d), 1163531501, bytes_to_int32(databytes, ptr + 32), 20);
        updateRun(fG(b, c, d), 2850285829, bytes_to_int32(databytes, ptr + 52), 5);
        updateRun(fG(b, c, d), 4243563512, bytes_to_int32(databytes, ptr + 8), 9);
        updateRun(fG(b, c, d), 1735328473, bytes_to_int32(databytes, ptr + 28), 14);
        updateRun(fG(b, c, d), 2368359562, bytes_to_int32(databytes, ptr + 48), 20);
        updateRun(fH(b, c, d), 4294588738, bytes_to_int32(databytes, ptr + 20), 4);
        updateRun(fH(b, c, d), 2272392833, bytes_to_int32(databytes, ptr + 32), 11);
        updateRun(fH(b, c, d), 1839030562, bytes_to_int32(databytes, ptr + 44), 16);
        updateRun(fH(b, c, d), 4259657740, bytes_to_int32(databytes, ptr + 56), 23);
        updateRun(fH(b, c, d), 2763975236, bytes_to_int32(databytes, ptr + 4), 4);
        updateRun(fH(b, c, d), 1272893353, bytes_to_int32(databytes, ptr + 16), 11);
        updateRun(fH(b, c, d), 4139469664, bytes_to_int32(databytes, ptr + 28), 16);
        updateRun(fH(b, c, d), 3200236656, bytes_to_int32(databytes, ptr + 40), 23);
        updateRun(fH(b, c, d), 681279174, bytes_to_int32(databytes, ptr + 52), 4);
        updateRun(fH(b, c, d), 3936430074, bytes_to_int32(databytes, ptr), 11);
        updateRun(fH(b, c, d), 3572445317, bytes_to_int32(databytes, ptr + 12), 16);
        updateRun(fH(b, c, d), 76029189, bytes_to_int32(databytes, ptr + 24), 23);
        updateRun(fH(b, c, d), 3654602809, bytes_to_int32(databytes, ptr + 36), 4);
        updateRun(fH(b, c, d), 3873151461, bytes_to_int32(databytes, ptr + 48), 11);
        updateRun(fH(b, c, d), 530742520, bytes_to_int32(databytes, ptr + 60), 16);
        updateRun(fH(b, c, d), 3299628645, bytes_to_int32(databytes, ptr + 8), 23);
        updateRun(fI(b, c, d), 4096336452, bytes_to_int32(databytes, ptr), 6);
        updateRun(fI(b, c, d), 1126891415, bytes_to_int32(databytes, ptr + 28), 10);
        updateRun(fI(b, c, d), 2878612391, bytes_to_int32(databytes, ptr + 56), 15);
        updateRun(fI(b, c, d), 4237533241, bytes_to_int32(databytes, ptr + 20), 21);
        updateRun(fI(b, c, d), 1700485571, bytes_to_int32(databytes, ptr + 48), 6);
        updateRun(fI(b, c, d), 2399980690, bytes_to_int32(databytes, ptr + 12), 10);
        updateRun(fI(b, c, d), 4293915773, bytes_to_int32(databytes, ptr + 40), 15);
        updateRun(fI(b, c, d), 2240044497, bytes_to_int32(databytes, ptr + 4), 21);
        updateRun(fI(b, c, d), 1873313359, bytes_to_int32(databytes, ptr + 32), 6);
        updateRun(fI(b, c, d), 4264355552, bytes_to_int32(databytes, ptr + 60), 10);
        updateRun(fI(b, c, d), 2734768916, bytes_to_int32(databytes, ptr + 24), 15);
        updateRun(fI(b, c, d), 1309151649, bytes_to_int32(databytes, ptr + 52), 21);
        updateRun(fI(b, c, d), 4149444226, bytes_to_int32(databytes, ptr + 16), 6);
        updateRun(fI(b, c, d), 3174756917, bytes_to_int32(databytes, ptr + 44), 10);
        updateRun(fI(b, c, d), 718787259, bytes_to_int32(databytes, ptr + 8), 15);
        updateRun(fI(b, c, d), 3951481745, bytes_to_int32(databytes, ptr + 36), 21);
        h0 = _add(h0, a);
        h1 = _add(h1, b);
        h2 = _add(h2, c);
        h3 = _add(h3, d);
      }
      return int128le_to_hex(h3, h2, h1, h0).toLowerCase();
    };
    cc._RF.pop();
  }, {} ],
  ErrorDef: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "88332rL645LAbelKb5p568A", "ErrorDef");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var ErrorDef = {
      CODE: {
        Unknown: "Unknown",
        NetError: "NetError",
        NetTimeout: "NetTimeout",
        NetDataInvalid: "NetDataInvalid",
        HotFixing: "HotFixing"
      }
    };
    var ExtensibleError = require("ExtensibleError");
    var CustomError = function(_ExtensibleError) {
      _inherits(CustomError, _ExtensibleError);
      function CustomError(code, message, humantip, external) {
        _classCallCheck(this, CustomError);
        var _this = _possibleConstructorReturn(this, (CustomError.__proto__ || Object.getPrototypeOf(CustomError)).call(this, message));
        _this.message = message;
        _this.code = code || _this.constructor.name;
        _this.humantip = humantip;
        _this.external = external;
        return _this;
      }
      _createClass(CustomError, [ {
        key: "log",
        value: function log() {
          var ext = this.external;
          "object" === ("undefined" === typeof ext ? "undefined" : _typeof(ext)) && (ext = JSON.stringify(ext));
          cc.error("[code:" + this.code + "]" + (this.message ? "[msg:" + this.message + "]" : "") + (ext ? "[ext:" + ext + "]" : "") + ",stack=" + this.stack);
        }
      } ]);
      return CustomError;
    }(ExtensibleError);
    var Error = function(_CustomError) {
      _inherits(Error, _CustomError);
      function Error(code, message, humantip, external) {
        _classCallCheck(this, Error);
        return _possibleConstructorReturn(this, (Error.__proto__ || Object.getPrototypeOf(Error)).call(this, code, message, humantip, external));
      }
      return Error;
    }(CustomError);
    ErrorDef.Error = Error;
    var Fatal = function(_CustomError2) {
      _inherits(Fatal, _CustomError2);
      function Fatal(code, message, humantip, external) {
        _classCallCheck(this, Fatal);
        return _possibleConstructorReturn(this, (Fatal.__proto__ || Object.getPrototypeOf(Fatal)).call(this, code, message, humantip, external));
      }
      return Fatal;
    }(CustomError);
    ErrorDef.Fatal = Fatal;
    module.exports = ErrorDef;
    cc._RF.pop();
  }, {
    ExtensibleError: "ExtensibleError"
  } ],
  ExtensibleError: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2478bO9u3xBPLnqSGCiQNk8", "ExtensibleError");
    "use strict";
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var ExtensibleError = function ExtensibleError(message) {
      _classCallCheck(this, ExtensibleError);
      Error.apply(this, arguments);
      this.name = this.constructor.name;
      "function" === typeof Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
    };
    ExtensibleError.prototype = Object.create(Error.prototype);
    module.exports = ExtensibleError;
    cc._RF.pop();
  }, {} ],
  GlobalUIMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e4ae7vwdp1AIre3FemVRvvh", "GlobalUIMgr");
    "use strict";
    var GlobalUIMgr = cc.Class({
      extends: cc.Component,
      properties: {
        audioCommonBtn: {
          type: cc.AudioClip,
          default: null,
          displayName: "\u901a\u7528\u6309\u94ae\u70b9\u51fb\u97f3\u9891"
        },
        pfAlert: cc.Prefab,
        pfToast: cc.Prefab,
        pfPreloadScene: cc.Prefab,
        _toastMgr: cc.Component,
        pfCommonBtn: cc.Prefab,
        pfLoading: cc.Prefab,
        _loadingMgr: cc.Component,
        imgLoad: {
          default: null,
          type: cc.Component,
          visible: false
        },
        pfWebview: cc.Prefab,
        pfsubGameEntrance: cc.Prefab
      },
      init: function init() {
        var _this = this;
        cc.game.addPersistRootNode(this.node);
        this.bindGlobalUI();
        cc.director.___laodScene || (cc.director.___laodScene = cc.director.loadScene);
        cc.director.loadScene = function(name, onLaunched) {
          cc.director.___laodScene.call(cc.director, name, function() {
            _this.bindGlobalUI();
            onLaunched && onLaunched();
          });
        };
        var ImgLoader = require("uiImgLoad");
        this.imgLoad = new ImgLoader();
        cc.Button.prototype.touchEndClone || (cc.Button.prototype.touchEndClone = cc.Button.prototype._onTouchEnded);
        cc.Button.prototype._soundOn = true;
        cc.Button.prototype._audio = this.audioCommonBtn;
        cc.Button.prototype.setSoundEnable = function(enable) {
          this._soundOn = enable;
        };
        cc.Button.prototype.setAudio = function(audio) {
          cc.Button.prototype._audio = audio;
        };
        cc.Button.prototype._onTouchEnded = function(event) {
          this.interactable && this.enabledInHierarchy && this._pressed && this._soundOn && cc.ak.util.audioMgr.playSFX(this._audio);
          this.touchEndClone.apply(this, arguments);
        };
      },
      bindGlobalUI: function bindGlobalUI() {
        var root = cc.director.getScene().getChildByName("Canvas");
        var width = cc.winSize.width;
        var height = cc.winSize.height;
        this._alertLayer = new cc.Node();
        this._alertLayer.parent = root;
        this._alertLayer.zIndex = 1001;
        this._alertLayer.width = width;
        this._alertLayer.height = height;
        this._alertIdCount = 0;
        this._offlineRoot = new cc.Node();
        this._offlineRoot.parent = root;
        this._offlineRoot.zIndex = 1002;
        this._offlineRoot.width = width;
        this._offlineRoot.height = height;
        this._preloadSceneLayer = new cc.Node();
        this._preloadSceneLayer.parent = root;
        this._preloadSceneLayer.zIndex = 1003;
        this._preloadSceneLayer.width = width;
        this._preloadSceneLayer.height = height;
        var toastNode = cc.instantiate(this.pfToast);
        this.popupNode = new cc.Node();
        this.popupNode.parent = root;
        this.popupNode.zIndex = 1001;
        toastNode.parent = root;
        toastNode.zIndex = 1001;
        this._toastMgr = toastNode.getComponent("uiToast");
        var loadingNode = cc.instantiate(this.pfLoading);
        loadingNode.parent = root;
        loadingNode.zIndex = 1001;
        this._loadingMgr = loadingNode.getComponent("uiLoading");
        if (cc.ak.conf.debug && cc.ak.conf.debug.showReconnBtn) {
          var btnOpen = cc.instantiate(cc.ak.ui.pfCommonBtn);
          btnOpen.parent = root;
          btnOpen.width = btnOpen.width / 4;
          btnOpen.height = btnOpen.height / 2;
          btnOpen.x = 0;
          btnOpen.y = height / 2 - btnOpen.height / 2;
          comp = btnOpen.getComponent("uiBtnCommon");
          comp.lblText.string = "\u91cd\u8fde";
          comp.lblText.fontSize = 12;
          btnOpen.on("click", function() {
            cc.ak.event.emit(cc.ak.key.event.CONNECT_SOCKET, 0);
          }, this);
          var btnClose = cc.instantiate(cc.ak.ui.pfCommonBtn);
          btnClose.parent = root;
          btnClose.width = btnClose.width / 4;
          btnClose.height = btnClose.height / 2;
          btnClose.x = -btnClose.width / 2 - btnOpen.width / 2;
          btnClose.y = height / 2 - btnClose.height / 2;
          var comp = btnClose.getComponent("uiBtnCommon");
          comp.lblText.string = "\u65ad\u7ebf";
          comp.lblText.fontSize = 12;
          btnClose.on("click", function() {
            cc.ak.util.socketMgr.forceClose();
          }, this);
          var btnReco = cc.instantiate(cc.ak.ui.pfCommonBtn);
          btnReco.parent = root;
          btnReco.width = btnReco.width / 3;
          btnReco.height = btnReco.height / 2;
          btnReco.x = btnOpen.width / 2 + btnReco.width / 2;
          btnReco.y = height / 2 - btnReco.height / 2;
          comp = btnReco.getComponent("uiBtnCommon");
          comp.lblText.string = "\u65ad\u7ebf\u91cd\u8fde";
          comp.lblText.fontSize = 12;
          btnReco.on("click", function() {
            cc.ak.util.socketMgr.reconnect();
          }, this);
          btnReco = cc.instantiate(cc.ak.ui.pfCommonBtn);
          btnReco.parent = root;
          btnReco.width = btnReco.width / 3;
          btnReco.height = btnReco.height / 2;
          btnReco.x = btnOpen.width / 2 + btnReco.width / 2 * 3;
          btnReco.y = height / 2 - btnReco.height / 2;
          comp = btnReco.getComponent("uiBtnCommon");
          comp.lblText.string = "\u9519\u8bef\u91cd\u8fde";
          comp.lblText.fontSize = 12;
          btnReco.on("click", function() {
            cc.ak.util.socketMgr.doError();
          }, this);
        }
      },
      __loadLayer: function __loadLayer(name) {
        var layerMgr = cc.find("Canvas/LayerMgr").getComponent("LayerMgr");
        switch (name) {
         case "start":
          layerMgr.loadStartLayer();
          break;

         case "login":
          layerMgr.loadLoginLayer();
          break;

         case "lobby":
          layerMgr.loadLobbyLayer();
        }
      },
      _loadLayer: function _loadLayer(name) {
        var _this2 = this;
        var curr = cc.director.getScene();
        "lobby" === curr.name ? this.__loadLayer(name) : cc.director.loadScene("lobby", function() {
          _this2.__loadLayer(name);
        });
      },
      loadStartScence: function loadStartScence() {
        this._loadLayer("start");
      },
      loadLoginScence: function loadLoginScence() {
        this._loadLayer("login");
      },
      loadLobbyScence: function loadLobbyScence() {
        this._loadLayer("lobby");
      },
      start: function start() {},
      alert: function alert(args) {
        var alert = cc.instantiate(this.pfAlert);
        alert.parent = this._alertLayer;
        alert.getComponent("uiAlert").init(args);
        this._alertIdCount++;
        alert.name = "alert" + this._alertIdCount;
        return this._alertIdCount;
      },
      removeAlert: function removeAlert(alertId) {
        var alert = this._alertLayer.getChildByName(alertId);
        alert && alert.destroy();
      },
      removeAllAlert: function removeAllAlert() {
        if (this._alertLayer) {
          this._alertLayer.destroyAllChildren();
          this._alertIdCount = 0;
        }
      },
      alertRestart: function alertRestart(text) {
        this.alert({
          text: text,
          btns: lan.com.lbl.sure,
          callback: function callback(idx) {
            cc.ak.util.utils.gameRestartOnFail();
          }
        });
      },
      showOffline: function showOffline() {
        this._offlineRoot.destroyAllChildren();
        var offlineLayer = new cc.Node();
        offlineLayer.parent = this._offlineRoot;
        offlineLayer.width = this._offlineRoot.width;
        offlineLayer.height = this._offlineRoot.height;
        var loadingNode = cc.instantiate(this.pfLoading);
        loadingNode.parent = offlineLayer;
        loadingNode.active = true;
        offlineLayer.on(cc.Node.EventType.TOUCH_START, function(event) {
          event.stopPropagation();
        });
        loadingNode.getComponent("uiLoading").setText("\u6b63\u5728\u65ad\u7ebf\u91cd\u8fde\uff0c\u8bf7\u7a0d\u5019...");
      },
      removeOffline: function removeOffline() {
        this._offlineRoot.destroyAllChildren();
      },
      loadScenceWithPreload: function loadScenceWithPreload(sceneName, onProgress, onLoaded) {
        this.removePreloadLayer();
        var node = cc.instantiate(this.pfPreloadScene);
        node.parent = this._preloadSceneLayer;
        var preloadComp = node.getComponent("preloadScene");
        cc.director.preloadScene(sceneName, function(completedCount, totalCount, item) {
          preloadComp.onScenceProgress(completedCount, totalCount, item);
          onProgress && onProgress(completedCount, totalCount, item);
        }, function(error, asset) {
          if (error) {
            cc.ak.ui.removePreloadLayer();
            error.humantip = "\u8d44\u6e90\u52a0\u8f7d\u51fa\u9519\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5";
            cc.ak.util.utils.HandleError(error);
          }
          preloadComp.onScenceLoaded(error, asset);
          onLoaded && onLoaded(error, asset);
          error || cc.director.loadScene(sceneName);
        });
      },
      removePreloadLayer: function removePreloadLayer() {
        this._preloadSceneLayer.destroyAllChildren();
      },
      toast: function toast(str) {
        this._toastMgr.show(str);
      },
      waiting: function waiting(delay, msg, cb, tag, touchEnable) {
        this._loadingMgr.setText(msg);
        this._loadingMgr.setCallBack(delay, cb, tag, touchEnable);
        this._loadingMgr.show();
      },
      waitingHide: function waitingHide() {
        this._loadingMgr.hide();
      },
      showWebView: function showWebView(args) {
        var webView = this.popupNode.getChildByName("webview");
        if (null == webView || void 0 == webView) {
          webView = cc.instantiate(this.pfWebview);
          webView.parent = this.popupNode;
        }
        void 0 != args.w && void 0 != args.h && webView.getComponent("uiWebview").setParame(args.w, args.h);
        var webCmp = webView.getComponent("uiWebview");
        webCmp.show(args.url);
      },
      showExchangeAlert: function showExchangeAlert() {
        var exchange = this.popupNode.getChildByName("exchange");
        if (null == exchange || void 0 == exchange) {
          exchange = cc.instantiate(this.pfExchange);
          exchange.parent = this.popupNode;
        }
      },
      showBindAccount: function showBindAccount(type) {
        var bindAccount = this.popupNode.getChildByName("bindAccount");
        if (null == bindAccount || void 0 == bindAccount) {
          bindAccount = cc.instantiate(this.pfBindAccout);
          bindAccount.parent = this.popupNode;
        }
        bindAccount.getComponent("binAccount").upDataView(type);
      },
      alertWhenHttpErr: function alertWhenHttpErr(req, cmd, time_out_msg, err_msg) {
        req.ontimeout = function() {
          cc.ak.log(cmd, time_out_msg);
          cc.ak.ui.waitingHide();
          cc.ak.ui.alert({
            title: lan.com.lbl.tip,
            text: time_out_msg,
            btns: lan.com.lbl.iknowed
          });
        };
        req.onerror = function() {
          cc.ak.log(cmd, err_msg);
          cc.ak.ui.waitingHide();
          cc.ak.ui.alert({
            title: lan.com.lbl.tip,
            text: err_msg,
            btns: lan.com.lbl.iknowed
          });
        };
      },
      alertRestartWhenHttpErr: function alertRestartWhenHttpErr(req, cmd, time_out_msg, err_msg) {
        var _this3 = this;
        req.ontimeout = function() {
          cc.ak.log(cmd, time_out_msg);
          cc.ak.ui.waitingHide();
          _this3.alertRestart(time_out_msg);
        };
        req.onerror = function() {
          cc.ak.log(cmd, err_msg);
          cc.ak.ui.waitingHide();
          _this3.alertRestart(err_msg);
        };
      },
      rejectErrorWhenHttpErr: function rejectErrorWhenHttpErr(reject, req, cmd, action) {
        req.ontimeout = function() {
          cc.ak.ui.waitingHide();
          var humantip = cc.js.formatStr(action, lan.com.err.reason.netErr, lan.com.err.sol.retryLater);
          reject(new cc.ak.err.Error(cc.ak.err.CODE.NetError, "net error", humantip, {
            cmd: cmd
          }));
        };
        req.onerror = function() {
          cc.ak.ui.waitingHide();
          var humantip = cc.js.formatStr(action, lan.com.err.reason.netTimeOut, lan.com.err.sol.retryLater);
          reject(new cc.ak.err.Error(cc.ak.err.CODE.NetError, "net time out", humantip, {
            cmd: cmd
          }));
        };
      },
      rejectFatalWhenHttpErr: function rejectFatalWhenHttpErr(reject, req, cmd, action) {
        req.ontimeout = function() {
          cc.ak.ui.waitingHide();
          var humantip = cc.js.formatStr(action, lan.com.err.reason.netErr, lan.com.err.sol.restart);
          reject(new cc.ak.err.Fatal(cc.ak.err.CODE.NetError, "net error", humantip, {
            cmd: cmd
          }));
        };
        req.onerror = function() {
          cc.ak.ui.waitingHide();
          var humantip = cc.js.formatStr(action, lan.com.err.reason.netTimeOut, lan.com.err.sol.restart);
          reject(new cc.ak.err.Fatal(cc.ak.err.CODE.NetError, "net time out", humantip, {
            cmd: cmd
          }));
        };
      },
      toastWhenHttpErr: function toastWhenHttpErr(req, time_out_msg, err_msg) {
        req.ontimeout = function() {
          cc.log(time_out_msg);
          cc.ak.ui.waitingHide();
          cc.ak.ui.toast(time_out_msg);
        };
        req.onerror = function() {
          cc.log(err_msg);
          cc.ak.ui.waitingHide();
          cc.ak.ui.toast(err_msg);
        };
      }
    });
    module.exports = GlobalUIMgr;
    cc._RF.pop();
  }, {
    uiImgLoad: "uiImgLoad"
  } ],
  HotfixMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "df8edj4uMlHwbDQW+3kfZRT", "HotfixMgr");
    "use strict";
    var Md5 = require("CocosMd5");
    var CryptoJS = require("crypto-js");
    var HotfixMgr = cc.Class({
      statics: {
        _instance: null,
        instance: function instance() {
          if (!this._instance) {
            this._instance = new this();
            this._instance.init();
          }
          return this._instance;
        },
        create: function create() {
          this._instance = null;
          return this.instance();
        },
        HotRootDir: "hotassets",
        TempLocalSuffix: "___temp/",
        TempRemoteSuffix: "_temp/",
        TempRemoteManifestName: "project.manifest.temp",
        ProjectManifestName: "project.manifest",
        VersionManifestName: "version.manifest",
        MainfestID: "@manifest"
      },
      properties: {
        _updating: false,
        updating: {
          get: function get() {
            return this._updating;
          }
        },
        needRestart: {
          get: function get() {
            return this._needRestart;
          }
        },
        _storagePath: "",
        _currBundleIdx: 0,
        _am: null,
        _lastPercentByFile: 0,
        _failCount: 0,
        _MAX_RETRY_COUNT: 2,
        _errCount: 0,
        _rootBundle: null,
        _resolve: null,
        _reject: null,
        _needRestart: false,
        _downloader: null,
        _bundleStoragePath: null,
        _bundleManifestPath: null,
        _bundleLocalTempPath: null,
        _bundleLocalTempManifestPath: null,
        _bundleRemoteTempPath: null,
        _bundleRemoteTempManifestPath: null
      },
      init: function init() {
        this._storagePath = (window.jsb ? jsb.fileUtils.getWritablePath() : "/") + HotfixMgr.HotRootDir + "/";
      },
      start: function start() {},
      getBundleStoragePath: function getBundleStoragePath(bundleId) {
        return this._storagePath + bundleId + "/";
      },
      getBundleManifestPath: function getBundleManifestPath(bundleId) {
        return this.getBundleStoragePath(bundleId) + HotfixMgr.ProjectManifestName;
      },
      getBundleStorageResPath: function getBundleStorageResPath(bundleId) {
        return this._storagePath + bundleId + "/subpackages/" + bundleId + "/";
      },
      getHotSubDirExcluedAppPath: function getHotSubDirExcluedAppPath(bundleId) {
        return HotfixMgr.HotRootDir + "/" + bundleId + "/subpackages/" + bundleId + "/";
      },
      _itemClear: function _itemClear() {
        if (!jsb.fileUtils.isFileExist(this._bundleManifestPath) && jsb.fileUtils.isFileExist(this._bundleLocalTempManifestPath)) {
          var manifestStr = jsb.fileUtils.getStringFromFile(this._bundleLocalTempManifestPath);
          jsb.fileUtils.writeStringToFile(manifestStr, this._bundleManifestPath);
        }
        this._am && this._am.setEventCallback(null);
        this._am = null;
        this._failCount = 0;
        this._errCount = 0;
        this._resolve = null;
        this._reject = null;
        this._currBundleIdx++;
        this._currBundleIdx >= this._rootBundle.updateList.length && (this._currBundleIdx = 0);
        this._bundleStoragePath = null;
        this._bundleManifestPath = null;
        this._bundleLocalTempPath = null;
        this._bundleLocalTempManifestPath = null;
        this._bundleRemoteTempPath = null;
        this._bundleRemoteTempManifestPath = null;
      },
      clear: function clear() {
        cc.log("hotfix clear " + this._currBundleIdx);
        this._updating = false;
        this._currBundleIdx = 0;
        this._rootBundle = null;
        this._am && this._am.setEventCallback(null);
        this._am = null;
        this._failCount = 0;
        this._errCount = 0;
        this._resolve = null;
        this._reject = null;
        this._needRestart = false;
        this._downloader.setOnTaskError(null);
        this._downloader.setOnTaskProgress(null);
        this._downloader.setOnFileTaskSuccess(null);
        this._downloader = null;
      },
      hotUpdate: function hotUpdate(bundleId, callbackData) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          cc.ak.event.emit(cc.ak.key.event.START_STATUS_HOTFIX_VER_CHECK, bundleId);
          if (!window.jsb) {
            resolve(callbackData);
            return;
          }
          var bundle = cc.ak.cache.bundleMgr.getBundle(bundleId);
          if (!bundle.updateList || bundle.updateList.length <= 0) {
            cc.log("\u5df2\u7ecf\u662f\u6700\u65b0\u7248\u672c\u65e0\u9700\u70ed\u66f4:id:" + bundleId + ",ver:" + bundle.version);
            resolve(callbackData);
            return;
          }
          if (_this._updating) {
            reject(new cc.ak.err.Error(cc.ak.err.CODE.HotFixing, "hotFixing", lan.com.err.reason.hotfixing));
            return;
          }
          _this._rootBundle = bundle;
          _this._updating = true;
          _this._downloader = new jsb.Downloader();
          var tasks = [];
          cc.log("hotfix begin bundleId=" + bundleId);
          for (var i = 0; i < bundle.updateList.length; i++) {
            cc.log("ready to update:" + bundle.updateList[i].id + " " + bundle.updateList[i].version + "=>" + bundle.updateList[i].remoteVersion);
            tasks.push(_this._initAm.bind(_this));
            tasks.push(_this._loadLocalMani.bind(_this));
            tasks.push(_this._loadRemoteMani.bind(_this));
            tasks.push(_this._itemClear.bind(_this));
          }
          var p = tasks.reduce(function(promise, task) {
            return promise.then(task);
          }, Promise.resolve());
          p.then(_this._restart.bind(_this)).catch(function(e) {
            cc.error("error bundleId=" + bundleId);
            cc.ak.util.utils.Err(e);
            bundleId === cc.ak.const.bundle.idCoreLobby ? e = new cc.ak.err.Fatal(e.code, e.message, e.humantip ? cc.js.formatStr(e.humantip, lan.com.err.sol.restart) : null, e.external) : e.humantip = e.humantip ? cc.js.formatStr(e.humantip, lan.com.err.sol.checkNet) : e.message;
            return e;
          }).then(function(e) {
            cc.log("hotfix finish " + _this._currBundleIdx);
            _this.clear();
            e ? reject(e) : resolve(callbackData);
          });
        });
      },
      _initAm: function _initAm() {
        var _this2 = this;
        return new Promise(function(resolve, reject) {
          var i = _this2._currBundleIdx;
          var bundle = _this2._rootBundle.updateList[i];
          cc.log("_initAm " + _this2._currBundleIdx + "  " + bundle.id);
          _this2._bundleStoragePath = _this2.getBundleStoragePath(bundle.id);
          _this2._bundleManifestPath = _this2.getBundleManifestPath(bundle.id);
          _this2._bundleLocalTempPath = _this2._storagePath + bundle.id + HotfixMgr.TempLocalSuffix + "/";
          _this2._bundleLocalTempManifestPath = _this2._bundleLocalTempPath + HotfixMgr.TempRemoteManifestName;
          _this2._bundleRemoteTempPath = _this2._storagePath + bundle.id + HotfixMgr.TempRemoteSuffix + "/";
          _this2._bundleRemoteTempManifestPath = _this2._bundleRemoteTempPath + HotfixMgr.TempRemoteManifestName;
          _this2._am = new jsb.AssetsManager("", _this2._bundleStoragePath, cc.ak.util.utils.VerCompare);
          _this2._am.setVerifyCallback(function(filePath, asset) {
            var content = jsb.fileUtils.getDataFromFile(filePath);
            var md5 = Md5(content);
            return md5 === asset.md5;
          });
          cc.sys.os === cc.sys.OS_ANDROID && _this2._am.setMaxConcurrentTask(2);
          var manifestStr = null;
          if (_this2._includeHotManifest()) {
            manifestStr = jsb.fileUtils.getStringFromFile(_this2._bundleManifestPath);
            resolve(manifestStr);
          } else cc.loader.loadRes("manifest/" + bundle.id + "/project", function(err, file) {
            cc.log("_initAm " + file.nativeUrl);
            manifestStr = jsb.fileUtils.getStringFromFile(file.nativeUrl);
            err ? cc.warn(err) : cc.loader.release(file);
            resolve(manifestStr);
          });
        });
      },
      _loadLocalMani: function _loadLocalMani(manifestStr) {
        var _this3 = this;
        return new Promise(function(resolve, reject) {
          cc.log("_loadLocalMani " + _this3._currBundleIdx);
          var mani = null;
          var bundle = _this3._rootBundle.updateList[_this3._currBundleIdx];
          if (manifestStr) try {
            mani = JSON.parse(manifestStr);
          } catch (e) {
            cc.ak.util.utils.Err(e);
            reject(e);
            return;
          } else {
            mani = {};
            mani.version = "0.0.0";
          }
          _this3._resolve = resolve;
          _this3._reject = reject;
          cc.log("_loadLocalMani " + bundle.id);
          mani.packageUrl = cc.ak.cache.ipList.hotPackage;
          mani.remoteManifestUrl = cc.ak.cache.ipList.hotManifest + bundle.id + "/" + HotfixMgr.ProjectManifestName;
          mani.remoteVersionUrl = cc.ak.cache.ipList.hotManifest + bundle.id + "/" + HotfixMgr.VersionManifestName;
          cc.log("_loadLocalMani " + JSON.stringify(mani));
          var manifest = new jsb.Manifest(JSON.stringify(mani), _this3._bundleStoragePath);
          if (_this3._am.getState() === jsb.AssetsManager.State.UNINITED) {
            if (jsb.fileUtils.isFileExist(_this3._bundleManifestPath)) {
              jsb.fileUtils.createDirectory(_this3._bundleLocalTempPath);
              jsb.fileUtils.writeStringToFile(manifestStr, _this3._bundleLocalTempManifestPath);
              jsb.fileUtils.removeFile(_this3._bundleManifestPath);
            }
            _this3._am.loadLocalManifest(manifest, _this3._bundleStoragePath);
          }
          if (!_this3._am.getLocalManifest() || !_this3._am.getLocalManifest().isLoaded()) {
            reject(new cc.ak.err.Error(cc.ak.err.CODE.Unknown, "Failed to load local manifest", cc.js.formatStr(lan.com.err.action.hotUpdate, lan.com.err.reason.localLoadFaild)));
            return;
          }
          _this3._am.setEventCallback(_this3.updateCb.bind(_this3));
          resolve();
        });
      },
      _loadRemoteMani: function _loadRemoteMani() {
        var _this4 = this;
        return new Promise(function(resolve, reject) {
          _this4._reject = reject;
          _this4._resolve = resolve;
          var bundle = _this4._rootBundle.updateList[_this4._currBundleIdx];
          cc.log("_loadLocalMani " + _this4._currBundleIdx + "  " + bundle.id);
          var remoteManifestUrl = cc.ak.cache.ipList.hotManifest + bundle.id + "/" + HotfixMgr.ProjectManifestName;
          _this4._downloader.setOnTaskError(function(task, errorCode, errorCodeInternal, errorStr) {
            _this4._downloader.setOnTaskError(null);
            _this4._downloader.setOnFileTaskSuccess(null);
            var dmsg = "download manifest error, update skipped.";
            reject(new cc.ak.err.Error(cc.ak.err.CODE.Unknown, dmsg, cc.js.formatStr(lan.com.err.action.hotUpdate, lan.com.err.reason.manifestDowloadFailed), {
              errorCode: errorCode,
              errorCodeInternal: errorCodeInternal,
              errorStr: errorStr
            }));
          });
          _this4._downloader.setOnFileTaskSuccess(function(task) {
            _this4._downloader.setOnTaskError(null);
            _this4._downloader.setOnFileTaskSuccess(null);
            var manifestStr = jsb.fileUtils.getStringFromFile(_this4._bundleRemoteTempManifestPath);
            var mani = null;
            try {
              mani = JSON.parse(manifestStr);
            } catch (e) {
              cc.ak.util.utils.Err(e);
              reject(e);
              return;
            }
            mani.packageUrl = cc.ak.cache.ipList.hotPackage;
            mani.remoteManifestUrl = cc.ak.cache.ipList.hotManifest + bundle.id + "/" + HotfixMgr.ProjectManifestName;
            mani.remoteVersionUrl = cc.ak.cache.ipList.hotManifest + bundle.id + "/" + HotfixMgr.VersionManifestName;
            var manifest = new jsb.Manifest(JSON.stringify(mani), _this4._bundleStoragePath);
            _this4._am.loadRemoteManifest(manifest) || reject(new cc.ak.err.Error(cc.ak.err.CODE.Unknown, "assetsManager state invalid on load remote manifest!", cc.js.formatStr(lan.com.err.action.hotUpdate, lan.com.err.reason.manifestDowloadFailed), {
              state: _this4._am.getState()
            }));
          });
          _this4._downloader.createDownloadFileTask(remoteManifestUrl, _this4._bundleRemoteTempManifestPath, HotfixMgr.Manifest);
        });
      },
      updateCb: function updateCb(event) {
        var bundle = this._rootBundle.updateList[this._currBundleIdx];
        var dmsg = "";
        switch (event.getEventCode()) {
         case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
          dmsg = "ERROR_NO_LOCAL_MANIFEST,No local manifest file found, hot update skipped.";
          this._reject(new cc.ak.err.Error(cc.ak.err.CODE.Unknown, dmsg, cc.js.formatStr(lan.com.err.action.hotUpdate, lan.com.err.reason.localLoadFaild), {
            code: event.getEventCode(),
            dmsg: dmsg
          }));
          break;

         case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
          dmsg = "ERROR_DOWNLOAD_MANIFEST, update skipped.";
          this._reject(new cc.ak.err.Error(cc.ak.err.CODE.Unknown, dmsg, cc.js.formatStr(lan.com.err.action.hotUpdate, lan.com.err.reason.manifestDowloadFailed), {
            code: event.getEventCode(),
            dmsg: dmsg
          }));
          break;

         case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
          dmsg = "ERROR_PARSE_MANIFEST, update skipped.";
          this._reject(new cc.ak.err.Error(cc.ak.err.CODE.Unknown, dmsg, cc.js.formatStr(lan.com.err.action.hotUpdate, lan.com.err.reason.manifestParseFailed), {
            code: event.getEventCode(),
            dmsg: dmsg
          }));
          break;

         case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
          cc.log("\u5df2\u7ecf\u662f\u6700\u65b0\u7248\u672c\u65e0\u9700\u70ed\u66f4");
          this._resolve();
          break;

         case jsb.EventAssetsManager.NEW_VERSION_FOUND:
          cc.log("NEW_VERSION_FOUND  exec update");
          this._am.update();
          break;

         case jsb.EventAssetsManager.UPDATE_PROGRESSION:
          cc.log("UPDATE_PROGRESSION:");
          var msg = event.getMessage();
          msg && cc.log(msg);
          this._lastPercentByFile = event.getPercentByFile();
          var data = {
            bundleId: bundle.id,
            bundlesLen: this._rootBundle.updateList.length,
            bundleIdx: this._currBundleIdx,
            rootBundleId: this._rootBundle.id,
            eventAssetsManager: event
          };
          cc.ak.event.emit(cc.ak.key.event.START_STATUS_HOTFIX_PROGRESS, data);
          break;

         case jsb.EventAssetsManager.ERROR_UPDATING:
          cc.warn("ERROR_UPDATING Asset: " + event.getAssetId() + ", " + event.getMessage());
          this._errCount++;
          break;

         case jsb.EventAssetsManager.ERROR_DECOMPRESS:
          cc.error("ERROR_UPDATING Asset: " + event.getAssetId() + ", " + event.getMessage());
          break;

         case jsb.EventAssetsManager.UPDATE_FINISHED:
          cc.ak.cache.bundleMgr.isCoreBundle(bundle.id) && (this._needRestart = true);
          var resDir = this.getBundleStorageResPath(bundle.id);
          var searchPaths = jsb.fileUtils.getSearchPaths();
          var subDir = this.getHotSubDirExcluedAppPath(bundle.id);
          for (var i = 0; i < searchPaths.length; i++) {
            var spath = searchPaths[i];
            if (spath.indexOf(subDir) > 0) {
              searchPaths.splice(i, 1);
              break;
            }
          }
          searchPaths.unshift(resDir);
          jsb.fileUtils.setSearchPaths(searchPaths);
          this._resolve();
          break;

         case jsb.EventAssetsManager.UPDATE_FAILED:
          cc.log("UPDATE_FAILED. " + event.getMessage() + ",failcount=" + this._failCount + ",errcount=" + this._errCount);
          this._failCount++;
          if (!(this._failCount <= this._MAX_RETRY_COUNT)) {
            cc.error("Reach maximum fail count, exit update process");
            dmsg = "UPDATE_FAILED:Reach maximum fail count, exit update process,failcount=" + this._failCount + ",errcount=" + this._errCount;
            this._reject(new cc.ak.err.Error(cc.ak.err.CODE.Unknown, dmsg, cc.js.formatStr(lan.com.err.action.hotUpdate, lan.com.err.reason.netBad), {
              code: event.getEventCode(),
              dmsg: dmsg
            }));
            break;
          }
          cc.ak.ui.toast(cc.js.formatStr(lan.com.err.action.hotUpdate, lan.com.err.reason.netBad, cc.js.formatStr(lan.com.err.sol.retying, this._failCount + "/" + this._MAX_RETRY_COUNT)));
          this._errCount = 0;
          this._am.downloadFailedAssets();
        }
      },
      _includeHotManifest: function _includeHotManifest() {
        var bundle = this._rootBundle.updateList[this._currBundleIdx];
        return this.includeHotManifest(bundle.id);
      },
      includeHotManifest: function includeHotManifest(bundleId) {
        var maniPath = this.getBundleManifestPath(bundleId);
        if (!jsb.fileUtils.isFileExist(maniPath)) return false;
        var searchPaths = jsb.fileUtils.getSearchPaths();
        for (var i = 0; i < searchPaths.length; i++) {
          var path = searchPaths[i];
          if (path.includes(HotfixMgr.HotRootDir) && path.includes(bundleId)) return true;
        }
        return false;
      },
      _restart: function _restart() {
        var _this5 = this;
        return new Promise(function(resolve, reject) {
          var searchPaths = jsb.fileUtils.getSearchPaths();
          cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(searchPaths));
          if (!_this5._needRestart) {
            resolve();
            return;
          }
          cc.log("_restart " + _this5._currBundleIdx);
          _this5.clear();
          cc.ak.util.utils.gameRestart();
        });
      }
    });
    module.exports = HotfixMgr;
    cc._RF.pop();
  }, {
    CocosMd5: "CocosMd5",
    "crypto-js": "crypto-js"
  } ],
  Http: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "75864krJc1OibxbpxivY2d+", "Http");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var http = function() {
      var _key;
      var _param;
      var http = {};
      var CryptoJS = require("crypto-js");
      var _processing = false;
      var merge_param = function merge_param(reqData) {
        var postData = {};
        postData.data = {};
        for (var key in _param) postData.data[key] = _param[key];
        if ("string" === typeof reqData) postData.cmd = reqData; else if ("object" === ("undefined" === typeof reqData ? "undefined" : _typeof(reqData))) {
          postData.cmd = reqData.cmd;
          if (reqData.hasOwnProperty("data")) for (var key in reqData.data) postData.data[key] = reqData.data[key];
        }
        return postData;
      };
      http.set_param = function(comm_param, aes_key) {
        _key = CryptoJS.enc.Utf8.parse(aes_key);
        _param = comm_param;
      };
      http.add_param = function(key, value) {
        _param[key] = value;
      };
      http.request = function(data, callback, count, req, isTryAllUrl) {
        if (!cc.ak.cache.ipList) {
          cc.error("iplist\u672a\u521d\u59cb\u5316 " + new Error().stack);
          return;
        }
        _processing = true;
        void 0 !== count && null !== count || (count = cc.ak.conf.http_try_count);
        var url = cc.ak.cache.ipList.get();
        isTryAllUrl && (count = cc.ak.cache.ipList.size());
        req || (req = {
          data: data || {},
          callback: callback,
          count: count,
          currCount: 1
        });
        req && void 0 === req.currCount && (req.currCount = 0);
        var kp = "x=" + new Date().getTime();
        url.indexOf("?") > -1 ? url += "&" + kp : url += "?" + kp;
        var xhr = cc.loader.getXMLHttpRequest();
        req.xhr = xhr;
        xhr.onreadystatechange = function() {
          cc.log("[http]<--|" + (req.data.cmd ? req.data.cmd : req.data) + " # readyState" + xhr.readyState + ", status : " + xhr.status + ", statusText : " + xhr.statusText);
          if (4 === xhr.readyState && (xhr.status >= 200 && xhr.status < 300 || 304 == xhr.status)) {
            var rsp = xhr.responseText;
            if ("function" === typeof callback) {
              try {
                rsp = CryptoJS.AES.decrypt(rsp, _key, {
                  mode: CryptoJS.mode.ECB,
                  padding: CryptoJS.pad.Pkcs7
                });
                rsp = rsp.toString(CryptoJS.enc.Utf8);
                var rspData = JSON.parse(rsp);
              } catch (e) {
                "string" === typeof rsp && (rsp = rsp.substr(0, 1e4));
                cc.warn("[http]response for cmd:" + req.data.cmd + ",response content :" + rsp);
                rspData = null;
              }
              callback.call(req.target, rspData);
            }
          }
          _processing = false;
          _process();
        };
        xhr.ontimeout = function() {
          cc.warn("[http]\u8d85\u65f6 : " + req.data);
          count--;
          req.currCount++;
          cc.ak.cache.ipList.workIdxToNext();
          if (count <= 0) {
            "function" === typeof req.ontimeout && req.ontimeout.call(req.target, req);
            _processing = false;
            _process();
          } else http.request(data, callback, count, req);
        };
        xhr.onerror = function(err) {
          cc.warn("[http]\u9519\u8bef : " + JSON.stringify(req.data));
          count--;
          req.currCount++;
          cc.ak.cache.ipList.workIdxToNext();
          if (count <= 0) {
            "function" === typeof req.onerror && req.onerror.call(req.target, req, err);
            _processing = false;
            _process();
          } else http.request(data, callback, count, req);
        };
        data ? xhr.open("POST", url, true) : xhr.open("GET", url, true);
        if (data) {
          var postData = merge_param(data);
          req.data = postData;
          data = CryptoJS.AES.encrypt(JSON.stringify(postData), _key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
          });
          xhr.send(data.toString());
        } else xhr.send();
        cc.log("[http]--\x3e|" + req.data.cmd + " # " + url + ",try count=" + req.currCount);
        return req;
      };
      http.requestWithUrl = function(url, data, callback, addTimestamp, count, req, encrypt, isJson, responseType) {
        _processing = true;
        var xhr = cc.loader.getXMLHttpRequest();
        if (addTimestamp) {
          var kp = "x=" + new Date().getTime();
          url.indexOf("?") > -1 ? url += "&" + kp : url += "?" + kp;
        }
        void 0 === count && (count = cc.ak.conf.http_try_count);
        req || (req = {
          url: url,
          data: data || {},
          callback: callback,
          count: count,
          currCount: 1
        });
        req && void 0 === req.currCount && (req.currCount = 0);
        req.xhr = xhr;
        responseType && (xhr.responseType = responseType);
        xhr.onreadystatechange = function() {
          cc.log("[http]<--|" + (req.data.cmd ? req.data.cmd : req.data) + " # readyState" + xhr.readyState + ", status : " + xhr.status + ", statusText : " + xhr.statusText);
          if (4 === xhr.readyState && (xhr.status >= 200 && xhr.status < 300 || 304 == xhr.status)) {
            if (responseType) var rsp = xhr.response; else var rsp = xhr.responseText;
            if ("function" === typeof callback) {
              try {
                if (encrypt) {
                  rsp = CryptoJS.AES.decrypt(rsp, _key, {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7
                  });
                  rsp = rsp.toString(CryptoJS.enc.Utf8);
                }
                isJson && (rsp = JSON.parse(rsp));
              } catch (e) {
                "string" === typeof rsp && (rsp = rsp.substr(0, 1e4));
                cc.warn("[http]response for cmd:" + req.data.cmd + ",response content :" + rsp);
                rsp = null;
              }
              callback.call(req.target, rsp);
            }
          }
          _processing = false;
          _process();
        };
        xhr.ontimeout = function() {
          cc.warn("[http]\u8d85\u65f6 : " + req.data);
          count--;
          if (count <= 0) {
            "function" === typeof req.ontimeout && req.ontimeout.call(req.target, req);
            _processing = false;
            _process();
          } else http.requestWithUrl(url, data, callback, addTimestamp, count, req, encrypt);
        };
        xhr.onerror = function(err) {
          cc.warn("[http]\u9519\u8bef : " + JSON.stringify(req.data));
          count--;
          if (count <= 0) {
            "function" === typeof req.onerror && req.onerror.call(req.target, req, err);
            _processing = false;
            _process();
          } else http.requestWithUrl(url, data, callback, addTimestamp, count, req, encrypt);
        };
        data ? xhr.open("POST", url, true) : xhr.open("GET", url, true);
        if (data) {
          var postData = merge_param(data);
          req.data = postData;
          data = CryptoJS.AES.encrypt(JSON.stringify(postData), _key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
          });
          xhr.send(data.toString());
        } else xhr.send();
        cc.log("[http]--\x3e|" + req.data.cmd + " # " + url + ",try count=" + req.currCount);
        return req;
      };
      var _process = function _process() {};
      return http;
    }();
    module.exports = http;
    cc._RF.pop();
  }, {
    "crypto-js": "crypto-js"
  } ],
  LoginHandle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6463fcbBwNDU4Ui5mqr/t0w", "LoginHandle");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var AppInit = require("AppInit");
        AppInit.init();
        var native = cc.ak.util.native;
        native.invoke(native.name.REMOVE_IMG);
        AppInit.initBundles().then(this.init.bind(this)).then(AppInit.launch).then(function() {
          if (cc.ak.util.utils.isAfterHotFixReEnter()) {
            cc.ak.event.emit(cc.ak.key.event.CONNECT_SOCKET, 0);
            cc.ak.ui.loadLobbyScence();
            return;
          }
          cc.ak.ui.loadLoginScence();
        }).catch(function(e) {
          return cc.ak.util.utils.HandleError(e);
        });
      },
      start: function start() {},
      init: function init() {
        var _this = this;
        if (!cc.ak.util.utils.isAfterHotFixReEnter()) {
          var layerMgr = cc.find("Canvas/LayerMgr").getComponent("LayerMgr");
          layerMgr.loadStartLayer();
        }
        cc.ak.event.on(cc.ak.key.event.CONNECT_SOCKET, function(count) {
          cc.log(cc.ak.key.event.CONNECT_SOCKET);
          if (count < 3 * cc.ak.cache.ipList.gate_size()) {
            cc.ak.mc.userMgr.logined && 0 === count ? cc.ak.ui.showOffline() : cc.ak.ui.waiting(3, lan.com.lbl.connecting);
            var gate = cc.ak.cache.ipList.get_gate();
            cc.ak.util.socketMgr.connect(gate.ip, gate.port, count);
          } else {
            cc.ak.ui.removeOffline();
            cc.ak.ui.alert({
              text: lan.com.err.reason.socketErr,
              btns: [ lan.com.lbl.restart, lan.com.lbl.retry ],
              callback: function callback(idx) {
                0 === idx ? cc.ak.util.utils.gameRestartOnFail() : 1 === idx && cc.ak.event.emit(cc.ak.key.event.CONNECT_SOCKET, 0);
              }
            });
          }
        });
        cc.ak.event.on(cc.ak.key.event.SOCKET_CONN_FAIL, function(count) {
          cc.ak.log(cc.ak.key.event.SOCKET_CONN_FAIL, "\u8fde\u63a5\u5931\u8d25, \u6b21\u6570 : " + count);
          count++;
          cc.ak.cache.ipList.geteWorkIdxToNext();
          cc.ak.event.emit(cc.ak.key.event.CONNECT_SOCKET, count);
        });
        cc.ak.event.on(cc.ak.key.event.SOCKET_CONN_SHUT, function() {
          cc.ak.log(cc.ak.key.event.SOCKET_CONN_SHUT, "\u5fc3\u8df3\u65ad\u5f00 \u65ad\u7ebf\u91cd\u8fde ");
          cc.ak.event.emit(cc.ak.key.event.CONNECT_SOCKET, 0);
        });
        cc.ak.event.on(cc.ak.key.event.SOCKET_CONN_SUCC, function() {
          cc.ak.log(cc.ak.key.event.SOCKET_CONN_SUCC, "\u94fe\u63a5\u6210\u529f");
          cc.ak.ui.waitingHide();
          cc.ak.ui.removeAllAlert();
          if (cc.ak.mc.userMgr.logined && cc.ak.mc.userMgr.token) {
            var req = new proto.cmd_lobby.CTokenLogonReq();
            req.Token = cc.ak.mc.userMgr.token;
            cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ACCOUNTS, proto.cmd_net.CMD_ACCOUNTS.CMD_ACCOUNTS_OFFLINE_LOGON_REQ, req);
            return;
          }
          var sys = new proto.cmd_sys.CSysSoftInfo();
          var proj = cc.ak.conf.project;
          var ver_arr = proj.ver.split(".");
          sys.SoftVer = (parseInt(ver_arr[0]) << 16) + (parseInt(ver_arr[1]) << 8) + parseInt(ver_arr[2]);
          var hot_ver = parseInt(cc.ak.conf.curr_hot_ver);
          var bin = Math.floor(hot_ver / 1e4) % 100;
          bin <<= 8;
          bin += Math.floor(hot_ver / 100) % 100;
          bin <<= 8;
          bin += hot_ver % 100;
          sys.LobbyVer = bin;
          sys.MChannel = proj.cid;
          sys.SChannel = proj.sid;
          sys.SysType = proj.os;
          var dev = cc.ak.conf.dev_info;
          sys.SysVer = dev.sysVer;
          sys.HardName = dev.hardName;
          sys.HardType = dev.hardType + "";
          sys.HardCode = dev.hardCode;
          sys.ScreenWidth = dev.screenWidth;
          sys.ScreenHeight = dev.screenHeight;
          sys.NetType = dev.netType;
          sys.NetSubType = dev.netSubType;
          sys.CardCode = dev.cardCode;
          sys.CupID = dev.cpuId;
          sys.SystemID = dev.systemId;
          sys.RomVer = dev.romVer;
          sys.ICCID = dev.iccid;
          cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_SYS, proto.cmd_net.CMD_SYS.CMD_SYS_SOFTINFO, sys);
          _this.loginGameServer();
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_ACCOUNTS + "-" + proto.cmd_net.CMD_ACCOUNTS.CMD_ACCOUNTS_LOGON_SUCCESS_RESP, function(dv) {
          cc.log("\u767b\u5f55\u6210\u529f");
          cc.ak.ui.removeOffline();
          var data = new proto.cmd_lobby.CLogonSuccessResp();
          cc.ak.util.tbfUtil.unPackData(data, dv);
          cc.log(JSON.stringify(data));
          cc.ak.mc.userMgr.update(data);
          cc.ak.mc.userMgr.logined = true;
          cc.ak.mc.userMgr.currRoomNum = 0;
          cc.sys.localStorage.setItem(cc.ak.key.cache.TOKEN, cc.ak.mc.userMgr.token);
          if (cc.ak.util.utils.isAfterHotFixReEnter()) {
            cc.ak.ui.waitingHide();
            cc.ak.event.emit(cc.ak.key.event.LOBBY_PREPARED);
            return;
          }
          _this.reqLobbyConf();
          var native = cc.ak.util.native;
          native.invoke(native.name.LOGIN_SUCCSE, {
            token: cc.ak.mc.userMgr.token,
            uid: cc.ak.mc.userMgr.uid,
            appId: cc.ak.conf.project.pkg,
            ver: cc.ak.conf.project.ver,
            clientId: 0
          });
          cc.log("\u767b\u9646\u6210\u529f native: " + {
            token: cc.ak.mc.userMgr.token,
            uid: cc.ak.mc.userMgr.uid,
            appId: cc.ak.conf.project.pkg,
            ver: cc.ak.conf.project.ver,
            clientId: 0
          });
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_ACCOUNTS + "-" + proto.cmd_net.CMD_ACCOUNTS.CMD_ACCOUNTS_LOGON_FAIL_RESP, function(dv) {
          cc.log("\u767b\u5f55\u5931\u8d25");
          var data = new proto.cmd_lobby.CLogonFailResp();
          cc.ak.util.tbfUtil.unPackData(data, dv);
          cc.log("\u767b\u5f55\u5931\u8d25 : " + data.ErrorCode + " , msg : " + data.Msg);
          cc.ak.ui.removeOffline();
          cc.ak.event.emit(cc.ak.key.event.LOGOUT);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_ACCOUNTS + "-" + proto.cmd_net.CMD_ACCOUNTS.CMD_ACCOUNTS_OFFLINE_LOGON_RESP, function(dv) {
          var data = new proto.cmd_lobby.COfflineLogonResp();
          cc.ak.util.tbfUtil.unPackData(data, dv);
          cc.log("\u65ad\u7ebf\u91cd\u8fde" + (0 === data.Result ? "\u6210\u529f" : "\u5931\u8d25") + "msg=" + data.Msg);
          if (0 != data.Result) {
            cc.ak.util.socketMgr.forceClose();
            cc.ak.mc.userMgr.logined = false;
            cc.ak.event.emit(cc.ak.key.event.CONNECT_SOCKET, 0);
            return;
          }
          cc.ak.ui.removeOffline();
          data = data.LogonSuccessInfo;
          cc.log(JSON.stringify(data));
          cc.ak.mc.userMgr.update(data);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_SYS + "-" + proto.cmd_net.CMD_SYS.CMD_SYS_BOMB_MSG, function(dv) {
          var bomb = new proto.cmd_sys.CSysBombMsg();
          cc.ak.util.tbfUtil.unPackData(bomb, dv);
          cc.sys.localStorage.removeItem(cc.ak.key.cache.TOKEN);
          cc.ak.event.emit(cc.ak.key.event.LOGOUT, true);
        });
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_LOBBY + "-" + proto.cmd_net.CMD_LOBBY.CMD_LOBBY_BUNDLES_RESP, function(dv) {
          var data = new proto.cmd_lobby.CBundles();
          cc.ak.util.tbfUtil.unPackData(data, dv);
          var bundles = null;
          try {
            bundles = JSON.parse(data.Data);
          } catch (e) {
            cc.error(e);
          }
          if (!bundles) return;
          cc.ak.cache.bundleMgr.parse(bundles);
          cc.ak.event.emit(cc.ak.key.event.BUNDLES_CHANGE);
        });
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_SYS + "-" + proto.cmd_net.CMD_SYS.CMD_SYS_COMM_MSG, function(dv) {
          var bomb = new proto.cmd_sys.CSysBombMsg();
          cc.ak.util.tbfUtil.unPackData(bomb, dv);
          cc.ak.ui.toast("" + bomb.Msg);
        });
        cc.ak.event.on(cc.ak.key.event.LOGOUT, function(isOtherLogin) {
          cc.ak.cache.auth.clear();
          cc.ak.util.native.invoke(cc.ak.util.native.name.UNAUTHORIZE, {
            type: 1
          });
          cc.ak.util.socketMgr.forceClose();
          cc.ak.ui.loadLoginScence();
          cc.ak.mc.userMgr.logined = false;
          var native = cc.ak.util.native;
          native.invoke(native.name.LOGOUT_SUCCSE);
          isOtherLogin && cc.ak.ui.alert({
            text: lan.com.lbl.otherLogin,
            btns: [ lan.com.lbl.reLogin ],
            callback: function callback(idx) {}
          });
        });
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_SYS + "-" + proto.cmd_net.CMD_SYS.CMD_SYS_UPDATE_USER_YUANBAO, function(dv) {
          var data = new proto.cmd_sys.CSysUpdateUserWealth();
          cc.ak.util.tbfUtil.unPackData(data, dv);
          var coins = data.Coins;
          var sum = 0;
          var coinChangeIDs = cc.ak.mc.userMgr.coinChangeIDs;
          for (var i = 0; i < coinChangeIDs.length; i++) if (void 0 == coinChangeIDs[i]) coinChangeIDs[i] = data.LogId; else if (coinChangeIDs[i] == data.LogId) {
            cc.warn("\u8be5\u6761\u8d22\u52a1\u534f\u8bae\u91cd\u590dlogID :" + data.LogId);
            return;
          }
          for (var _i = 3; _i >= 0; _i--) {
            coinChangeIDs[_i + 1] = coinChangeIDs[_i];
            0 == _i && (coinChangeIDs[_i] = data.LogId);
          }
          for (var _i2 = 0; _i2 < coins.length; _i2++) {
            var accouts = cc.ak.mc.userMgr.coins;
            accouts[coins[_i2].CoinID] || (accouts[coins[_i2].CoinID] = 0);
            if (coins[_i2].CoinID === proto.cmd_sys.COIN_ID.COIN_ID_A) if (0 == coins[_i2].AddFlag) {
              accouts[proto.cmd_sys.COIN_ID.COIN_ID_A] = coins[_i2].Amount;
              sum = accouts[proto.cmd_sys.COIN_ID.COIN_ID_A];
              sum += accouts[proto.cmd_sys.COIN_ID.COIN_ID_B];
              cc.ak.mc.userMgr.changeCoin(sum);
            } else {
              var gold = accouts[proto.cmd_sys.COIN_ID.COIN_ID_A] + coins[_i2].Amount;
              accouts[coins[_i2].CoinID] = gold;
              sum = gold;
              sum += accouts[proto.cmd_sys.COIN_ID.COIN_ID_B];
              cc.log(accouts[proto.cmd_sys.COIN_ID.COIN_ID_B] + ",accouts[proto.cmd_sys.COIN_ID.COIN_ID_B] A\u53d8\u5316");
              cc.log(accouts[proto.cmd_sys.COIN_ID.COIN_ID_A] + ",accouts[proto.cmd_sys.COIN_ID.COIN_ID_A] A\u53d8\u5316");
              cc.log(sum + ",sum");
              cc.ak.mc.userMgr.changeCoin(sum);
            } else if (coins[_i2].CoinID === proto.cmd_sys.COIN_ID.COIN_ID_B) if (0 == coins[_i2].AddFlag) {
              accouts[proto.cmd_sys.COIN_ID.COIN_ID_B] = coins[_i2].Amount;
              sum = accouts[proto.cmd_sys.COIN_ID.COIN_ID_B];
              sum += accouts[proto.cmd_sys.COIN_ID.COIN_ID_A];
              cc.ak.mc.userMgr.changeCoin(sum);
            } else {
              var gold = accouts[proto.cmd_sys.COIN_ID.COIN_ID_B] + coins[_i2].Amount;
              accouts[coins[_i2].CoinID] = gold;
              sum = gold;
              sum += accouts[proto.cmd_sys.COIN_ID.COIN_ID_A];
              cc.log(accouts[proto.cmd_sys.COIN_ID.COIN_ID_B] + ",accouts[proto.cmd_sys.COIN_ID.COIN_ID_B] B\u53d8\u5316");
              cc.log(accouts[proto.cmd_sys.COIN_ID.COIN_ID_A] + ",accouts[proto.cmd_sys.COIN_ID.COIN_ID_A] B\u53d8\u5316");
              cc.log(sum + ",sum");
              cc.ak.mc.userMgr.changeCoin(sum);
            }
          }
          data.Reason !== proto.cmd_sys.COIN_TYPE.COIN_TYPE_SYNC && data.Reason !== proto.cmd_sys.COIN_TYPE.COIN_TYPE_GAME_COST && data.Reason !== proto.cmd_sys.COIN_TYPE.COIN_TYPE_GAME_GOT && cc.ak.event.emit(cc.ak.key.event.COIN_CHANGE, data);
          data.Reason === proto.cmd_sys.COIN_TYPE.COIN_TYPE_TRAN_GOT && cc.ak.ui.alert({
            text: data.Msg,
            btns: lan.com.lbl.sure,
            callback: function callback() {}
          });
          "lobby" === cc.director.getScene().name && (data.Reason !== proto.cmd_sys.COIN_TYPE.COIN_TYPE_SHOP && data.Reason !== proto.cmd_sys.COIN_TYPE.COIN_TYPE_CASH || cc.ak.ui.alert({
            text: data.Msg,
            btns: lan.com.lbl.sure,
            callback: function callback() {}
          }));
        });
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_LOBBY + "-" + proto.cmd_net.CMD_LOBBY.CMD_LOBBY_COIN_TRANSFER_RESULT, function(dv) {
          var data = new proto.cmd_lobby.CoinTransferResult();
          cc.ak.util.tbfUtil.unPackData(data, dv);
          cc.ak.ui.alert({
            text: data.message,
            btns: lan.com.lbl.cancel,
            callback: function callback(idx) {}
          });
        });
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_MSG + "-" + proto.cmd_net.CMD_MSG.CMD_MSG_MAILLIST_RESP, function(dv) {
          var data = new proto.cmd_message.CMailMsgList();
          cc.ak.util.tbfUtil.unPackData(data, dv);
          cc.ak.data.set(cc.ak.key.data.MAIL_LIST, data.MailMsgList);
        });
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_MSG + "-" + proto.cmd_net.CMD_MSG.CMD_MSG_MAILMSG_ADD, function(dv) {
          var data = new proto.cmd_message.CMailMsg();
          cc.ak.util.tbfUtil.unPackData(data, dv);
          var tMailList = cc.ak.data.get(cc.ak.key.data.MAIL_LIST);
          null == tMailList && (tMailList = []);
          tMailList.unshift(data);
          var event = new cc.Event.EventCustom(cc.ak.key.event.UPDATE_MAIL);
          cc.ak.event.dispatchEvent(event);
        });
        var native = cc.ak.util.native;
        cc.ak.event.on(native.nname.PUSH_ACCOUNT, function(dv) {
          var data = dv.getUserData();
          var channel = data.channel;
          var pushID = data.pushID;
          var cmd = cc.ak.key.http.PUSH_INFO_UPDATE;
          cc.log("data : " + JSON.stringify(data));
          var req = cc.ak.util.http.request({
            cmd: cmd,
            data: {
              push_id: pushID,
              brand_id: channel
            }
          }, function(data) {
            0 == data.status || cc.ak.ui.toast(data.statusnote);
          });
        });
      },
      loginGameServer: function loginGameServer() {
        cc.ak.ui.waiting(5, lan.com.lbl.login);
        var req = new proto.cmd_lobby.CTokenLogonReq();
        req.Token = cc.ak.mc.userMgr.token;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ACCOUNTS, proto.cmd_net.CMD_ACCOUNTS.CMD_ACCOUNTS_TOKEN_LOGON_REQ, req);
      },
      reqLobbyConf: function reqLobbyConf() {
        cc.ak.ui.waiting(10, lan.com.lbl.gettingLobbyConf);
        var req = cc.ak.util.http.request(cc.ak.key.http.LOBBY, function(data) {
          cc.ak.ui.waitingHide();
          cc.log("\u5927\u5385\u914d\u7f6e:" + JSON.stringify(data));
          if (0 != data.status || !data.data) {
            cc.ak.ui.alertRestart(cc.js.formatStr(lan.com.err.action.httpLobby, lan.data.statusnote, lan.com.err.sol.restart));
            return;
          }
          cc.ak.cache.lobby.parse(data.data);
          cc.ak.ui.loadLobbyScence();
        });
        cc.ak.ui.alertRestartWhenHttpErr(req, cc.ak.key.http.LOBBY, cc.js.formatStr(lan.com.err.action.httpLobby, lan.com.err.reason.netTimeOut, lan.com.err.sol.restart), cc.js.formatStr(lan.com.err.action.httpLobby, lan.com.err.reason.netErr, lan.com.err.sol.restart));
      }
    });
    cc._RF.pop();
  }, {
    AppInit: "AppInit"
  } ],
  Long: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "026a6/ndhtMd5ASzSMedfsy", "Long");
    "use strict";
    var Long = function() {
      var wasm = null;
      try {
        wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([ 0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11 ])), {}).exports;
      } catch (e) {}
      function Long(low, high, unsigned) {
        this.low = 0 | low;
        this.high = 0 | high;
        this.unsigned = !!unsigned;
      }
      Long.prototype.__isLong__;
      Object.defineProperty(Long.prototype, "__isLong__", {
        value: true
      });
      function isLong(obj) {
        return true === (obj && obj["__isLong__"]);
      }
      Long.isLong = isLong;
      var INT_CACHE = {};
      var UINT_CACHE = {};
      function fromInt(value, unsigned) {
        var obj, cachedObj, cache;
        if (unsigned) {
          value >>>= 0;
          if (cache = 0 <= value && value < 256) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj) return cachedObj;
          }
          obj = fromBits(value, (0 | value) < 0 ? -1 : 0, true);
          cache && (UINT_CACHE[value] = obj);
          return obj;
        }
        value |= 0;
        if (cache = -128 <= value && value < 128) {
          cachedObj = INT_CACHE[value];
          if (cachedObj) return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        cache && (INT_CACHE[value] = obj);
        return obj;
      }
      Long.fromInt = fromInt;
      function fromNumber(value, unsigned) {
        if (isNaN(value)) return unsigned ? UZERO : ZERO;
        if (unsigned) {
          if (value < 0) return UZERO;
          if (value >= TWO_PWR_64_DBL) return MAX_UNSIGNED_VALUE;
        } else {
          if (value <= -TWO_PWR_63_DBL) return MIN_VALUE;
          if (value + 1 >= TWO_PWR_63_DBL) return MAX_VALUE;
        }
        if (value < 0) return fromNumber(-value, unsigned).neg();
        return fromBits(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0, unsigned);
      }
      Long.fromNumber = fromNumber;
      function fromBits(lowBits, highBits, unsigned) {
        return new Long(lowBits, highBits, unsigned);
      }
      Long.fromBits = fromBits;
      var pow_dbl = Math.pow;
      function fromString(str, unsigned, radix) {
        if (0 === str.length) throw Error("empty string");
        if ("NaN" === str || "Infinity" === str || "+Infinity" === str || "-Infinity" === str) return ZERO;
        "number" === typeof unsigned ? (radix = unsigned, unsigned = false) : unsigned = !!unsigned;
        radix = radix || 10;
        if (radix < 2 || 36 < radix) throw RangeError("radix");
        var p;
        if ((p = str.indexOf("-")) > 0) throw Error("interior hyphen");
        if (0 === p) return fromString(str.substring(1), unsigned, radix).neg();
        var radixToPower = fromNumber(pow_dbl(radix, 8));
        var result = ZERO;
        for (var i = 0; i < str.length; i += 8) {
          var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
          if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = result.mul(power).add(fromNumber(value));
          } else {
            result = result.mul(radixToPower);
            result = result.add(fromNumber(value));
          }
        }
        result.unsigned = unsigned;
        return result;
      }
      Long.fromString = fromString;
      function fromValue(val, unsigned) {
        if ("number" === typeof val) return fromNumber(val, unsigned);
        if ("string" === typeof val) return fromString(val, unsigned);
        return fromBits(val.low, val.high, "boolean" === typeof unsigned ? unsigned : val.unsigned);
      }
      Long.fromValue = fromValue;
      var TWO_PWR_16_DBL = 65536;
      var TWO_PWR_24_DBL = 1 << 24;
      var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
      var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
      var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
      var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
      var ZERO = fromInt(0);
      Long.ZERO = ZERO;
      var UZERO = fromInt(0, true);
      Long.UZERO = UZERO;
      var ONE = fromInt(1);
      Long.ONE = ONE;
      var UONE = fromInt(1, true);
      Long.UONE = UONE;
      var NEG_ONE = fromInt(-1);
      Long.NEG_ONE = NEG_ONE;
      var MAX_VALUE = fromBits(-1, 2147483647, false);
      Long.MAX_VALUE = MAX_VALUE;
      var MAX_UNSIGNED_VALUE = fromBits(-1, -1, true);
      Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
      var MIN_VALUE = fromBits(0, -2147483648, false);
      Long.MIN_VALUE = MIN_VALUE;
      var LongPrototype = Long.prototype;
      LongPrototype.toInt = function toInt() {
        return this.unsigned ? this.low >>> 0 : this.low;
      };
      LongPrototype.toNumber = function toNumber() {
        if (this.unsigned) return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
      };
      LongPrototype.toString = function toString(radix) {
        radix = radix || 10;
        if (radix < 2 || 36 < radix) throw RangeError("radix");
        if (this.isZero()) return "0";
        if (this.isNegative()) {
          if (this.eq(MIN_VALUE)) {
            var radixLong = fromNumber(radix), div = this.div(radixLong), rem1 = div.mul(radixLong).sub(this);
            return div.toString(radix) + rem1.toInt().toString(radix);
          }
          return "-" + this.neg().toString(radix);
        }
        var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned), rem = this;
        var result = "";
        while (true) {
          var remDiv = rem.div(radixToPower), intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0, digits = intval.toString(radix);
          rem = remDiv;
          if (rem.isZero()) return digits + result;
          while (digits.length < 6) digits = "0" + digits;
          result = "" + digits + result;
        }
      };
      LongPrototype.getHighBits = function getHighBits() {
        return this.high;
      };
      LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
        return this.high >>> 0;
      };
      LongPrototype.getLowBits = function getLowBits() {
        return this.low;
      };
      LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
        return this.low >>> 0;
      };
      LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
        if (this.isNegative()) return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
        var val = 0 != this.high ? this.high : this.low;
        for (var bit = 31; bit > 0; bit--) if (0 != (val & 1 << bit)) break;
        return 0 != this.high ? bit + 33 : bit + 1;
      };
      LongPrototype.isZero = function isZero() {
        return 0 === this.high && 0 === this.low;
      };
      LongPrototype.eqz = LongPrototype.isZero;
      LongPrototype.isNegative = function isNegative() {
        return !this.unsigned && this.high < 0;
      };
      LongPrototype.isPositive = function isPositive() {
        return this.unsigned || this.high >= 0;
      };
      LongPrototype.isOdd = function isOdd() {
        return 1 === (1 & this.low);
      };
      LongPrototype.isEven = function isEven() {
        return 0 === (1 & this.low);
      };
      LongPrototype.equals = function equals(other) {
        isLong(other) || (other = fromValue(other));
        if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1) return false;
        return this.high === other.high && this.low === other.low;
      };
      LongPrototype.eq = LongPrototype.equals;
      LongPrototype.notEquals = function notEquals(other) {
        return !this.eq(other);
      };
      LongPrototype.neq = LongPrototype.notEquals;
      LongPrototype.ne = LongPrototype.notEquals;
      LongPrototype.lessThan = function lessThan(other) {
        return this.comp(other) < 0;
      };
      LongPrototype.lt = LongPrototype.lessThan;
      LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
        return this.comp(other) <= 0;
      };
      LongPrototype.lte = LongPrototype.lessThanOrEqual;
      LongPrototype.le = LongPrototype.lessThanOrEqual;
      LongPrototype.greaterThan = function greaterThan(other) {
        return this.comp(other) > 0;
      };
      LongPrototype.gt = LongPrototype.greaterThan;
      LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
        return this.comp(other) >= 0;
      };
      LongPrototype.gte = LongPrototype.greaterThanOrEqual;
      LongPrototype.ge = LongPrototype.greaterThanOrEqual;
      LongPrototype.compare = function compare(other) {
        isLong(other) || (other = fromValue(other));
        if (this.eq(other)) return 0;
        var thisNeg = this.isNegative(), otherNeg = other.isNegative();
        if (thisNeg && !otherNeg) return -1;
        if (!thisNeg && otherNeg) return 1;
        if (!this.unsigned) return this.sub(other).isNegative() ? -1 : 1;
        return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
      };
      LongPrototype.comp = LongPrototype.compare;
      LongPrototype.negate = function negate() {
        if (!this.unsigned && this.eq(MIN_VALUE)) return MIN_VALUE;
        return this.not().add(ONE);
      };
      LongPrototype.neg = LongPrototype.negate;
      LongPrototype.add = function add(addend) {
        isLong(addend) || (addend = fromValue(addend));
        var a48 = this.high >>> 16;
        var a32 = 65535 & this.high;
        var a16 = this.low >>> 16;
        var a00 = 65535 & this.low;
        var b48 = addend.high >>> 16;
        var b32 = 65535 & addend.high;
        var b16 = addend.low >>> 16;
        var b00 = 65535 & addend.low;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 + b00;
        c16 += c00 >>> 16;
        c00 &= 65535;
        c16 += a16 + b16;
        c32 += c16 >>> 16;
        c16 &= 65535;
        c32 += a32 + b32;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c48 += a48 + b48;
        c48 &= 65535;
        return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
      };
      LongPrototype.subtract = function subtract(subtrahend) {
        isLong(subtrahend) || (subtrahend = fromValue(subtrahend));
        return this.add(subtrahend.neg());
      };
      LongPrototype.sub = LongPrototype.subtract;
      LongPrototype.multiply = function multiply(multiplier) {
        if (this.isZero()) return ZERO;
        isLong(multiplier) || (multiplier = fromValue(multiplier));
        if (wasm) {
          var low = wasm["mul"](this.low, this.high, multiplier.low, multiplier.high);
          return fromBits(low, wasm["get_high"](), this.unsigned);
        }
        if (multiplier.isZero()) return ZERO;
        if (this.eq(MIN_VALUE)) return multiplier.isOdd() ? MIN_VALUE : ZERO;
        if (multiplier.eq(MIN_VALUE)) return this.isOdd() ? MIN_VALUE : ZERO;
        if (this.isNegative()) return multiplier.isNegative() ? this.neg().mul(multiplier.neg()) : this.neg().mul(multiplier).neg();
        if (multiplier.isNegative()) return this.mul(multiplier.neg()).neg();
        if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24)) return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
        var a48 = this.high >>> 16;
        var a32 = 65535 & this.high;
        var a16 = this.low >>> 16;
        var a00 = 65535 & this.low;
        var b48 = multiplier.high >>> 16;
        var b32 = 65535 & multiplier.high;
        var b16 = multiplier.low >>> 16;
        var b00 = 65535 & multiplier.low;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 * b00;
        c16 += c00 >>> 16;
        c00 &= 65535;
        c16 += a16 * b00;
        c32 += c16 >>> 16;
        c16 &= 65535;
        c16 += a00 * b16;
        c32 += c16 >>> 16;
        c16 &= 65535;
        c32 += a32 * b00;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c32 += a16 * b16;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c32 += a00 * b32;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
        c48 &= 65535;
        return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
      };
      LongPrototype.mul = LongPrototype.multiply;
      LongPrototype.divide = function divide(divisor) {
        isLong(divisor) || (divisor = fromValue(divisor));
        if (divisor.isZero()) throw Error("division by zero");
        if (wasm) {
          if (!this.unsigned && -2147483648 === this.high && -1 === divisor.low && -1 === divisor.high) return this;
          var low = (this.unsigned ? wasm["div_u"] : wasm["div_s"])(this.low, this.high, divisor.low, divisor.high);
          return fromBits(low, wasm["get_high"](), this.unsigned);
        }
        if (this.isZero()) return this.unsigned ? UZERO : ZERO;
        var approx, rem, res;
        if (this.unsigned) {
          divisor.unsigned || (divisor = divisor.toUnsigned());
          if (divisor.gt(this)) return UZERO;
          if (divisor.gt(this.shru(1))) return UONE;
          res = UZERO;
        } else {
          if (this.eq(MIN_VALUE)) {
            if (divisor.eq(ONE) || divisor.eq(NEG_ONE)) return MIN_VALUE;
            if (divisor.eq(MIN_VALUE)) return ONE;
            var halfThis = this.shr(1);
            approx = halfThis.div(divisor).shl(1);
            if (approx.eq(ZERO)) return divisor.isNegative() ? ONE : NEG_ONE;
            rem = this.sub(divisor.mul(approx));
            res = approx.add(rem.div(divisor));
            return res;
          }
          if (divisor.eq(MIN_VALUE)) return this.unsigned ? UZERO : ZERO;
          if (this.isNegative()) {
            if (divisor.isNegative()) return this.neg().div(divisor.neg());
            return this.neg().div(divisor).neg();
          }
          if (divisor.isNegative()) return this.div(divisor.neg()).neg();
          res = ZERO;
        }
        rem = this;
        while (rem.gte(divisor)) {
          approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
          var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = log2 <= 48 ? 1 : pow_dbl(2, log2 - 48), approxRes = fromNumber(approx), approxRem = approxRes.mul(divisor);
          while (approxRem.isNegative() || approxRem.gt(rem)) {
            approx -= delta;
            approxRes = fromNumber(approx, this.unsigned);
            approxRem = approxRes.mul(divisor);
          }
          approxRes.isZero() && (approxRes = ONE);
          res = res.add(approxRes);
          rem = rem.sub(approxRem);
        }
        return res;
      };
      LongPrototype.div = LongPrototype.divide;
      LongPrototype.modulo = function modulo(divisor) {
        isLong(divisor) || (divisor = fromValue(divisor));
        if (wasm) {
          var low = (this.unsigned ? wasm["rem_u"] : wasm["rem_s"])(this.low, this.high, divisor.low, divisor.high);
          return fromBits(low, wasm["get_high"](), this.unsigned);
        }
        return this.sub(this.div(divisor).mul(divisor));
      };
      LongPrototype.mod = LongPrototype.modulo;
      LongPrototype.rem = LongPrototype.modulo;
      LongPrototype.not = function not() {
        return fromBits(~this.low, ~this.high, this.unsigned);
      };
      LongPrototype.and = function and(other) {
        isLong(other) || (other = fromValue(other));
        return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
      };
      LongPrototype.or = function or(other) {
        isLong(other) || (other = fromValue(other));
        return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
      };
      LongPrototype.xor = function xor(other) {
        isLong(other) || (other = fromValue(other));
        return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
      };
      LongPrototype.shiftLeft = function shiftLeft(numBits) {
        isLong(numBits) && (numBits = numBits.toInt());
        return 0 === (numBits &= 63) ? this : numBits < 32 ? fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned) : fromBits(0, this.low << numBits - 32, this.unsigned);
      };
      LongPrototype.shl = LongPrototype.shiftLeft;
      LongPrototype.shiftRight = function shiftRight(numBits) {
        isLong(numBits) && (numBits = numBits.toInt());
        return 0 === (numBits &= 63) ? this : numBits < 32 ? fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned) : fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
      };
      LongPrototype.shr = LongPrototype.shiftRight;
      LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
        isLong(numBits) && (numBits = numBits.toInt());
        numBits &= 63;
        if (0 === numBits) return this;
        var high = this.high;
        if (numBits < 32) {
          var low = this.low;
          return fromBits(low >>> numBits | high << 32 - numBits, high >>> numBits, this.unsigned);
        }
        return fromBits(32 === numBits ? high : high >>> numBits - 32, 0, this.unsigned);
      };
      LongPrototype.shru = LongPrototype.shiftRightUnsigned;
      LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
      LongPrototype.toSigned = function toSigned() {
        if (!this.unsigned) return this;
        return fromBits(this.low, this.high, false);
      };
      LongPrototype.toUnsigned = function toUnsigned() {
        if (this.unsigned) return this;
        return fromBits(this.low, this.high, true);
      };
      LongPrototype.toBytes = function toBytes(le) {
        return le ? this.toBytesLE() : this.toBytesBE();
      };
      LongPrototype.toBytesLE = function toBytesLE() {
        var hi = this.high, lo = this.low;
        return [ 255 & lo, lo >>> 8 & 255, lo >>> 16 & 255, lo >>> 24, 255 & hi, hi >>> 8 & 255, hi >>> 16 & 255, hi >>> 24 ];
      };
      LongPrototype.toBytesBE = function toBytesBE() {
        var hi = this.high, lo = this.low;
        return [ hi >>> 24, hi >>> 16 & 255, hi >>> 8 & 255, 255 & hi, lo >>> 24, lo >>> 16 & 255, lo >>> 8 & 255, 255 & lo ];
      };
      Long.fromBytes = function fromBytes(bytes, unsigned, le) {
        return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
      };
      Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
        return new Long(bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24, bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24, unsigned);
      };
      Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
        return new Long(bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7], bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], unsigned);
      };
      return Long;
    }();
    module.exports = Long;
    cc._RF.pop();
  }, {} ],
  MissionMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "11b79W+ycdCp5I7EQgo14Y1", "MissionMgr");
    "use strict";
    var MissionMgr = cc.Class({
      statics: {
        _instance: null,
        instance: function instance() {
          if (!this._instance) {
            this._instance = new this();
            this._instance.init();
          }
          return this._instance;
        },
        create: function create() {
          this._instance = null;
          return this.instance();
        }
      },
      properties: {
        missionList: [],
        tempList: [],
        needAssignStatus: false
      },
      const: function _const() {
        this.key = {
          STATUS_NOTIFY: "missionMgr_status_notify",
          TODAY_POPUP_TIME: "missionMgr_today_popup_time",
          CHECKIN_TIME: "missionMgr_checkin_time",
          CHECKIN_INDEX: "missionMgr_checkin_index",
          REBATE_TIME: "missionMgr_rebate_time",
          REBATE_INDEX: "missionMgr_rebate_index"
        };
      },
      onMissionFinish: function onMissionFinish(targetType) {
        for (var i = 0; i < this.missionList.length; i++) {
          var mission = this.missionList[i];
          if (targetType == mission.TargetType) {
            this.requestClientResult(mission.MissionId);
            break;
          }
        }
      },
      gotoMission: function gotoMission(targetType, data) {
        var event = new cc.Event.EventCustom(cc.ak.key.event.POPUP_LOBBY_BOX);
        event.setUserData({
          name: cc.ak.const.box.mission,
          type: targetType,
          data: data
        });
        cc.ak.event.dispatchEvent(event);
      },
      getMissionList: function getMissionList() {
        return this.missionList;
      },
      getTargetMission: function getTargetMission(targetType) {
        for (var i = 0; i < this.missionList.length; i++) if (targetType == this.missionList[i].TargetType) return this.missionList[i];
        return null;
      },
      getRootMission: function getRootMission(targetType, root) {
        null == root && (root = 0);
        for (var i = 0; i < this.missionList.length; i++) if (targetType == this.missionList[i].TargetType && root == this.missionList[i].PreMissionId) return this.missionList[i];
        return root < this.missionList.length ? this.getRootMission(targetType, root + 1) : null;
      },
      getNextMission: function getNextMission(missionID) {
        for (var i = 0; i < this.missionList.length; i++) if (missionID == this.missionList[i].PreMissionId) return this.missionList[i];
        return null;
      },
      isMissionFinish: function isMissionFinish(targetType) {
        if (targetType == proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_CHECKIN) return true;
        if (targetType == proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_FIRST_BUY_BACK) {
          for (var i = 0; i < this.missionList.length; i++) {
            var mission = this.missionList[i];
            if (targetType != mission.TargetType) continue;
            if (null == mission.Status) continue;
            if (mission.Status.Status < proto.cmd_mission.MISSION_STATUS_TYPE.MISSION_STATUS_TYPE_FINISH) return false;
          }
          return true;
        }
        var mission = this.getTargetMission(targetType);
        if (null == mission || null == mission.Status) return true;
        return mission.Status.Status >= proto.cmd_mission.MISSION_STATUS_TYPE.MISSION_STATUS_TYPE_FINISH;
      },
      isMissionDoneToday: function isMissionDoneToday(targetType) {
        var time = 0;
        if (targetType == proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_CHECKIN) time = cc.sys.localStorage.getItem(this.key.CHECKIN_TIME); else if (targetType == proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_FIRST_BUY_BACK) {
          if (true == this.isMissionFinish(proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_FIRST_BUY_BACK)) return true;
          if (false == this.isMissionFinish(proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_FIRST_BUY)) return true;
          time = cc.sys.localStorage.getItem(this.key.REBATE_TIME);
        }
        time = null != time ? parseInt(time) : 0;
        return false == this.isTimeInvalid(time);
      },
      isBadgeClear: function isBadgeClear(loopType) {
        if (null == loopType) {
          for (var i = 1; i <= 3; i++) if (false == this.isBadgeClear(i)) return false;
          return true;
        }
        for (var j = 0; j < this.missionList.length; j++) {
          var mission = this.missionList[j];
          if (mission.LoopType != loopType) continue;
          if (1 != mission.Show) continue;
          if (null == mission.Status) continue;
          if (mission.TargetType == proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_CHECKIN) {
            if (false == this.isMissionDoneToday(mission.TargetType)) return false;
          } else if (mission.TargetType == proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_FIRST_BUY_BACK) {
            if (false == this.isMissionDoneToday(mission.TargetType)) return false;
          } else if (mission.Status.Status < proto.cmd_mission.MISSION_STATUS_TYPE.MISSION_STATUS_TYPE_FINISH) return false;
        }
        return true;
      },
      isTimeInvalid: function isTimeInvalid(lastTime) {
        var t = new Date();
        var y = t.getFullYear();
        var m = t.getMonth() + 1;
        var d = t.getDate();
        var startTime = new Date(y, m - 1, d, 5, 0, 0).getTime();
        return lastTime < startTime;
      },
      requestClientResult: function requestClientResult(missionID) {
        var cmd = new proto.cmd_mission.CMissionId();
        cmd.MissionId = missionID;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_MISSION, proto.cmd_net.CMD_MISSION.CMD_MISSION_CLIENT_RESULT_REQ, cmd);
      },
      requestObtainPrize: function requestObtainPrize(missionID) {
        var cmd = new proto.cmd_mission.CMissionId();
        cmd.MissionId = missionID;
        cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_MISSION, proto.cmd_net.CMD_MISSION.CMD_MISSION_OBTAIN_PRIZE_REQ, cmd);
      },
      requestUpdateBadge: function requestUpdateBadge(active) {
        var event = new cc.Event.EventCustom(cc.ak.key.event.POPUP_LOBBY_BOX);
        event.setUserData({
          name: cc.ak.const.box.mission,
          type: "UPDATE_BADGE",
          data: active
        });
        cc.ak.event.dispatchEvent(event);
      },
      init: function init() {
        var _this = this;
        this.const();
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_MISSION + "-" + proto.cmd_net.CMD_MISSION.CMD_MISSION_LIST_BEGIN, function(dv) {
          cc.log("mission begin");
          _this.clear();
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_MISSION + "-" + proto.cmd_net.CMD_MISSION.CMD_MISSION_LIST_RESP, function(dv) {
          var data = new proto.cmd_mission.CMissionList();
          cc.ak.util.tbfUtil.unPackData(data, dv);
          cc.log(data);
          data.Missions[0] && 0 == data.Missions[0].Status.MissionId && (_this.needAssignStatus = true);
          for (var i = 0; i < data.Missions.length; i++) _this.push(data.Missions[i]);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_MISSION + "-" + proto.cmd_net.CMD_MISSION.CMD_MISSION_LIST_END, function(dv) {
          cc.log("mission finish");
          true == _this.needAssignStatus ? _this.assign() : _this.popup();
          cc.log(_this.missionList);
        }, this);
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_MISSION + "-" + proto.cmd_net.CMD_MISSION.CMD_MISSION_STATUS_LIST, function(dv) {
          var data = new proto.cmd_mission.CMissionStatusList();
          cc.ak.util.tbfUtil.unPackData(data, dv);
          cc.log(data);
          for (var i = 0; i < data.Status.length; i++) {
            _this.update(data.Status[i]);
            _this.notify(data.Status[i].MissionId);
          }
        }, this);
      },
      clear: function clear() {
        this.tempList = this.missionList;
        this.missionList = [];
        this.needAssignStatus = false;
      },
      push: function push(mission) {
        if (null == mission) return;
        this.missionList.push(mission);
      },
      update: function update(status) {
        if (null == status) return;
        for (var i = 0; i < this.missionList.length; i++) if (status.MissionId == this.missionList[i].MissionId) {
          this.missionList[i].Status = status;
          var time = new Date().getTime();
          var type = this.missionList[i].TargetType;
          type == proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_CHECKIN ? cc.sys.localStorage.setItem(cc.ak.mc.missionMgr.key.CHECKIN_TIME, time) : type == proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_FIRST_BUY_BACK && cc.sys.localStorage.setItem(cc.ak.mc.missionMgr.key.REBATE_TIME, time);
          break;
        }
      },
      notify: function notify(missionID) {
        if (null == status) return;
        for (var i = 0; i < this.missionList.length; i++) if (missionID == this.missionList[i].MissionId) {
          var event = new cc.Event.EventCustom(this.key.STATUS_NOTIFY);
          event.setUserData(this.missionList[i]);
          cc.ak.event.dispatchEvent(event);
          break;
        }
      },
      assign: function assign() {
        for (var i = 0; i < this.missionList.length; i++) {
          var missionID = this.missionList[i].MissionId;
          for (var j = 0; j < this.tempList.length; j++) if (missionID == this.tempList[j].MissionId) {
            this.missionList[i].Status = this.tempList[j].Status;
            break;
          }
        }
        this.tempList = [];
      },
      popup: function popup() {
        var _this2 = this;
        var time = cc.sys.localStorage.getItem(this.key.TODAY_POPUP_TIME);
        time = null != time ? parseInt(time) : 0;
        this.isTimeInvalid(time) && setTimeout(function() {
          false == _this2.isMissionFinish(proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_FIRST_BUY_BACK) && _this2.gotoMission(proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_FIRST_BUY_BACK);
          _this2.gotoMission(proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_CHECKIN);
          true != cc.ak.mc.userMgr.isbinded && _this2.gotoMission(proto.cmd_mission.MISSION_TARGET_TYPE.MISSION_TARGET_TYPE_MOBILE);
          cc.sys.localStorage.setItem(_this2.key.TODAY_POPUP_TIME, new Date().getTime());
        }, 500);
        this.requestUpdateBadge(!this.isBadgeClear());
      },
      test: function test() {
        cc.log("=== MissionMgr Test ===");
        var name = [ "\u7ed1\u5b9a\u624b\u673a", "\u9996\u5145", "\u8fd4\u5229\u4e00", "\u8fd4\u5229\u4e8c", "\u8fd4\u5229\u4e09", "\u8fd4\u5229\u56db", "\u8fd4\u5229\u4e94", "\u8fd4\u5229\u516d", "\u8fd4\u5229\u4e03", "\u7b7e\u5230\u4e00", "\u7b7e\u5230\u4e8c", "\u7b7e\u5230\u4e09", "\u7b7e\u5230\u56db", "\u7b7e\u5230\u4e94", "\u7b7e\u5230\u516d", "\u7b7e\u5230\u4e03", "\u5145\u503c", "\u73a9\u6e38\u620f", "\u73a9\u5c40\u6570" ];
        var id = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ];
        var preid = [ 0, 0, 2, 3, 4, 5, 6, 7, 8, 0, 10, 11, 12, 13, 14, 15, 0, 0, 0 ];
        var target = [ 1, 2, 7, 7, 7, 7, 7, 7, 7, 4, 4, 4, 4, 4, 4, 4, 3, 5, 6 ];
        var loop = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2 ];
        var ssss = [ 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2 ];
        var coin = [ 9, 9, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 9, 9, 9 ];
        for (var i = 0; i < 19; i++) {
          var miss = {};
          miss.MissionId = i + 1;
          miss.SortId = 0;
          miss.Name = name[i];
          miss.Content = "\u5b8c\u6210" + 10 * (i + 1) + "\u5c40\u4e8c\u4eba\u9ebb\u5c06\uff0c\u5e76\u53d6\u5f97\u80dc\u5229";
          miss.DlgMsg = "";
          miss.Show = 1;
          miss.LoopType = loop[i];
          miss.TargetType = target[i];
          miss.TargetNum = 10 * (i + 1);
          miss.ActionLabel = "\u524d\u5f80";
          miss.ShowBtnFinish = 1;
          miss.ShowBtnUnfinish = 1;
          miss.PreMissionId = preid[i];
          miss.Coin = 1e3 * coin[i];
          miss.PopupEventId = cc.ak.key.event.app_cash_lobby;
          miss.Status = null;
          var status = {};
          status.MissionId = i + 1;
          status.Status = ssss[i];
          status.Progress = 7 + i;
          status.DoneTime = 0;
          status.PrizeTime = 0;
          miss.Status = status;
          this.missionList.push(miss);
        }
        cc.log(this.missionList);
      }
    });
    module.exports = MissionMgr;
    cc._RF.pop();
  }, {} ],
  RoomHandle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6d7f0PmpshELrUAKkCCHeUB", "RoomHandle");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_ROOM + "-" + proto.cmd_net.CMD_ROOM.SUB_ENTER_ROOM_SUCC, function(dv) {
          var data = new proto.cmd_base_info.EnterRoomSucc();
          cc.ak.util.tbfUtil.unPackData(data, dv);
          cc.log("enterroom : " + JSON.stringify(data));
          cc.ak.data.set(cc.ak.key.data.ENTER_ROOM_SUCC, data);
          var gameId = data.GameId;
          var groundId = data.GroundId;
          cc.ak.mc.userMgr.currRoomNum = data.Code;
          cc.ak.ui.waiting(10, "");
          var bundle = cc.ak.cache.bundleMgr.gamesMap[gameId];
          var gameValid = cc.ak.cache.bundleMgr.validGame(gameId);
          if (bundle) Promise.resolve().then(function() {
            if (!gameValid) return cc.ak.util.hotfixMgr.hotUpdate(bundle.id);
          }).then(function() {
            if (gameValid) {
              cc.ak.cache.bundleMgr.loadSubGamePackage(gameId).then(function() {
                cc.ak.ui.waitingHide();
                cc.ak.event.emit(cc.ak.key.event.ENTER_GAME_SCENE + "_" + bundle.id, data);
              });
              return;
            }
            cc.ak.cache.bundleMgr.initPkgBundles().then(cc.ak.cache.bundleMgr.loadSubGamePackage.bind(cc.ak.cache.bundleMgr, gameId)).then(function() {
              cc.ak.ui.waitingHide();
              cc.ak.event.emit(cc.ak.key.event.ENTER_GAME_SCENE + "_" + bundle.id, data);
            }).catch(function(err) {
              cc.ak.util.utils.Err(err);
              cc.error("\u8bf7\u6ce8\u610f\u5b50\u5305\u662f\u5426\u52fe\u9009\u4e86[\u914d\u7f6e\u4e3a\u5b50\u5305]");
            });
          }).catch(function(e) {
            cc.ak.ui.alertRestart(lan.com.lbl.hotfixing);
          }); else {
            cc.ak.ui.waitingHide();
            cc.ak.ui.alert({
              text: lan.com.err.action.noExistGame,
              btns: lan.com.lbl.restart,
              callback: function callback() {
                return cc.ak.util.utils.gameRestartOnFail();
              }
            });
            cc.ak.util.utils.wLog(3e3, "\u6536\u5230\u8fdb\u5165\u623f\u95f4\u6210\u529f, gameIde=" + gameId + ", \u672c\u5730\u4e0d\u5b58\u5728\u8be5\u6e38\u620f");
          }
        });
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_ROOM + "-" + proto.cmd_net.CMD_ROOM.SUB_ENTER_ROOM_FAIL, function(dv) {
          var fail = new proto.cmd_room.EnterRoomFail();
          cc.ak.util.tbfUtil.unPackData(fail, dv);
          cc.ak.ui.alert({
            text: fail.Msg + "(" + fail.Ret + ")",
            btns: lan.com.lbl.iknowed
          });
        });
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_SYS + "-" + proto.cmd_net.CMD_SYS.CMD_SYS_USER_STATUS, function(dv) {
          var data = new proto.cmd_sys.CSysUserStatus();
          cc.ak.util.tbfUtil.unPackData(data, dv);
          cc.ak.mc.userMgr.currRoomNum = data.RoomID;
          cc.sys.localStorage.removeItem(cc.ak.key.cache.RENTER_ROOM);
          if (cc.ak.mc.userMgr.currRoomNum > 0) {
            cc.ak.ui.waiting();
            cc.ak.util.socketMgr.send(proto.cmd_net.MainCmdID.CMD_ROOM, proto.cmd_net.CMD_ROOM.SUB_OFFLINE_ENTER_ROOM);
          } else cc.ak.ui.loadLobbyScence();
        });
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_ROOM + "-" + proto.cmd_net.CMD_ROOM.SUB_HAS_LEAVE_ROOM, function(dv) {
          try {
            var leave = new proto.cmd_room.HasLeaveRoom();
            cc.ak.util.tbfUtil.unPackData(leave, dv);
            if (leave.LeaveType === proto.cmd_room.ROOM_LEAVE_TYPE.ROOM_LEAVE_TYPE_SERVERS_REEOR) {
              cc.ak.ui.loadLobbyScence();
              cc.log("\u670d\u52a1\u5668\u5f02\u5e38\u9000\u51fa\u6e38\u620f");
            }
            cc.ak.mc.userMgr.currRoomNum = 0;
          } catch (e) {
            cc.ak.util.utils.Err("proto.cmd_room.HasLeaveRoom\u6570\u636e\u5f02\u5e38");
            cc.ak.ui.loadLobbyScence();
            cc.ak.util.utils.wLog(2e3, "\u53ef\u80fd\u662f\u65ad\u7ebf\u91cd\u56de\u4f46\u5df2\u7ecf\u4e0d\u5728\u623f\u95f4\u5185\u4e86");
          }
        });
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_ROOM + "-" + proto.cmd_net.CMD_ROOM.SUB_COMM_MESSAGE, function(dv) {
          var msg = new proto.cmd_room.CommMessage();
          cc.ak.util.tbfUtil.unPackData(msg, dv);
          cc.ak.ui.alert({
            text: msg.Msg,
            btns: lan.com.lbl.iknowed
          });
        });
        cc.ak.event.on(proto.cmd_net.MainCmdID.CMD_ROOM + "-" + proto.cmd_net.CMD_ROOM.SUB_USER_NOT_IN_ROOM, function(dv) {
          cc.ak.ui.toast("\u7528\u6237\u4e0d\u5728\u623f\u95f4\u4e2d");
        });
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  SocketMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "75c24k+1wRGRJ5FFxOwKYug", "SocketMgr");
    "use strict";
    var SocketManager = function() {
      var log = function log(s) {
        cc.log("[socket]" + s);
      };
      var CLOSE_REASON = {
        socketFail: 0,
        doError: 1,
        reconnect: 2,
        forceClose: 3
      };
      var SocketManager = function SocketManager() {
        var _heart_time = 8e3;
        var _time_out = 2e4;
        var _heart_time_id = -1;
        var _time_out_id = -1;
        var _prev_beat = false;
        var _socket;
        var _needReconnect = false;
        var _initiated = false;
        var _count = 0;
        var _closeReason = CLOSE_REASON.socketFail;
        var self = this;
        var _check_heart_beat = function _check_heart_beat() {
          if (_socket && WebSocket.OPEN === _socket.readyState) {
            var time = cc.ak.util.utils.GetTime();
            self.send(proto.cmd_net.MainCmdID.CMD_SYS, proto.cmd_net.CMD_SYS.CMD_SYS_HEART_ASK, time);
          }
        };
        this._close = function(reason) {
          if (_socket && (_socket.readyState !== WebSocket.CLOSED || _socket.readyState !== WebSocket.CLOSING)) {
            _closeReason = reason;
            _socket.close();
          }
        };
        this._time_out_check = function() {
          _prev_beat || this._close(CLOSE_REASON.reconnect);
          _prev_beat = false;
        };
        this.init = function() {
          if (_initiated) return;
          _initiated = true;
          log("socket \u521d\u59cb\u5316\u5b8c\u6bd5");
        };
        this.connect = function(host, port, count) {
          try {
            if (_socket && _socket.readyState != WebSocket.CLOSED) {
              this._close(CLOSE_REASON.reconnect);
              return;
            }
          } catch (e) {
            _socket = null;
          }
          _needReconnect = false;
          _count = count;
          try {
            var url = "ws://" + host + ":" + port;
            cc.log("ws connect url=" + url);
            _socket = new WebSocket(url);
          } catch (e) {
            cc.error("websocket connect error:" + e);
            cc.ak.event.emit(cc.ak.key.event.SOCKET_CONN_FAIL, _count);
            return;
          }
          _socket.onopen = this.onOpen.bind(this);
          _socket.onerror = this.onError.bind(this);
          _socket.onmessage = this.onMessage.bind(this);
          _socket.onclose = this.onClose.bind(this);
        };
        this.is_connected = function() {
          if (!_socket) return false;
          return _socket.readyState === WebSocket.CONNECTING || _socket.readyState === WebSocket.OPEN;
        };
        this.reconnect = function() {
          this._close(CLOSE_REASON.reconnect);
        };
        this.forceClose = function() {
          this._close(CLOSE_REASON.forceClose);
        };
        this.doError = function() {
          cc.error("socket doError!");
          this._close(CLOSE_REASON.error);
        };
        this.send = function(mcmd, scmd, args) {
          if (!_socket || _socket.readyState !== WebSocket.OPEN) return;
          (proto.cmd_net.MainCmdID.CMD_SYS !== mcmd || proto.cmd_net.CMD_SYS.CMD_SYS_HEART_ACK !== scmd && proto.cmd_net.CMD_SYS.CMD_SYS_HEART_ASK !== scmd) && log("--\x3e|" + mcmd + "-" + scmd);
          var dataView = cc.ak.util.tbfUtil.packData(mcmd, scmd, args);
          dataView = new Uint8Array(dataView.buffer, dataView.byteOffset, dataView.byteLength);
          dataView && _socket.send(dataView);
        };
        this.onOpen = function() {
          _count = 0;
          cc.ak.event.emit(cc.ak.key.event.SOCKET_CONN_SUCC);
          clearInterval(_heart_time_id);
          _heart_time_id = setInterval(_check_heart_beat, _heart_time);
          clearInterval(_time_out_id);
          _time_out_id = setInterval(this._time_out_check.bind(this), _time_out);
          _prev_beat = true;
        };
        this.onError = function(e) {
          cc.error("websocket onError:" + e);
          _closeReason = CLOSE_REASON.socketFail;
        };
        this._onData = function(data) {
          if (!(data instanceof ArrayBuffer)) {
            this.doError();
            return;
          }
          if (data.byteLength < 8) {
            this.doError();
            return;
          }
          var pos = 0;
          try {
            var dv = new DataView(data);
          } catch (e) {
            cc.log(msg);
            cc.error(e);
          }
          var size = dv.getUint32(0, true);
          if (size < 8 || size !== data.byteLength) {
            this.doError();
            return;
          }
          pos += 4;
          var mcmd = dv.getUint8(pos++);
          var scmd = dv.getUint8(pos++);
          var ver = dv.getUint8(pos++);
          var res = dv.getUint8(pos++);
          var tbfLen = data.byteLength - pos;
          if (proto.cmd_net.MainCmdID.CMD_SYS === mcmd && (proto.cmd_net.CMD_SYS.CMD_SYS_HEART_ACK === scmd || proto.cmd_net.CMD_SYS.CMD_SYS_HEART_ASK === scmd)) {
            var time = size > 8 ? dv.getUint32(pos, true) : null;
            proto.cmd_net.CMD_SYS.CMD_SYS_HEART_ASK === scmd && this.send(mcmd, scmd, time);
            return;
          }
          log("<--|" + mcmd + "-" + scmd);
          cc.log("unpack head:size=" + size + ",mcmd=" + mcmd + ",scmd=" + scmd + ",ver=" + ver + ",res=" + res);
          false == cc.ak.util.utils.addGameMsgTemp(mcmd, scmd, dv) && cc.ak.event.emit(mcmd + "-" + scmd, dv);
        };
        this.onMessage = function(msg) {
          var _this = this;
          _prev_beat = true;
          if (cc.sys.isBrowser && msg.data instanceof Blob) {
            var reader = new FileReader();
            reader.onload = function(event) {
              var data = event.target.result;
              _this._onData(data);
            };
            reader.readAsArrayBuffer(msg.data);
            return;
          }
          this._onData(msg.data);
        };
        this.onClose = function() {
          cc.log("websocket onClose!reason=" + _closeReason);
          _socket = null;
          clearInterval(_heart_time_id);
          clearInterval(_time_out_id);
          switch (_closeReason) {
           case CLOSE_REASON.reconnect:
            cc.ak.event.emit(cc.ak.key.event.SOCKET_CONN_SHUT);
            break;

           case CLOSE_REASON.forceClose:
            break;

           case CLOSE_REASON.socketFail:
           case CLOSE_REASON.doError:
           default:
            cc.ak.event.emit(cc.ak.key.event.SOCKET_CONN_FAIL, _count);
          }
        };
      };
      var _me = null;
      return {
        get instance() {
          _me || (_me = new SocketManager());
          return _me;
        }
      };
    }();
    module.exports = SocketManager.instance;
    cc._RF.pop();
  }, {} ],
  TbfUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9f08fAZMopADby8uamiPHf0", "TbfUtil");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var TbfUtil = function() {
      var debug = false;
      var log = function log() {};
      debug && (log = function log(str) {
        cc.log("[Tbf]" + str);
      });
      var Long = require("Long");
      var TBFTYPE_HAVE_ID = 128;
      var TBFTYPE_HAVE_SIG = 64;
      var TBFTYPE_INT = 0;
      var TBFTYPE_FLOAT = 1;
      var TBFTYPE_DOUBLE = 2;
      var TBFTYPE_BYTE = 3;
      var TBFTYPE_PACK = 4;
      var TBFVALUE = function TBFVALUE() {
        this.v_type = 0;
        this.v_have_id = 0;
        this.v_id = 0;
        this.v_len = 0;
        this.v_value = null;
      };
      var anlyClassName = function anlyClassName(className) {
        var pkgs = className.split(".");
        var ret = {};
        pkgs.length > 1 && (ret.namespace = window);
        for (var i = 0; i < pkgs.length - 1; i++) ret.namespace = ret.namespace[pkgs[i]];
        ret.simpleName = pkgs[pkgs.length - 1];
        ret.cfg = ret.namespace ? ret.namespace : window;
        ret.cfg = ret.cfg.__cfg[ret.simpleName];
        return ret;
      };
      var _TbfUtil = function _TbfUtil() {
        var _sendBuf = new ArrayBuffer(10240);
        var _sendDataView = new DataView(_sendBuf);
        var _sndOff = 0;
        var writeId = function writeId(id) {
          if (id < 0) return true;
          if (id < 128) {
            if (_sendDataView.byteLength - _sndOff < 1) return false;
            _sendDataView.setUint8(_sndOff++, id);
          } else {
            if (_sendBuf - _sndOff < 2) return false;
            _sendDataView.setUint8(_sndOff++, 127 & id | TBFTYPE_HAVE_ID);
            _sendDataView.setUint8(_sndOff++, id >> 7);
          }
          return true;
        };
        var writeInt = function writeInt(id, v) {
          if (v > Number.MAX_SAFE_INTEGER || v < Number.MIN_SAFE_INTEGER) {
            cc.error("unsupport big integer over 53 bits.stack=" + new Error().stack);
            return false;
          }
          if (_sendDataView.byteLength - _sndOff < 1) return false;
          var type = (id >= 0 ? TBFTYPE_HAVE_ID : 0) | (v < 0 ? TBFTYPE_HAVE_SIG : 0) | TBFTYPE_INT << 3 | 0;
          var vType = new Uint8Array(_sendBuf, _sndOff++, 1);
          vType[0] = type;
          if (!writeId(id)) return false;
          v < 0 && (v = -v);
          var byteCount = __ll_size(v);
          if (_sendDataView.byteLength - _sndOff < byteCount) return false;
          type |= byteCount - 1 & 255;
          vType[0] = type;
          __write64Int(v, byteCount);
          return true;
        };
        var writeIntArray = function writeIntArray(id, v) {
          if (!v || v.length <= 0) return true;
          var orginOff = _sndOff;
          if (!writeInt(id, v[0])) {
            _sndOff = orginOff;
            return false;
          }
          if (v.length <= 1) return true;
          for (var i = 1; i < v.length; i++) if (!writeInt(-1, v[i])) {
            _sndOff = orginOff;
            return false;
          }
          return true;
        };
        var writeFloat = function writeFloat(id, v) {
          if (_sendDataView.byteLength - _sndOff < 1) return false;
          var type = (id >= 0 ? TBFTYPE_HAVE_ID : 0) | (v < 0 ? TBFTYPE_HAVE_SIG : 0) | TBFTYPE_FLOAT << 3 | 3;
          _sendDataView.setUint8(_sndOff++, type);
          if (!writeId(id)) return false;
          if (_sendDataView.byteLength - _sndOff < 4) return false;
          _sendDataView.setFloat32(_sndOff, v, true);
          _sndOff += 4;
          return true;
        };
        var writeFloatArray = function writeFloatArray(id, v) {
          if (!v || v.length <= 0) return true;
          var orginOff = _sndOff;
          if (!writeFloat(id, v[0])) {
            _sndOff = orginOff;
            return false;
          }
          if (v.length <= 1) return true;
          for (var i = 1; i < v.length; i++) if (!writeFloat(-1, v[i])) {
            _sndOff = orginOff;
            return false;
          }
          return true;
        };
        var writeDouble = function writeDouble(id, v) {
          if (_sendDataView.byteLength - _sndOff < 1) return false;
          var type = (id >= 0 ? TBFTYPE_HAVE_ID : 0) | (v < 0 ? TBFTYPE_HAVE_SIG : 0) | TBFTYPE_DOUBLE << 3 | 7;
          _sendDataView.setUint8(_sndOff++, type);
          if (!writeId(id)) return false;
          if (_sendDataView.byteLength - _sndOff < 8) return false;
          _sendDataView.setFloat64(_sndOff, v, true);
          _sndOff += 8;
          return true;
        };
        var writeDoubleArray = function writeDoubleArray(id, v) {
          if (!v || v.length <= 0) return true;
          var orginOff = _sndOff;
          if (!writeDouble(id, v[0])) {
            _sndOff = orginOff;
            return false;
          }
          if (v.length <= 1) return true;
          for (var i = 1; i < v.length; i++) if (!writeDouble(-1, v[i])) {
            _sndOff = orginOff;
            return false;
          }
          return true;
        };
        var writeBytes = function writeBytes(id, v, bpack) {
          (!v || v.length <= 0) && (v = []);
          if (_sendDataView.byteLength - _sndOff < 1) return false;
          var type = (id >= 0 ? TBFTYPE_HAVE_ID : 0) | (bpack ? TBFTYPE_PACK << 3 : TBFTYPE_BYTE << 3);
          var vType = new Uint8Array(_sendBuf, _sndOff++, 1);
          vType[0] = type;
          if (!writeId(id)) return false;
          var bits = __ll_size(v.length);
          type |= bits - 1;
          vType[0] = type;
          if (_sendDataView.byteLength - _sndOff < bits + v.length) return false;
          __write64Int(v.length, bits);
          for (var i = 0; i < v.length; i++) _sendDataView.setUint8(_sndOff++, v[i]);
          return true;
        };
        var writeStr = function writeStr(id, v) {
          (!v || v.length <= 0) && (v = "");
          if (_sendDataView.byteLength - _sndOff < 1) return false;
          var bytes = cc.ak.util.utils.str2Bytes(v);
          if (!bytes) {
            cc.error("Str2Bytes error!stack=" + new Error().stack);
            return false;
          }
          return writeBytes(id, bytes);
        };
        var __id_size = function __id_size(id) {
          return id < 0 ? 0 : id <= 127 ? 1 : 2;
        };
        var __ll_size = function __ll_size(v) {
          v < 0 && (v = -v);
          return v <= 255 ? 1 : v <= 65535 ? 2 : v <= 16777215 ? 3 : v <= 4294967295 ? 4 : v <= 0xffffffffff ? 5 : v <= 0xffffffffffff ? 6 : v <= 72057594037927940 ? 7 : 8;
        };
        var __write64Int = function __write64Int(value, c) {
          var v = Long.fromNumber(value);
          var bytes = v.toBytes(true);
          for (var i = 0; i < c; i++) _sendDataView.setUint8(_sndOff++, bytes[i]);
        };
        var writePack = function writePack(id, v) {
          if (_sendDataView.byteLength - _sndOff < 1) return false;
          var type = (id >= 0 ? TBFTYPE_HAVE_ID : 0) | TBFTYPE_PACK << 3;
          var vType = new Uint8Array(_sendBuf, _sndOff++, 1);
          vType[0] = type;
          if (!writeId(id)) return false;
          var size = bfsize(v);
          var bits = __ll_size(size);
          type |= bits - 1;
          vType[0] = type;
          if (_sendDataView.byteLength - _sndOff < bits + v.length) return false;
          __write64Int(size, bits);
          return PackVo(v);
        };
        var bfsize = function bfsize(data) {
          var size = 0;
          var ret = anlyClassName(data.__className);
          var cfg_obj = ret.cfg;
          if (!cfg_obj) {
            cc.error("voobj=" + JSON.stringify(data));
            cc.error("bfsize failed : " + data.constructor.name + ",stack=" + new Error().stack);
            return size;
          }
          for (var id in cfg_obj) {
            var memb_cfg = cfg_obj[id];
            if (!memb_cfg) continue;
            id = parseInt(id);
            var value = data[memb_cfg.na];
            var isArray = Array.isArray(value);
            var itemCount = isArray ? value.length : 1;
            var force = false;
            if (!force && (0 === value || "" === value || isArray && value.length <= 0)) continue;
            var firstV = isArray ? value[0] : value;
            switch (memb_cfg.ty) {
             case "int":
              size += 1 + __id_size(id) + __ll_size(firstV);
              for (var i = 1; i < itemCount; i++) size += 1 + __ll_size(value[i]);
              break;

             case "float":
              size += __id_size(id) + 5 * itemCount;
              break;

             case "double":
              size += __id_size(id) + 9 * itemCount;
              break;

             case "byte":
              size += 1 + __id_size(id) + __ll_size(itemCount) + itemCount;
              break;

             default:
              size += bfsize(firstV);
              for (var _i = 1; _i < itemCount; _i) size += bfsize(value[_i]);
              size += bfsize(value);
            }
          }
          return size;
        };
        var PackVo = function PackVo(data) {
          var ret = anlyClassName(data.__className);
          var cfg_obj = ret.cfg;
          if (!cfg_obj) {
            cc.error("voobj=" + JSON.stringify(data));
            cc.error("PackVo failed : " + data.constructor.name + ",stack=" + new Error().stack);
            return false;
          }
          for (var id in cfg_obj) {
            var memb_cfg = cfg_obj[id];
            id = parseInt(id);
            if (!memb_cfg) continue;
            var value = data[memb_cfg.na];
            var isArray = Array.isArray(value);
            var itemCount = isArray ? value.length : 1;
            var force = false;
            if (!force && (0 === value || "" === value || isArray && value.length <= 0)) continue;
            log("PackVo:sndOff=" + _sndOff + ",field=" + memb_cfg.na + ",id=" + id + ",ty=" + memb_cfg.ty);
            switch (memb_cfg.ty) {
             case "int":
              if (isArray) {
                if (!writeIntArray(id, value)) return false;
              } else if (!writeInt(id, value)) return false;
              break;

             case "float":
              if (isArray) {
                if (!writeFloatArray(id, value)) return false;
              } else if (!writeFloat(id, value)) return false;
              break;

             case "double":
              if (isArray) {
                if (!writeDoubleArray(id, value)) return false;
              } else if (!writeDouble(id, value)) return false;
              break;

             case "byte":
              if ("string" === memb_cfg.sty) {
                if (!writeStr(id, value)) return false;
              } else if (!writeBytes(id, value, false)) return false;
              break;

             default:
              var firstV = isArray ? value[0] : value;
              if (!writePack(id, firstV)) return false;
              for (var i = 1; i < itemCount; i) if (!writePack(id, value[i])) return false;
            }
          }
          return true;
        };
        this.packData = function(mcmd, scmd, voObj) {
          _sndOff = 0;
          var sizeAr = new Uint32Array(_sendBuf, _sndOff, 4);
          sizeAr[0] = 8;
          _sndOff += 4;
          _sendDataView.setUint8(_sndOff++, 255 & mcmd);
          _sendDataView.setUint8(_sndOff++, 255 & scmd);
          _sendDataView.setUint8(_sndOff++, 0);
          _sendDataView.setUint8(_sndOff++, 0);
          if (!voObj) return new DataView(_sendBuf, 0, _sndOff);
          if (Number.isInteger(voObj)) {
            _sendDataView.setUint32(_sndOff, voObj, true);
            _sndOff += 4;
            sizeAr[0] = _sndOff;
            return new DataView(_sendBuf, 0, _sndOff);
          }
          if ("object" != ("undefined" === typeof voObj ? "undefined" : _typeof(voObj))) {
            cc.error("packData:unsuport this type!type=" + ("undefined" === typeof voObj ? "undefined" : _typeof(voObj)) + ",stack=" + new Error().stack);
            return null;
          }
          if (!PackVo(voObj)) return null;
          sizeAr[0] = _sndOff;
          var packDv = new DataView(_sendBuf, 0, _sndOff);
          log("packData:len=" + _sndOff + ",size=" + sizeAr[0]);
          return packDv;
        };
        this.unPackData = function(data, tbfDataView) {
          log("before unpackdata:" + JSON.stringify(data) + ",tbf=" + tbfDataView);
          data = new TbfReader().unPackData(data, tbfDataView, 8);
          log("unPackData:" + JSON.stringify(data));
          return data;
        };
        this.unPackInnerData = function(data, tbfDataView) {
          log("before unpackdata:" + JSON.stringify(data) + ",tbf=" + tbfDataView);
          data = new TbfReader().unPackData(data, tbfDataView, 0);
          log("unPackData:" + JSON.stringify(data));
          return data;
        };
        var TbfReader = function TbfReader() {
          this._rcvDataView = null;
          this._rcvOff = 0;
          this.__read64Int = function(c) {
            var ua = new Uint8Array(this._rcvDataView.buffer, this._rcvOff, c);
            this._rcvOff += c;
            var bytes = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
            for (var i = 0; i < ua.length; i++) {
              bytes[i] = ua[i];
              log("bytes_" + i + "=" + bytes[i]);
            }
            var ret = Long.fromBytes(bytes, true, true);
            log("long number=" + ret.toNumber());
            return ret.toNumber();
          };
          this.readId = function(bf) {
            if (bf.byteLength - this._rcvOff < 1) return -1;
            var id = bf.getUint8(this._rcvOff++);
            if (id < TBFTYPE_HAVE_ID) return id;
            if (bf.byteLength - this._rcvOff < 1) return -1;
            id = (bf.getUint8(this._rcvOff++) << 7) + (127 & id);
            return id;
          };
          this.readField = function() {
            var v = new TBFVALUE();
            v.v_len = 0;
            log("rcv=" + this._rcvDataView + ",len=" + this._rcvDataView.byteLength + ",off=" + this._rcvOff + ",len=" + this._rcvDataView.buffer.byteLength);
            if (!this._rcvDataView || this._rcvDataView.byteLength < 0 || this._rcvOff < 0) {
              cc.error(new Error().stack);
              return null;
            }
            if (this._rcvDataView.byteLength - this._rcvOff < 1) {
              cc.error(new Error().stack);
              return null;
            }
            var type = this._rcvDataView.getUint8(this._rcvOff++);
            var vbits = 1 + (7 & type);
            v.v_type = (56 & type) >> 3;
            v.v_have_id = type & TBFTYPE_HAVE_ID ? 1 : 0;
            v.v_id = 0;
            if (v.v_have_id) {
              v.v_id = this.readId(this._rcvDataView);
              if (v.v_id < 0) {
                cc.error(new Error().stack);
                return null;
              }
            }
            log("v.v_id=" + v.v_id + ",v.v_type=" + v.v_type + ",vbits=" + vbits);
            switch (v.v_type) {
             case TBFTYPE_INT:
              v.v_len = vbits;
              if (this._rcvDataView.byteLength - this._rcvOff < vbits) {
                cc.error(new Error().stack);
                return null;
              }
              v.v_value = this.__read64Int(vbits);
              type & TBFTYPE_HAVE_SIG && (v.v_value = -v.v_value);
              break;

             case TBFTYPE_FLOAT:
              v.v_len = 4;
              if (this._rcvDataView.byteLength - this._rcvOff < 4) {
                cc.error(new Error().stack);
                return null;
              }
              v.v_value = this._rcvDataView.getFloat32(this._rcvOff, true);
              this._rcvOff += 4;
              break;

             case TBFTYPE_DOUBLE:
              v.v_len = 8;
              if (this._rcvDataView.byteLength - this._rcvOff < 8) {
                cc.error(new Error().stack);
                return null;
              }
              v.v_value = this._rcvDataView.getFloat64(this._rcvOff, true);
              this._rcvOff += 8;
              break;

             case TBFTYPE_BYTE:
             case TBFTYPE_PACK:
              if (this._rcvDataView.byteLength - this._rcvOff < vbits) {
                cc.error(new Error().stack);
                return null;
              }
              v.v_len = this.__read64Int(vbits);
              if (v.v_len < 0) return v;
              log("read pack:taotalLen=" + this._rcvDataView.byteLength + ",vbits=" + vbits + ",this._rcvOff=" + this._rcvOff + ",v.v_len=" + v.v_len);
              if (this._rcvDataView.byteLength - this._rcvOff < v.v_len) {
                cc.error(new Error().stack);
                return null;
              }
              if (v.v_type == TBFTYPE_BYTE) {
                v.v_value = this._rcvDataView.buffer.slice(this._rcvOff, this._rcvOff + v.v_len);
                this._rcvOff += v.v_len;
              }
              break;

             default:
              v.v_len = vbits;
              this._rcvOff += vbits;
            }
            return v;
          };
          this.__unPack = function(data, packLen) {
            var ret = anlyClassName(data.__className);
            var cfg_obj = ret.cfg;
            if (!cfg_obj) {
              cc.error("UnpackVo failed : " + data.constructor.name + ",stack=" + new Error().stack);
              return null;
            }
            var lastId = 0;
            var startOff = this._rcvOff;
            while (this._rcvOff - startOff < packLen) {
              var v = this.readField();
              if (!v) return null;
              var id = 1 == v.v_have_id ? v.v_id : lastId;
              var memb_cfg = cfg_obj[id];
              if (!memb_cfg) {
                cc.warn("\u670d\u52a1\u7aef\u534f\u8bae\u7248\u672c\u548c\u5ba2\u6237\u7aef\u534f\u8bae\u7248\u672c\u4e0d\u5339\u914d,class=" + data.__className + ",id=" + id + ",stack=" + new Error().stack);
                lastId = id;
                v.v_type == TBFTYPE_PACK && (this._rcvOff += v.v_len);
                continue;
              }
              log("id=" + id + ",memb_cfg.na=" + memb_cfg.na + ",data=" + data[memb_cfg.na] + ",ty=" + memb_cfg.ty + ",type=" + v.v_type);
              memb_cfg.ar && void 0 !== data[memb_cfg.na] && !data[memb_cfg.na] && (data[memb_cfg.na] = []);
              if (v.v_type == TBFTYPE_PACK) {
                var voObj = new ret.namespace[memb_cfg.ty]();
                voObj = this.__unPack(voObj, v.v_len);
                data[memb_cfg.na] ? data[memb_cfg.na].push(voObj) : data[memb_cfg.na] = voObj;
              } else if (v.v_type == TBFTYPE_BYTE) {
                log("value=" + v.v_value + ",len=" + v.v_value.byteLength);
                var dv = new Uint8Array(v.v_value, 0, v.v_value.byteLength);
                "string" === memb_cfg.sty ? data[memb_cfg.na] = cc.ak.util.utils.bytes2Str(dv) : data[memb_cfg.na] = dv;
              } else data[memb_cfg.na] ? data[memb_cfg.na].push(v.v_value) : data[memb_cfg.na] = v.v_value;
              lastId = id;
            }
            return data;
          };
          this.unPackData = function(data, tbfDataView, rcvOff) {
            this._rcvDataView = tbfDataView instanceof DataView ? tbfDataView : new DataView(tbfDataView.buffer, tbfDataView.byteOffset, tbfDataView.byteLength);
            this._rcvOff = rcvOff;
            return this.__unPack(data, tbfDataView.byteLength - this._rcvOff);
          };
        };
      };
      var _me = null;
      return {
        get instance() {
          _me || (_me = new _TbfUtil());
          return _me;
        }
      };
    }();
    module.exports = TbfUtil.instance;
    cc._RF.pop();
  }, {
    Long: "Long"
  } ],
  UserMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f93cfxIhF5NaoqQ2KiJ7kgD", "UserMgr");
    "use strict";
    var UserMgr = cc.Class({
      statics: {
        _instance: null,
        instance: function instance() {
          if (!this._instance) {
            this._instance = new this();
            this._instance.init();
          }
          return this._instance;
        },
        create: function create() {
          this._instance = null;
          return this.instance();
        }
      },
      properties: {
        logined: false,
        token: null,
        uid: 0,
        nick: null,
        face: null,
        account: null,
        room_card: 0,
        coin_bean: 0,
        sex: 0,
        ip: "",
        area_code: 0,
        currRoomNum: 0,
        signature: "",
        userType: 0,
        old_login_date: null,
        now_login_date: null,
        id_card_info: null,
        isbinded: null,
        phoneNum: null,
        lastTimeLogin: null,
        accountA: null,
        accountB: null,
        accuntDetail: null,
        headID: null,
        share_gift: null,
        coins: null,
        coinChangeIDs: null,
        power: null
      },
      init: function init() {
        this.coins = {};
        this.coinChangeIDs = new Array(5);
      },
      update: function update(login) {
        this.token = login.Token;
        this.nick = login.NickName;
        this.face = login.FaceID;
        this.uid = login.UserID;
        this.account = login.Account;
        this.sex = login.Sex;
        this.ip = login.IP;
        this.userType = login.UserType;
        this.signature = login.UserSignature;
        this.headID = login.headID;
        this.power = login.Power;
        "" != login.UserPhone ? this.isbinded = true : this.isbinded = false;
        var sum = 0;
        var coins = login.Coins;
        for (var i = 0; i < coins.length; i++) this.coins[coins[i].CoinID] = coins[i].Amount;
        this.coin_bean = this.coins[proto.cmd_sys.COIN_ID.COIN_ID_A] + this.coins[proto.cmd_sys.COIN_ID.COIN_ID_B];
        this.phoneNum = login.UserPhone;
        this.lastTimeLogin = login.LastTimeLogin;
        this.accuntDetail = login.AccountDetail;
        "function" === typeof buglySetUserId && buglySetUserId(this.uid);
        this.nick = cc.ak.util.utils.FilterFormString(this.nick + "");
        this.nick = cc.ak.util.utils.nameInterception(this.nick);
        cc.ak.util.http.add_param("uid", this.uid);
        cc.ak.util.http.add_param("token", this.token);
        cc.ak.util.native.invoke(cc.ak.util.native.name.JPUSH_SET_ALIAS, {
          alias: this.uid + ""
        });
      },
      changeCoin: function changeCoin(num) {
        this.coin_bean = num;
      }
    });
    module.exports = UserMgr;
    cc._RF.pop();
  }, {} ],
  Utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a54fPK5F1EEbJo5bFUWkqL", "Utils");
    "use strict";
    var Utils = cc.Class({
      statics: {
        appStartTime: new Date().getTime(),
        GetTime: function GetTime() {
          return new Date().getTime() - this.appStartTime;
        },
        Err: function Err(e) {
          if (e instanceof cc.ak.err.Error || e instanceof cc.ak.err.Fatal) e.log(); else if (e instanceof Error) cc.error(e.message + " => " + e.stack); else {
            e = new Error(e);
            cc.error(e.message + " => " + e.stack);
          }
          cc.sys.isBrowser && cc.error(e);
        },
        HandleError: function HandleError(e) {
          cc.ak.util.utils.Err(e);
          e instanceof cc.ak.err.Fatal ? cc.ak.ui.alertRestart(e.humantip) : cc.ak.ui.alert({
            text: e.humantip ? e.humantip : e.message,
            btns: lan.com.lbl.sure
          });
        },
        IsObjEmpty: function IsObjEmpty(o) {
          if (!o) return false;
          for (var k in o) return false;
          return true;
        },
        SecFormat: function SecFormat(sec, format) {
          sec |= 0;
          var d = sec / 86400 | 0;
          sec %= 86400;
          var h = sec / 3600 | 0;
          sec %= 3600;
          var m = sec / 60 | 0;
          sec %= 60;
          var o = {
            "s+": sec,
            "m+": m,
            "h+": h,
            "d+": d
          };
          for (var k in o) {
            var reg = new RegExp("(" + k + ")");
            reg.test(format) && (format = format.replace(reg, function(x) {
              return 2 === x.length ? ("00" + o[k]).substr(("" + o[k]).length) : o[k];
            }));
          }
          return format;
        },
        GetFlattenDistance: function GetFlattenDistance(lat1, lng1, lat2, lng2) {
          var f = (lat1 + lat2) * Math.PI / 360;
          var x = (lat1 - lat2) * Math.PI / 360;
          var l = (lng1 - lng2) * Math.PI / 360;
          var sg = Math.sin(x);
          var sl = Math.sin(l);
          var sf = Math.sin(f);
          var s, c, w, r, d, h1, h2;
          var fl = 1 / 298.257;
          sg *= sg;
          sl *= sl;
          sf *= sf;
          s = sg * (1 - sl) + (1 - sf) * sl;
          c = (1 - sg) * (1 - sl) + sf * sl;
          w = Math.atan(Math.sqrt(s / c));
          r = Math.sqrt(s * c) / w;
          d = 2 * w * 6378137;
          h1 = (3 * r - 1) / 2 / c;
          h2 = (3 * r + 1) / 2 / s;
          return d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
        },
        CutStr: function CutStr(raw_str, limit_len) {
          raw_str += "";
          for (var i = 0; i < raw_str.length; i++) {
            limit_len -= raw_str.charAt(i) > 255 ? 2 : 1;
            if (limit_len <= 0) return raw_str.substr(0, i) + "\u2026";
          }
          return raw_str;
        },
        AddSign: function AddSign(num) {
          return (num > 0 ? "+" : "") + num;
        },
        FilterFormString: function FilterFormString(str) {
          str = str.replace(/\s/g, "");
          str = str.replace(/[\\#\';]/g, "");
          return str;
        },
        VerCompare: function VerCompare(verA, verB) {
          if (!verA || !verB) return 0;
          var a = verA.split(".");
          var b = verB.split(".");
          var len = Math.min(a.length, b.length);
          for (var i = 0; i < len; i++) {
            if (a[i] === b[i]) continue;
            return parseInt(a[i]) - parseInt(b[i]);
          }
          return a.length - b.length;
        },
        GetVersionStr: function GetVersionStr() {
          var cfg = game.conf;
          return "v" + cfg.app_ver + "b" + cfg.app_build + "r" + cfg.curr_hot_ver;
        },
        ParseUrlKeyPair: function ParseUrlKeyPair(url) {
          var pair = {};
          url.replace(/^.*\?/, "").replace(/([^\=]+)\=([^\&]*)\&?/g, function(match, key, value) {
            pair[key] = decodeURIComponent(value);
          });
          return pair;
        },
        Dump: function Dump(obj, t) {
          if (null === obj) return null;
          if ("string" === typeof obj || "number" === typeof obj || "boolean" === typeof obj) return obj;
          if ("function" === typeof obj) return;
          void 0 === t && (t = "");
          var tn = t + "\t";
          var is_arr = Array.isArray(obj);
          if (is_arr && "number" === typeof obj[0]) return JSON.stringify(obj);
          var ret = is_arr ? "[\n" : "{\n";
          for (var k in obj) {
            var nest = this.Dump(obj[k], tn);
            void 0 !== nest && (ret += tn + k + " => " + nest + "\n");
          }
          ret += t + (is_arr ? "]" : "}");
          return ret;
        },
        i18nStrFormat: function i18nStrFormat(i18nKey, optKeys) {
          for (var i = 0; i < arguments.length; i++) arguments[i] = cc.ak.i18n.t(arguments[i]);
          return cc.js.formatStr.apply(null, arguments);
        },
        upEventLog: function upEventLog(event_id, msg) {},
        send: function send(mcmd, scmd, req) {
          cc.ak.util.socketMgr.send(mcmd, scmd, req);
        },
        wLog: function wLog(id, msg) {
          this.upEventLog(id, Array.prototype.slice.call(arguments, 1).join("#"));
        },
        humanFileSize: function humanFileSize(bytes, si) {
          var thresh = si ? 1e3 : 1024;
          if (Math.abs(bytes) < thresh) return bytes + " B";
          var units = si ? [ "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB" ] : [ "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB" ];
          var u = -1;
          do {
            bytes /= thresh;
            ++u;
          } while (Math.abs(bytes) >= thresh && u < units.length - 1);
          return bytes.toFixed(1) + " " + units[u];
        },
        bytes2Str: function bytes2Str(bytes) {
          if (null === bytes) return "";
          var extraByteMap = [ 1, 1, 1, 1, 2, 2, 3, 0 ];
          var count = bytes.length;
          var str = "";
          for (var i = 0; i < count; ) {
            var ch = bytes[i++];
            if (128 & ch) {
              var extra = extraByteMap[ch >> 3 & 7];
              if (!(64 & ch) || !extra || i + extra > count) return null;
              ch &= 63 >> extra;
              for (;extra > 0; extra -= 1) {
                var chx = bytes[i++];
                if (128 != (192 & chx)) return null;
                ch = ch << 6 | 63 & chx;
              }
            }
            str += String.fromCharCode(ch);
          }
          return str;
        },
        str2Bytes: function str2Bytes(str) {
          var utf8 = [];
          for (var i = 0, len = str.length; i < len; i++) {
            var code = str.charCodeAt(i);
            if (code < 128) utf8.push(code); else if (code < 2048) utf8.push(192 | code >> 6, 128 | 63 & code); else if (code < 55296 || code >= 57344) utf8.push(224 | code >> 12, 128 | code >> 6 & 63, 128 | 63 & code); else {
              i++;
              code = 65536 + ((1023 & code) << 10 | 1023 & str.charCodeAt(i));
              utf8.push(240 | code >> 18, 128 | code >> 12 & 63, 128 | code >> 6 & 63, 128 | 63 & code);
            }
          }
          return utf8;
        },
        gameRestart: function gameRestart() {
          cc.audioEngine.stopAll();
          cc.ak.util.socketMgr.forceClose();
          cc.game.restart();
        },
        gameRestartOnFail: function gameRestartOnFail() {
          cc.sys.localStorage.removeItem(cc.ak.key.cache.REENTER_SUBGAME);
          cc.sys.localStorage.removeItem(cc.ak.key.cache.RENTER_ROOM);
          this.gameRestart();
        },
        gameRepair: function gameRepair() {
          cc.sys.localStorage.clear();
          this.gameRestart();
        },
        isAfterHotFixReEnter: function isAfterHotFixReEnter() {
          return cc.sys.localStorage.getItem(cc.ak.key.cache.REENTER_SUBGAME) || cc.sys.localStorage.getItem(cc.ak.key.cache.RENTER_ROOM);
        },
        strLen: function strLen(str) {
          var len = 0;
          for (var i = 0; i < str.length; i++) {
            var c = str.charCodeAt(i);
            c >= 1 && c <= 126 || 65376 <= c && c <= 65439 ? len++ : len += 2;
          }
          return len;
        },
        nameInterception: function nameInterception(str) {
          var len = this.strLen(str);
          if (len > 6) return str.substring(0, 4) + "...";
          return str;
        },
        addGameMsgTemp: function addGameMsgTemp(mcmd, scmd, dv) {
          if (false == cc.ak.data.get(cc.ak.key.data.GAME_MSG_FLAG)) return false;
          if (mcmd == proto.cmd_net.MainCmdID.CMD_GAME || mcmd == proto.cmd_net.MainCmdID.CMD_ROOM && scmd == proto.cmd_net.CMD_ROOM.SUB_ENTER_ROOM_MATCH_SUCC) {
            var list = cc.ak.data.get(cc.ak.key.data.GAME_MSG_LIST);
            null == list && (list = []);
            list.push({
              key: mcmd + "-" + scmd,
              data: dv
            });
            cc.ak.data.set(cc.ak.key.data.GAME_MSG_LIST, list);
            return true;
          }
          return false;
        },
        loadGameSceneBegin: function loadGameSceneBegin() {
          cc.ak.data.set(cc.ak.key.data.GAME_MSG_FLAG, true);
          cc.ak.data.set(cc.ak.key.data.GAME_MSG_LIST, []);
        },
        loadGameSceneFinish: function loadGameSceneFinish() {
          cc.ak.data.set(cc.ak.key.data.GAME_MSG_FLAG, false);
          var list = cc.ak.data.get(cc.ak.key.data.GAME_MSG_LIST);
          null == list && (list = []);
          for (var i = 0; i < list.length; i++) cc.ak.event.emit(list[i].key, list[i].data);
          cc.ak.data.set(cc.ak.key.data.GAME_MSG_LIST, []);
        }
      }
    });
    module.exports = Utils;
    cc._RF.pop();
  }, {} ],
  card: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3b7c1R00bNHhbuPIWEQf6fa", "card");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        cardVaule: cc.Label,
        cardBigType: cc.Label,
        cardType: cc.Label,
        cardBg_back: {
          default: null,
          type: cc.Sprite
        },
        joker: cc.Sprite,
        jokerCat: cc.Sprite,
        jokerSpf: {
          default: [],
          type: cc.SpriteFrame
        },
        jokerCatSpf: {
          default: [],
          type: cc.SpriteFrame
        },
        labCardVauleType: {
          default: [],
          type: cc.LabelAtlas
        },
        _cardValue: -1
      },
      onLoad: function onLoad() {},
      start: function start() {},
      setBg: function setBg(type) {
        this.cardBg_back.node.active = 1 == type;
      },
      setCardvaule: function setCardvaule(cardvalue) {
        var artTxtSimp = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@" ];
        var value = 15 & cardvalue;
        var type = (240 & cardvalue) >> 4;
        this._cardValue = cardvalue;
        this.joker.node.active = false;
        this.jokerCat.node.active = false;
        this.cardVaule.node.active = true;
        this.cardType.node.active = true;
        this.cardBigType.node.active = true;
        if (78 == cardvalue) {
          this.cardVaule.node.active = false;
          this.cardType.node.active = false;
          this.cardBigType.node.active = false;
          this.joker.node.active = true;
          this.jokerCat.node.active = true;
          this.joker.spriteFrame = this.jokerSpf[0];
          this.jokerCat.spriteFrame = this.jokerCatSpf[0];
          this.jokerRotation.spriteFrame = this.jokerSpf[0];
          return;
        }
        if (79 == cardvalue) {
          this.cardVaule.node.active = false;
          this.cardType.node.active = false;
          this.cardBigType.node.active = false;
          this.joker.node.active = true;
          this.jokerCat.node.active = true;
          this.joker.spriteFrame = this.jokerSpf[1];
          this.jokerCat.spriteFrame = this.jokerCatSpf[1];
          return;
        }
        this.cardVaule.font = this.labCardVauleType[type % 2];
        this.cardVaule.string = artTxtSimp[value];
        this.cardType.string = artTxtSimp[type + 1];
        this.cardBigType.string = artTxtSimp[type + 1];
      },
      getCardVaule: function getCardVaule() {
        return this._cardValue;
      }
    });
    cc._RF.pop();
  }, {} ],
  cmd_base_info: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24beecUSRhDBLLfr+Gx1GaF", "cmd_base_info");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_base_info = {};
    proto.cmd_base_info.__cfg = {};
    (function(cfg) {
      cfg.CBaseRule = {
        0: {
          na: "CostCard",
          ty: "int"
        },
        1: {
          na: "PlayCount",
          ty: "int"
        },
        2: {
          na: "PlayID",
          ty: "int"
        },
        3: {
          na: "IsAARoom",
          ty: "int"
        },
        4: {
          na: "PlayerCount",
          ty: "int"
        },
        5: {
          na: "IsAntiCheat",
          ty: "int"
        },
        6: {
          na: "BaseRate",
          ty: "int"
        },
        7: {
          na: "RememberCard",
          ty: "int"
        },
        8: {
          na: "SubPlayID",
          ty: "int"
        }
      };
      cfg.EnterRoomSucc = {
        1: {
          na: "Code",
          ty: "int"
        },
        2: {
          na: "RuleData",
          ty: "byte",
          ar: 1
        },
        3: {
          na: "IsAgentRoom",
          ty: "int"
        },
        4: {
          na: "OwnerChairID",
          ty: "int"
        },
        5: {
          na: "RoomType",
          ty: "int"
        },
        6: {
          na: "GameType",
          ty: "int"
        },
        7: {
          na: "MasterCreateType",
          ty: "int"
        },
        8: {
          na: "OwnerUID",
          ty: "int"
        },
        9: {
          na: "ChessID",
          ty: "int"
        },
        10: {
          na: "ChairID",
          ty: "int"
        },
        11: {
          na: "GameId",
          ty: "int"
        },
        12: {
          na: "SubGameId",
          ty: "int"
        },
        13: {
          na: "RoomId",
          ty: "int"
        },
        14: {
          na: "Reason",
          ty: "int"
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
      cfg.CommBaseUnpack = {
        0: {
          na: "BaseRule",
          ty: "CBaseRule"
        }
      };
    })(proto.cmd_base_info.__cfg);
    proto.cmd_base_info.CBaseRule = function() {
      this.__className = "proto.cmd_base_info.CBaseRule";
      this.CostCard = 0;
      this.PlayCount = 0;
      this.PlayID = 0;
      this.IsAARoom = 0;
      this.PlayerCount = 0;
      this.IsAntiCheat = 0;
      this.BaseRate = 0;
      this.RememberCard = 0;
      this.SubPlayID = 0;
    };
    proto.cmd_base_info.EnterRoomSucc = function() {
      this.__className = "proto.cmd_base_info.EnterRoomSucc";
      this.Code = 0;
      this.RuleData = null;
      this.IsAgentRoom = 0;
      this.OwnerChairID = 0;
      this.RoomType = 0;
      this.GameType = 0;
      this.MasterCreateType = 0;
      this.OwnerUID = 0;
      this.ChessID = 0;
      this.ChairID = 0;
      this.GameId = 0;
      this.SubGameId = 0;
      this.RoomId = 0;
      this.Reason = 0;
    };
    proto.cmd_base_info.UserInfo = function() {
      this.__className = "proto.cmd_base_info.UserInfo";
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
    proto.cmd_base_info.CommBaseUnpack = function() {
      this.__className = "proto.cmd_base_info.CommBaseUnpack";
      this.BaseRule = null;
    };
    cc._RF.pop();
  }, {} ],
  cmd_challenge: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "def8emLrmFKFpfjd5N20Dwi", "cmd_challenge");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_challenge = {};
    proto.cmd_challenge.__cfg = {};
    (function(cfg) {
      cfg.CChallengeUserSendtoRoom = {
        1: {
          na: "RoomID",
          ty: "int"
        },
        2: {
          na: "MainCmd",
          ty: "int"
        },
        3: {
          na: "SubCmd",
          ty: "int"
        },
        4: {
          na: "ChallengeBuffer",
          ty: "byte",
          ar: 1
        },
        5: {
          na: "StatuServerPid",
          ty: "int"
        }
      };
      cfg.CChallengeUserInfo = {
        1: {
          na: "UserName",
          ty: "byte",
          sty: "string",
          ar: 1
        }
      };
      cfg.CChallengeGameInfo = {
        1: {
          na: "Code",
          ty: "int"
        },
        2: {
          na: "OwnerID",
          ty: "int"
        },
        3: {
          na: "TotalRound",
          ty: "int"
        },
        4: {
          na: "CurRound",
          ty: "int"
        },
        5: {
          na: "PlayerCount",
          ty: "int"
        },
        6: {
          na: "UserList",
          ty: "CChallengeUserInfo",
          ar: 1
        },
        7: {
          na: "TableRule",
          ty: "byte",
          ar: 1
        }
      };
      cfg.CChallengeGameListResp = {
        1: {
          na: "ChallengeGameList",
          ty: "CChallengeGameInfo",
          ar: 1
        },
        2: {
          na: "TotalCount",
          ty: "int"
        },
        3: {
          na: "CurCount",
          ty: "int"
        }
      };
      cfg.CCreateSXMJChallengeReq = {
        1: {
          na: "PlayCount",
          ty: "int"
        },
        2: {
          na: "HasFeng",
          ty: "int"
        },
        3: {
          na: "CanChipai",
          ty: "int"
        },
        4: {
          na: "HasPaozi",
          ty: "int"
        },
        5: {
          na: "CanMultiHu",
          ty: "int"
        },
        6: {
          na: "NeedEWB",
          ty: "int"
        },
        7: {
          na: "OnlyZimo",
          ty: "int"
        },
        8: {
          na: "LunZhuang",
          ty: "int"
        },
        9: {
          na: "SevenduiHu",
          ty: "int"
        },
        10: {
          na: "QiangganHu",
          ty: "int"
        },
        11: {
          na: "Facailaizi",
          ty: "int"
        },
        12: {
          na: "MapaiCount",
          ty: "int"
        }
      };
      cfg.CCreateGuanDanChallengeReq = {
        1: {
          na: "PlayCount",
          ty: "int"
        },
        2: {
          na: "QuickLevel",
          ty: "int"
        },
        3: {
          na: "SlowLevel",
          ty: "int"
        },
        4: {
          na: "ToA",
          ty: "int"
        },
        5: {
          na: "ToJ",
          ty: "int"
        },
        6: {
          na: "PlayTwo",
          ty: "int"
        },
        7: {
          na: "CommonPlayer",
          ty: "int"
        },
        8: {
          na: "RandomPlayer",
          ty: "int"
        },
        9: {
          na: "DelTwoToFive",
          ty: "int"
        },
        10: {
          na: "DelTwoToSix",
          ty: "int"
        },
        11: {
          na: "DelTwoToSeven",
          ty: "int"
        }
      };
      cfg.CRoomBaseCfgReq = {
        1: {
          na: "ver",
          ty: "int"
        },
        2: {
          na: "playid",
          ty: "int"
        }
      };
      cfg.CRoomBaseCfgResp = {
        1: {
          na: "ver",
          ty: "int"
        },
        2: {
          na: "config",
          ty: "byte",
          ar: 1
        },
        3: {
          na: "PlayID",
          ty: "int"
        }
      };
      cfg.CCreateGDMJChallengeReq = {
        1: {
          na: "FanShuMax",
          ty: "int"
        },
        2: {
          na: "FanShuDianFu",
          ty: "int"
        },
        3: {
          na: "BaoPai",
          ty: "int"
        },
        4: {
          na: "MaPaiNum",
          ty: "int"
        }
      };
      cfg.CGroundsInfoReq = {
        1: {
          na: "gameid",
          ty: "int"
        }
      };
      cfg.CGroundsInfoRsp = {
        1: {
          na: "grounds",
          ty: "int",
          ar: 1
        }
      };
    })(proto.cmd_challenge.__cfg);
    proto.cmd_challenge.CChallengeUserSendtoRoom = function() {
      this.__className = "proto.cmd_challenge.CChallengeUserSendtoRoom";
      this.RoomID = 0;
      this.MainCmd = 0;
      this.SubCmd = 0;
      this.ChallengeBuffer = null;
      this.StatuServerPid = 0;
    };
    proto.cmd_challenge.CChallengeUserInfo = function() {
      this.__className = "proto.cmd_challenge.CChallengeUserInfo";
      this.UserName = "";
    };
    proto.cmd_challenge.CChallengeGameInfo = function() {
      this.__className = "proto.cmd_challenge.CChallengeGameInfo";
      this.Code = 0;
      this.OwnerID = 0;
      this.TotalRound = 0;
      this.CurRound = 0;
      this.PlayerCount = 0;
      this.UserList = null;
      this.TableRule = null;
    };
    proto.cmd_challenge.CChallengeGameListResp = function() {
      this.__className = "proto.cmd_challenge.CChallengeGameListResp";
      this.ChallengeGameList = null;
      this.TotalCount = 0;
      this.CurCount = 0;
    };
    proto.cmd_challenge.CCreateSXMJChallengeReq = function() {
      this.__className = "proto.cmd_challenge.CCreateSXMJChallengeReq";
      this.PlayCount = 0;
      this.HasFeng = 0;
      this.CanChipai = 0;
      this.HasPaozi = 0;
      this.CanMultiHu = 0;
      this.NeedEWB = 0;
      this.OnlyZimo = 0;
      this.LunZhuang = 0;
      this.SevenduiHu = 0;
      this.QiangganHu = 0;
      this.Facailaizi = 0;
      this.MapaiCount = 0;
    };
    proto.cmd_challenge.CCreateGuanDanChallengeReq = function() {
      this.__className = "proto.cmd_challenge.CCreateGuanDanChallengeReq";
      this.PlayCount = 0;
      this.QuickLevel = 0;
      this.SlowLevel = 0;
      this.ToA = 0;
      this.ToJ = 0;
      this.PlayTwo = 0;
      this.CommonPlayer = 0;
      this.RandomPlayer = 0;
      this.DelTwoToFive = 0;
      this.DelTwoToSix = 0;
      this.DelTwoToSeven = 0;
    };
    proto.cmd_challenge.CRoomBaseCfgReq = function() {
      this.__className = "proto.cmd_challenge.CRoomBaseCfgReq";
      this.ver = 0;
      this.playid = 0;
    };
    proto.cmd_challenge.CRoomBaseCfgResp = function() {
      this.__className = "proto.cmd_challenge.CRoomBaseCfgResp";
      this.ver = 0;
      this.config = null;
      this.PlayID = 0;
    };
    proto.cmd_challenge.CCreateGDMJChallengeReq = function() {
      this.__className = "proto.cmd_challenge.CCreateGDMJChallengeReq";
      this.FanShuMax = 0;
      this.FanShuDianFu = 0;
      this.BaoPai = 0;
      this.MaPaiNum = 0;
    };
    proto.cmd_challenge.CGroundsInfoReq = function() {
      this.__className = "proto.cmd_challenge.CGroundsInfoReq";
      this.gameid = 0;
    };
    proto.cmd_challenge.CGroundsInfoRsp = function() {
      this.__className = "proto.cmd_challenge.CGroundsInfoRsp";
      this.grounds = null;
    };
    cc._RF.pop();
  }, {} ],
  cmd_chess_musem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cb6a9fqze5D17MS7mqXGgV+", "cmd_chess_musem");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_chess_musem = {};
    proto.cmd_chess_musem.__cfg = {};
    (function(cfg) {
      cfg.CCreateChessMuseumReqs = {
        1: {
          na: "RoomName",
          ty: "byte",
          ar: 1
        },
        2: {
          na: "Describle",
          ty: "byte",
          ar: 1
        },
        3: {
          na: "photo",
          ty: "byte",
          ar: 1
        },
        4: {
          na: "Qrcode",
          ty: "byte",
          ar: 1
        }
      };
      cfg.CChessMuseumBaseInfo = {
        1: {
          na: "RoomName",
          ty: "byte",
          ar: 1
        },
        2: {
          na: "Describle",
          ty: "byte",
          ar: 1
        },
        3: {
          na: "FaceName",
          ty: "byte",
          ar: 1
        },
        4: {
          na: "ChessMuseumID",
          ty: "int"
        },
        5: {
          na: "UserCount",
          ty: "int"
        },
        6: {
          na: "ChessMuseumMasterName",
          ty: "byte",
          ar: 1
        },
        7: {
          na: "Lable",
          ty: "int"
        },
        8: {
          na: "IsMember",
          ty: "int"
        },
        9: {
          na: "MasterType",
          ty: "int"
        }
      };
      cfg.CCreateChessMuseumRep = {
        1: {
          na: "ChessMuseumInfo",
          ty: "CChessMuseumBaseInfo"
        },
        2: {
          na: "Statu",
          ty: "int"
        }
      };
      cfg.CSearchChessMuseumreqs = {
        1: {
          na: "Data",
          ty: "byte",
          ar: 1
        }
      };
      cfg.CSearchChessMuseumreq = {
        1: {
          na: "ChessMuseumList",
          ty: "CChessMuseumBaseInfo",
          ar: 1
        },
        2: {
          na: "Userid",
          ty: "int"
        }
      };
      cfg.CAskJoinChessMuseum = {
        1: {
          na: "ChessMuseumID",
          ty: "int"
        },
        2: {
          na: "Discrible",
          ty: "byte",
          ar: 1
        },
        3: {
          na: "UserID",
          ty: "int"
        }
      };
      cfg.CJionChessMuseumInfo = {
        1: {
          na: "ChessMuseumID",
          ty: "int"
        },
        2: {
          na: "UserID",
          ty: "int"
        }
      };
      cfg.CAdministratorInfo = {
        1: {
          na: "ChessMuseumID",
          ty: "int"
        },
        2: {
          na: "UserID",
          ty: "int"
        }
      };
      cfg.CDeleteChessMuseumUser = {
        1: {
          na: "ChessMuseumID",
          ty: "int"
        },
        2: {
          na: "UserID",
          ty: "int"
        }
      };
      cfg.CChangeUserRemarks = {
        1: {
          na: "ChessMuseumID",
          ty: "int"
        },
        2: {
          na: "UserID",
          ty: "int"
        },
        3: {
          na: "Remarks",
          ty: "byte",
          ar: 1
        }
      };
      cfg.CUpChessMuseumFace = {
        1: {
          na: "ChessMuseumID",
          ty: "int"
        },
        2: {
          na: "UserID",
          ty: "int"
        },
        3: {
          na: "FaceName",
          ty: "byte",
          ar: 1
        }
      };
      cfg.CUserinChessMuseumStatus = {
        1: {
          na: "ChessMuseumID",
          ty: "int"
        },
        2: {
          na: "UserID",
          ty: "int"
        },
        3: {
          na: "Status",
          ty: "int"
        }
      };
      cfg.CGetChessUser = {
        1: {
          na: "ChessMuseumID",
          ty: "int"
        }
      };
      cfg.CUserBaseInfo = {
        1: {
          na: "UserType",
          ty: "int"
        },
        2: {
          na: "UserNickName",
          ty: "byte",
          ar: 1
        },
        3: {
          na: "Avatar",
          ty: "byte",
          ar: 1
        },
        4: {
          na: "UserID",
          ty: "int"
        },
        5: {
          na: "UserDisCrible",
          ty: "byte",
          ar: 1
        }
      };
      cfg.CChessUserList = {
        1: {
          na: "ChessMuseumUserInfo",
          ty: "CUserBaseInfo",
          ar: 1
        },
        2: {
          na: "Userid",
          ty: "int"
        }
      };
      cfg.CSetOrCancelStatu = {
        1: {
          na: "Status",
          ty: "int"
        },
        2: {
          na: "UserID",
          ty: "int"
        },
        3: {
          na: "ChessMuseumID",
          ty: "int"
        }
      };
      cfg.CDeletChessUserStatu = {
        1: {
          na: "Status",
          ty: "int"
        },
        2: {
          na: "UserID",
          ty: "int"
        },
        3: {
          na: "ChessMuseumID",
          ty: "int"
        }
      };
      cfg.CChangeUserRemarksStatus = {
        1: {
          na: "Status",
          ty: "int"
        },
        2: {
          na: "Remarks",
          ty: "byte",
          ar: 1
        },
        3: {
          na: "UserID",
          ty: "int"
        },
        4: {
          na: "ChessMuseumID",
          ty: "int"
        }
      };
      cfg.CPassRefuseStatus = {
        1: {
          na: "Status",
          ty: "int"
        },
        2: {
          na: "UserID",
          ty: "int"
        },
        3: {
          na: "ChessMuseumID",
          ty: "int"
        }
      };
      cfg.CGetApplyListReqs = {
        1: {
          na: "ChessMuseumID",
          ty: "int"
        },
        2: {
          na: "UserID",
          ty: "int"
        }
      };
      cfg.CApplyUserInfo = {
        1: {
          na: "ChessMuseumID",
          ty: "int"
        },
        2: {
          na: "nickname",
          ty: "byte",
          ar: 1
        },
        3: {
          na: "avatar",
          ty: "byte",
          ar: 1
        },
        4: {
          na: "UserID",
          ty: "int"
        },
        5: {
          na: "apply_msg",
          ty: "byte",
          ar: 1
        },
        6: {
          na: "is_read",
          ty: "int"
        }
      };
      cfg.CGetApplyListRet = {
        1: {
          na: "ApplyList",
          ty: "CApplyUserInfo",
          ar: 1
        },
        2: {
          na: "Userid",
          ty: "int"
        }
      };
      cfg.CGetChessRuleReq = {
        1: {
          na: "Userid",
          ty: "int"
        }
      };
      cfg.CGetChessRuleRet = {
        1: {
          na: "club_num",
          ty: "int"
        },
        2: {
          na: "cond_desc",
          ty: "byte",
          ar: 1
        }
      };
      cfg.CGetChessRuleRetData = {
        1: {
          na: "RuleList",
          ty: "CGetChessRuleRet",
          ar: 1
        },
        2: {
          na: "show_text",
          ty: "byte",
          ar: 1
        },
        3: {
          na: "goods_id",
          ty: "int"
        },
        4: {
          na: "goods_num",
          ty: "int"
        },
        5: {
          na: "is_agent",
          ty: "int"
        }
      };
      cfg.CEnterPrivateRoomReq = {
        1: {
          na: "ChessMuseumID",
          ty: "int"
        },
        2: {
          na: "RoomID",
          ty: "int"
        },
        3: {
          na: "TabelID",
          ty: "int"
        },
        4: {
          na: "ChairID",
          ty: "int"
        }
      };
      cfg.CGetApplyInfo = {
        1: {
          na: "ChessMuseumID",
          ty: "int"
        }
      };
      cfg.CApplyPrivateInfo = {
        1: {
          na: "RoomID",
          ty: "int"
        },
        2: {
          na: "TabelID",
          ty: "int"
        },
        3: {
          na: "ChairID",
          ty: "int"
        }
      };
      cfg.CPrivateInfoList = {
        1: {
          na: "ChessMuseumID",
          ty: "int"
        },
        2: {
          na: "PrivateList",
          ty: "CApplyPrivateInfo",
          ar: 1
        },
        3: {
          na: "MemberManagerHaveMsg",
          ty: "int"
        }
      };
      cfg.CApplyStatu = {
        1: {
          na: "ChesssMID",
          ty: "int"
        },
        2: {
          na: "Status",
          ty: "int"
        },
        3: {
          na: "ApplyInfo",
          ty: "CApplyPrivateInfo"
        }
      };
      cfg.CGetChessRoomList = {
        1: {
          na: "ChessMuseumID",
          ty: "int"
        }
      };
      cfg.CChairInfo = {
        1: {
          na: "UserID",
          ty: "int"
        },
        2: {
          na: "ChairID",
          ty: "int"
        },
        3: {
          na: "UserNickName",
          ty: "byte",
          ar: 1
        },
        4: {
          na: "UserHead",
          ty: "byte",
          ar: 1
        },
        5: {
          na: "UserStatu",
          ty: "int"
        }
      };
      cfg.CDeskInfo = {
        1: {
          na: "TabelID",
          ty: "int"
        },
        2: {
          na: "ChairInfo",
          ty: "CChairInfo",
          ar: 1
        },
        3: {
          na: "Rule",
          ty: "byte",
          ar: 1
        },
        4: {
          na: "PlayID",
          ty: "int"
        },
        5: {
          na: "RoomStatu",
          ty: "int"
        },
        6: {
          na: "Code",
          ty: "int"
        },
        7: {
          na: "PvtRoomID",
          ty: "int"
        }
      };
      cfg.CGetChessRoomListRet = {
        1: {
          na: "ChessMuseumID",
          ty: "int"
        },
        2: {
          na: "RoomID",
          ty: "int"
        },
        3: {
          na: "DeskList",
          ty: "CDeskInfo",
          ar: 1
        }
      };
      cfg.CUpdateDeskRule = {
        1: {
          na: "Rule",
          ty: "byte",
          ar: 1
        }
      };
      cfg.CUpdateDeskRuleRefOrAgr = {
        1: {
          na: "Status",
          ty: "int"
        }
      };
      cfg.CUpdatePlayCountReq = {
        1: {
          na: "PlayCount",
          ty: "int"
        },
        2: {
          na: "RoomID",
          ty: "int"
        },
        3: {
          na: "TabelID",
          ty: "int"
        },
        4: {
          na: "CostCard",
          ty: "int"
        },
        5: {
          na: "Code",
          ty: "int"
        }
      };
      cfg.CUpdatePlayCountRet = {
        1: {
          na: "PlayCount",
          ty: "int"
        },
        2: {
          na: "RoomID",
          ty: "int"
        },
        3: {
          na: "TabelID",
          ty: "int"
        },
        4: {
          na: "Statu",
          ty: "int"
        },
        5: {
          na: "Code",
          ty: "int"
        }
      };
      cfg.CUpdateGameRuleResult = {
        1: {
          na: "Rule",
          ty: "byte",
          ar: 1
        }
      };
      cfg.CGetPvtRoomListReq = {
        1: {
          na: "RoomNum",
          ty: "int"
        },
        2: {
          na: "Count",
          ty: "int"
        },
        3: {
          na: "Page",
          ty: "int"
        }
      };
      cfg.CGetPvtRoom = {
        1: {
          na: "randid",
          ty: "int"
        },
        2: {
          na: "room_num",
          ty: "int"
        },
        3: {
          na: "post_time",
          ty: "int"
        },
        4: {
          na: "score",
          ty: "int"
        },
        5: {
          na: "uid",
          ty: "int"
        },
        6: {
          na: "total_user",
          ty: "int"
        },
        7: {
          na: "nickname",
          ty: "byte",
          ar: 1
        },
        8: {
          na: "avatar",
          ty: "byte",
          ar: 1
        },
        9: {
          na: "mem_desc",
          ty: "byte",
          ar: 1
        }
      };
      cfg.CGetPvtRoomListRet = {
        1: {
          na: "RoomNum",
          ty: "int"
        },
        2: {
          na: "CPvtRoomListInfo",
          ty: "CGetPvtRoom",
          ar: 1
        },
        3: {
          na: "Page",
          ty: "int"
        }
      };
      cfg.CGetPvtRoomDetailReq = {
        1: {
          na: "Room_num",
          ty: "int"
        },
        2: {
          na: "Rand_id",
          ty: "int"
        }
      };
      cfg.CPvtRoomDetail = {
        1: {
          na: "Index",
          ty: "int"
        },
        2: {
          na: "score",
          ty: "int"
        }
      };
      cfg.CUserScoreDetail = {
        1: {
          na: "UserDetaile",
          ty: "CPvtRoomDetail",
          ar: 1
        },
        2: {
          na: "rounds",
          ty: "int"
        }
      };
      cfg.CTotalScore = {
        1: {
          na: "uid",
          ty: "int"
        },
        2: {
          na: "TotalScore",
          ty: "int"
        },
        3: {
          na: "nickname",
          ty: "byte",
          ar: 1
        },
        4: {
          na: "avatar",
          ty: "byte",
          ar: 1
        },
        5: {
          na: "mem_desc",
          ty: "byte",
          ar: 1
        }
      };
      cfg.CGetPvtRoomDetailRet = {
        1: {
          na: "Room_num",
          ty: "int"
        },
        2: {
          na: "Rand_id",
          ty: "int"
        },
        3: {
          na: "ScoreList",
          ty: "CUserScoreDetail",
          ar: 1
        },
        4: {
          na: "UserTotalScore",
          ty: "CTotalScore",
          ar: 1
        }
      };
      cfg.CClosePvtRoomReq = {
        1: {
          na: "Room_num",
          ty: "int"
        },
        2: {
          na: "UserID",
          ty: "int"
        }
      };
      cfg.CClosePvtRoomRet = {
        1: {
          na: "Room_num",
          ty: "int"
        },
        2: {
          na: "LeftCard",
          ty: "int"
        },
        3: {
          na: "msg",
          ty: "byte",
          ar: 1
        },
        4: {
          na: "Statu",
          ty: "int"
        },
        5: {
          na: "MasterUid",
          ty: "int"
        }
      };
      cfg.CCreatePvtRoomSuccess = {
        1: {
          na: "DeskInfo",
          ty: "CDeskInfo"
        }
      };
      cfg.CGetPvtRoomListBegin = {
        1: {
          na: "RoomNum",
          ty: "int"
        },
        2: {
          na: "Count",
          ty: "int"
        },
        3: {
          na: "Page",
          ty: "int"
        },
        4: {
          na: "PvtRoomID",
          ty: "int"
        },
        5: {
          na: "LeftPlayCount",
          ty: "int"
        }
      };
      cfg.CEnterChessMuseumReq = {
        1: {
          na: "ChessMuseumID",
          ty: "int"
        }
      };
      cfg.CLeaveChessMuseumReq = {
        1: {
          na: "ChessMuseumID",
          ty: "int"
        }
      };
      cfg.CEnterChessMuseumRsp = {
        1: {
          na: "ChessMuseumID",
          ty: "int"
        },
        2: {
          na: "Statu",
          ty: "int"
        }
      };
      cfg.CLeaveChessMuseumRsp = {
        1: {
          na: "ChessMuseumID",
          ty: "int"
        },
        2: {
          na: "Statu",
          ty: "int"
        }
      };
      cfg.CLeavePrvroom = {
        1: {
          na: "UserID",
          ty: "int"
        },
        2: {
          na: "ChairID",
          ty: "int"
        },
        3: {
          na: "Code",
          ty: "int"
        }
      };
      cfg.CEnterPrvroom = {
        1: {
          na: "ChairInfo",
          ty: "CChairInfo"
        },
        2: {
          na: "Code",
          ty: "int"
        }
      };
      cfg.CPvtRoomStatu = {
        1: {
          na: "Statu",
          ty: "int"
        },
        2: {
          na: "ChessMuseumID",
          ty: "int"
        },
        3: {
          na: "Code",
          ty: "int"
        }
      };
      cfg.CClosePvtRoom = {
        1: {
          na: "ChessMuseumID",
          ty: "int"
        },
        2: {
          na: "Code",
          ty: "int"
        }
      };
    })(proto.cmd_chess_musem.__cfg);
    proto.cmd_chess_musem.CCreateChessMuseumReqs = function() {
      this.__className = "proto.cmd_chess_musem.CCreateChessMuseumReqs";
      this.RoomName = null;
      this.Describle = null;
      this.photo = null;
      this.Qrcode = null;
    };
    proto.cmd_chess_musem.CChessMuseumBaseInfo = function() {
      this.__className = "proto.cmd_chess_musem.CChessMuseumBaseInfo";
      this.RoomName = null;
      this.Describle = null;
      this.FaceName = null;
      this.ChessMuseumID = 0;
      this.UserCount = 0;
      this.ChessMuseumMasterName = null;
      this.Lable = 0;
      this.IsMember = 0;
      this.MasterType = 0;
    };
    proto.cmd_chess_musem.CCreateChessMuseumRep = function() {
      this.__className = "proto.cmd_chess_musem.CCreateChessMuseumRep";
      this.ChessMuseumInfo = null;
      this.Statu = 0;
    };
    proto.cmd_chess_musem.CSearchChessMuseumreqs = function() {
      this.__className = "proto.cmd_chess_musem.CSearchChessMuseumreqs";
      this.Data = null;
    };
    proto.cmd_chess_musem.CSearchChessMuseumreq = function() {
      this.__className = "proto.cmd_chess_musem.CSearchChessMuseumreq";
      this.ChessMuseumList = null;
      this.Userid = 0;
    };
    proto.cmd_chess_musem.CAskJoinChessMuseum = function() {
      this.__className = "proto.cmd_chess_musem.CAskJoinChessMuseum";
      this.ChessMuseumID = 0;
      this.Discrible = null;
      this.UserID = 0;
    };
    proto.cmd_chess_musem.CJionChessMuseumInfo = function() {
      this.__className = "proto.cmd_chess_musem.CJionChessMuseumInfo";
      this.ChessMuseumID = 0;
      this.UserID = 0;
    };
    proto.cmd_chess_musem.CAdministratorInfo = function() {
      this.__className = "proto.cmd_chess_musem.CAdministratorInfo";
      this.ChessMuseumID = 0;
      this.UserID = 0;
    };
    proto.cmd_chess_musem.CDeleteChessMuseumUser = function() {
      this.__className = "proto.cmd_chess_musem.CDeleteChessMuseumUser";
      this.ChessMuseumID = 0;
      this.UserID = 0;
    };
    proto.cmd_chess_musem.CChangeUserRemarks = function() {
      this.__className = "proto.cmd_chess_musem.CChangeUserRemarks";
      this.ChessMuseumID = 0;
      this.UserID = 0;
      this.Remarks = null;
    };
    proto.cmd_chess_musem.CUpChessMuseumFace = function() {
      this.__className = "proto.cmd_chess_musem.CUpChessMuseumFace";
      this.ChessMuseumID = 0;
      this.UserID = 0;
      this.FaceName = null;
    };
    proto.cmd_chess_musem.CUserinChessMuseumStatus = function() {
      this.__className = "proto.cmd_chess_musem.CUserinChessMuseumStatus";
      this.ChessMuseumID = 0;
      this.UserID = 0;
      this.Status = 0;
    };
    proto.cmd_chess_musem.CGetChessUser = function() {
      this.__className = "proto.cmd_chess_musem.CGetChessUser";
      this.ChessMuseumID = 0;
    };
    proto.cmd_chess_musem.CUserBaseInfo = function() {
      this.__className = "proto.cmd_chess_musem.CUserBaseInfo";
      this.UserType = 0;
      this.UserNickName = null;
      this.Avatar = null;
      this.UserID = 0;
      this.UserDisCrible = null;
    };
    proto.cmd_chess_musem.CChessUserList = function() {
      this.__className = "proto.cmd_chess_musem.CChessUserList";
      this.ChessMuseumUserInfo = null;
      this.Userid = 0;
    };
    proto.cmd_chess_musem.CSetOrCancelStatu = function() {
      this.__className = "proto.cmd_chess_musem.CSetOrCancelStatu";
      this.Status = 0;
      this.UserID = 0;
      this.ChessMuseumID = 0;
    };
    proto.cmd_chess_musem.CDeletChessUserStatu = function() {
      this.__className = "proto.cmd_chess_musem.CDeletChessUserStatu";
      this.Status = 0;
      this.UserID = 0;
      this.ChessMuseumID = 0;
    };
    proto.cmd_chess_musem.CChangeUserRemarksStatus = function() {
      this.__className = "proto.cmd_chess_musem.CChangeUserRemarksStatus";
      this.Status = 0;
      this.Remarks = null;
      this.UserID = 0;
      this.ChessMuseumID = 0;
    };
    proto.cmd_chess_musem.CPassRefuseStatus = function() {
      this.__className = "proto.cmd_chess_musem.CPassRefuseStatus";
      this.Status = 0;
      this.UserID = 0;
      this.ChessMuseumID = 0;
    };
    proto.cmd_chess_musem.CGetApplyListReqs = function() {
      this.__className = "proto.cmd_chess_musem.CGetApplyListReqs";
      this.ChessMuseumID = 0;
      this.UserID = 0;
    };
    proto.cmd_chess_musem.CApplyUserInfo = function() {
      this.__className = "proto.cmd_chess_musem.CApplyUserInfo";
      this.ChessMuseumID = 0;
      this.nickname = null;
      this.avatar = null;
      this.UserID = 0;
      this.apply_msg = null;
      this.is_read = 0;
    };
    proto.cmd_chess_musem.CGetApplyListRet = function() {
      this.__className = "proto.cmd_chess_musem.CGetApplyListRet";
      this.ApplyList = null;
      this.Userid = 0;
    };
    proto.cmd_chess_musem.CGetChessRuleReq = function() {
      this.__className = "proto.cmd_chess_musem.CGetChessRuleReq";
      this.Userid = 0;
    };
    proto.cmd_chess_musem.CGetChessRuleRet = function() {
      this.__className = "proto.cmd_chess_musem.CGetChessRuleRet";
      this.club_num = 0;
      this.cond_desc = null;
    };
    proto.cmd_chess_musem.CGetChessRuleRetData = function() {
      this.__className = "proto.cmd_chess_musem.CGetChessRuleRetData";
      this.RuleList = null;
      this.show_text = null;
      this.goods_id = 0;
      this.goods_num = 0;
      this.is_agent = 0;
    };
    proto.cmd_chess_musem.CEnterPrivateRoomReq = function() {
      this.__className = "proto.cmd_chess_musem.CEnterPrivateRoomReq";
      this.ChessMuseumID = 0;
      this.RoomID = 0;
      this.TabelID = 0;
      this.ChairID = 0;
    };
    proto.cmd_chess_musem.CGetApplyInfo = function() {
      this.__className = "proto.cmd_chess_musem.CGetApplyInfo";
      this.ChessMuseumID = 0;
    };
    proto.cmd_chess_musem.CApplyPrivateInfo = function() {
      this.__className = "proto.cmd_chess_musem.CApplyPrivateInfo";
      this.RoomID = 0;
      this.TabelID = 0;
      this.ChairID = 0;
    };
    proto.cmd_chess_musem.CPrivateInfoList = function() {
      this.__className = "proto.cmd_chess_musem.CPrivateInfoList";
      this.ChessMuseumID = 0;
      this.PrivateList = null;
      this.MemberManagerHaveMsg = 0;
    };
    proto.cmd_chess_musem.CApplyStatu = function() {
      this.__className = "proto.cmd_chess_musem.CApplyStatu";
      this.ChesssMID = 0;
      this.Status = 0;
      this.ApplyInfo = null;
    };
    proto.cmd_chess_musem.CGetChessRoomList = function() {
      this.__className = "proto.cmd_chess_musem.CGetChessRoomList";
      this.ChessMuseumID = 0;
    };
    proto.cmd_chess_musem.CChairInfo = function() {
      this.__className = "proto.cmd_chess_musem.CChairInfo";
      this.UserID = 0;
      this.ChairID = 0;
      this.UserNickName = null;
      this.UserHead = null;
      this.UserStatu = 0;
    };
    proto.cmd_chess_musem.CDeskInfo = function() {
      this.__className = "proto.cmd_chess_musem.CDeskInfo";
      this.TabelID = 0;
      this.ChairInfo = null;
      this.Rule = null;
      this.PlayID = 0;
      this.RoomStatu = 0;
      this.Code = 0;
      this.PvtRoomID = 0;
    };
    proto.cmd_chess_musem.CGetChessRoomListRet = function() {
      this.__className = "proto.cmd_chess_musem.CGetChessRoomListRet";
      this.ChessMuseumID = 0;
      this.RoomID = 0;
      this.DeskList = null;
    };
    proto.cmd_chess_musem.CUpdateDeskRule = function() {
      this.__className = "proto.cmd_chess_musem.CUpdateDeskRule";
      this.Rule = null;
    };
    proto.cmd_chess_musem.CUpdateDeskRuleRefOrAgr = function() {
      this.__className = "proto.cmd_chess_musem.CUpdateDeskRuleRefOrAgr";
      this.Status = 0;
    };
    proto.cmd_chess_musem.CUpdatePlayCountReq = function() {
      this.__className = "proto.cmd_chess_musem.CUpdatePlayCountReq";
      this.PlayCount = 0;
      this.RoomID = 0;
      this.TabelID = 0;
      this.CostCard = 0;
      this.Code = 0;
    };
    proto.cmd_chess_musem.CUpdatePlayCountRet = function() {
      this.__className = "proto.cmd_chess_musem.CUpdatePlayCountRet";
      this.PlayCount = 0;
      this.RoomID = 0;
      this.TabelID = 0;
      this.Statu = 0;
      this.Code = 0;
    };
    proto.cmd_chess_musem.CUpdateGameRuleResult = function() {
      this.__className = "proto.cmd_chess_musem.CUpdateGameRuleResult";
      this.Rule = null;
    };
    proto.cmd_chess_musem.CGetPvtRoomListReq = function() {
      this.__className = "proto.cmd_chess_musem.CGetPvtRoomListReq";
      this.RoomNum = 0;
      this.Count = 0;
      this.Page = 0;
    };
    proto.cmd_chess_musem.CGetPvtRoom = function() {
      this.__className = "proto.cmd_chess_musem.CGetPvtRoom";
      this.randid = 0;
      this.room_num = 0;
      this.post_time = 0;
      this.score = 0;
      this.uid = 0;
      this.total_user = 0;
      this.nickname = null;
      this.avatar = null;
      this.mem_desc = null;
    };
    proto.cmd_chess_musem.CGetPvtRoomListRet = function() {
      this.__className = "proto.cmd_chess_musem.CGetPvtRoomListRet";
      this.RoomNum = 0;
      this.CPvtRoomListInfo = null;
      this.Page = 0;
    };
    proto.cmd_chess_musem.CGetPvtRoomDetailReq = function() {
      this.__className = "proto.cmd_chess_musem.CGetPvtRoomDetailReq";
      this.Room_num = 0;
      this.Rand_id = 0;
    };
    proto.cmd_chess_musem.CPvtRoomDetail = function() {
      this.__className = "proto.cmd_chess_musem.CPvtRoomDetail";
      this.Index = 0;
      this.score = 0;
    };
    proto.cmd_chess_musem.CUserScoreDetail = function() {
      this.__className = "proto.cmd_chess_musem.CUserScoreDetail";
      this.UserDetaile = null;
      this.rounds = 0;
    };
    proto.cmd_chess_musem.CTotalScore = function() {
      this.__className = "proto.cmd_chess_musem.CTotalScore";
      this.uid = 0;
      this.TotalScore = 0;
      this.nickname = null;
      this.avatar = null;
      this.mem_desc = null;
    };
    proto.cmd_chess_musem.CGetPvtRoomDetailRet = function() {
      this.__className = "proto.cmd_chess_musem.CGetPvtRoomDetailRet";
      this.Room_num = 0;
      this.Rand_id = 0;
      this.ScoreList = null;
      this.UserTotalScore = null;
    };
    proto.cmd_chess_musem.CClosePvtRoomReq = function() {
      this.__className = "proto.cmd_chess_musem.CClosePvtRoomReq";
      this.Room_num = 0;
      this.UserID = 0;
    };
    proto.cmd_chess_musem.CClosePvtRoomRet = function() {
      this.__className = "proto.cmd_chess_musem.CClosePvtRoomRet";
      this.Room_num = 0;
      this.LeftCard = 0;
      this.msg = null;
      this.Statu = 0;
      this.MasterUid = 0;
    };
    proto.cmd_chess_musem.CCreatePvtRoomSuccess = function() {
      this.__className = "proto.cmd_chess_musem.CCreatePvtRoomSuccess";
      this.DeskInfo = null;
    };
    proto.cmd_chess_musem.CGetPvtRoomListBegin = function() {
      this.__className = "proto.cmd_chess_musem.CGetPvtRoomListBegin";
      this.RoomNum = 0;
      this.Count = 0;
      this.Page = 0;
      this.PvtRoomID = 0;
      this.LeftPlayCount = 0;
    };
    proto.cmd_chess_musem.CEnterChessMuseumReq = function() {
      this.__className = "proto.cmd_chess_musem.CEnterChessMuseumReq";
      this.ChessMuseumID = 0;
    };
    proto.cmd_chess_musem.CLeaveChessMuseumReq = function() {
      this.__className = "proto.cmd_chess_musem.CLeaveChessMuseumReq";
      this.ChessMuseumID = 0;
    };
    proto.cmd_chess_musem.CEnterChessMuseumRsp = function() {
      this.__className = "proto.cmd_chess_musem.CEnterChessMuseumRsp";
      this.ChessMuseumID = 0;
      this.Statu = 0;
    };
    proto.cmd_chess_musem.CLeaveChessMuseumRsp = function() {
      this.__className = "proto.cmd_chess_musem.CLeaveChessMuseumRsp";
      this.ChessMuseumID = 0;
      this.Statu = 0;
    };
    proto.cmd_chess_musem.CLeavePrvroom = function() {
      this.__className = "proto.cmd_chess_musem.CLeavePrvroom";
      this.UserID = 0;
      this.ChairID = 0;
      this.Code = 0;
    };
    proto.cmd_chess_musem.CEnterPrvroom = function() {
      this.__className = "proto.cmd_chess_musem.CEnterPrvroom";
      this.ChairInfo = null;
      this.Code = 0;
    };
    proto.cmd_chess_musem.CPvtRoomStatu = function() {
      this.__className = "proto.cmd_chess_musem.CPvtRoomStatu";
      this.Statu = 0;
      this.ChessMuseumID = 0;
      this.Code = 0;
    };
    proto.cmd_chess_musem.CClosePvtRoom = function() {
      this.__className = "proto.cmd_chess_musem.CClosePvtRoom";
      this.ChessMuseumID = 0;
      this.Code = 0;
    };
    proto.cmd_chess_musem.USER_IN_CHESS_MUSEUM_STATU = {
      USER_ASK_STATUS: 1,
      USER_IS_IN_CHESS_MUSEUM_STATUS: 2
    };
    proto.cmd_chess_musem.CHESS_MUSEUM_LABLE = {
      HOT: 1,
      STAR: 2,
      RECENTLY_PLAY: 3,
      RECENTLY_VISIT: 4,
      BUILD_ONESELF: 5
    };
    proto.cmd_chess_musem.SET_ENTER_STATUS = {
      AGREE_STATUS: 1,
      REFUSE_STATUS: 2
    };
    proto.cmd_chess_musem.OPERATOR_TYPE = {
      REFUSE_TYPE: 0,
      AGREE_TYPE: 1,
      DELETE_TYPE: 2,
      SET_ADMINISTRATOR_TYPE: 3,
      CANCEL_ADMINISTRTOR_TYPE: 4,
      CHANGE_REMARKS_TYPE: 5
    };
    proto.cmd_chess_musem.CHESS_MUSEUM_USER_TYPE = {
      ORDINARY_USER: 0,
      ADMINISTRATOR_USER: 1,
      MASTER_USER: 2
    };
    proto.cmd_chess_musem.UPDATE_PLAY_COUNT_STATU = {
      UPDATE_SUCCESS: 0,
      LESS_CARD: 1,
      ROOM_NOT_EXIST: 2
    };
    proto.cmd_chess_musem.CLOSE_ROOM_STATU = {
      CLOSE_ROOM_SUCCESS: 0,
      CLOSE_ROOM_NOT_EXIST: 1,
      NOT_PERMISSION: 2
    };
    proto.cmd_chess_musem.ENTER_LEAVE_STAUT = {
      SUCCESS: 0,
      FAILED: 1
    };
    proto.cmd_chess_musem.CREATE_CHESS_MUSEUM_STATU = {
      CHESS_MUSUEM_SUCCESS: 0,
      CHESS_MUSUEM_EXIST: 1,
      CHESS_MUSUEM_NOT_MATCH_COND: 2,
      CHESS_MUSUEM_NOT_ENOUGH_GOODS: 3,
      CHESS_MUSUEM_IS_MAX_NUM: 4
    };
    proto.cmd_chess_musem.OPERATOR_STATU = {
      OPERATOR_SUCCESS: 0,
      OPERATOR_FAILED: 1,
      OPERATOR_NO_POWER: 2,
      OPERATOR_NOT_CLUB_USER: 3
    };
    cc._RF.pop();
  }, {} ],
  cmd_game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2fc5bN7odNIja71JYD3mEl9", "cmd_game");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_game = {};
    proto.cmd_game.__cfg = {};
    (function(cfg) {})(proto.cmd_game.__cfg);
    proto.cmd_game.SXMJ_GAME_TYPE = {
      SXMJ_GAME_NORMAL: 0,
      SXMJ_GAME_TRUN: 1
    };
    cc._RF.pop();
  }, {} ],
  cmd_lobby: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1564eczn3VE6rFD14zt0pc7", "cmd_lobby");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_lobby = {};
    proto.cmd_lobby.__cfg = {};
    (function(cfg) {
      cfg.CTokenLogonReq = {
        1: {
          na: "Token",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        2: {
          na: "GameID",
          ty: "int"
        },
        3: {
          na: "initversion",
          ty: "byte",
          ar: 1
        },
        4: {
          na: "EreaCode",
          ty: "int"
        }
      };
      cfg.COfflineLogonResp = {
        1: {
          na: "Result",
          ty: "int"
        },
        2: {
          na: "Msg",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        3: {
          na: "LogonSuccessInfo",
          ty: "CLogonSuccessResp"
        }
      };
      cfg.CLogonFailResp = {
        1: {
          na: "ErrorCode",
          ty: "int"
        },
        2: {
          na: "Msg",
          ty: "byte",
          sty: "string",
          ar: 1
        }
      };
      cfg.CAgentInfo = {
        1: {
          na: "Agent_ereacode",
          ty: "int"
        },
        2: {
          na: "IsAgent",
          ty: "int"
        }
      };
      cfg.CLogonSuccessResp = {
        1: {
          na: "UserID",
          ty: "int"
        },
        2: {
          na: "Token",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        3: {
          na: "Account",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        4: {
          na: "NickName",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        5: {
          na: "Sex",
          ty: "int"
        },
        6: {
          na: "FaceID",
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
          na: "Guid",
          ty: "byte",
          sty: "string"
        },
        9: {
          na: "Longitude",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        10: {
          na: "Latitude",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        11: {
          na: "UserAddress",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        12: {
          na: "UserSignature",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        13: {
          na: "UserType",
          ty: "int"
        },
        14: {
          na: "UserPhone",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        15: {
          na: "LastTimeLogin",
          ty: "int"
        },
        16: {
          na: "AccountDetail",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        17: {
          na: "headID",
          ty: "int"
        },
        18: {
          na: "AreaCode",
          ty: "int"
        },
        19: {
          na: "AgentInfo",
          ty: "CAgentInfo"
        },
        20: {
          na: "Leavel",
          ty: "int"
        },
        21: {
          na: "IsReCharged",
          ty: "int"
        },
        22: {
          na: "Power",
          ty: "int"
        },
        23: {
          na: "Coins",
          ty: "CUserCoin",
          ar: 1
        },
        24: {
          na: "LogIds",
          ty: "int",
          ar: 1
        }
      };
      cfg.CUserCoin = {
        0: {
          na: "CoinID",
          ty: "int"
        },
        1: {
          na: "Amount",
          ty: "int"
        }
      };
      cfg.CFirstLogonGiftResp = {
        1: {
          na: "GiftPrompt",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        2: {
          na: "RoomCard",
          ty: "int"
        }
      };
      cfg.CChangeGameReq = {
        1: {
          na: "GameID",
          ty: "int"
        }
      };
      cfg.CChangeGameResp = {
        1: {
          na: "GameID",
          ty: "int"
        },
        2: {
          na: "RoomID",
          ty: "int"
        },
        3: {
          na: "ErrorCode",
          ty: "int"
        },
        4: {
          na: "Msg",
          ty: "byte",
          sty: "string",
          ar: 1
        }
      };
      cfg.PersonSignNatureData = {
        1: {
          na: "Msg",
          ty: "byte",
          sty: "string",
          ar: 1
        }
      };
      cfg.PersonSignatureStatu = {
        1: {
          na: "Status",
          ty: "int"
        }
      };
      cfg.CGetEreaCurrency = {
        1: {
          na: "EreaCode",
          ty: "int"
        },
        2: {
          na: "UserID",
          ty: "int"
        }
      };
      cfg.CBadge = {
        1: {
          na: "NodeID",
          ty: "int"
        },
        2: {
          na: "GlobalEnable",
          ty: "int"
        },
        3: {
          na: "SelfEnable",
          ty: "int"
        },
        4: {
          na: "unread",
          ty: "int"
        }
      };
      cfg.CBadgeList = {
        1: {
          na: "Badges",
          ty: "CBadge",
          ar: 1
        }
      };
      cfg.CBadgeEnable = {
        1: {
          na: "NodeID",
          ty: "int"
        },
        2: {
          na: "Enable",
          ty: "int"
        }
      };
      cfg.CBadgeReaded = {
        1: {
          na: "NodeID",
          ty: "int"
        }
      };
      cfg.CoinTransferReq = {
        1: {
          na: "ToUid",
          ty: "int"
        },
        2: {
          na: "Value",
          ty: "int"
        },
        3: {
          na: "CoinType",
          ty: "int"
        }
      };
      cfg.CoinTransferResult = {
        1: {
          na: "result",
          ty: "int"
        },
        2: {
          na: "message",
          ty: "byte",
          sty: "string",
          ar: 1
        }
      };
      cfg.CoinTransferInfo = {
        1: {
          na: "FromUid",
          ty: "int"
        },
        2: {
          na: "From_nickname",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        3: {
          na: "ToUid",
          ty: "int"
        },
        4: {
          na: "To_nickname",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        5: {
          na: "Value",
          ty: "int"
        },
        6: {
          na: "CoinType",
          ty: "int"
        },
        7: {
          na: "Transfertime",
          ty: "int"
        }
      };
      cfg.CBundles = {
        1: {
          na: "Data",
          ty: "byte",
          sty: "string",
          ar: 1
        }
      };
      cfg.ChangeHeadIdData = {
        1: {
          na: "Id",
          ty: "int"
        },
        2: {
          na: "Nickname",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        3: {
          na: "Gender",
          ty: "int"
        }
      };
      cfg.ChangeHeadIdResult = {
        1: {
          na: "Result",
          ty: "int"
        },
        2: {
          na: "ChangeHeadIdDataInfo",
          ty: "ChangeHeadIdData"
        }
      };
    })(proto.cmd_lobby.__cfg);
    proto.cmd_lobby.CTokenLogonReq = function() {
      this.__className = "proto.cmd_lobby.CTokenLogonReq";
      this.Token = "";
      this.GameID = 0;
      this.initversion = null;
      this.EreaCode = 0;
    };
    proto.cmd_lobby.COfflineLogonResp = function() {
      this.__className = "proto.cmd_lobby.COfflineLogonResp";
      this.Result = 0;
      this.Msg = "";
      this.LogonSuccessInfo = null;
    };
    proto.cmd_lobby.CLogonFailResp = function() {
      this.__className = "proto.cmd_lobby.CLogonFailResp";
      this.ErrorCode = 0;
      this.Msg = "";
    };
    proto.cmd_lobby.CAgentInfo = function() {
      this.__className = "proto.cmd_lobby.CAgentInfo";
      this.Agent_ereacode = 0;
      this.IsAgent = 0;
    };
    proto.cmd_lobby.CLogonSuccessResp = function() {
      this.__className = "proto.cmd_lobby.CLogonSuccessResp";
      this.UserID = 0;
      this.Token = "";
      this.Account = "";
      this.NickName = "";
      this.Sex = 0;
      this.FaceID = "";
      this.IP = "";
      this.Guid = "";
      this.Longitude = "";
      this.Latitude = "";
      this.UserAddress = "";
      this.UserSignature = "";
      this.UserType = 0;
      this.UserPhone = "";
      this.LastTimeLogin = 0;
      this.AccountDetail = "";
      this.headID = 0;
      this.AreaCode = 0;
      this.AgentInfo = null;
      this.Leavel = 0;
      this.IsReCharged = 0;
      this.Power = 0;
      this.Coins = null;
      this.LogIds = null;
    };
    proto.cmd_lobby.CUserCoin = function() {
      this.__className = "proto.cmd_lobby.CUserCoin";
      this.CoinID = 0;
      this.Amount = 0;
    };
    proto.cmd_lobby.CFirstLogonGiftResp = function() {
      this.__className = "proto.cmd_lobby.CFirstLogonGiftResp";
      this.GiftPrompt = "";
      this.RoomCard = 0;
    };
    proto.cmd_lobby.CChangeGameReq = function() {
      this.__className = "proto.cmd_lobby.CChangeGameReq";
      this.GameID = 0;
    };
    proto.cmd_lobby.CChangeGameResp = function() {
      this.__className = "proto.cmd_lobby.CChangeGameResp";
      this.GameID = 0;
      this.RoomID = 0;
      this.ErrorCode = 0;
      this.Msg = "";
    };
    proto.cmd_lobby.PersonSignNatureData = function() {
      this.__className = "proto.cmd_lobby.PersonSignNatureData";
      this.Msg = "";
    };
    proto.cmd_lobby.PersonSignatureStatu = function() {
      this.__className = "proto.cmd_lobby.PersonSignatureStatu";
      this.Status = 0;
    };
    proto.cmd_lobby.CGetEreaCurrency = function() {
      this.__className = "proto.cmd_lobby.CGetEreaCurrency";
      this.EreaCode = 0;
      this.UserID = 0;
    };
    proto.cmd_lobby.CBadge = function() {
      this.__className = "proto.cmd_lobby.CBadge";
      this.NodeID = 0;
      this.GlobalEnable = 0;
      this.SelfEnable = 0;
      this.unread = 0;
    };
    proto.cmd_lobby.CBadgeList = function() {
      this.__className = "proto.cmd_lobby.CBadgeList";
      this.Badges = null;
    };
    proto.cmd_lobby.CBadgeEnable = function() {
      this.__className = "proto.cmd_lobby.CBadgeEnable";
      this.NodeID = 0;
      this.Enable = 0;
    };
    proto.cmd_lobby.CBadgeReaded = function() {
      this.__className = "proto.cmd_lobby.CBadgeReaded";
      this.NodeID = 0;
    };
    proto.cmd_lobby.CoinTransferReq = function() {
      this.__className = "proto.cmd_lobby.CoinTransferReq";
      this.ToUid = 0;
      this.Value = 0;
      this.CoinType = 0;
    };
    proto.cmd_lobby.CoinTransferResult = function() {
      this.__className = "proto.cmd_lobby.CoinTransferResult";
      this.result = 0;
      this.message = "";
    };
    proto.cmd_lobby.CoinTransferInfo = function() {
      this.__className = "proto.cmd_lobby.CoinTransferInfo";
      this.FromUid = 0;
      this.From_nickname = "";
      this.ToUid = 0;
      this.To_nickname = "";
      this.Value = 0;
      this.CoinType = 0;
      this.Transfertime = 0;
    };
    proto.cmd_lobby.CBundles = function() {
      this.__className = "proto.cmd_lobby.CBundles";
      this.Data = "";
    };
    proto.cmd_lobby.ChangeHeadIdData = function() {
      this.__className = "proto.cmd_lobby.ChangeHeadIdData";
      this.Id = 0;
      this.Nickname = "";
      this.Gender = 0;
    };
    proto.cmd_lobby.ChangeHeadIdResult = function() {
      this.__className = "proto.cmd_lobby.ChangeHeadIdResult";
      this.Result = 0;
      this.ChangeHeadIdDataInfo = null;
    };
    proto.cmd_lobby.COIN_ID = {
      RECHARGECOIN: 1,
      WITHDRAWCOIN: 2,
      ROOMCARD: 3,
      HTFLROOMCARD: 4,
      HTFLWITHDRAWRMB: 8,
      HTFLTOTALRMB: 10,
      FREEZERMB: 14,
      DEMOND: 15
    };
    proto.cmd_lobby.ELogonErrCode = {
      AUTH_FAILED: 1,
      SERVER_DOWN: 2,
      SERVER_BUSY: 3
    };
    proto.cmd_lobby.USER_TYPE = {
      TYPE_TOURIST: 1,
      TYPE_NOMALE: 2,
      USER_TYPE_ROBOT: 100
    };
    proto.cmd_lobby.EChangeErrCode = {
      CHANGE_FAILED: 1
    };
    proto.cmd_lobby.AGENT_TYPE = {
      PROMOTER: 0,
      NOMAL_AGENT: 1,
      TOTAL_AGENT: 2,
      GENERRAL_AGENT: 3
    };
    proto.cmd_lobby.PERSON_SIGNATURE_STATU = {
      PERSON_SUCCESS: 0,
      PERSON_FAILED: 1
    };
    cc._RF.pop();
  }, {} ],
  cmd_message: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eeac5LLEaNMWoDm4SATMLRW", "cmd_message");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_message = {};
    proto.cmd_message.__cfg = {};
    (function(cfg) {
      cfg.CMarqueeMsg = {
        1: {
          na: "MsgId",
          ty: "int"
        },
        2: {
          na: "Msg",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        3: {
          na: "ClientLayer",
          ty: "int"
        },
        4: {
          na: "Interval",
          ty: "int"
        },
        5: {
          na: "TimeAt",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        6: {
          na: "RollCount",
          ty: "int"
        }
      };
      cfg.CMarqueeMsgList = {
        1: {
          na: "MarqueeMsgList",
          ty: "CMarqueeMsg",
          ar: 1
        }
      };
      cfg.CActMsgClient = {
        1: {
          na: "Msg",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        2: {
          na: "ClientLayer",
          ty: "int"
        },
        3: {
          na: "ActId",
          ty: "int"
        },
        4: {
          na: "PrizeId",
          ty: "int"
        },
        5: {
          na: "AnimId",
          ty: "int"
        },
        6: {
          na: "NickName",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        7: {
          na: "ActName",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        8: {
          na: "PrizeName",
          ty: "byte",
          sty: "string",
          ar: 1
        }
      };
      cfg.CActMsgServer = {
        1: {
          na: "ActId",
          ty: "int"
        },
        2: {
          na: "PrizeId",
          ty: "int"
        },
        3: {
          na: "NickName",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        4: {
          na: "ActName",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        5: {
          na: "PrizeName",
          ty: "byte",
          sty: "string",
          ar: 1
        }
      };
      cfg.CMailMsg = {
        1: {
          na: "MailTitle",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        2: {
          na: "MailMsg",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        4: {
          na: "CoinId",
          ty: "int"
        },
        5: {
          na: "CoinType",
          ty: "int"
        },
        6: {
          na: "attachment_id",
          ty: "int"
        },
        7: {
          na: "amount",
          ty: "int"
        },
        8: {
          na: "Posttime",
          ty: "int"
        },
        9: {
          na: "Readed",
          ty: "int"
        },
        10: {
          na: "CoinGot",
          ty: "int"
        },
        11: {
          na: "MailId",
          ty: "int"
        }
      };
      cfg.CMailMsgList = {
        1: {
          na: "MailMsgList",
          ty: "CMailMsg",
          ar: 1
        }
      };
      cfg.CMailMsgHandInfo = {
        1: {
          na: "MailId",
          ty: "int"
        },
        2: {
          na: "Type",
          ty: "int"
        }
      };
      cfg.CMailMsgInsertInfo = {
        1: {
          na: "Uid",
          ty: "int"
        },
        2: {
          na: "Mail",
          ty: "CMailMsg"
        }
      };
    })(proto.cmd_message.__cfg);
    proto.cmd_message.CMarqueeMsg = function() {
      this.__className = "proto.cmd_message.CMarqueeMsg";
      this.MsgId = 0;
      this.Msg = "";
      this.ClientLayer = 0;
      this.Interval = 0;
      this.TimeAt = "";
      this.RollCount = 0;
    };
    proto.cmd_message.CMarqueeMsgList = function() {
      this.__className = "proto.cmd_message.CMarqueeMsgList";
      this.MarqueeMsgList = null;
    };
    proto.cmd_message.CActMsgClient = function() {
      this.__className = "proto.cmd_message.CActMsgClient";
      this.Msg = "";
      this.ClientLayer = 0;
      this.ActId = 0;
      this.PrizeId = 0;
      this.AnimId = 0;
      this.NickName = "";
      this.ActName = "";
      this.PrizeName = "";
    };
    proto.cmd_message.CActMsgServer = function() {
      this.__className = "proto.cmd_message.CActMsgServer";
      this.ActId = 0;
      this.PrizeId = 0;
      this.NickName = "";
      this.ActName = "";
      this.PrizeName = "";
    };
    proto.cmd_message.CMailMsg = function() {
      this.__className = "proto.cmd_message.CMailMsg";
      this.MailTitle = "";
      this.MailMsg = "";
      this.CoinId = 0;
      this.CoinType = 0;
      this.attachment_id = 0;
      this.amount = 0;
      this.Posttime = 0;
      this.Readed = 0;
      this.CoinGot = 0;
      this.MailId = 0;
    };
    proto.cmd_message.CMailMsgList = function() {
      this.__className = "proto.cmd_message.CMailMsgList";
      this.MailMsgList = null;
    };
    proto.cmd_message.CMailMsgHandInfo = function() {
      this.__className = "proto.cmd_message.CMailMsgHandInfo";
      this.MailId = 0;
      this.Type = 0;
    };
    proto.cmd_message.CMailMsgInsertInfo = function() {
      this.__className = "proto.cmd_message.CMailMsgInsertInfo";
      this.Uid = 0;
      this.Mail = null;
    };
    proto.cmd_message.MSG_CLIENT_LAYER_TYPE = {
      MSG_CLIENT_LAYER_TYPE_LOBBY: 1,
      MSG_CLIENT_LAYER_TYPE_ROOM: 2
    };
    cc._RF.pop();
  }, {} ],
  cmd_mission: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eab657jO/ZH3JIZpzatjxZp", "cmd_mission");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_mission = {};
    proto.cmd_mission.__cfg = {};
    (function(cfg) {
      cfg.CMissionIds = {
        1: {
          na: "MissionIds",
          ty: "int",
          ar: 1
        }
      };
      cfg.CMissionList = {
        1: {
          na: "Missions",
          ty: "CMission",
          ar: 1
        }
      };
      cfg.CMissionStatusList = {
        1: {
          na: "Status",
          ty: "CMissionStatus",
          ar: 1
        }
      };
      cfg.CMission = {
        1: {
          na: "MissionId",
          ty: "int"
        },
        2: {
          na: "SortId",
          ty: "int"
        },
        3: {
          na: "Name",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        4: {
          na: "Content",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        5: {
          na: "DlgMsg",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        6: {
          na: "Show",
          ty: "int"
        },
        7: {
          na: "LoopType",
          ty: "int"
        },
        8: {
          na: "TargetType",
          ty: "int"
        },
        9: {
          na: "TargetNum",
          ty: "int"
        },
        10: {
          na: "ActionLabel",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        11: {
          na: "ShowBtnFinish",
          ty: "int"
        },
        12: {
          na: "ShowBtnUnfinish",
          ty: "int"
        },
        13: {
          na: "PreMissionId",
          ty: "int"
        },
        14: {
          na: "Coin",
          ty: "int"
        },
        15: {
          na: "PopupEventId",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        16: {
          na: "Status",
          ty: "CMissionStatus"
        }
      };
      cfg.CMissionStatus = {
        1: {
          na: "MissionId",
          ty: "int"
        },
        2: {
          na: "Status",
          ty: "int"
        },
        3: {
          na: "Progress",
          ty: "int"
        },
        4: {
          na: "DoneTime",
          ty: "int"
        },
        5: {
          na: "PrizeTime",
          ty: "int"
        }
      };
      cfg.CMissionId = {
        1: {
          na: "MissionId",
          ty: "int"
        }
      };
      cfg.CMissionReqCfg = {
        1: {
          na: "Ver",
          ty: "int"
        }
      };
    })(proto.cmd_mission.__cfg);
    proto.cmd_mission.CMissionIds = function() {
      this.__className = "proto.cmd_mission.CMissionIds";
      this.MissionIds = null;
    };
    proto.cmd_mission.CMissionList = function() {
      this.__className = "proto.cmd_mission.CMissionList";
      this.Missions = null;
    };
    proto.cmd_mission.CMissionStatusList = function() {
      this.__className = "proto.cmd_mission.CMissionStatusList";
      this.Status = null;
    };
    proto.cmd_mission.CMission = function() {
      this.__className = "proto.cmd_mission.CMission";
      this.MissionId = 0;
      this.SortId = 0;
      this.Name = "";
      this.Content = "";
      this.DlgMsg = "";
      this.Show = 0;
      this.LoopType = 0;
      this.TargetType = 0;
      this.TargetNum = 0;
      this.ActionLabel = "";
      this.ShowBtnFinish = 0;
      this.ShowBtnUnfinish = 0;
      this.PreMissionId = 0;
      this.Coin = 0;
      this.PopupEventId = "";
      this.Status = null;
    };
    proto.cmd_mission.CMissionStatus = function() {
      this.__className = "proto.cmd_mission.CMissionStatus";
      this.MissionId = 0;
      this.Status = 0;
      this.Progress = 0;
      this.DoneTime = 0;
      this.PrizeTime = 0;
    };
    proto.cmd_mission.CMissionId = function() {
      this.__className = "proto.cmd_mission.CMissionId";
      this.MissionId = 0;
    };
    proto.cmd_mission.CMissionReqCfg = function() {
      this.__className = "proto.cmd_mission.CMissionReqCfg";
      this.Ver = 0;
    };
    proto.cmd_mission.MISSION_TARGET_TYPE = {
      MISSION_TARGET_TYPE_NULL: 0,
      MISSION_TARGET_TYPE_MOBILE: 1,
      MISSION_TARGET_TYPE_FIRST_BUY: 2,
      MISSION_TARGET_TYPE_BUY: 3,
      MISSION_TARGET_TYPE_CHECKIN: 4,
      MISSION_TARGET_TYPE_GAMES: 5,
      MISSION_TARGET_TYPE_ROUNDS: 6,
      MISSION_TARGET_TYPE_FIRST_BUY_BACK: 7
    };
    proto.cmd_mission.MISSION_LOOP_TYPE = {
      MISSION_LOOP_TYPE_ONCE: 1,
      MISSION_LOOP_TYPE_DAY: 2,
      MISSION_LOOP_TYPE_WEEK: 3
    };
    proto.cmd_mission.MISSION_STATUS_TYPE = {
      MISSION_STATUS_TYPE_UNREACH: 0,
      MISSION_STATUS_TYPE_UNOBTAIN: 1,
      MISSION_STATUS_TYPE_FINISH: 2,
      MISSION_STATUS_TYPE_INVALID: 3
    };
    cc._RF.pop();
  }, {} ],
  cmd_mjq_video: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0cbbdfdVPBBLLP5pcjDGmT2", "cmd_mjq_video");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_mjq_video = {};
    proto.cmd_mjq_video.__cfg = {};
    (function(cfg) {
      cfg.FXHandleCard = {
        0: {
          na: "Type",
          ty: "int"
        },
        1: {
          na: "Card",
          ty: "int"
        },
        2: {
          na: "Cards",
          ty: "byte",
          ar: 1
        },
        3: {
          na: "SourceChairID",
          ty: "int"
        },
        4: {
          na: "IsZiMo",
          ty: "int"
        },
        6: {
          na: "JiPaiType",
          ty: "int"
        },
        7: {
          na: "RealTimeCredit",
          ty: "int"
        },
        8: {
          na: "JianChairId",
          ty: "int"
        }
      };
      cfg.FXChooseHandle = {
        0: {
          na: "ChairID",
          ty: "int"
        },
        1: {
          na: "Handles",
          ty: "FXHandleCard",
          ar: 1
        },
        3: {
          na: "GetTingout",
          ty: "byte",
          ar: 1
        }
      };
      cfg.FXValidHandle = {
        0: {
          na: "ChairID",
          ty: "int"
        },
        1: {
          na: "Handle",
          ty: "FXHandleCard"
        },
        2: {
          na: "IsJiaTing",
          ty: "int"
        },
        3: {
          na: "FeedCount",
          ty: "int"
        }
      };
      cfg.FXMissHandle = {
        0: {
          na: "ChairID",
          ty: "int"
        },
        1: {
          na: "Handle",
          ty: "FXHandleCard"
        }
      };
      cfg.JinYuanZiInf = {
        1: {
          na: "IsJinYuanZi",
          ty: "int"
        },
        2: {
          na: "ChairIds",
          ty: "byte",
          ar: 1
        },
        3: {
          na: "num",
          ty: "int"
        },
        4: {
          na: "OutNum",
          ty: "int"
        },
        5: {
          na: "OutChairId",
          ty: "int"
        }
      };
      cfg.FXTHuCardBeiLv = {
        1: {
          na: "CardType",
          ty: "int"
        },
        2: {
          na: "BeiLv",
          ty: "int"
        }
      };
      cfg.FXTCatchCard = {
        0: {
          na: "Card",
          ty: "int"
        },
        1: {
          na: "Count",
          ty: "int"
        },
        2: {
          na: "GetTingout",
          ty: "byte",
          ar: 1
        }
      };
      cfg.FXGameStep = {
        0: {
          na: "Hander",
          ty: "int"
        },
        1: {
          na: "ChooseHandles",
          ty: "FXChooseHandle",
          ar: 1
        },
        2: {
          na: "ValidHandles",
          ty: "FXValidHandle",
          ar: 1
        },
        3: {
          na: "CatchCard",
          ty: "FXTCatchCard"
        },
        4: {
          na: "OutCard",
          ty: "int"
        },
        5: {
          na: "HandleTime",
          ty: "int"
        },
        6: {
          na: "GetFlower",
          ty: "int"
        },
        7: {
          na: "FlowerCount",
          ty: "int"
        },
        8: {
          na: "MissHandles",
          ty: "FXMissHandle",
          ar: 1
        },
        9: {
          na: "ReserveCards",
          ty: "FXReserveCards"
        },
        10: {
          na: "CardsNums",
          ty: "int"
        },
        11: {
          na: "DingQue",
          ty: "int"
        },
        12: {
          na: "JiPaiType",
          ty: "int"
        }
      };
      cfg.FXTGameRule = {
        0: {
          na: "CostCard",
          ty: "int"
        },
        1: {
          na: "PlayCount",
          ty: "int"
        },
        2: {
          na: "HasFeng",
          ty: "int"
        },
        3: {
          na: "CanChipai",
          ty: "int"
        },
        4: {
          na: "HasPaozi",
          ty: "int"
        },
        5: {
          na: "CanMultiHu",
          ty: "int"
        },
        7: {
          na: "OnlyZimo",
          ty: "int"
        },
        8: {
          na: "LunZhuang",
          ty: "int"
        },
        9: {
          na: "SevenduiHu",
          ty: "int"
        },
        10: {
          na: "QiangganHu",
          ty: "int"
        },
        11: {
          na: "Facailaizi",
          ty: "int"
        },
        12: {
          na: "MapaiCount",
          ty: "int"
        },
        13: {
          na: "PlayerCount",
          ty: "int"
        },
        15: {
          na: "TianHu",
          ty: "int"
        },
        16: {
          na: "DiHu",
          ty: "int"
        },
        17: {
          na: "GangShangKaiHu",
          ty: "int"
        },
        18: {
          na: "HaiDiLao",
          ty: "int"
        },
        19: {
          na: "QiangGangHuBei",
          ty: "int"
        },
        20: {
          na: "MaiMa",
          ty: "int"
        },
        21: {
          na: "MaiMaBuBuGao",
          ty: "int"
        },
        22: {
          na: "MaGenGang",
          ty: "int"
        },
        23: {
          na: "baozimo",
          ty: "int"
        },
        24: {
          na: "gangkaibaohu",
          ty: "int"
        },
        25: {
          na: "PlayID",
          ty: "int"
        },
        26: {
          na: "LessHuFan",
          ty: "int"
        },
        27: {
          na: "QiDuiJiaFan",
          ty: "int"
        },
        28: {
          na: "MaGenDiFen",
          ty: "int"
        },
        29: {
          na: "HaoHuaQiDuiJiaFan",
          ty: "int"
        },
        30: {
          na: "PengPengHuJiaFan",
          ty: "int"
        },
        31: {
          na: "QingYiSeJiaFan",
          ty: "int"
        },
        32: {
          na: "QuanQiuRen",
          ty: "int"
        },
        33: {
          na: "ShiSanYao",
          ty: "int"
        },
        34: {
          na: "Me19",
          ty: "int"
        },
        35: {
          na: "HunYiSe",
          ty: "int"
        },
        36: {
          na: "QuanFeng",
          ty: "int"
        },
        37: {
          na: "NoLaiziDouble",
          ty: "int"
        },
        38: {
          na: "FourLaiziHu",
          ty: "int"
        },
        39: {
          na: "IsOneEqualTen",
          ty: "int"
        },
        40: {
          na: "MaBZEqualQZ",
          ty: "int"
        },
        41: {
          na: "QiangGangHuFanBei",
          ty: "int"
        },
        42: {
          na: "QiangGangHuQuanBao",
          ty: "int"
        },
        43: {
          na: "LianGangFanBei",
          ty: "int"
        },
        44: {
          na: "HuaPaiType",
          ty: "int"
        },
        45: {
          na: "GangFenXianJie",
          ty: "int"
        },
        46: {
          na: "GangHaveFen",
          ty: "int"
        },
        47: {
          na: "NoFanType",
          ty: "int"
        },
        48: {
          na: "Keep8Card",
          ty: "int"
        },
        49: {
          na: "MaDeDifen",
          ty: "int"
        },
        50: {
          na: "DianPaoChengBao",
          ty: "int"
        },
        51: {
          na: "AnGangIsShow",
          ty: "int"
        },
        52: {
          na: "ForceAutoHu",
          ty: "int"
        },
        53: {
          na: "FengSiBiDa",
          ty: "int"
        },
        54: {
          na: "HePaiYiQuanDa",
          ty: "int"
        },
        55: {
          na: "CalcFenType",
          ty: "int"
        },
        56: {
          na: "IsZiMoDouble",
          ty: "int"
        },
        57: {
          na: "JiaoTingJiaHuaNum",
          ty: "int"
        },
        58: {
          na: "IsAARoom",
          ty: "int"
        },
        59: {
          na: "IsAntiCheat",
          ty: "int"
        },
        60: {
          na: "IsYaZhu",
          ty: "int"
        },
        61: {
          na: "IsJieMeiJiaFen",
          ty: "int"
        },
        62: {
          na: "IsQueMenJiaFen",
          ty: "int"
        },
        63: {
          na: "ZhiGangCanQiang",
          ty: "int"
        },
        64: {
          na: "GengZhuang",
          ty: "int"
        },
        65: {
          na: "JieJieGao",
          ty: "int"
        },
        66: {
          na: "IsFalseJiaTing",
          ty: "int"
        },
        67: {
          na: "YiTiaoLong",
          ty: "int"
        },
        68: {
          na: "IsHuaPaiJiaBei",
          ty: "int"
        },
        69: {
          na: "PlayType",
          ty: "int"
        },
        70: {
          na: "LianLiuSuanZuiNum",
          ty: "int"
        },
        71: {
          na: "IsManTianCou",
          ty: "int"
        },
        72: {
          na: "IsYaZiCou",
          ty: "int"
        },
        73: {
          na: "YaZhuTopNum",
          ty: "int"
        },
        74: {
          na: "FenEquelZuiNum",
          ty: "int"
        },
        83: {
          na: "IsHaveYaoBaiJi",
          ty: "int"
        },
        86: {
          na: "IsHaveChuiFengJi",
          ty: "int"
        }
      };
      cfg.FXuserinfo = {
        0: {
          na: "Uid",
          ty: "int"
        },
        1: {
          na: "Headimg",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        2: {
          na: "Sex",
          ty: "int"
        },
        3: {
          na: "NickName",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        4: {
          na: "IP",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        5: {
          na: "ChairID",
          ty: "int"
        }
      };
      cfg.FXTUserInfo = {
        0: {
          na: "UserInfo",
          ty: "FXuserinfo",
          ar: 1
        }
      };
      cfg.FXTRoomStart = {
        0: {
          na: "Owner",
          ty: "int"
        },
        1: {
          na: "RoomNum",
          ty: "int"
        },
        2: {
          na: "CreateTime",
          ty: "int"
        },
        3: {
          na: "GameID",
          ty: "int"
        },
        4: {
          na: "GameRule",
          ty: "FXTGameRule"
        },
        5: {
          na: "UserInfo",
          ty: "FXTUserInfo"
        }
      };
      cfg.FXUserCard = {
        0: {
          na: "ChairID",
          ty: "int"
        },
        1: {
          na: "Card",
          ty: "byte",
          ar: 1
        },
        2: {
          na: "GetFlower",
          ty: "byte",
          ar: 1
        },
        3: {
          na: "FlowerCount",
          ty: "int"
        }
      };
      cfg.FXTSendCard = {
        0: {
          na: "CardCount",
          ty: "int"
        },
        1: {
          na: "UserCards",
          ty: "FXUserCard",
          ar: 1
        },
        2: {
          na: "LaiziCard",
          ty: "int"
        },
        3: {
          na: "SecondLaiziCard",
          ty: "int"
        }
      };
      cfg.FXTGameStart = {
        0: {
          na: "Banker",
          ty: "int"
        },
        1: {
          na: "PlayCount",
          ty: "int"
        },
        2: {
          na: "LaveCount",
          ty: "int"
        },
        4: {
          na: "SendCard",
          ty: "FXTSendCard"
        },
        5: {
          na: "StartTime",
          ty: "int"
        },
        6: {
          na: "ReserveCards",
          ty: "FXReserveCards"
        },
        7: {
          na: "DiceInfo",
          ty: "FXDiceInfo"
        },
        8: {
          na: "IsHePaiYiQuanDa",
          ty: "int"
        }
      };
      cfg.FXTPerGameVideo = {
        0: {
          na: "GameStart",
          ty: "FXTGameStart"
        },
        1: {
          na: "Step",
          ty: "FXGameStep",
          ar: 1
        }
      };
      cfg.FXHandleCardData = {
        1: {
          na: "Type",
          ty: "int"
        },
        2: {
          na: "Card",
          ty: "int"
        },
        3: {
          na: "Cards",
          ty: "byte",
          ar: 1
        },
        4: {
          na: "IsZiMo",
          ty: "int"
        },
        5: {
          na: "SourceChairID",
          ty: "int"
        },
        6: {
          na: "JiPaiType",
          ty: "int"
        },
        7: {
          na: "RealTimeCredit",
          ty: "int"
        },
        8: {
          na: "JianChairId",
          ty: "int"
        }
      };
      cfg.FXJiPaiInfo = {
        1: {
          na: "Type",
          ty: "int"
        },
        2: {
          na: "Card",
          ty: "int"
        },
        3: {
          na: "number",
          ty: "int"
        },
        4: {
          na: "JiFen",
          ty: "int"
        }
      };
      cfg.FXTingPaiInfo = {
        1: {
          na: "ChairID",
          ty: "int"
        },
        2: {
          na: "FanNum",
          ty: "int"
        }
      };
      cfg.FXNotHuData = {
        1: {
          na: "ChairID",
          ty: "int"
        },
        2: {
          na: "Handle",
          ty: "FXHandleCardData",
          ar: 1
        },
        3: {
          na: "Cards",
          ty: "byte",
          ar: 1
        },
        4: {
          na: "Hufeng",
          ty: "int"
        },
        5: {
          na: "Gangfeng",
          ty: "int"
        },
        6: {
          na: "Zongfeng",
          ty: "int"
        },
        7: {
          na: "Paozfeng",
          ty: "int"
        },
        8: {
          na: "FengTimes",
          ty: "int"
        },
        9: {
          na: "BeiShangJiagang",
          ty: "int"
        },
        10: {
          na: "BeixiaJiaJiagang",
          ty: "int"
        },
        11: {
          na: "BeiDuiJiagang",
          ty: "int"
        },
        12: {
          na: "MyGangFen",
          ty: "int"
        },
        13: {
          na: "JiaTing",
          ty: "int"
        },
        14: {
          na: "IsTianTing",
          ty: "int"
        },
        15: {
          na: "YaZhuNum",
          ty: "int"
        },
        16: {
          na: "IsMingPai",
          ty: "int"
        },
        17: {
          na: "XiQianian",
          ty: "int"
        },
        18: {
          na: "JiPaiInFo",
          ty: "FXJiPaiInfo",
          ar: 1
        },
        19: {
          na: "TiangPaiFanShu",
          ty: "int"
        },
        20: {
          na: "UserTingPaiInfo",
          ty: "FXTingPaiInfo",
          ar: 1
        },
        21: {
          na: "jifen",
          ty: "int"
        },
        22: {
          na: "YiBaoSanReason",
          ty: "int"
        },
        23: {
          na: "IsTingPai",
          ty: "int"
        },
        24: {
          na: "Jiangjifen",
          ty: "int"
        },
        25: {
          na: "repao",
          ty: "int"
        },
        26: {
          na: "FangGangJiangjifen",
          ty: "int"
        }
      };
      cfg.FXFanTypeInfo = {
        1: {
          na: "FanID",
          ty: "int"
        },
        2: {
          na: "FanShu",
          ty: "int"
        }
      };
      cfg.FXTianHuInfo = {
        1: {
          na: "IsTianHu",
          ty: "int"
        },
        2: {
          na: "Info",
          ty: "byte",
          ar: 1
        },
        3: {
          na: "Type",
          ty: "int"
        }
      };
      cfg.FXDiHuInfo = {
        1: {
          na: "IsDiHu",
          ty: "int"
        },
        2: {
          na: "Info",
          ty: "byte",
          ar: 1
        },
        3: {
          na: "Type",
          ty: "int"
        }
      };
      cfg.FXGangShangKaiHuInfo = {
        1: {
          na: "IsGangKai",
          ty: "int"
        },
        2: {
          na: "Info",
          ty: "byte",
          ar: 1
        },
        3: {
          na: "Type",
          ty: "int"
        }
      };
      cfg.FXHaiDiLaoYueInfo = {
        1: {
          na: "IsHaiDiLaoYue",
          ty: "int"
        },
        2: {
          na: "Info",
          ty: "byte",
          ar: 1
        },
        3: {
          na: "Type",
          ty: "int"
        }
      };
      cfg.FXQiangGangHuInfo = {
        1: {
          na: "IsQiangGangHu",
          ty: "int"
        },
        2: {
          na: "Info",
          ty: "byte",
          ar: 1
        },
        3: {
          na: "Type",
          ty: "int"
        }
      };
      cfg.FXHuPaiData = {
        1: {
          na: "ChairID",
          ty: "int"
        },
        2: {
          na: "Handle",
          ty: "FXHandleCardData",
          ar: 1
        },
        3: {
          na: "UserCards",
          ty: "byte",
          ar: 1
        },
        4: {
          na: "Card",
          ty: "int"
        },
        5: {
          na: "Hufeng",
          ty: "int"
        },
        6: {
          na: "Gangfeng",
          ty: "int"
        },
        7: {
          na: "Zongfeng",
          ty: "int"
        },
        8: {
          na: "Paozfeng",
          ty: "int"
        },
        9: {
          na: "FengTimes",
          ty: "int"
        },
        10: {
          na: "FengType",
          ty: "FXFanTypeInfo",
          ar: 1
        },
        11: {
          na: "HuhouMa",
          ty: "byte",
          ar: 1
        },
        12: {
          na: "ZhongMa",
          ty: "byte",
          ar: 1
        },
        13: {
          na: "TianHu",
          ty: "FXTianHuInfo"
        },
        14: {
          na: "DiHu",
          ty: "FXDiHuInfo"
        },
        15: {
          na: "GangShangKaiHu",
          ty: "FXGangShangKaiHuInfo"
        },
        16: {
          na: "HaiDiLaoYue",
          ty: "FXHaiDiLaoYueInfo"
        },
        17: {
          na: "BeiShangJiagang",
          ty: "int"
        },
        18: {
          na: "BeixiaJiaJiagang",
          ty: "int"
        },
        19: {
          na: "BeiDuiJiagang",
          ty: "int"
        },
        20: {
          na: "MyGangFen",
          ty: "int"
        },
        21: {
          na: "HuPaiSuanFa",
          ty: "byte",
          ar: 1
        },
        22: {
          na: "QiangGangHu",
          ty: "FXQiangGangHuInfo"
        },
        23: {
          na: "NoLaiziDouble",
          ty: "int"
        },
        24: {
          na: "NoLaiziJiaMaCount",
          ty: "int"
        },
        25: {
          na: "BuZhongDangZhong",
          ty: "int"
        },
        26: {
          na: "HuaPaiCount",
          ty: "int"
        },
        27: {
          na: "AnJueZhang",
          ty: "int"
        },
        28: {
          na: "JueZhang",
          ty: "int"
        },
        29: {
          na: "JiaTing",
          ty: "int"
        },
        30: {
          na: "HuaPaiCards",
          ty: "byte",
          ar: 1
        },
        31: {
          na: "IsQuanQiuRen",
          ty: "int"
        },
        32: {
          na: "IsSiGuiHu",
          ty: "int"
        },
        33: {
          na: "IsBaoTou",
          ty: "int"
        },
        34: {
          na: "IsGangBao",
          ty: "int"
        },
        35: {
          na: "IsTianTing",
          ty: "int"
        },
        36: {
          na: "YaZhuNum",
          ty: "int"
        },
        37: {
          na: "IsMingPai",
          ty: "int"
        },
        38: {
          na: "JieMeiNum",
          ty: "int"
        },
        39: {
          na: "QueMenNum",
          ty: "int"
        },
        40: {
          na: "AnKeNum",
          ty: "int"
        },
        41: {
          na: "IsMenQing",
          ty: "int"
        },
        42: {
          na: "IsYaoQiuJiang",
          ty: "int"
        },
        43: {
          na: "IsYiBaoSan",
          ty: "int"
        },
        44: {
          na: "IsJieMeiTBZ",
          ty: "int"
        },
        45: {
          na: "ZhengSiNum",
          ty: "int"
        },
        46: {
          na: "IsWuHuaGuo",
          ty: "int"
        },
        47: {
          na: "ZiMoJiaHuaNum",
          ty: "int"
        },
        48: {
          na: "XiQianian",
          ty: "int"
        },
        49: {
          na: "IsHuFenJiaBei",
          ty: "int"
        },
        50: {
          na: "SiTongHuaNum",
          ty: "int"
        },
        51: {
          na: "IsJiaoTingZeiPai",
          ty: "int"
        },
        52: {
          na: "IsDaDiaoChe",
          ty: "int"
        },
        53: {
          na: "FengJiZhi",
          ty: "int"
        },
        54: {
          na: "IsFengYiSe",
          ty: "int"
        },
        55: {
          na: "TongPaiNum",
          ty: "int",
          ar: 1
        },
        56: {
          na: "TongHuaNum",
          ty: "int",
          ar: 1
        },
        57: {
          na: "CouPaiJiaFenNum",
          ty: "int"
        },
        58: {
          na: "LianPaiNum",
          ty: "int"
        },
        59: {
          na: "JiPaiInFo",
          ty: "FXJiPaiInfo",
          ar: 1
        },
        60: {
          na: "TiangPaiFanShu",
          ty: "int"
        },
        61: {
          na: "ShabaoJiaFen",
          ty: "int"
        },
        62: {
          na: "repao",
          ty: "int"
        },
        63: {
          na: "UserTingPaiInfo",
          ty: "FXTingPaiInfo",
          ar: 1
        },
        64: {
          na: "jifen",
          ty: "int"
        },
        65: {
          na: "Jiangjifen",
          ty: "int"
        },
        66: {
          na: "LianZhuangJiaFen",
          ty: "int"
        },
        67: {
          na: "FangGangJiangjifen",
          ty: "int"
        },
        68: {
          na: "SanChaSi",
          ty: "int"
        },
        69: {
          na: "ShuaDiaoNum",
          ty: "int"
        },
        70: {
          na: "SiLaiZi",
          ty: "int"
        }
      };
      cfg.FXZqZhongMaiMaData = {
        1: {
          na: "ChairID",
          ty: "int"
        },
        2: {
          na: "ZhongMaiPai",
          ty: "byte",
          ar: 1
        }
      };
      cfg.FXPlayGameEnd = {
        1: {
          na: "Banker",
          ty: "int"
        },
        2: {
          na: "HuChairID",
          ty: "int"
        },
        3: {
          na: "NothuData",
          ty: "FXNotHuData",
          ar: 1
        },
        4: {
          na: "HupaiData",
          ty: "FXHuPaiData",
          ar: 1
        },
        5: {
          na: "ZimoPos",
          ty: "int"
        },
        6: {
          na: "MapaiData",
          ty: "byte",
          ar: 1
        },
        7: {
          na: "DiaoPao",
          ty: "int"
        },
        8: {
          na: "MaFen",
          ty: "int",
          ar: 1
        },
        9: {
          na: "MaiMaTime",
          ty: "int"
        },
        10: {
          na: "ZqZhongMaiMa",
          ty: "FXZqZhongMaiMaData",
          ar: 1
        },
        11: {
          na: "Time",
          ty: "int"
        },
        12: {
          na: "IsBaoHU",
          ty: "int"
        },
        13: {
          na: "UserFeedCountRelations",
          ty: "FXUserFeedCountRelation",
          ar: 1
        },
        14: {
          na: "IsHePaiYiQuanDa",
          ty: "int"
        },
        15: {
          na: "PlayEndType",
          ty: "int"
        },
        16: {
          na: "GengZhuang",
          ty: "int"
        },
        17: {
          na: "LianZhuangCount",
          ty: "int"
        },
        18: {
          na: "JinYuanZiInfo",
          ty: "JinYuanZiInf"
        },
        19: {
          na: "validjipai",
          ty: "byte",
          ar: 1
        }
      };
      cfg.FXMjqGameVideo = {
        0: {
          na: "RoomStart",
          ty: "FXTRoomStart"
        },
        1: {
          na: "PerGameVideo",
          ty: "FXTPerGameVideo"
        },
        2: {
          na: "RoomGameEnd",
          ty: "FXPlayGameEnd"
        }
      };
      cfg.FXReserveCards = {
        1: {
          na: "CardsCount",
          ty: "int"
        },
        2: {
          na: "DunCount",
          ty: "int"
        }
      };
      cfg.FXDiceInfo = {
        1: {
          na: "Dice1",
          ty: "int"
        },
        2: {
          na: "Dice2",
          ty: "int"
        },
        3: {
          na: "Dice1ChairID",
          ty: "int"
        },
        4: {
          na: "Dice2ChairID",
          ty: "int"
        }
      };
      cfg.FXUserFeedCountRelation = {
        1: {
          na: "User1ChaidID",
          ty: "int"
        },
        2: {
          na: "User2ChariID",
          ty: "int"
        },
        3: {
          na: "User1FeedUser2Count",
          ty: "int"
        },
        4: {
          na: "User2FeedUser1Count",
          ty: "int"
        }
      };
    })(proto.cmd_mjq_video.__cfg);
    proto.cmd_mjq_video.FXHandleCard = function() {
      this.__className = "proto.cmd_mjq_video.FXHandleCard";
      this.Type = 0;
      this.Card = 0;
      this.Cards = null;
      this.SourceChairID = 0;
      this.IsZiMo = 0;
      this.JiPaiType = 0;
      this.RealTimeCredit = 0;
      this.JianChairId = 0;
    };
    proto.cmd_mjq_video.FXChooseHandle = function() {
      this.__className = "proto.cmd_mjq_video.FXChooseHandle";
      this.ChairID = 0;
      this.Handles = null;
      this.GetTingout = null;
    };
    proto.cmd_mjq_video.FXValidHandle = function() {
      this.__className = "proto.cmd_mjq_video.FXValidHandle";
      this.ChairID = 0;
      this.Handle = null;
      this.IsJiaTing = 0;
      this.FeedCount = 0;
    };
    proto.cmd_mjq_video.FXMissHandle = function() {
      this.__className = "proto.cmd_mjq_video.FXMissHandle";
      this.ChairID = 0;
      this.Handle = null;
    };
    proto.cmd_mjq_video.JinYuanZiInf = function() {
      this.__className = "proto.cmd_mjq_video.JinYuanZiInf";
      this.IsJinYuanZi = 0;
      this.ChairIds = null;
      this.num = 0;
      this.OutNum = 0;
      this.OutChairId = 0;
    };
    proto.cmd_mjq_video.FXTHuCardBeiLv = function() {
      this.__className = "proto.cmd_mjq_video.FXTHuCardBeiLv";
      this.CardType = 0;
      this.BeiLv = 0;
    };
    proto.cmd_mjq_video.FXTCatchCard = function() {
      this.__className = "proto.cmd_mjq_video.FXTCatchCard";
      this.Card = 0;
      this.Count = 0;
      this.GetTingout = null;
    };
    proto.cmd_mjq_video.FXGameStep = function() {
      this.__className = "proto.cmd_mjq_video.FXGameStep";
      this.Hander = 0;
      this.ChooseHandles = null;
      this.ValidHandles = null;
      this.CatchCard = null;
      this.OutCard = 0;
      this.HandleTime = 0;
      this.GetFlower = 0;
      this.FlowerCount = 0;
      this.MissHandles = null;
      this.ReserveCards = null;
      this.CardsNums = 0;
      this.DingQue = 0;
      this.JiPaiType = 0;
    };
    proto.cmd_mjq_video.FXTGameRule = function() {
      this.__className = "proto.cmd_mjq_video.FXTGameRule";
      this.CostCard = 0;
      this.PlayCount = 0;
      this.HasFeng = 0;
      this.CanChipai = 0;
      this.HasPaozi = 0;
      this.CanMultiHu = 0;
      this.OnlyZimo = 0;
      this.LunZhuang = 0;
      this.SevenduiHu = 0;
      this.QiangganHu = 0;
      this.Facailaizi = 0;
      this.MapaiCount = 0;
      this.PlayerCount = 0;
      this.TianHu = 0;
      this.DiHu = 0;
      this.GangShangKaiHu = 0;
      this.HaiDiLao = 0;
      this.QiangGangHuBei = 0;
      this.MaiMa = 0;
      this.MaiMaBuBuGao = 0;
      this.MaGenGang = 0;
      this.baozimo = 0;
      this.gangkaibaohu = 0;
      this.PlayID = 0;
      this.LessHuFan = 0;
      this.QiDuiJiaFan = 0;
      this.MaGenDiFen = 0;
      this.HaoHuaQiDuiJiaFan = 0;
      this.PengPengHuJiaFan = 0;
      this.QingYiSeJiaFan = 0;
      this.QuanQiuRen = 0;
      this.ShiSanYao = 0;
      this.Me19 = 0;
      this.HunYiSe = 0;
      this.QuanFeng = 0;
      this.NoLaiziDouble = 0;
      this.FourLaiziHu = 0;
      this.IsOneEqualTen = 0;
      this.MaBZEqualQZ = 0;
      this.QiangGangHuFanBei = 0;
      this.QiangGangHuQuanBao = 0;
      this.LianGangFanBei = 0;
      this.HuaPaiType = 0;
      this.GangFenXianJie = 0;
      this.GangHaveFen = 0;
      this.NoFanType = 0;
      this.Keep8Card = 0;
      this.MaDeDifen = 0;
      this.DianPaoChengBao = 0;
      this.AnGangIsShow = 0;
      this.ForceAutoHu = 0;
      this.FengSiBiDa = 0;
      this.HePaiYiQuanDa = 0;
      this.CalcFenType = 0;
      this.IsZiMoDouble = 0;
      this.JiaoTingJiaHuaNum = 0;
      this.IsAARoom = 0;
      this.IsAntiCheat = 0;
      this.IsYaZhu = 0;
      this.IsJieMeiJiaFen = 0;
      this.IsQueMenJiaFen = 0;
      this.ZhiGangCanQiang = 0;
      this.GengZhuang = 0;
      this.JieJieGao = 0;
      this.IsFalseJiaTing = 0;
      this.YiTiaoLong = 0;
      this.IsHuaPaiJiaBei = 0;
      this.PlayType = 0;
      this.LianLiuSuanZuiNum = 0;
      this.IsManTianCou = 0;
      this.IsYaZiCou = 0;
      this.YaZhuTopNum = 0;
      this.FenEquelZuiNum = 0;
      this.IsHaveYaoBaiJi = 0;
      this.IsHaveChuiFengJi = 0;
    };
    proto.cmd_mjq_video.FXuserinfo = function() {
      this.__className = "proto.cmd_mjq_video.FXuserinfo";
      this.Uid = 0;
      this.Headimg = "";
      this.Sex = 0;
      this.NickName = "";
      this.IP = "";
      this.ChairID = 0;
    };
    proto.cmd_mjq_video.FXTUserInfo = function() {
      this.__className = "proto.cmd_mjq_video.FXTUserInfo";
      this.UserInfo = null;
    };
    proto.cmd_mjq_video.FXTRoomStart = function() {
      this.__className = "proto.cmd_mjq_video.FXTRoomStart";
      this.Owner = 0;
      this.RoomNum = 0;
      this.CreateTime = 0;
      this.GameID = 0;
      this.GameRule = null;
      this.UserInfo = null;
    };
    proto.cmd_mjq_video.FXUserCard = function() {
      this.__className = "proto.cmd_mjq_video.FXUserCard";
      this.ChairID = 0;
      this.Card = null;
      this.GetFlower = null;
      this.FlowerCount = 0;
    };
    proto.cmd_mjq_video.FXTSendCard = function() {
      this.__className = "proto.cmd_mjq_video.FXTSendCard";
      this.CardCount = 0;
      this.UserCards = null;
      this.LaiziCard = 0;
      this.SecondLaiziCard = 0;
    };
    proto.cmd_mjq_video.FXTGameStart = function() {
      this.__className = "proto.cmd_mjq_video.FXTGameStart";
      this.Banker = 0;
      this.PlayCount = 0;
      this.LaveCount = 0;
      this.SendCard = null;
      this.StartTime = 0;
      this.ReserveCards = null;
      this.DiceInfo = null;
      this.IsHePaiYiQuanDa = 0;
    };
    proto.cmd_mjq_video.FXTPerGameVideo = function() {
      this.__className = "proto.cmd_mjq_video.FXTPerGameVideo";
      this.GameStart = null;
      this.Step = null;
    };
    proto.cmd_mjq_video.FXHandleCardData = function() {
      this.__className = "proto.cmd_mjq_video.FXHandleCardData";
      this.Type = 0;
      this.Card = 0;
      this.Cards = null;
      this.IsZiMo = 0;
      this.SourceChairID = 0;
      this.JiPaiType = 0;
      this.RealTimeCredit = 0;
      this.JianChairId = 0;
    };
    proto.cmd_mjq_video.FXJiPaiInfo = function() {
      this.__className = "proto.cmd_mjq_video.FXJiPaiInfo";
      this.Type = 0;
      this.Card = 0;
      this.number = 0;
      this.JiFen = 0;
    };
    proto.cmd_mjq_video.FXTingPaiInfo = function() {
      this.__className = "proto.cmd_mjq_video.FXTingPaiInfo";
      this.ChairID = 0;
      this.FanNum = 0;
    };
    proto.cmd_mjq_video.FXNotHuData = function() {
      this.__className = "proto.cmd_mjq_video.FXNotHuData";
      this.ChairID = 0;
      this.Handle = null;
      this.Cards = null;
      this.Hufeng = 0;
      this.Gangfeng = 0;
      this.Zongfeng = 0;
      this.Paozfeng = 0;
      this.FengTimes = 0;
      this.BeiShangJiagang = 0;
      this.BeixiaJiaJiagang = 0;
      this.BeiDuiJiagang = 0;
      this.MyGangFen = 0;
      this.JiaTing = 0;
      this.IsTianTing = 0;
      this.YaZhuNum = 0;
      this.IsMingPai = 0;
      this.XiQianian = 0;
      this.JiPaiInFo = null;
      this.TiangPaiFanShu = 0;
      this.UserTingPaiInfo = null;
      this.jifen = 0;
      this.YiBaoSanReason = 0;
      this.IsTingPai = 0;
      this.Jiangjifen = 0;
      this.repao = 0;
      this.FangGangJiangjifen = 0;
    };
    proto.cmd_mjq_video.FXFanTypeInfo = function() {
      this.__className = "proto.cmd_mjq_video.FXFanTypeInfo";
      this.FanID = 0;
      this.FanShu = 0;
    };
    proto.cmd_mjq_video.FXTianHuInfo = function() {
      this.__className = "proto.cmd_mjq_video.FXTianHuInfo";
      this.IsTianHu = 0;
      this.Info = null;
      this.Type = 0;
    };
    proto.cmd_mjq_video.FXDiHuInfo = function() {
      this.__className = "proto.cmd_mjq_video.FXDiHuInfo";
      this.IsDiHu = 0;
      this.Info = null;
      this.Type = 0;
    };
    proto.cmd_mjq_video.FXGangShangKaiHuInfo = function() {
      this.__className = "proto.cmd_mjq_video.FXGangShangKaiHuInfo";
      this.IsGangKai = 0;
      this.Info = null;
      this.Type = 0;
    };
    proto.cmd_mjq_video.FXHaiDiLaoYueInfo = function() {
      this.__className = "proto.cmd_mjq_video.FXHaiDiLaoYueInfo";
      this.IsHaiDiLaoYue = 0;
      this.Info = null;
      this.Type = 0;
    };
    proto.cmd_mjq_video.FXQiangGangHuInfo = function() {
      this.__className = "proto.cmd_mjq_video.FXQiangGangHuInfo";
      this.IsQiangGangHu = 0;
      this.Info = null;
      this.Type = 0;
    };
    proto.cmd_mjq_video.FXHuPaiData = function() {
      this.__className = "proto.cmd_mjq_video.FXHuPaiData";
      this.ChairID = 0;
      this.Handle = null;
      this.UserCards = null;
      this.Card = 0;
      this.Hufeng = 0;
      this.Gangfeng = 0;
      this.Zongfeng = 0;
      this.Paozfeng = 0;
      this.FengTimes = 0;
      this.FengType = null;
      this.HuhouMa = null;
      this.ZhongMa = null;
      this.TianHu = null;
      this.DiHu = null;
      this.GangShangKaiHu = null;
      this.HaiDiLaoYue = null;
      this.BeiShangJiagang = 0;
      this.BeixiaJiaJiagang = 0;
      this.BeiDuiJiagang = 0;
      this.MyGangFen = 0;
      this.HuPaiSuanFa = null;
      this.QiangGangHu = null;
      this.NoLaiziDouble = 0;
      this.NoLaiziJiaMaCount = 0;
      this.BuZhongDangZhong = 0;
      this.HuaPaiCount = 0;
      this.AnJueZhang = 0;
      this.JueZhang = 0;
      this.JiaTing = 0;
      this.HuaPaiCards = null;
      this.IsQuanQiuRen = 0;
      this.IsSiGuiHu = 0;
      this.IsBaoTou = 0;
      this.IsGangBao = 0;
      this.IsTianTing = 0;
      this.YaZhuNum = 0;
      this.IsMingPai = 0;
      this.JieMeiNum = 0;
      this.QueMenNum = 0;
      this.AnKeNum = 0;
      this.IsMenQing = 0;
      this.IsYaoQiuJiang = 0;
      this.IsYiBaoSan = 0;
      this.IsJieMeiTBZ = 0;
      this.ZhengSiNum = 0;
      this.IsWuHuaGuo = 0;
      this.ZiMoJiaHuaNum = 0;
      this.XiQianian = 0;
      this.IsHuFenJiaBei = 0;
      this.SiTongHuaNum = 0;
      this.IsJiaoTingZeiPai = 0;
      this.IsDaDiaoChe = 0;
      this.FengJiZhi = 0;
      this.IsFengYiSe = 0;
      this.TongPaiNum = null;
      this.TongHuaNum = null;
      this.CouPaiJiaFenNum = 0;
      this.LianPaiNum = 0;
      this.JiPaiInFo = null;
      this.TiangPaiFanShu = 0;
      this.ShabaoJiaFen = 0;
      this.repao = 0;
      this.UserTingPaiInfo = null;
      this.jifen = 0;
      this.Jiangjifen = 0;
      this.LianZhuangJiaFen = 0;
      this.FangGangJiangjifen = 0;
      this.SanChaSi = 0;
      this.ShuaDiaoNum = 0;
      this.SiLaiZi = 0;
    };
    proto.cmd_mjq_video.FXZqZhongMaiMaData = function() {
      this.__className = "proto.cmd_mjq_video.FXZqZhongMaiMaData";
      this.ChairID = 0;
      this.ZhongMaiPai = null;
    };
    proto.cmd_mjq_video.FXPlayGameEnd = function() {
      this.__className = "proto.cmd_mjq_video.FXPlayGameEnd";
      this.Banker = 0;
      this.HuChairID = 0;
      this.NothuData = null;
      this.HupaiData = null;
      this.ZimoPos = 0;
      this.MapaiData = null;
      this.DiaoPao = 0;
      this.MaFen = null;
      this.MaiMaTime = 0;
      this.ZqZhongMaiMa = null;
      this.Time = 0;
      this.IsBaoHU = 0;
      this.UserFeedCountRelations = null;
      this.IsHePaiYiQuanDa = 0;
      this.PlayEndType = 0;
      this.GengZhuang = 0;
      this.LianZhuangCount = 0;
      this.JinYuanZiInfo = null;
      this.validjipai = null;
    };
    proto.cmd_mjq_video.FXMjqGameVideo = function() {
      this.__className = "proto.cmd_mjq_video.FXMjqGameVideo";
      this.RoomStart = null;
      this.PerGameVideo = null;
      this.RoomGameEnd = null;
    };
    proto.cmd_mjq_video.FXReserveCards = function() {
      this.__className = "proto.cmd_mjq_video.FXReserveCards";
      this.CardsCount = 0;
      this.DunCount = 0;
    };
    proto.cmd_mjq_video.FXDiceInfo = function() {
      this.__className = "proto.cmd_mjq_video.FXDiceInfo";
      this.Dice1 = 0;
      this.Dice2 = 0;
      this.Dice1ChairID = 0;
      this.Dice2ChairID = 0;
    };
    proto.cmd_mjq_video.FXUserFeedCountRelation = function() {
      this.__className = "proto.cmd_mjq_video.FXUserFeedCountRelation";
      this.User1ChaidID = 0;
      this.User2ChariID = 0;
      this.User1FeedUser2Count = 0;
      this.User2FeedUser1Count = 0;
    };
    proto.cmd_mjq_video.FXHANDLE_CARD_TYPE = {
      FXHANDLE_CARD_EAT: 1,
      FXHANDLE_CARD_PENG: 2,
      FXHANDLE_CARD_AGANG: 3,
      FXHANDLE_CARD_FGANG: 4,
      FXHANDLE_CARD_MGANG: 5,
      FXHANDLE_CARD_HU: 6
    };
    proto.cmd_mjq_video.JI_PAI_TYPE = {
      BENJI: 0,
      XIAJI: 1,
      SHANGJI: 2,
      CFJI: 3,
      CFWGJI: 4,
      ZERENJI: 5,
      ZERENWGJI: 6,
      YAOJI: 7,
      WUGUJI: 8,
      JINJI: 9,
      JINWUGUJI: 10,
      JINCFJI: 11,
      JINCFWUGUJI: 12,
      JINZERENJI: 13,
      JINZERENWUGUJI: 14,
      XINQIJI: 15
    };
    cc._RF.pop();
  }, {} ],
  cmd_net_guandan: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eba67e5MpRKCL+lP1rgr1r3", "cmd_net_guandan");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_net_guandan = {};
    proto.cmd_net_guandan.__cfg = {};
    (function(cfg) {})(proto.cmd_net_guandan.__cfg);
    proto.cmd_net_guandan.CMD_GAME = {
      SUB_S_SEND_SCREEN: 1,
      SUB_S_START_READY: 2,
      SUB_S_END_READY: 3,
      SUB_S_GAME_START: 4,
      SUB_S_SEND_CARD: 5,
      SUB_S_PAYTRIBUTE_INFO: 6,
      SUB_S_RETURNTRIBUTE_INFO: 7,
      SUB_S_START_OUTCARD: 8,
      SUB_S_OPERATE_CARD: 9,
      SUB_S_GAME_END: 10,
      SUB_S_GRADE_CHANGE: 11,
      SUB_S_TRUSTEE: 12,
      SUB_S_WEALTH_CHANGE: 13,
      SUB_S_PARNTER_HANDCARD: 14,
      SUB_S_LOOK_ON_CONTROL_RESP: 15,
      SUB_C_OPERATE_TRIBUTE: 20,
      SUB_C_OPERATION: 21,
      SUB_C_TRUSTEE: 22,
      SUB_C_LOOK_ON_CONTROL_REQ: 23,
      SUB_C_EXCHANGE_SEATE: 24,
      SUB_C_CREATE_ROOM: 25,
      SUB_USERINFO_PUSH: 26,
      SUB_USER_START_DISMISSION: 27,
      SUB_USER_DISMISSION_REQ: 28,
      SUB_USER_DISMISSION_RSP: 29,
      SUB_ROOM_GAME_END: 30,
      SUB_GAME_SCENCE_FREE: 31,
      SUB_S_EXCHANGE_SEATE_RSP: 32,
      SUB_C_EXCHANGE_SEATE_RANDOM: 33,
      SUB_C_RANDOM_CARD: 34,
      SUB_S_SWAP_SEAT: 35,
      SUB_C_SWAP_SEAT_DATA: 36,
      SUB_S_INFORM_PLAYER: 37,
      SUB_S_PLAYER_RANK: 38,
      SUB_S_PAYTRIBUTE_RETURN: 39
    };
    cc._RF.pop();
  }, {} ],
  cmd_net: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2feddZk/SBMxpE/ZTnEHIdd", "cmd_net");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_net = {};
    proto.cmd_net.__cfg = {};
    (function(cfg) {})(proto.cmd_net.__cfg);
    proto.cmd_net.MainCmdID = {
      CMD_SYS: 1,
      CMD_ROOM: 11,
      CMD_GAME: 21,
      CMD_CHALLENGE: 31,
      CMD_LOBBY: 41,
      CMD_ACCOUNTS: 51,
      CMD_PAY: 61,
      CMD_MSG: 71,
      CMD_REDBAGS: 72,
      CMD_MISSION: 73,
      CMD_CHESS_MUSEUM: 80,
      CMD_ROUTE_GATE: 129,
      CMD_FROM_GATE: 130,
      CMD_ROUTE_LOBBY: 131,
      CMD_ROUTE_ROOM: 132,
      CMD_ROUTE_CHALLENGE: 133,
      CMD_ROUTE_STATUS: 134,
      CMD_FROM_STATUS: 135,
      CMD_ROUTE_MSG: 136,
      CMD_ROUTE_REDBAGS: 137,
      CMD_ROUTE_MISSION: 138,
      CMD_FROM_MISSION: 139,
      CMD_ROUTE_CHESS_MUSEUM: 140
    };
    proto.cmd_net.CMD_SYS = {
      CMD_SYS_SOFTINFO: 1,
      CMD_SYS_HEART_ASK: 2,
      CMD_SYS_HEART_ACK: 3,
      CMD_SYS_BOMB_MSG: 4,
      CMD_SYS_USER_STATUS: 5,
      CMD_SYS_UPDATE_USER_YUANBAO: 6,
      CMD_SYS_COMM_MSG: 7,
      CMD_SYS_UPDATE_USER_POSITION: 8,
      CMD_SYS_CONFIG: 9
    };
    proto.cmd_net.CMD_ACCOUNTS = {
      CMD_ACCOUNTS_TOKEN_LOGON_REQ: 1,
      CMD_ACCOUNTS_LOGON_FAIL_RESP: 2,
      CMD_ACCOUNTS_LOGON_SUCCESS_RESP: 3,
      CMD_ACCOUNTS_FIRST_LOGON_GIFT_RESP: 4,
      CMD_ACCOUNTS_OFFLINE_LOGON_REQ: 5,
      CMD_ACCOUNTS_OFFLINE_LOGON_RESP: 6,
      CMD_ACCOUNTS_CHANGE_GAME_REQ: 7,
      CMD_ACCOUNTS_CHANGE_GAME_SUCCESS_RESP: 8,
      CMD_ACCOUNTS_CHANGE_GAME_FAIL_RESP: 9,
      CMD_ACCOUNTS_QUICKLY_LOGON_REQ: 10,
      SUB_PERSON_SIGNATURE_REQS: 11,
      SUB_PERSON_SIGNATURE_RSP: 12,
      SUB_PERSON_CHANGE_HEADID_REQS: 13,
      SUB_PERSON_CHANGE_HEADID_RSP: 14
    };
    proto.cmd_net.CMD_LOBBY = {
      CMD_LOBBY_BADGE_INIT_RESP: 10,
      CMD_LOBBY_BADGE_GLOBAL_RESP: 11,
      CMD_LOBBY_BADGE_SELF_RESP: 12,
      CMD_LOBBY_BADGE_READED_REQ: 13,
      CMD_LOBBY_COIN_TRANSFER_REQ: 14,
      CMD_LOBBY_COIN_TRANSFER_RESULT: 15,
      CMD_LOBBY_BUNDLES_RESP: 16
    };
    proto.cmd_net.CMD_CHALLENGE = {
      CMD_CHALLENGE_ROOM_BASE_CFG_REQ: 1,
      CMD_CHALLENGE_ROOM_BASE_CFG_RESP: 2,
      CMD_CHALLENGE_USER_TO_ROOM_REQ: 3,
      CMD_CHALLENGE_USER_TO_ROOM_FAIL: 4,
      CMD_CHALLENGE_GAME_LIST_REQ: 5,
      CMD_CHALLENGE_GAME_LIST_RESP: 6,
      CMD_CHALLENGE_WEB_CREAT_ROOM: 7,
      CMD_CHALLENGE_WEB_CREAT_FAILED: 8,
      CMD_CHALLENGE_GROUNDS_INFO_REQ: 9,
      CMD_CHALLENGE_GROUNDS_INFO_RSP: 10
    };
    proto.cmd_net.CMD_ROOM = {
      SUB_CHAT_MSG_REQ: 5,
      SUB_CHAT_MSG_RSP: 6,
      SUB_USER_ACTION: 7,
      SUB_OFFLINE_ENTER_ROOM: 50,
      SUB_ENTER_ROOM_ASK: 51,
      SUB_CREATE_ROOM_ASK: 52,
      SUB_ENTER_ROOM_SUCC: 53,
      SUB_ENTER_ROOM_FAIL: 54,
      SUB_HAS_LEAVE_ROOM: 55,
      SUB_COMM_MESSAGE: 56,
      SUB_WEB_CREATE_ROOM_ASK: 57,
      SUB_ENTER_RED_ROOM_ASK: 58,
      SUB_ENTER_RED_ROOM_SUCCESS: 59,
      SUB_BANK_RUPT_GIVE: 60,
      SUB_QUIKY_PAY: 61,
      SUB_CREATE_PVT_ROOM_SUCCESS: 62,
      SUB_USER_NOT_IN_ROOM: 63,
      SUB_NORMAL_PLAYER_COUNT_REQ: 64,
      SUB_NORMAL_PLAYER_COUNT_RSP: 65,
      SUB_ENTER_ROOM_MATCH_SUCC: 66,
      CMD_CHESS_MUSEUM_BEGIN: 201,
      CMD_UPDATE_DESK_RULE: 202,
      CMD_UPDATE_DESK_RULE_STATU: 203,
      CMD_UPDATE_DESK_RULE_REF_OR_AGR: 204,
      CMD_UPDATE_DESK_RULE_RESULT: 205,
      CMD_UPDATE_GAME_PLAY_COUNT_REQ: 206,
      CMD_UPDATE_GAME_PLAY_COUNT_RET: 207,
      CMD_GET_CLOSE_PVT_ROOM_REQ: 208,
      CMD_GET_CLOSE_PVT_ROOM_RET: 209,
      CMD_CHESS_MUSEUM_END: 210
    };
    proto.cmd_net.CMD_MSG = {
      CMD_MSG_ACTMSG_RESP: 1,
      CMD_MSG_MARQUEEMSG_RESP: 2,
      CMD_MSG_MAILLIST_RESP: 3,
      CMD_MSG_MAILMSG_HANDLE_REQ: 4,
      CMD_MSG_MAILMSG_ADD: 5
    };
    proto.cmd_net.CMD_REDBAGS = {
      CMD_REDBAGS_MATCH_GOT_CHANCE_RESP: 1,
      CMD_REDBAGS_MATCH_DRAW_REQ: 2,
      CMD_REDBAGS_MATCH_DRAW_RESP: 3,
      CMD_REDBAGS_MATCH_USERINFO_RESP: 4
    };
    proto.cmd_net.CMD_MISSION = {
      CMD_MISSION_LIST_BEGIN: 1,
      CMD_MISSION_LIST_RESP: 2,
      CMD_MISSION_LIST_END: 3,
      CMD_MISSION_STATUS_LIST: 4,
      CMD_MISSION_CLIENT_RESULT_REQ: 5,
      CMD_MISSION_OBTAIN_PRIZE_REQ: 6
    };
    proto.cmd_net.CMD_CHESS_MUSEUM = {
      CMD_CREATE_CHESS_MUSEUM_REQS: 1,
      CMD_CREATE_CHESS_MUSEUM_REp: 2,
      CMD_SEARCH_CHESS_MUSEUM_REQS: 3,
      CMD_SEARCH_CHESS_MUSEUM_REP: 4,
      CMD_SEARCH_MY_CHESS_MUSEUM_REQS: 5,
      CMD_SEARCH_MY_CHESS_MUSEUM_REP: 6,
      CMD_ASK_JOIN_CHESS_MUSEUM_REQS: 7,
      CMD_ASK_JOIN_CHESS_MUSEUM_PASS: 8,
      CMD_ASK_JOIN_CHESS_MUSEUM_REFUSE: 9,
      CMD_SET_ADMINISTRATORS: 10,
      CMD_CANCEL_ADMINISTRATORS: 11,
      CMD_DELETE_CHESS_USER: 12,
      CMD_CHANGE_USER_REMARKS: 13,
      CMD_UP_CHESS_MUSEUM_FACE: 14,
      CMD_USER_IN_CHESS_MUSEUM_STATUS: 15,
      CMD_GET_CHESS_MUSEUM_MEMBERS_ASK: 16,
      CMD_GET_CHESS_MUSEUM_MEMBERS_RET: 17,
      CMD_SET_OR_CANCEL_STATUS: 18,
      CMD_DELETE_CHESS_USER_STATU: 19,
      CMD_CHANGE_USER_REMARKS_STAUS: 20,
      CMD_PASS_OR_REFUSE_STATUS: 21,
      CMD_GET_APPLY_LIST_REQS: 22,
      CMD_GET_APPLY_LIST_REP: 23,
      CMD_GET_HOT_CHESS_MUSEUM_REP: 24,
      CMD_GET_HOT_CHESS_MUSEUM_RET: 25,
      CMD_APPLY_ENTER_PRIVITROOM_REQ: 26,
      CMD_GET_ENTER_PRIVITROOM_LIST: 27,
      CMD_GET_ENTER_PRIVITROOM_LIST_RET: 28,
      CMD_SET_ENTER_PRIVITROOM_STATUS: 29,
      CMD_GET_CHESS_DESK_LIST_BEGIN: 30,
      CMD_GET_CHESS_DESK_LIST_END: 31,
      CMD_GET_CHESS_DESK_LIST: 32,
      CMD_GET_CHESS_DESK_LIST_RET: 33,
      CMD_GET_PVT_ROOM_LIST_REQ: 34,
      CMD_GET_PVT_ROOM_LIST_RET: 35,
      CMD_GET_PVT_ROOM_DETAIL_REQ: 36,
      CMD_GET_PVT_ROOM_DETAIL_RET: 37,
      CMD_GET_PVT_ROOM_LIST_RET_BEGIN: 38,
      CMD_GET_PVT_ROOM_LIST_RET_END: 39,
      CMD_GET_CREAT_CHESS_RULE_REQ: 40,
      CMD_GET_CREAT_CHESS_RULE_RET: 41,
      CMD_ENTER_CHESS_MUSEUM_REQ: 42,
      CMD_LEAVE_CHESS_MUSEUM_REQ: 43,
      CMD_ENTER_CHESS_MUSEUM_RSP: 44,
      CMD_LEAVE_CHESS_MUSEUM_RSP: 45,
      CMD_USER_LEAVE_PVT_ROOM: 46,
      CMD_USER_ENTER_PVT_ROOM: 47,
      CMD_PVT_ROOM_STATU: 48,
      CMD_CLOSE_PVT_ROOM: 49,
      CMD_GET_CHESS_MUSEUM_MEMBERS_BEGIN: 50,
      CMD_GET_CHESS_MUSEUM_MEMBERS_END: 51,
      CMD_GET_APPLY_LIST_BEGIN: 52,
      CMD_GET_APPLY_LIST_END: 53
    };
    cc._RF.pop();
  }, {} ],
  cmd_redbags: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4344ceJEG9PF7yML7afBrp0", "cmd_redbags");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_redbags = {};
    proto.cmd_redbags.__cfg = {};
    (function(cfg) {
      cfg.CRedMatchChance = {
        1: {
          na: "PlayID",
          ty: "int"
        },
        2: {
          na: "UID",
          ty: "int"
        },
        3: {
          na: "Expire",
          ty: "int"
        }
      };
      cfg.CRedMatchDrawReq = {
        1: {
          na: "PlayID",
          ty: "int"
        }
      };
      cfg.CRedMatchDrawResult = {
        1: {
          na: "PlayID",
          ty: "int"
        },
        2: {
          na: "Status",
          ty: "int"
        },
        3: {
          na: "Amount",
          ty: "int"
        }
      };
      cfg.CRedMatchUserInfo = {
        1: {
          na: "PlayID",
          ty: "int"
        },
        2: {
          na: "Round",
          ty: "int"
        },
        3: {
          na: "RestRound",
          ty: "int"
        },
        4: {
          na: "RestTime",
          ty: "int"
        },
        5: {
          na: "UID",
          ty: "int"
        }
      };
      cfg.CRedMatchUserInfoList = {
        0: {
          na: "UserList",
          ty: "CRedMatchUserInfo",
          ar: 1
        }
      };
      cfg.CRedMatchChanceList = {
        0: {
          na: "UserList",
          ty: "CRedMatchChance",
          ar: 1
        }
      };
    })(proto.cmd_redbags.__cfg);
    proto.cmd_redbags.CRedMatchChance = function() {
      this.__className = "proto.cmd_redbags.CRedMatchChance";
      this.PlayID = 0;
      this.UID = 0;
      this.Expire = 0;
    };
    proto.cmd_redbags.CRedMatchDrawReq = function() {
      this.__className = "proto.cmd_redbags.CRedMatchDrawReq";
      this.PlayID = 0;
    };
    proto.cmd_redbags.CRedMatchDrawResult = function() {
      this.__className = "proto.cmd_redbags.CRedMatchDrawResult";
      this.PlayID = 0;
      this.Status = 0;
      this.Amount = 0;
    };
    proto.cmd_redbags.CRedMatchUserInfo = function() {
      this.__className = "proto.cmd_redbags.CRedMatchUserInfo";
      this.PlayID = 0;
      this.Round = 0;
      this.RestRound = 0;
      this.RestTime = 0;
      this.UID = 0;
    };
    proto.cmd_redbags.CRedMatchUserInfoList = function() {
      this.__className = "proto.cmd_redbags.CRedMatchUserInfoList";
      this.UserList = null;
    };
    proto.cmd_redbags.CRedMatchChanceList = function() {
      this.__className = "proto.cmd_redbags.CRedMatchChanceList";
      this.UserList = null;
    };
    proto.cmd_redbags.RED_RESULT_STATUS = {
      RED_RESULT_STATUS_SUCESS: 1,
      RED_RESULT_STATUS_FAILED_INVALID: 2,
      RED_RESULT_STATUS_FAILED_EXPIRE: 3
    };
    cc._RF.pop();
  }, {} ],
  cmd_room: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9a0aaT5SJdMvKpCRFV7A5cc", "cmd_room");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_room = {};
    proto.cmd_room.__cfg = {};
    (function(cfg) {
      cfg.TableChatReq = {
        1: {
          na: "Type",
          ty: "int"
        },
        2: {
          na: "Msg",
          ty: "byte",
          sty: "string",
          ar: 1
        }
      };
      cfg.TableChatRsp = {
        1: {
          na: "ChairID",
          ty: "int"
        },
        2: {
          na: "Type",
          ty: "int"
        },
        3: {
          na: "Msg",
          ty: "byte",
          sty: "string",
          ar: 1
        }
      };
      cfg.CommMessage = {
        1: {
          na: "Code",
          ty: "int"
        },
        2: {
          na: "Msg",
          ty: "byte",
          sty: "string",
          ar: 1
        }
      };
      cfg.EnterRoomReq = {
        0: {
          na: "Code",
          ty: "int"
        },
        1: {
          na: "Rule",
          ty: "byte",
          ar: 1
        },
        2: {
          na: "PlayID",
          ty: "int"
        },
        3: {
          na: "CostCard",
          ty: "int"
        },
        4: {
          na: "IsAARoom",
          ty: "int"
        },
        5: {
          na: "ChessMuseumID",
          ty: "int"
        },
        6: {
          na: "PlayCount",
          ty: "int"
        },
        7: {
          na: "SubPlayID",
          ty: "int"
        },
        8: {
          na: "RoomId",
          ty: "int"
        }
      };
      cfg.EnterRoomFail = {
        1: {
          na: "Code",
          ty: "int"
        },
        2: {
          na: "Ret",
          ty: "int"
        },
        3: {
          na: "Msg",
          ty: "byte",
          sty: "string",
          ar: 1
        }
      };
      cfg.HasLeaveRoom = {
        1: {
          na: "Code",
          ty: "int"
        },
        2: {
          na: "RoomID",
          ty: "int"
        },
        3: {
          na: "LeaveType",
          ty: "int"
        }
      };
      cfg.RoomChairAction = {
        1: {
          na: "ActionType",
          ty: "int"
        }
      };
      cfg.RoomHasLeave = {
        1: {
          na: "NodeID",
          ty: "int"
        },
        2: {
          na: "RoomID",
          ty: "int"
        },
        3: {
          na: "SectionID",
          ty: "int"
        },
        4: {
          na: "LeaveType",
          ty: "int"
        },
        5: {
          na: "IsBox",
          ty: "int"
        },
        6: {
          na: "Msg",
          ty: "byte",
          sty: "string",
          ar: 1
        }
      };
      cfg.EnterRedRoomReq = {
        1: {
          na: "RoomType",
          ty: "int"
        },
        2: {
          na: "PlayID",
          ty: "int"
        }
      };
      cfg.EnterRedRoomOk = {
        1: {
          na: "RoomType",
          ty: "int"
        },
        2: {
          na: "PlayID",
          ty: "int"
        },
        3: {
          na: "RoomID",
          ty: "int"
        }
      };
      cfg.BankRuptGive = {
        1: {
          na: "Msg",
          ty: "byte",
          sty: "string",
          ar: 1
        }
      };
      cfg.ReqType = {
        1: {
          na: "OnLineType",
          ty: "int"
        }
      };
      cfg.NormalPlayerCount = {
        1: {
          na: "PlayerCount",
          ty: "int"
        }
      };
    })(proto.cmd_room.__cfg);
    proto.cmd_room.TableChatReq = function() {
      this.__className = "proto.cmd_room.TableChatReq";
      this.Type = 0;
      this.Msg = "";
    };
    proto.cmd_room.TableChatRsp = function() {
      this.__className = "proto.cmd_room.TableChatRsp";
      this.ChairID = 0;
      this.Type = 0;
      this.Msg = "";
    };
    proto.cmd_room.CommMessage = function() {
      this.__className = "proto.cmd_room.CommMessage";
      this.Code = 0;
      this.Msg = "";
    };
    proto.cmd_room.EnterRoomReq = function() {
      this.__className = "proto.cmd_room.EnterRoomReq";
      this.Code = 0;
      this.Rule = null;
      this.PlayID = 0;
      this.CostCard = 0;
      this.IsAARoom = 0;
      this.ChessMuseumID = 0;
      this.PlayCount = 0;
      this.SubPlayID = 0;
      this.RoomId = 0;
    };
    proto.cmd_room.EnterRoomFail = function() {
      this.__className = "proto.cmd_room.EnterRoomFail";
      this.Code = 0;
      this.Ret = 0;
      this.Msg = "";
    };
    proto.cmd_room.HasLeaveRoom = function() {
      this.__className = "proto.cmd_room.HasLeaveRoom";
      this.Code = 0;
      this.RoomID = 0;
      this.LeaveType = 0;
    };
    proto.cmd_room.RoomChairAction = function() {
      this.__className = "proto.cmd_room.RoomChairAction";
      this.ActionType = 0;
    };
    proto.cmd_room.RoomHasLeave = function() {
      this.__className = "proto.cmd_room.RoomHasLeave";
      this.NodeID = 0;
      this.RoomID = 0;
      this.SectionID = 0;
      this.LeaveType = 0;
      this.IsBox = 0;
      this.Msg = "";
    };
    proto.cmd_room.EnterRedRoomReq = function() {
      this.__className = "proto.cmd_room.EnterRedRoomReq";
      this.RoomType = 0;
      this.PlayID = 0;
    };
    proto.cmd_room.EnterRedRoomOk = function() {
      this.__className = "proto.cmd_room.EnterRedRoomOk";
      this.RoomType = 0;
      this.PlayID = 0;
      this.RoomID = 0;
    };
    proto.cmd_room.BankRuptGive = function() {
      this.__className = "proto.cmd_room.BankRuptGive";
      this.Msg = "";
    };
    proto.cmd_room.ReqType = function() {
      this.__className = "proto.cmd_room.ReqType";
      this.OnLineType = 0;
    };
    proto.cmd_room.NormalPlayerCount = function() {
      this.__className = "proto.cmd_room.NormalPlayerCount";
      this.PlayerCount = 0;
    };
    proto.cmd_room.ROOM_ACTION_TYPE = {
      ROOM_ACTION_READY: 1,
      ROOM_ACTION_LEAVE: 2,
      ROOM_ACTION_STANDUP: 3
    };
    proto.cmd_room.GAME_OVER_TYPE = {
      NOPLAYING_GAME_MISSION: 1,
      PLAYING_GAME_MISSION: 2,
      NORMAL_GAME_OVER: 3,
      TIMEOUT_GAME_MISSION: 4
    };
    proto.cmd_room.ROOM_ENTER_FAIL_TYPE = {
      ROOM_ENTER_ROOM_EXPIRE_LIMIT: 1,
      ROOM_ENTER_ROOM_FULL_LIMIT: 2,
      ROOM_ENTER_ROOM_START_LIMIT: 3,
      ROOM_ENTER_ROOM_CARD_LIMIT: 4,
      ROOM_ENTER_ROOM_CFG_LIMIT: 5,
      ROOM_IS_NOT_FREE: 6,
      ROOM_NUM_IS_EXISTS: 7,
      ROOM_TABLE_NOT_ENOUGH: 8,
      ROOM_NUM_NOT_FIND: 9,
      ROOM_USER_IN_TABLE: 10,
      ROOM_VERSION_NOT_MATCH: 11,
      ENTER_LESS_COINBEAN: 12,
      ROOM_ENTER_AA_CARD_LIMIT: 13,
      ROOM_SERVER_SYS_ERROR: 14,
      ROOM_ENTER_IP_LIMIT: 15,
      ROOM_ENTER_PVT_COUNT_LIMIT: 16,
      ROOM_ENTER_NOT_MEMBER: 17,
      ROOM_ENTER_ROOM_COIN_LOW: 18,
      ROOM_ENTER_ROOM_COIN_HIGH: 19,
      ROOM_ENTER_ROOM_SERVER_LIMIT: 99
    };
    proto.cmd_room.COMM_MESSAGE_CODE = {
      ROOM_NOPLAY_DISMISSION: 1,
      ROOM_ADMIN_DISMISSION: 2
    };
    proto.cmd_room.USER_ACTION_TYPE = {
      USER_ACTION_STANDUP: 1,
      USER_ACTION_SIT_DOWN: 2,
      USER_ACTION_READY: 3,
      USER_ACTION_LEAVE: 4,
      USER_ACTION_USER_QUICK_PAY: 5,
      USER_MISSION_EVENT: 6
    };
    proto.cmd_room.USER_STATUS_TYPE = {
      USER_STATUS_NULL: 0,
      USER_STATUS_STANDUP: 1,
      USER_STATUS_SIT_DOWN: 2,
      USER_STATUS_READY: 3,
      USER_STATUS_PLAY: 4,
      USER_STATUS_OFFLINE: 5
    };
    proto.cmd_room.ROOM_TYPE = {
      CHALLENGE_ROOM: 0,
      RED_ROOM: 1,
      PRIVATE_ROOM: 2
    };
    proto.cmd_room.ROOM_LEAVE_TYPE = {
      ROOM_LEAVE_TYPE_RETURN_HALL: 1,
      ROOM_LEAVE_TYPE_EXIT_GAME: 2,
      ROOM_LEAVE_TYPE_SERVERS_REEOR: 3
    };
    proto.cmd_room.TABLE_CHAT_TYPE = {
      TCHAT_MSG: 1,
      TCHAT_FACE: 2,
      TCHAT_VOICE: 3,
      TCHAT_CLT_MSG: 4
    };
    proto.cmd_room.RECEYCLE_TYPE_ROBOT = {
      WIN_PROBABILY: 1,
      WIN_CONI_COUNT: 2
    };
    cc._RF.pop();
  }, {} ],
  cmd_sys: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3e2e6LjBGZOGqc0NBS9ronE", "cmd_sys");
    "use strict";
    window.proto = window.proto || {};
    proto.cmd_sys = {};
    proto.cmd_sys.__cfg = {};
    (function(cfg) {
      cfg.CSysSoftInfo = {
        1: {
          na: "SoftVer",
          ty: "int"
        },
        2: {
          na: "LobbyVer",
          ty: "int"
        },
        3: {
          na: "SChannel",
          ty: "int"
        },
        4: {
          na: "MChannel",
          ty: "int"
        },
        5: {
          na: "SysType",
          ty: "int"
        },
        6: {
          na: "SysVer",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        7: {
          na: "HardName",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        8: {
          na: "HardType",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        9: {
          na: "HardCode",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        10: {
          na: "ScreenWidth",
          ty: "int"
        },
        11: {
          na: "ScreenHeight",
          ty: "int"
        },
        12: {
          na: "NetType",
          ty: "int"
        },
        13: {
          na: "NetSubType",
          ty: "int"
        },
        14: {
          na: "CardCode",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        15: {
          na: "CupID",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        16: {
          na: "SystemID",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        17: {
          na: "RomVer",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        18: {
          na: "ICCID",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        19: {
          na: "RomSize",
          ty: "int"
        }
      };
      cfg.CSysBombMsg = {
        1: {
          na: "Type",
          ty: "int"
        },
        2: {
          na: "Attribute",
          ty: "int"
        },
        3: {
          na: "Title",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        4: {
          na: "Msg",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        5: {
          na: "URL",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        6: {
          na: "Code",
          ty: "int"
        },
        7: {
          na: "UserID",
          ty: "int"
        }
      };
      cfg.CSysUpdateUserWealth = {
        1: {
          na: "UserID",
          ty: "int"
        },
        2: {
          na: "Coins",
          ty: "CUserCoin",
          ar: 1
        },
        3: {
          na: "Reason",
          ty: "int"
        },
        4: {
          na: "Msg",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        5: {
          na: "LogId",
          ty: "int"
        }
      };
      cfg.CUserCoin = {
        0: {
          na: "CoinID",
          ty: "int"
        },
        1: {
          na: "Amount",
          ty: "int"
        },
        2: {
          na: "AddFlag",
          ty: "int"
        }
      };
      cfg.CSysUserStatus = {
        1: {
          na: "RoomID",
          ty: "int"
        },
        2: {
          na: "GameID",
          ty: "int"
        },
        3: {
          na: "ErrMsg",
          ty: "byte",
          sty: "string",
          ar: 1
        }
      };
      cfg.CErrorMsg = {
        1: {
          na: "Code",
          ty: "int"
        },
        2: {
          na: "ErrMsg",
          ty: "byte",
          sty: "string",
          ar: 1
        }
      };
      cfg.CUpdatePosition = {
        1: {
          na: "Longitude",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        2: {
          na: "Latitude",
          ty: "byte",
          sty: "string",
          ar: 1
        },
        3: {
          na: "UserAddress",
          ty: "byte",
          sty: "string",
          ar: 1
        }
      };
    })(proto.cmd_sys.__cfg);
    proto.cmd_sys.CSysSoftInfo = function() {
      this.__className = "proto.cmd_sys.CSysSoftInfo";
      this.SoftVer = 0;
      this.LobbyVer = 0;
      this.SChannel = 0;
      this.MChannel = 0;
      this.SysType = 0;
      this.SysVer = "";
      this.HardName = "";
      this.HardType = "";
      this.HardCode = "";
      this.ScreenWidth = 0;
      this.ScreenHeight = 0;
      this.NetType = 0;
      this.NetSubType = 0;
      this.CardCode = "";
      this.CupID = "";
      this.SystemID = "";
      this.RomVer = "";
      this.ICCID = "";
      this.RomSize = 0;
    };
    proto.cmd_sys.CSysBombMsg = function() {
      this.__className = "proto.cmd_sys.CSysBombMsg";
      this.Type = 0;
      this.Attribute = 0;
      this.Title = "";
      this.Msg = "";
      this.URL = "";
      this.Code = 0;
      this.UserID = 0;
    };
    proto.cmd_sys.CSysUpdateUserWealth = function() {
      this.__className = "proto.cmd_sys.CSysUpdateUserWealth";
      this.UserID = 0;
      this.Coins = null;
      this.Reason = 0;
      this.Msg = "";
      this.LogId = 0;
    };
    proto.cmd_sys.CUserCoin = function() {
      this.__className = "proto.cmd_sys.CUserCoin";
      this.CoinID = 0;
      this.Amount = 0;
      this.AddFlag = 0;
    };
    proto.cmd_sys.CSysUserStatus = function() {
      this.__className = "proto.cmd_sys.CSysUserStatus";
      this.RoomID = 0;
      this.GameID = 0;
      this.ErrMsg = "";
    };
    proto.cmd_sys.CErrorMsg = function() {
      this.__className = "proto.cmd_sys.CErrorMsg";
      this.Code = 0;
      this.ErrMsg = "";
    };
    proto.cmd_sys.CUpdatePosition = function() {
      this.__className = "proto.cmd_sys.CUpdatePosition";
      this.Longitude = "";
      this.Latitude = "";
      this.UserAddress = "";
    };
    proto.cmd_sys.SYSTYPE = {
      SYSTYPE_ANDROID: 1,
      SYSTYPE_IOS: 2
    };
    proto.cmd_sys.COIN_ID = {
      COIN_ID_A: 1,
      COIN_ID_B: 2,
      COIN_ID_ROOMCARD: 3,
      COIN_ID_FREEZE: 4,
      COIN_ID_DIAMOND: 15
    };
    proto.cmd_sys.COIN_TYPE = {
      COIN_TYPE_SYNC: 0,
      COIN_TYPE_ADMIN: 1,
      COIN_TYPE_ROOM_CREATE: 2,
      COIN_TYPE_ROOM_BACK: 3,
      COIN_TYPE_MISSION: 4,
      COIN_TYPE_GAME_COST: 5,
      COIN_TYPE_GAME_GOT: 6,
      COIN_TYPE_SHOP: 7,
      COIN_TYPE_TRAN_SEND: 8,
      COIN_TYPE_TRAN_GOT: 9,
      COIN_TYPE_CASH: 10,
      COIN_TYPE_REBATE: 11
    };
    cc._RF.pop();
  }, {} ],
  comTool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c6112mgibVCMa/mPodRXo14", "comTool");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        wifiSpf: {
          default: [],
          type: cc.SpriteFrame
        },
        signalSpf: {
          default: [],
          type: cc.SpriteFrame
        },
        wifi: {
          default: null,
          type: cc.Sprite
        },
        power: {
          default: null,
          type: cc.Node
        },
        timeLab: {
          default: null,
          type: cc.Label
        },
        setBtn: {
          default: null,
          type: cc.Button
        }
      },
      onLoad: function onLoad() {
        this.setTime("17:20");
        this.setPower(2);
        this.setWifi(true, 2);
      },
      start: function start() {},
      setTime: function setTime(str) {
        this.timeLab.string = str;
      },
      setWifi: function setWifi(isWifi, num) {
        this.wifi.spriteFrame = isWifi ? this.wifiSpf[num] : this.signalSpf[num];
      },
      setPower: function setPower(num) {
        this.power.getChildByName("powerNum").width = num;
      },
      onSetCallBakc: function onSetCallBakc(cb, tag) {
        cb().bind(tag);
      }
    });
    cc._RF.pop();
  }, {} ],
  com_loc: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1b4dbT1qgdM3aTiG97F99MT", "com_loc");
    "use strict";
    window.i18n || (window.i18n = {});
    window.i18n.languages || (window.i18n.languages = {});
    window.i18n.languages.loc || (window.i18n.languages.loc = {});
    window.i18n.languages.loc.com = {
      lbl: {
        test: "\u6d4b\u8bd5",
        tip: "\u63d0\u793a",
        sure: "\u786e\u5b9a",
        cancel: "\u53d6\u6d88",
        update: "\u66f4\u65b0",
        login: "\u767b\u5f55\u4e2d...",
        connecting: "\u6b63\u5728\u8fde\u63a5\u670d\u52a1\u5668",
        retry: "\u91cd\u8bd5",
        restart: "\u91cd\u542f",
        loading: "\u6b63\u5728\u52a0\u8f7d",
        iknowed: "\u77e5\u9053\u4e86",
        reqInit: "\u6b63\u5728\u83b7\u53d6\u521d\u59cb\u5316\u914d\u7f6e...",
        reqUpdate: "\u6b63\u5728\u83b7\u53d6\u66f4\u65b0\u914d\u7f6e...",
        startHot: "\u5f00\u59cb\u66f4\u65b0",
        otherLogin: "\u4f60\u7684\u8d26\u53f7\u5728\u522b\u5904\u767b\u5f55",
        reLogin: "\u91cd\u65b0\u767b\u5f55",
        enterRoom: "\u6b63\u5728\u8fdb\u5165\u623f\u95f4...",
        roomIpLimit: "\u623f\u95f4ip\u9650\u5236",
        gettingLobbyConf: "\u6b63\u5728\u83b7\u53d6\u5927\u5385\u914d\u7f6e...",
        gettingSubGame: "\u6b63\u5728\u83b7\u53d6\u6e38\u620f\u6570\u636e...",
        hotfixing: "\u6709\u6e38\u620f\u6b63\u5728\u66f4\u65b0\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5",
        exit: "\u9000\u51fa",
        isExit: "\u662f\u5426\u9000\u51fa\u6e38\u620f",
        saveImgSucc: "\u4fdd\u5b58\u56fe\u7247\u6210\u529f",
        customer: "\u662f\u5426\u8fdb\u5165\u4eba\u5de5\u5ba2\u670d",
        withdrawSucc: "\u63d0\u73b0\u7533\u8bf7\u6210\u529f,\u7b49\u5f85\u5ba1\u6838\u901a\u8fc7",
        notBindPhone: "\u60a8\u672a\u7ed1\u5b9a\u624b\u673a,\u8bf7\u7ed1\u5b9a",
        bindPhone: "\u53bb\u7ed1\u5b9a",
        game: {
          applyBank: "\u7533\u8bf7\u4e0a\u5e84\u6210\u529f",
          banker: "\u4e0a\u5e84\u6210\u529f",
          downBanker: "\u4e0b\u5e84\u6210\u529f",
          applyDownBanker: "\u672c\u5c40\u7ed3\u675f\u540e\u4e0b\u5e84",
          betTips: "\u8bf7\u9009\u62e9\u7b79\u7801",
          betFail: "\u4e0b\u6ce8\u5931\u8d25\uff0c\u91d1\u5e01\u4e0d\u8db3",
          goldInadequate: "\u91d1\u5e01\u4e0d\u591f\u8d54\u4ed8,\u4e0d\u591f\u4e0b\u6ce8",
          isBanker: "\u5df2\u662f\u5e84\u5bb6,\u4e0d\u80fd\u4e0b\u6ce8"
        },
        exchange: {
          exchange: "\u5151\u6362",
          ali: "\u652f\u4ed8\u5b9d\u8d26\u53f7",
          wx: "\u5fae\u4fe1\u8d26\u53f7",
          bank: "\u94f6\u884c\u5361\u8d26\u53f7",
          whichBank: "\u5f00\u6237\u94f6\u884c",
          accouontTips: "\u8bf7\u8f93\u5165\u8d26\u53f7",
          nameTips: "\u8bf7\u8f93\u5165\u59d3\u540d",
          bankTips: "\u8bf7\u8f93\u5165\u5f00\u6237\u94f6\u884c",
          sum: "\u91d1\u989d",
          bankCard: "\u94f6\u884c\u5361",
          aliAccount: "\u652f\u4ed8\u5b9d\u8d26\u53f7",
          wxAccouont: "\u5fae\u4fe1\u8d26\u53f7",
          sumExchange: "\u5151\u6362\u91d1\u989d",
          bindAccount: "\u7ed1\u5b9a\u8d26\u53f7",
          tips: "\u63d0\u793a : (\u8bf7\u8ba4\u771f\u586b\u5199\u4fe1\u606f\uff0c\u4fe1\u606f\u9519\u8bef\u5c06\u5bfc\u81f4\u8d44\u91d1\u4e0d\u80fd\u5230\u8d26)"
        },
        register: {
          phoneNum: "\u624b\u673a\u53f7",
          code: "\u9a8c\u8bc1\u7801",
          phoneTips: "\u8bf7\u8f93\u5165\u624b\u673a\u53f7",
          codeTips: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
          phoneSendTips: "\u53d1\u9001\u6210\u529f",
          phoneErrTips: {
            err1: "\u8bf7\u8f93\u5165\u6b63\u786e\u624b\u673a\u53f7\u7801",
            err2: "\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801",
            err3: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"
          },
          sendSms: "\u83b7\u53d6\u9a8c\u8bc1\u7801"
        },
        userInfo: {
          logout: "\u767b\u51fa",
          name: "\u6635\u79f0:",
          ID: "ID:",
          sum: "\u603b\u8d44\u4ea7:",
          accoutA: "\u8d26\u6237A:",
          accoutB: "\u8d26\u6237B:",
          lastLogin: "\u4e0a\u6b21\u767b\u5f55:",
          phoneNum: "\u624b\u673a\u53f7\u7801:",
          accountDetail: "\u8d26\u6237\u8d44\u6599:"
        },
        extension: {
          share: "\u5206\u4eab\u5230",
          keepCode: "\u4fdd\u5b58\u4e8c\u7ef4\u7801",
          copyLink: "\u590d\u5236\u94fe\u63a5",
          bindID: "\u7ed1\u5b9a\u9080\u8bf7\u4ebaID",
          tips: "\u8bf7\u8f93\u5165\u7ed1\u5b9a\u4ebaID"
        }
      },
      err: {
        sol: {
          restart: "\u8bf7\u91cd\u542f\u6e38\u620f\u540e\u91cd\u8bd5",
          checkNet: "\u8bf7\u786e\u8ba4\u7f51\u7edc\u73af\u5883\u540e\u91cd\u8bd5",
          retying: "\u6b63\u5728\u8fdb\u884c\u7b2c%s\u6b21\u91cd\u8bd5",
          retryLater: "\u8bf7\u7a0d\u540e\u91cd\u8bd5"
        },
        reason: {
          serverResponse: "\u6570\u636e\u8fd4\u56de\u5f02\u5e38",
          netTimeOut: "\u7f51\u7edc\u8d85\u65f6",
          netErr: "\u7f51\u7edc\u9519\u8bef",
          socketErr: "\u670d\u52a1\u5668\u8fde\u63a5\u5931\u8d25",
          netBad: "\u5f53\u524d\u7f51\u7edc\u73af\u5883\u4e0d\u4f73",
          localLoadFaild: "\u6587\u4ef6\u52a0\u8f7d\u5931\u8d25",
          manifestLoadFailed: "\u6587\u4ef6\u6e05\u5355\u52a0\u8f7d\u5931\u8d25",
          manifestDowloadFailed: "\u6587\u4ef6\u6e05\u5355\u4e0b\u8f7d\u5931\u8d25",
          manifestParseFailed: "\u6587\u4ef6\u6e05\u5355\u89e3\u6790\u5931\u8d25",
          dataExpire: "\u6570\u636e\u8fc7\u671f",
          hotfixing: "\u6b63\u5728\u66f4\u65b0\u5b50\u6e38\u620f\uff0c\u65e0\u6cd5\u6267\u884c\u8be5\u64cd\u4f5c",
          loginFail: "\u767b\u5f55\u5931\u8d25"
        },
        action: {
          loadBundle: "\u52a0\u8f7d\u5b50\u6a21\u5757\u53d1\u751f\u9519\u8bef:%s,%s",
          httpUpdate: "\u8bf7\u6c42\u66f4\u65b0\u914d\u7f6e\u53d1\u751f\u9519\u8bef:%s.%s",
          noExistGame: "\u5b50\u6e38\u620f\u4e0d\u5b58\u5728\uff0c\u8bf7\u91cd\u542f\u6e38\u620f\u91cd\u8bd5\u3002",
          httpLobby: "\u8bf7\u6c42\u5927\u5385\u914d\u7f6e\u53d1\u751f\u9519\u8bef:%s,%s",
          hotUpdate: "\u66f4\u65b0\u5931\u8d25:%s,%s",
          httpSubGame: "\u8bf7\u6c42\u5b50\u6e38\u620f\u914d\u7f6e\u53d1\u751f\u9519\u8bef:%s,%s"
        }
      }
    };
    cc._RF.pop();
  }, {} ],
  com_zh: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2fd52fi4XFGZaut1TzmE7Ea", "com_zh");
    "use strict";
    window.i18n || (window.i18n = {});
    window.i18n.languages || (window.i18n.languages = {});
    window.i18n.languages.zh || (window.i18n.languages.zh = {});
    window.i18n.languages.zh.com = {
      lbl: {
        test: "\u6d4b\u8bd5",
        tip: "\u63d0\u793a",
        sure: "\u786e\u5b9a",
        cancel: "\u53d6\u6d88",
        update: "\u66f4\u65b0",
        login: "\u767b\u5f55\u4e2d...",
        connecting: "\u6b63\u5728\u8fde\u63a5\u670d\u52a1\u5668",
        retry: "\u91cd\u8bd5",
        restart: "\u91cd\u542f",
        loading: "\u6b63\u5728\u52a0\u8f7d",
        iknowed: "\u77e5\u9053\u4e86",
        reqInit: "\u6b63\u5728\u83b7\u53d6\u521d\u59cb\u5316\u914d\u7f6e...",
        reqUpdate: "\u6b63\u5728\u83b7\u53d6\u66f4\u65b0\u914d\u7f6e...",
        startHot: "\u5f00\u59cb\u66f4\u65b0",
        otherLogin: "\u4f60\u7684\u8d26\u53f7\u5728\u522b\u5904\u767b\u5f55",
        reLogin: "\u91cd\u65b0\u767b\u5f55",
        enterRoom: "\u6b63\u5728\u8fdb\u5165\u623f\u95f4...",
        roomIpLimit: "\u623f\u95f4ip\u9650\u5236",
        gettingLobbyConf: "\u6b63\u5728\u83b7\u53d6\u5927\u5385\u914d\u7f6e...",
        saveImgSucc: "\u4fdd\u5b58\u56fe\u7247\u6210\u529f",
        game: {
          applyBank: "\u7533\u8bf7\u4e0a\u5e84\u6210\u529f",
          banker: "\u4e0a\u5e84\u6210\u529f",
          downBanker: "\u4e0b\u5e84\u6210\u529f",
          applyDownBanker: "\u672c\u5c40\u7ed3\u675f\u540e\u4e0b\u5e84",
          betTips: "\u8bf7\u9009\u62e9\u7b79\u7801",
          goldInadequate: "\u91d1\u5e01\u4e0d\u591f\u8d54\u4ed8,\u4e0d\u591f\u4e0b\u6ce8"
        },
        exchange: {
          exchange: "\u5151\u6362",
          ali: "\u652f\u4ed8\u5b9d\u8d26\u53f7",
          wx: "\u5fae\u4fe1\u8d26\u53f7",
          bank: "\u94f6\u884c\u5361\u8d26\u53f7",
          whichBank: "\u5f00\u6237\u94f6\u884c",
          accouontTips: "\u8bf7\u8f93\u5165\u8d26\u53f7",
          nameTips: "\u8bf7\u8f93\u5165\u59d3\u540d",
          bankTips: "\u8bf7\u8f93\u5165\u5f00\u6237\u94f6\u884c",
          sum: "\u91d1\u989d",
          bankCard: "\u94f6\u884c\u5361",
          aliAccount: "\u652f\u4ed8\u5b9d\u8d26\u53f7",
          wxAccouont: "\u5fae\u4fe1\u8d26\u53f7",
          sumExchange: "\u5151\u6362\u91d1\u989d",
          bindAccount: "\u7ed1\u5b9a\u8d26\u53f7",
          tips: "\u63d0\u793a : (\u8bf7\u8ba4\u771f\u586b\u5199\u4fe1\u606f\uff0c\u4fe1\u606f\u9519\u8bef\u5c06\u5bfc\u81f4\u8d44\u91d1\u4e0d\u80fd\u5230\u8d26)"
        }
      },
      err: {
        sol: {
          restart: "\u662f\u5426\u91cd\u542f\u6e38\u620f?",
          checkNet: "\u8bf7\u786e\u8ba4\u7f51\u7edc\u73af\u5883\u540e\u91cd\u8bd5",
          retryLater: "\u8bf7\u7a0d\u540e\u91cd\u8bd5"
        },
        reason: {
          serverResponse: "\u6570\u636e\u8fd4\u56de\u5f02\u5e38",
          netTimeOut: "\u7f51\u7edc\u8d85\u65f6",
          netErr: "\u7f51\u7edc\u9519\u8bef",
          socketErr: "\u670d\u52a1\u5668\u8fde\u63a5\u5931\u8d25",
          netBad: "\u5f53\u524d\u7f51\u7edc\u73af\u5883\u4e0d\u4f73"
        },
        action: {
          httpUpdate: "\u8bf7\u6c42\u66f4\u65b0\u914d\u7f6e\u53d1\u751f\u9519\u8bef:%s.%s",
          noExistGame: "\u5b50\u6e38\u620f\u4e0d\u5b58\u5728\uff0c\u8bf7\u91cd\u542f\u6e38\u620f\u91cd\u8bd5\u3002",
          httpLobby: "\u8bf7\u6c42\u5927\u5385\u914d\u7f6e\u53d1\u751f\u9519\u8bef:%s,%s",
          hotUpdate: "\u66f4\u65b0\u5931\u8d25:%s,%s"
        }
      }
    };
    cc._RF.pop();
  }, {} ],
  config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "226446E019OpKK9GxaPpU2M", "config");
    "use strict";
    var conf = {};
    conf.project = {
      cid: 1e5,
      sid: 1,
      ver: "1.0.0",
      os: 3,
      pkg: "com.holygame.playcity",
      hotVer: "0.0.0",
      token: ""
    };
    conf.cache = {};
    conf.dev_info = {
      sysVer: "",
      hardName: "",
      hardType: 0,
      hardCode: "",
      screenWidth: 0,
      screenHeight: 0,
      netType: 0,
      netSubType: 0,
      cardCode: "",
      cpuId: "",
      systemId: "",
      romVer: "",
      iccid: "",
      macAddress: "",
      version: ""
    };
    conf.app_ver = "1.0.0";
    conf.app_build = "1.0.0";
    conf.aes_key = "wKQZCSh8H6zwPxXI";
    conf.orig_hot_ver = "1.0.0";
    conf.curr_hot_ver = "1.0.0";
    conf.target_hot_ver = "";
    conf.invoke_pair = null;
    conf.font = "Microsoft Yahei";
    conf.api = [ "http://47.92.232.163/" ];
    conf.test = 0;
    conf.http_try_count = 2;
    conf.common_ui_op_interval = 1e3;
    conf.platform = {
      Windows: {
        os: 3
      },
      iOS: {
        os: 2
      },
      Android: {
        os: 1
      },
      "OS X": {
        os: 4
      }
    };
    conf.wx_app_id = "wx66072d8aa99d309f";
    conf.wx_app_secret = "7d85118ca847e49ad4ca645b68e16211";
    false;
    module.exports = conf;
    cc._RF.pop();
  }, {
    debugConfig: "debugConfig"
  } ],
  "crypto-js": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "56b32NT+vZKLYBAn3TbGW6U", "crypto-js");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    (function(root, factory) {
      "object" === ("undefined" === typeof exports ? "undefined" : _typeof(exports)) ? module.exports = exports = factory() : "function" === typeof define && define.amd ? define([], factory) : root.CryptoJS = factory();
    })(void 0, function() {
      var CryptoJS = CryptoJS || function(Math, undefined) {
        var create = Object.create || function() {
          function F() {}
          return function(obj) {
            var subtype;
            F.prototype = obj;
            subtype = new F();
            F.prototype = null;
            return subtype;
          };
        }();
        var C = {};
        var C_lib = C.lib = {};
        var Base = C_lib.Base = function() {
          return {
            extend: function extend(overrides) {
              var subtype = create(this);
              overrides && subtype.mixIn(overrides);
              subtype.hasOwnProperty("init") && this.init !== subtype.init || (subtype.init = function() {
                subtype.$super.init.apply(this, arguments);
              });
              subtype.init.prototype = subtype;
              subtype.$super = this;
              return subtype;
            },
            create: function create() {
              var instance = this.extend();
              instance.init.apply(instance, arguments);
              return instance;
            },
            init: function init() {},
            mixIn: function mixIn(properties) {
              for (var propertyName in properties) properties.hasOwnProperty(propertyName) && (this[propertyName] = properties[propertyName]);
              properties.hasOwnProperty("toString") && (this.toString = properties.toString);
            },
            clone: function clone() {
              return this.init.prototype.extend(this);
            }
          };
        }();
        var WordArray = C_lib.WordArray = Base.extend({
          init: function init(words, sigBytes) {
            words = this.words = words || [];
            this.sigBytes = sigBytes != undefined ? sigBytes : 4 * words.length;
          },
          toString: function toString(encoder) {
            return (encoder || Hex).stringify(this);
          },
          concat: function concat(wordArray) {
            var thisWords = this.words;
            var thatWords = wordArray.words;
            var thisSigBytes = this.sigBytes;
            var thatSigBytes = wordArray.sigBytes;
            this.clamp();
            if (thisSigBytes % 4) for (var i = 0; i < thatSigBytes; i++) {
              var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
            } else for (var i = 0; i < thatSigBytes; i += 4) thisWords[thisSigBytes + i >>> 2] = thatWords[i >>> 2];
            this.sigBytes += thatSigBytes;
            return this;
          },
          clamp: function clamp() {
            var words = this.words;
            var sigBytes = this.sigBytes;
            words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
            words.length = Math.ceil(sigBytes / 4);
          },
          clone: function clone() {
            var clone = Base.clone.call(this);
            clone.words = this.words.slice(0);
            return clone;
          },
          random: function random(nBytes) {
            var words = [];
            var r = function r(m_w) {
              var m_w = m_w;
              var m_z = 987654321;
              var mask = 4294967295;
              return function() {
                m_z = 36969 * (65535 & m_z) + (m_z >> 16) & mask;
                m_w = 18e3 * (65535 & m_w) + (m_w >> 16) & mask;
                var result = (m_z << 16) + m_w & mask;
                result /= 4294967296;
                result += .5;
                return result * (Math.random() > .5 ? 1 : -1);
              };
            };
            for (var i = 0, rcache; i < nBytes; i += 4) {
              var _r = r(4294967296 * (rcache || Math.random()));
              rcache = 987654071 * _r();
              words.push(4294967296 * _r() | 0);
            }
            return new WordArray.init(words, nBytes);
          }
        });
        var C_enc = C.enc = {};
        var Hex = C_enc.Hex = {
          stringify: function stringify(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var hexChars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              hexChars.push((bite >>> 4).toString(16));
              hexChars.push((15 & bite).toString(16));
            }
            return hexChars.join("");
          },
          parse: function parse(hexStr) {
            var hexStrLength = hexStr.length;
            var words = [];
            for (var i = 0; i < hexStrLength; i += 2) words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
            return new WordArray.init(words, hexStrLength / 2);
          }
        };
        var Latin1 = C_enc.Latin1 = {
          stringify: function stringify(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var latin1Chars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              latin1Chars.push(String.fromCharCode(bite));
            }
            return latin1Chars.join("");
          },
          parse: function parse(latin1Str) {
            var latin1StrLength = latin1Str.length;
            var words = [];
            for (var i = 0; i < latin1StrLength; i++) words[i >>> 2] |= (255 & latin1Str.charCodeAt(i)) << 24 - i % 4 * 8;
            return new WordArray.init(words, latin1StrLength);
          }
        };
        var Utf8 = C_enc.Utf8 = {
          stringify: function stringify(wordArray) {
            try {
              return decodeURIComponent(escape(Latin1.stringify(wordArray)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function parse(utf8Str) {
            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
          }
        };
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
          reset: function reset() {
            this._data = new WordArray.init();
            this._nDataBytes = 0;
          },
          _append: function _append(data) {
            "string" == typeof data && (data = Utf8.parse(data));
            this._data.concat(data);
            this._nDataBytes += data.sigBytes;
          },
          _process: function _process(doFlush) {
            var data = this._data;
            var dataWords = data.words;
            var dataSigBytes = data.sigBytes;
            var blockSize = this.blockSize;
            var blockSizeBytes = 4 * blockSize;
            var nBlocksReady = dataSigBytes / blockSizeBytes;
            nBlocksReady = doFlush ? Math.ceil(nBlocksReady) : Math.max((0 | nBlocksReady) - this._minBufferSize, 0);
            var nWordsReady = nBlocksReady * blockSize;
            var nBytesReady = Math.min(4 * nWordsReady, dataSigBytes);
            if (nWordsReady) {
              for (var offset = 0; offset < nWordsReady; offset += blockSize) this._doProcessBlock(dataWords, offset);
              var processedWords = dataWords.splice(0, nWordsReady);
              data.sigBytes -= nBytesReady;
            }
            return new WordArray.init(processedWords, nBytesReady);
          },
          clone: function clone() {
            var clone = Base.clone.call(this);
            clone._data = this._data.clone();
            return clone;
          },
          _minBufferSize: 0
        });
        var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
          cfg: Base.extend(),
          init: function init(cfg) {
            this.cfg = this.cfg.extend(cfg);
            this.reset();
          },
          reset: function reset() {
            BufferedBlockAlgorithm.reset.call(this);
            this._doReset();
          },
          update: function update(messageUpdate) {
            this._append(messageUpdate);
            this._process();
            return this;
          },
          finalize: function finalize(messageUpdate) {
            messageUpdate && this._append(messageUpdate);
            var hash = this._doFinalize();
            return hash;
          },
          blockSize: 16,
          _createHelper: function _createHelper(hasher) {
            return function(message, cfg) {
              return new hasher.init(cfg).finalize(message);
            };
          },
          _createHmacHelper: function _createHmacHelper(hasher) {
            return function(message, key) {
              return new C_algo.HMAC.init(hasher, key).finalize(message);
            };
          }
        });
        var C_algo = C.algo = {};
        return C;
      }(Math);
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        var Base64 = C_enc.Base64 = {
          stringify: function stringify(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = this._map;
            wordArray.clamp();
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
              var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
              var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
              var triplet = byte1 << 16 | byte2 << 8 | byte3;
              for (var j = 0; j < 4 && i + .75 * j < sigBytes; j++) base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) while (base64Chars.length % 4) base64Chars.push(paddingChar);
            return base64Chars.join("");
          },
          parse: function parse(base64Str) {
            var base64StrLength = base64Str.length;
            var map = this._map;
            var reverseMap = this._reverseMap;
            if (!reverseMap) {
              reverseMap = this._reverseMap = [];
              for (var j = 0; j < map.length; j++) reverseMap[map.charCodeAt(j)] = j;
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              var paddingIndex = base64Str.indexOf(paddingChar);
              -1 !== paddingIndex && (base64StrLength = paddingIndex);
            }
            return parseLoop(base64Str, base64StrLength, reverseMap);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function parseLoop(base64Str, base64StrLength, reverseMap) {
          var words = [];
          var nBytes = 0;
          for (var i = 0; i < base64StrLength; i++) if (i % 4) {
            var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
            var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
            words[nBytes >>> 2] |= (bits1 | bits2) << 24 - nBytes % 4 * 8;
            nBytes++;
          }
          return WordArray.create(words, nBytes);
        }
      })();
      (function(Math) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var T = [];
        (function() {
          for (var i = 0; i < 64; i++) T[i] = 4294967296 * Math.abs(Math.sin(i + 1)) | 0;
        })();
        var MD5 = C_algo.MD5 = Hasher.extend({
          _doReset: function _doReset() {
            this._hash = new WordArray.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
          },
          _doProcessBlock: function _doProcessBlock(M, offset) {
            for (var i = 0; i < 16; i++) {
              var offset_i = offset + i;
              var M_offset_i = M[offset_i];
              M[offset_i] = 16711935 & (M_offset_i << 8 | M_offset_i >>> 24) | 4278255360 & (M_offset_i << 24 | M_offset_i >>> 8);
            }
            var H = this._hash.words;
            var M_offset_0 = M[offset + 0];
            var M_offset_1 = M[offset + 1];
            var M_offset_2 = M[offset + 2];
            var M_offset_3 = M[offset + 3];
            var M_offset_4 = M[offset + 4];
            var M_offset_5 = M[offset + 5];
            var M_offset_6 = M[offset + 6];
            var M_offset_7 = M[offset + 7];
            var M_offset_8 = M[offset + 8];
            var M_offset_9 = M[offset + 9];
            var M_offset_10 = M[offset + 10];
            var M_offset_11 = M[offset + 11];
            var M_offset_12 = M[offset + 12];
            var M_offset_13 = M[offset + 13];
            var M_offset_14 = M[offset + 14];
            var M_offset_15 = M[offset + 15];
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            a = FF(a, b, c, d, M_offset_0, 7, T[0]);
            d = FF(d, a, b, c, M_offset_1, 12, T[1]);
            c = FF(c, d, a, b, M_offset_2, 17, T[2]);
            b = FF(b, c, d, a, M_offset_3, 22, T[3]);
            a = FF(a, b, c, d, M_offset_4, 7, T[4]);
            d = FF(d, a, b, c, M_offset_5, 12, T[5]);
            c = FF(c, d, a, b, M_offset_6, 17, T[6]);
            b = FF(b, c, d, a, M_offset_7, 22, T[7]);
            a = FF(a, b, c, d, M_offset_8, 7, T[8]);
            d = FF(d, a, b, c, M_offset_9, 12, T[9]);
            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
            a = FF(a, b, c, d, M_offset_12, 7, T[12]);
            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
            b = FF(b, c, d, a, M_offset_15, 22, T[15]);
            a = GG(a, b, c, d, M_offset_1, 5, T[16]);
            d = GG(d, a, b, c, M_offset_6, 9, T[17]);
            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
            b = GG(b, c, d, a, M_offset_0, 20, T[19]);
            a = GG(a, b, c, d, M_offset_5, 5, T[20]);
            d = GG(d, a, b, c, M_offset_10, 9, T[21]);
            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
            b = GG(b, c, d, a, M_offset_4, 20, T[23]);
            a = GG(a, b, c, d, M_offset_9, 5, T[24]);
            d = GG(d, a, b, c, M_offset_14, 9, T[25]);
            c = GG(c, d, a, b, M_offset_3, 14, T[26]);
            b = GG(b, c, d, a, M_offset_8, 20, T[27]);
            a = GG(a, b, c, d, M_offset_13, 5, T[28]);
            d = GG(d, a, b, c, M_offset_2, 9, T[29]);
            c = GG(c, d, a, b, M_offset_7, 14, T[30]);
            b = GG(b, c, d, a, M_offset_12, 20, T[31]);
            a = HH(a, b, c, d, M_offset_5, 4, T[32]);
            d = HH(d, a, b, c, M_offset_8, 11, T[33]);
            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
            a = HH(a, b, c, d, M_offset_1, 4, T[36]);
            d = HH(d, a, b, c, M_offset_4, 11, T[37]);
            c = HH(c, d, a, b, M_offset_7, 16, T[38]);
            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
            a = HH(a, b, c, d, M_offset_13, 4, T[40]);
            d = HH(d, a, b, c, M_offset_0, 11, T[41]);
            c = HH(c, d, a, b, M_offset_3, 16, T[42]);
            b = HH(b, c, d, a, M_offset_6, 23, T[43]);
            a = HH(a, b, c, d, M_offset_9, 4, T[44]);
            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
            b = HH(b, c, d, a, M_offset_2, 23, T[47]);
            a = II(a, b, c, d, M_offset_0, 6, T[48]);
            d = II(d, a, b, c, M_offset_7, 10, T[49]);
            c = II(c, d, a, b, M_offset_14, 15, T[50]);
            b = II(b, c, d, a, M_offset_5, 21, T[51]);
            a = II(a, b, c, d, M_offset_12, 6, T[52]);
            d = II(d, a, b, c, M_offset_3, 10, T[53]);
            c = II(c, d, a, b, M_offset_10, 15, T[54]);
            b = II(b, c, d, a, M_offset_1, 21, T[55]);
            a = II(a, b, c, d, M_offset_8, 6, T[56]);
            d = II(d, a, b, c, M_offset_15, 10, T[57]);
            c = II(c, d, a, b, M_offset_6, 15, T[58]);
            b = II(b, c, d, a, M_offset_13, 21, T[59]);
            a = II(a, b, c, d, M_offset_4, 6, T[60]);
            d = II(d, a, b, c, M_offset_11, 10, T[61]);
            c = II(c, d, a, b, M_offset_2, 15, T[62]);
            b = II(b, c, d, a, M_offset_9, 21, T[63]);
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
          },
          _doFinalize: function _doFinalize() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = 8 * this._nDataBytes;
            var nBitsLeft = 8 * data.sigBytes;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            var nBitsTotalH = Math.floor(nBitsTotal / 4294967296);
            var nBitsTotalL = nBitsTotal;
            dataWords[15 + (nBitsLeft + 64 >>> 9 << 4)] = 16711935 & (nBitsTotalH << 8 | nBitsTotalH >>> 24) | 4278255360 & (nBitsTotalH << 24 | nBitsTotalH >>> 8);
            dataWords[14 + (nBitsLeft + 64 >>> 9 << 4)] = 16711935 & (nBitsTotalL << 8 | nBitsTotalL >>> 24) | 4278255360 & (nBitsTotalL << 24 | nBitsTotalL >>> 8);
            data.sigBytes = 4 * (dataWords.length + 1);
            this._process();
            var hash = this._hash;
            var H = hash.words;
            for (var i = 0; i < 4; i++) {
              var H_i = H[i];
              H[i] = 16711935 & (H_i << 8 | H_i >>> 24) | 4278255360 & (H_i << 24 | H_i >>> 8);
            }
            return hash;
          },
          clone: function clone() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        function FF(a, b, c, d, x, s, t) {
          var n = a + (b & c | ~b & d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function GG(a, b, c, d, x, s, t) {
          var n = a + (b & d | c & ~d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function HH(a, b, c, d, x, s, t) {
          var n = a + (b ^ c ^ d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function II(a, b, c, d, x, s, t) {
          var n = a + (c ^ (b | ~d)) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        C.MD5 = Hasher._createHelper(MD5);
        C.HmacMD5 = Hasher._createHmacHelper(MD5);
      })(Math);
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var W = [];
        var SHA1 = C_algo.SHA1 = Hasher.extend({
          _doReset: function _doReset() {
            this._hash = new WordArray.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
          },
          _doProcessBlock: function _doProcessBlock(M, offset) {
            var H = this._hash.words;
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            var e = H[4];
            for (var i = 0; i < 80; i++) {
              if (i < 16) W[i] = 0 | M[offset + i]; else {
                var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                W[i] = n << 1 | n >>> 31;
              }
              var t = (a << 5 | a >>> 27) + e + W[i];
              t += i < 20 ? 1518500249 + (b & c | ~b & d) : i < 40 ? 1859775393 + (b ^ c ^ d) : i < 60 ? (b & c | b & d | c & d) - 1894007588 : (b ^ c ^ d) - 899497514;
              e = d;
              d = c;
              c = b << 30 | b >>> 2;
              b = a;
              a = t;
            }
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
            H[4] = H[4] + e | 0;
          },
          _doFinalize: function _doFinalize() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = 8 * this._nDataBytes;
            var nBitsLeft = 8 * data.sigBytes;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[14 + (nBitsLeft + 64 >>> 9 << 4)] = Math.floor(nBitsTotal / 4294967296);
            dataWords[15 + (nBitsLeft + 64 >>> 9 << 4)] = nBitsTotal;
            data.sigBytes = 4 * dataWords.length;
            this._process();
            return this._hash;
          },
          clone: function clone() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        C.SHA1 = Hasher._createHelper(SHA1);
        C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
      })();
      (function(Math) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var H = [];
        var K = [];
        (function() {
          function isPrime(n) {
            var sqrtN = Math.sqrt(n);
            for (var factor = 2; factor <= sqrtN; factor++) if (!(n % factor)) return false;
            return true;
          }
          function getFractionalBits(n) {
            return 4294967296 * (n - (0 | n)) | 0;
          }
          var n = 2;
          var nPrime = 0;
          while (nPrime < 64) {
            if (isPrime(n)) {
              nPrime < 8 && (H[nPrime] = getFractionalBits(Math.pow(n, .5)));
              K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));
              nPrime++;
            }
            n++;
          }
        })();
        var W = [];
        var SHA256 = C_algo.SHA256 = Hasher.extend({
          _doReset: function _doReset() {
            this._hash = new WordArray.init(H.slice(0));
          },
          _doProcessBlock: function _doProcessBlock(M, offset) {
            var H = this._hash.words;
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            var e = H[4];
            var f = H[5];
            var g = H[6];
            var h = H[7];
            for (var i = 0; i < 64; i++) {
              if (i < 16) W[i] = 0 | M[offset + i]; else {
                var gamma0x = W[i - 15];
                var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
                var gamma1x = W[i - 2];
                var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
                W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
              }
              var ch = e & f ^ ~e & g;
              var maj = a & b ^ a & c ^ b & c;
              var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
              var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
              var t1 = h + sigma1 + ch + K[i] + W[i];
              var t2 = sigma0 + maj;
              h = g;
              g = f;
              f = e;
              e = d + t1 | 0;
              d = c;
              c = b;
              b = a;
              a = t1 + t2 | 0;
            }
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
            H[4] = H[4] + e | 0;
            H[5] = H[5] + f | 0;
            H[6] = H[6] + g | 0;
            H[7] = H[7] + h | 0;
          },
          _doFinalize: function _doFinalize() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = 8 * this._nDataBytes;
            var nBitsLeft = 8 * data.sigBytes;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[14 + (nBitsLeft + 64 >>> 9 << 4)] = Math.floor(nBitsTotal / 4294967296);
            dataWords[15 + (nBitsLeft + 64 >>> 9 << 4)] = nBitsTotal;
            data.sigBytes = 4 * dataWords.length;
            this._process();
            return this._hash;
          },
          clone: function clone() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        C.SHA256 = Hasher._createHelper(SHA256);
        C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
      })(Math);
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
          stringify: function stringify(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var utf16Chars = [];
            for (var i = 0; i < sigBytes; i += 2) {
              var codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
              utf16Chars.push(String.fromCharCode(codePoint));
            }
            return utf16Chars.join("");
          },
          parse: function parse(utf16Str) {
            var utf16StrLength = utf16Str.length;
            var words = [];
            for (var i = 0; i < utf16StrLength; i++) words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
            return WordArray.create(words, 2 * utf16StrLength);
          }
        };
        C_enc.Utf16LE = {
          stringify: function stringify(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var utf16Chars = [];
            for (var i = 0; i < sigBytes; i += 2) {
              var codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
              utf16Chars.push(String.fromCharCode(codePoint));
            }
            return utf16Chars.join("");
          },
          parse: function parse(utf16Str) {
            var utf16StrLength = utf16Str.length;
            var words = [];
            for (var i = 0; i < utf16StrLength; i++) words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
            return WordArray.create(words, 2 * utf16StrLength);
          }
        };
        function swapEndian(word) {
          return word << 8 & 4278255360 | word >>> 8 & 16711935;
        }
      })();
      (function() {
        if ("function" != typeof ArrayBuffer) return;
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var superInit = WordArray.init;
        var subInit = WordArray.init = function(typedArray) {
          typedArray instanceof ArrayBuffer && (typedArray = new Uint8Array(typedArray));
          (typedArray instanceof Int8Array || "undefined" !== typeof Uint8ClampedArray && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) && (typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength));
          if (typedArray instanceof Uint8Array) {
            var typedArrayByteLength = typedArray.byteLength;
            var words = [];
            for (var i = 0; i < typedArrayByteLength; i++) words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
            superInit.call(this, words, typedArrayByteLength);
          } else superInit.apply(this, arguments);
        };
        subInit.prototype = WordArray;
      })();
      (function(Math) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var _zl = WordArray.create([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13 ]);
        var _zr = WordArray.create([ 5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11 ]);
        var _sl = WordArray.create([ 11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6 ]);
        var _sr = WordArray.create([ 8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11 ]);
        var _hl = WordArray.create([ 0, 1518500249, 1859775393, 2400959708, 2840853838 ]);
        var _hr = WordArray.create([ 1352829926, 1548603684, 1836072691, 2053994217, 0 ]);
        var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
          _doReset: function _doReset() {
            this._hash = WordArray.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
          },
          _doProcessBlock: function _doProcessBlock(M, offset) {
            for (var i = 0; i < 16; i++) {
              var offset_i = offset + i;
              var M_offset_i = M[offset_i];
              M[offset_i] = 16711935 & (M_offset_i << 8 | M_offset_i >>> 24) | 4278255360 & (M_offset_i << 24 | M_offset_i >>> 8);
            }
            var H = this._hash.words;
            var hl = _hl.words;
            var hr = _hr.words;
            var zl = _zl.words;
            var zr = _zr.words;
            var sl = _sl.words;
            var sr = _sr.words;
            var al, bl, cl, dl, el;
            var ar, br, cr, dr, er;
            ar = al = H[0];
            br = bl = H[1];
            cr = cl = H[2];
            dr = dl = H[3];
            er = el = H[4];
            var t;
            for (var i = 0; i < 80; i += 1) {
              t = al + M[offset + zl[i]] | 0;
              t += i < 16 ? f1(bl, cl, dl) + hl[0] : i < 32 ? f2(bl, cl, dl) + hl[1] : i < 48 ? f3(bl, cl, dl) + hl[2] : i < 64 ? f4(bl, cl, dl) + hl[3] : f5(bl, cl, dl) + hl[4];
              t |= 0;
              t = rotl(t, sl[i]);
              t = t + el | 0;
              al = el;
              el = dl;
              dl = rotl(cl, 10);
              cl = bl;
              bl = t;
              t = ar + M[offset + zr[i]] | 0;
              t += i < 16 ? f5(br, cr, dr) + hr[0] : i < 32 ? f4(br, cr, dr) + hr[1] : i < 48 ? f3(br, cr, dr) + hr[2] : i < 64 ? f2(br, cr, dr) + hr[3] : f1(br, cr, dr) + hr[4];
              t |= 0;
              t = rotl(t, sr[i]);
              t = t + er | 0;
              ar = er;
              er = dr;
              dr = rotl(cr, 10);
              cr = br;
              br = t;
            }
            t = H[1] + cl + dr | 0;
            H[1] = H[2] + dl + er | 0;
            H[2] = H[3] + el + ar | 0;
            H[3] = H[4] + al + br | 0;
            H[4] = H[0] + bl + cr | 0;
            H[0] = t;
          },
          _doFinalize: function _doFinalize() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = 8 * this._nDataBytes;
            var nBitsLeft = 8 * data.sigBytes;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[14 + (nBitsLeft + 64 >>> 9 << 4)] = 16711935 & (nBitsTotal << 8 | nBitsTotal >>> 24) | 4278255360 & (nBitsTotal << 24 | nBitsTotal >>> 8);
            data.sigBytes = 4 * (dataWords.length + 1);
            this._process();
            var hash = this._hash;
            var H = hash.words;
            for (var i = 0; i < 5; i++) {
              var H_i = H[i];
              H[i] = 16711935 & (H_i << 8 | H_i >>> 24) | 4278255360 & (H_i << 24 | H_i >>> 8);
            }
            return hash;
          },
          clone: function clone() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        function f1(x, y, z) {
          return x ^ y ^ z;
        }
        function f2(x, y, z) {
          return x & y | ~x & z;
        }
        function f3(x, y, z) {
          return (x | ~y) ^ z;
        }
        function f4(x, y, z) {
          return x & z | y & ~z;
        }
        function f5(x, y, z) {
          return x ^ (y | ~z);
        }
        function rotl(x, n) {
          return x << n | x >>> 32 - n;
        }
        C.RIPEMD160 = Hasher._createHelper(RIPEMD160);
        C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
      })(Math);
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var C_enc = C.enc;
        var Utf8 = C_enc.Utf8;
        var C_algo = C.algo;
        var HMAC = C_algo.HMAC = Base.extend({
          init: function init(hasher, key) {
            hasher = this._hasher = new hasher.init();
            "string" == typeof key && (key = Utf8.parse(key));
            var hasherBlockSize = hasher.blockSize;
            var hasherBlockSizeBytes = 4 * hasherBlockSize;
            key.sigBytes > hasherBlockSizeBytes && (key = hasher.finalize(key));
            key.clamp();
            var oKey = this._oKey = key.clone();
            var iKey = this._iKey = key.clone();
            var oKeyWords = oKey.words;
            var iKeyWords = iKey.words;
            for (var i = 0; i < hasherBlockSize; i++) {
              oKeyWords[i] ^= 1549556828;
              iKeyWords[i] ^= 909522486;
            }
            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
            this.reset();
          },
          reset: function reset() {
            var hasher = this._hasher;
            hasher.reset();
            hasher.update(this._iKey);
          },
          update: function update(messageUpdate) {
            this._hasher.update(messageUpdate);
            return this;
          },
          finalize: function finalize(messageUpdate) {
            var hasher = this._hasher;
            var innerHash = hasher.finalize(messageUpdate);
            hasher.reset();
            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
            return hmac;
          }
        });
      })();
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var SHA1 = C_algo.SHA1;
        var HMAC = C_algo.HMAC;
        var PBKDF2 = C_algo.PBKDF2 = Base.extend({
          cfg: Base.extend({
            keySize: 4,
            hasher: SHA1,
            iterations: 1
          }),
          init: function init(cfg) {
            this.cfg = this.cfg.extend(cfg);
          },
          compute: function compute(password, salt) {
            var cfg = this.cfg;
            var hmac = HMAC.create(cfg.hasher, password);
            var derivedKey = WordArray.create();
            var blockIndex = WordArray.create([ 1 ]);
            var derivedKeyWords = derivedKey.words;
            var blockIndexWords = blockIndex.words;
            var keySize = cfg.keySize;
            var iterations = cfg.iterations;
            while (derivedKeyWords.length < keySize) {
              var block = hmac.update(salt).finalize(blockIndex);
              hmac.reset();
              var blockWords = block.words;
              var blockWordsLength = blockWords.length;
              var intermediate = block;
              for (var i = 1; i < iterations; i++) {
                intermediate = hmac.finalize(intermediate);
                hmac.reset();
                var intermediateWords = intermediate.words;
                for (var j = 0; j < blockWordsLength; j++) blockWords[j] ^= intermediateWords[j];
              }
              derivedKey.concat(block);
              blockIndexWords[0]++;
            }
            derivedKey.sigBytes = 4 * keySize;
            return derivedKey;
          }
        });
        C.PBKDF2 = function(password, salt, cfg) {
          return PBKDF2.create(cfg).compute(password, salt);
        };
      })();
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var MD5 = C_algo.MD5;
        var EvpKDF = C_algo.EvpKDF = Base.extend({
          cfg: Base.extend({
            keySize: 4,
            hasher: MD5,
            iterations: 1
          }),
          init: function init(cfg) {
            this.cfg = this.cfg.extend(cfg);
          },
          compute: function compute(password, salt) {
            var cfg = this.cfg;
            var hasher = cfg.hasher.create();
            var derivedKey = WordArray.create();
            var derivedKeyWords = derivedKey.words;
            var keySize = cfg.keySize;
            var iterations = cfg.iterations;
            while (derivedKeyWords.length < keySize) {
              block && hasher.update(block);
              var block = hasher.update(password).finalize(salt);
              hasher.reset();
              for (var i = 1; i < iterations; i++) {
                block = hasher.finalize(block);
                hasher.reset();
              }
              derivedKey.concat(block);
            }
            derivedKey.sigBytes = 4 * keySize;
            return derivedKey;
          }
        });
        C.EvpKDF = function(password, salt, cfg) {
          return EvpKDF.create(cfg).compute(password, salt);
        };
      })();
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var SHA256 = C_algo.SHA256;
        var SHA224 = C_algo.SHA224 = SHA256.extend({
          _doReset: function _doReset() {
            this._hash = new WordArray.init([ 3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428 ]);
          },
          _doFinalize: function _doFinalize() {
            var hash = SHA256._doFinalize.call(this);
            hash.sigBytes -= 4;
            return hash;
          }
        });
        C.SHA224 = SHA256._createHelper(SHA224);
        C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
      })();
      (function(undefined) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var X32WordArray = C_lib.WordArray;
        var C_x64 = C.x64 = {};
        var X64Word = C_x64.Word = Base.extend({
          init: function init(high, low) {
            this.high = high;
            this.low = low;
          }
        });
        var X64WordArray = C_x64.WordArray = Base.extend({
          init: function init(words, sigBytes) {
            words = this.words = words || [];
            this.sigBytes = sigBytes != undefined ? sigBytes : 8 * words.length;
          },
          toX32: function toX32() {
            var x64Words = this.words;
            var x64WordsLength = x64Words.length;
            var x32Words = [];
            for (var i = 0; i < x64WordsLength; i++) {
              var x64Word = x64Words[i];
              x32Words.push(x64Word.high);
              x32Words.push(x64Word.low);
            }
            return X32WordArray.create(x32Words, this.sigBytes);
          },
          clone: function clone() {
            var clone = Base.clone.call(this);
            var words = clone.words = this.words.slice(0);
            var wordsLength = words.length;
            for (var i = 0; i < wordsLength; i++) words[i] = words[i].clone();
            return clone;
          }
        });
      })();
      (function(Math) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var C_algo = C.algo;
        var RHO_OFFSETS = [];
        var PI_INDEXES = [];
        var ROUND_CONSTANTS = [];
        (function() {
          var x = 1, y = 0;
          for (var t = 0; t < 24; t++) {
            RHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;
            var newX = y % 5;
            var newY = (2 * x + 3 * y) % 5;
            x = newX;
            y = newY;
          }
          for (var x = 0; x < 5; x++) for (var y = 0; y < 5; y++) PI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;
          var LFSR = 1;
          for (var i = 0; i < 24; i++) {
            var roundConstantMsw = 0;
            var roundConstantLsw = 0;
            for (var j = 0; j < 7; j++) {
              if (1 & LFSR) {
                var bitPosition = (1 << j) - 1;
                bitPosition < 32 ? roundConstantLsw ^= 1 << bitPosition : roundConstantMsw ^= 1 << bitPosition - 32;
              }
              128 & LFSR ? LFSR = LFSR << 1 ^ 113 : LFSR <<= 1;
            }
            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
          }
        })();
        var T = [];
        (function() {
          for (var i = 0; i < 25; i++) T[i] = X64Word.create();
        })();
        var SHA3 = C_algo.SHA3 = Hasher.extend({
          cfg: Hasher.cfg.extend({
            outputLength: 512
          }),
          _doReset: function _doReset() {
            var state = this._state = [];
            for (var i = 0; i < 25; i++) state[i] = new X64Word.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function _doProcessBlock(M, offset) {
            var state = this._state;
            var nBlockSizeLanes = this.blockSize / 2;
            for (var i = 0; i < nBlockSizeLanes; i++) {
              var M2i = M[offset + 2 * i];
              var M2i1 = M[offset + 2 * i + 1];
              M2i = 16711935 & (M2i << 8 | M2i >>> 24) | 4278255360 & (M2i << 24 | M2i >>> 8);
              M2i1 = 16711935 & (M2i1 << 8 | M2i1 >>> 24) | 4278255360 & (M2i1 << 24 | M2i1 >>> 8);
              var lane = state[i];
              lane.high ^= M2i1;
              lane.low ^= M2i;
            }
            for (var round = 0; round < 24; round++) {
              for (var x = 0; x < 5; x++) {
                var tMsw = 0, tLsw = 0;
                for (var y = 0; y < 5; y++) {
                  var lane = state[x + 5 * y];
                  tMsw ^= lane.high;
                  tLsw ^= lane.low;
                }
                var Tx = T[x];
                Tx.high = tMsw;
                Tx.low = tLsw;
              }
              for (var x = 0; x < 5; x++) {
                var Tx4 = T[(x + 4) % 5];
                var Tx1 = T[(x + 1) % 5];
                var Tx1Msw = Tx1.high;
                var Tx1Lsw = Tx1.low;
                var tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
                var tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);
                for (var y = 0; y < 5; y++) {
                  var lane = state[x + 5 * y];
                  lane.high ^= tMsw;
                  lane.low ^= tLsw;
                }
              }
              for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
                var lane = state[laneIndex];
                var laneMsw = lane.high;
                var laneLsw = lane.low;
                var rhoOffset = RHO_OFFSETS[laneIndex];
                if (rhoOffset < 32) {
                  var tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
                  var tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
                } else {
                  var tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
                  var tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
                }
                var TPiLane = T[PI_INDEXES[laneIndex]];
                TPiLane.high = tMsw;
                TPiLane.low = tLsw;
              }
              var T0 = T[0];
              var state0 = state[0];
              T0.high = state0.high;
              T0.low = state0.low;
              for (var x = 0; x < 5; x++) for (var y = 0; y < 5; y++) {
                var laneIndex = x + 5 * y;
                var lane = state[laneIndex];
                var TLane = T[laneIndex];
                var Tx1Lane = T[(x + 1) % 5 + 5 * y];
                var Tx2Lane = T[(x + 2) % 5 + 5 * y];
                lane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
                lane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
              }
              var lane = state[0];
              var roundConstant = ROUND_CONSTANTS[round];
              lane.high ^= roundConstant.high;
              lane.low ^= roundConstant.low;
            }
          },
          _doFinalize: function _doFinalize() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = 8 * this._nDataBytes;
            var nBitsLeft = 8 * data.sigBytes;
            var blockSizeBits = 32 * this.blockSize;
            dataWords[nBitsLeft >>> 5] |= 1 << 24 - nBitsLeft % 32;
            dataWords[(Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 128;
            data.sigBytes = 4 * dataWords.length;
            this._process();
            var state = this._state;
            var outputLengthBytes = this.cfg.outputLength / 8;
            var outputLengthLanes = outputLengthBytes / 8;
            var hashWords = [];
            for (var i = 0; i < outputLengthLanes; i++) {
              var lane = state[i];
              var laneMsw = lane.high;
              var laneLsw = lane.low;
              laneMsw = 16711935 & (laneMsw << 8 | laneMsw >>> 24) | 4278255360 & (laneMsw << 24 | laneMsw >>> 8);
              laneLsw = 16711935 & (laneLsw << 8 | laneLsw >>> 24) | 4278255360 & (laneLsw << 24 | laneLsw >>> 8);
              hashWords.push(laneLsw);
              hashWords.push(laneMsw);
            }
            return new WordArray.init(hashWords, outputLengthBytes);
          },
          clone: function clone() {
            var clone = Hasher.clone.call(this);
            var state = clone._state = this._state.slice(0);
            for (var i = 0; i < 25; i++) state[i] = state[i].clone();
            return clone;
          }
        });
        C.SHA3 = Hasher._createHelper(SHA3);
        C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
      })(Math);
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Hasher = C_lib.Hasher;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var X64WordArray = C_x64.WordArray;
        var C_algo = C.algo;
        function X64Word_create() {
          return X64Word.create.apply(X64Word, arguments);
        }
        var K = [ X64Word_create(1116352408, 3609767458), X64Word_create(1899447441, 602891725), X64Word_create(3049323471, 3964484399), X64Word_create(3921009573, 2173295548), X64Word_create(961987163, 4081628472), X64Word_create(1508970993, 3053834265), X64Word_create(2453635748, 2937671579), X64Word_create(2870763221, 3664609560), X64Word_create(3624381080, 2734883394), X64Word_create(310598401, 1164996542), X64Word_create(607225278, 1323610764), X64Word_create(1426881987, 3590304994), X64Word_create(1925078388, 4068182383), X64Word_create(2162078206, 991336113), X64Word_create(2614888103, 633803317), X64Word_create(3248222580, 3479774868), X64Word_create(3835390401, 2666613458), X64Word_create(4022224774, 944711139), X64Word_create(264347078, 2341262773), X64Word_create(604807628, 2007800933), X64Word_create(770255983, 1495990901), X64Word_create(1249150122, 1856431235), X64Word_create(1555081692, 3175218132), X64Word_create(1996064986, 2198950837), X64Word_create(2554220882, 3999719339), X64Word_create(2821834349, 766784016), X64Word_create(2952996808, 2566594879), X64Word_create(3210313671, 3203337956), X64Word_create(3336571891, 1034457026), X64Word_create(3584528711, 2466948901), X64Word_create(113926993, 3758326383), X64Word_create(338241895, 168717936), X64Word_create(666307205, 1188179964), X64Word_create(773529912, 1546045734), X64Word_create(1294757372, 1522805485), X64Word_create(1396182291, 2643833823), X64Word_create(1695183700, 2343527390), X64Word_create(1986661051, 1014477480), X64Word_create(2177026350, 1206759142), X64Word_create(2456956037, 344077627), X64Word_create(2730485921, 1290863460), X64Word_create(2820302411, 3158454273), X64Word_create(3259730800, 3505952657), X64Word_create(3345764771, 106217008), X64Word_create(3516065817, 3606008344), X64Word_create(3600352804, 1432725776), X64Word_create(4094571909, 1467031594), X64Word_create(275423344, 851169720), X64Word_create(430227734, 3100823752), X64Word_create(506948616, 1363258195), X64Word_create(659060556, 3750685593), X64Word_create(883997877, 3785050280), X64Word_create(958139571, 3318307427), X64Word_create(1322822218, 3812723403), X64Word_create(1537002063, 2003034995), X64Word_create(1747873779, 3602036899), X64Word_create(1955562222, 1575990012), X64Word_create(2024104815, 1125592928), X64Word_create(2227730452, 2716904306), X64Word_create(2361852424, 442776044), X64Word_create(2428436474, 593698344), X64Word_create(2756734187, 3733110249), X64Word_create(3204031479, 2999351573), X64Word_create(3329325298, 3815920427), X64Word_create(3391569614, 3928383900), X64Word_create(3515267271, 566280711), X64Word_create(3940187606, 3454069534), X64Word_create(4118630271, 4000239992), X64Word_create(116418474, 1914138554), X64Word_create(174292421, 2731055270), X64Word_create(289380356, 3203993006), X64Word_create(460393269, 320620315), X64Word_create(685471733, 587496836), X64Word_create(852142971, 1086792851), X64Word_create(1017036298, 365543100), X64Word_create(1126000580, 2618297676), X64Word_create(1288033470, 3409855158), X64Word_create(1501505948, 4234509866), X64Word_create(1607167915, 987167468), X64Word_create(1816402316, 1246189591) ];
        var W = [];
        (function() {
          for (var i = 0; i < 80; i++) W[i] = X64Word_create();
        })();
        var SHA512 = C_algo.SHA512 = Hasher.extend({
          _doReset: function _doReset() {
            this._hash = new X64WordArray.init([ new X64Word.init(1779033703, 4089235720), new X64Word.init(3144134277, 2227873595), new X64Word.init(1013904242, 4271175723), new X64Word.init(2773480762, 1595750129), new X64Word.init(1359893119, 2917565137), new X64Word.init(2600822924, 725511199), new X64Word.init(528734635, 4215389547), new X64Word.init(1541459225, 327033209) ]);
          },
          _doProcessBlock: function _doProcessBlock(M, offset) {
            var H = this._hash.words;
            var H0 = H[0];
            var H1 = H[1];
            var H2 = H[2];
            var H3 = H[3];
            var H4 = H[4];
            var H5 = H[5];
            var H6 = H[6];
            var H7 = H[7];
            var H0h = H0.high;
            var H0l = H0.low;
            var H1h = H1.high;
            var H1l = H1.low;
            var H2h = H2.high;
            var H2l = H2.low;
            var H3h = H3.high;
            var H3l = H3.low;
            var H4h = H4.high;
            var H4l = H4.low;
            var H5h = H5.high;
            var H5l = H5.low;
            var H6h = H6.high;
            var H6l = H6.low;
            var H7h = H7.high;
            var H7l = H7.low;
            var ah = H0h;
            var al = H0l;
            var bh = H1h;
            var bl = H1l;
            var ch = H2h;
            var cl = H2l;
            var dh = H3h;
            var dl = H3l;
            var eh = H4h;
            var el = H4l;
            var fh = H5h;
            var fl = H5l;
            var gh = H6h;
            var gl = H6l;
            var hh = H7h;
            var hl = H7l;
            for (var i = 0; i < 80; i++) {
              var Wi = W[i];
              if (i < 16) {
                var Wih = Wi.high = 0 | M[offset + 2 * i];
                var Wil = Wi.low = 0 | M[offset + 2 * i + 1];
              } else {
                var gamma0x = W[i - 15];
                var gamma0xh = gamma0x.high;
                var gamma0xl = gamma0x.low;
                var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
                var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);
                var gamma1x = W[i - 2];
                var gamma1xh = gamma1x.high;
                var gamma1xl = gamma1x.low;
                var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
                var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);
                var Wi7 = W[i - 7];
                var Wi7h = Wi7.high;
                var Wi7l = Wi7.low;
                var Wi16 = W[i - 16];
                var Wi16h = Wi16.high;
                var Wi16l = Wi16.low;
                var Wil = gamma0l + Wi7l;
                var Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
                var Wil = Wil + gamma1l;
                var Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
                var Wil = Wil + Wi16l;
                var Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
                Wi.high = Wih;
                Wi.low = Wil;
              }
              var chh = eh & fh ^ ~eh & gh;
              var chl = el & fl ^ ~el & gl;
              var majh = ah & bh ^ ah & ch ^ bh & ch;
              var majl = al & bl ^ al & cl ^ bl & cl;
              var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
              var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
              var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
              var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);
              var Ki = K[i];
              var Kih = Ki.high;
              var Kil = Ki.low;
              var t1l = hl + sigma1l;
              var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
              var t1l = t1l + chl;
              var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
              var t1l = t1l + Kil;
              var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
              var t1l = t1l + Wil;
              var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);
              var t2l = sigma0l + majl;
              var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);
              hh = gh;
              hl = gl;
              gh = fh;
              gl = fl;
              fh = eh;
              fl = el;
              el = dl + t1l | 0;
              eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
              dh = ch;
              dl = cl;
              ch = bh;
              cl = bl;
              bh = ah;
              bl = al;
              al = t1l + t2l | 0;
              ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
            }
            H0l = H0.low = H0l + al;
            H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
            H1l = H1.low = H1l + bl;
            H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
            H2l = H2.low = H2l + cl;
            H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
            H3l = H3.low = H3l + dl;
            H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
            H4l = H4.low = H4l + el;
            H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
            H5l = H5.low = H5l + fl;
            H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
            H6l = H6.low = H6l + gl;
            H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
            H7l = H7.low = H7l + hl;
            H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
          },
          _doFinalize: function _doFinalize() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = 8 * this._nDataBytes;
            var nBitsLeft = 8 * data.sigBytes;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[30 + (nBitsLeft + 128 >>> 10 << 5)] = Math.floor(nBitsTotal / 4294967296);
            dataWords[31 + (nBitsLeft + 128 >>> 10 << 5)] = nBitsTotal;
            data.sigBytes = 4 * dataWords.length;
            this._process();
            var hash = this._hash.toX32();
            return hash;
          },
          clone: function clone() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          },
          blockSize: 32
        });
        C.SHA512 = Hasher._createHelper(SHA512);
        C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
      })();
      (function() {
        var C = CryptoJS;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var X64WordArray = C_x64.WordArray;
        var C_algo = C.algo;
        var SHA512 = C_algo.SHA512;
        var SHA384 = C_algo.SHA384 = SHA512.extend({
          _doReset: function _doReset() {
            this._hash = new X64WordArray.init([ new X64Word.init(3418070365, 3238371032), new X64Word.init(1654270250, 914150663), new X64Word.init(2438529370, 812702999), new X64Word.init(355462360, 4144912697), new X64Word.init(1731405415, 4290775857), new X64Word.init(2394180231, 1750603025), new X64Word.init(3675008525, 1694076839), new X64Word.init(1203062813, 3204075428) ]);
          },
          _doFinalize: function _doFinalize() {
            var hash = SHA512._doFinalize.call(this);
            hash.sigBytes -= 16;
            return hash;
          }
        });
        C.SHA384 = SHA512._createHelper(SHA384);
        C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
      })();
      CryptoJS.lib.Cipher || function(undefined) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
        var C_enc = C.enc;
        var Utf8 = C_enc.Utf8;
        var Base64 = C_enc.Base64;
        var C_algo = C.algo;
        var EvpKDF = C_algo.EvpKDF;
        var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
          cfg: Base.extend(),
          createEncryptor: function createEncryptor(key, cfg) {
            return this.create(this._ENC_XFORM_MODE, key, cfg);
          },
          createDecryptor: function createDecryptor(key, cfg) {
            return this.create(this._DEC_XFORM_MODE, key, cfg);
          },
          init: function init(xformMode, key, cfg) {
            this.cfg = this.cfg.extend(cfg);
            this._xformMode = xformMode;
            this._key = key;
            this.reset();
          },
          reset: function reset() {
            BufferedBlockAlgorithm.reset.call(this);
            this._doReset();
          },
          process: function process(dataUpdate) {
            this._append(dataUpdate);
            return this._process();
          },
          finalize: function finalize(dataUpdate) {
            dataUpdate && this._append(dataUpdate);
            var finalProcessedData = this._doFinalize();
            return finalProcessedData;
          },
          keySize: 4,
          ivSize: 4,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          _createHelper: function() {
            function selectCipherStrategy(key) {
              return "string" == typeof key ? PasswordBasedCipher : SerializableCipher;
            }
            return function(cipher) {
              return {
                encrypt: function encrypt(message, key, cfg) {
                  return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
                },
                decrypt: function decrypt(ciphertext, key, cfg) {
                  return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
                }
              };
            };
          }()
        });
        var StreamCipher = C_lib.StreamCipher = Cipher.extend({
          _doFinalize: function _doFinalize() {
            var finalProcessedBlocks = this._process(true);
            return finalProcessedBlocks;
          },
          blockSize: 1
        });
        var C_mode = C.mode = {};
        var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
          createEncryptor: function createEncryptor(cipher, iv) {
            return this.Encryptor.create(cipher, iv);
          },
          createDecryptor: function createDecryptor(cipher, iv) {
            return this.Decryptor.create(cipher, iv);
          },
          init: function init(cipher, iv) {
            this._cipher = cipher;
            this._iv = iv;
          }
        });
        var CBC = C_mode.CBC = function() {
          var CBC = BlockCipherMode.extend();
          CBC.Encryptor = CBC.extend({
            processBlock: function processBlock(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              xorBlock.call(this, words, offset, blockSize);
              cipher.encryptBlock(words, offset);
              this._prevBlock = words.slice(offset, offset + blockSize);
            }
          });
          CBC.Decryptor = CBC.extend({
            processBlock: function processBlock(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var thisBlock = words.slice(offset, offset + blockSize);
              cipher.decryptBlock(words, offset);
              xorBlock.call(this, words, offset, blockSize);
              this._prevBlock = thisBlock;
            }
          });
          function xorBlock(words, offset, blockSize) {
            var iv = this._iv;
            if (iv) {
              var block = iv;
              this._iv = undefined;
            } else var block = this._prevBlock;
            for (var i = 0; i < blockSize; i++) words[offset + i] ^= block[i];
          }
          return CBC;
        }();
        var C_pad = C.pad = {};
        var Pkcs7 = C_pad.Pkcs7 = {
          pad: function pad(data, blockSize) {
            var blockSizeBytes = 4 * blockSize;
            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
            var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;
            var paddingWords = [];
            for (var i = 0; i < nPaddingBytes; i += 4) paddingWords.push(paddingWord);
            var padding = WordArray.create(paddingWords, nPaddingBytes);
            data.concat(padding);
          },
          unpad: function unpad(data) {
            var nPaddingBytes = 255 & data.words[data.sigBytes - 1 >>> 2];
            data.sigBytes -= nPaddingBytes;
          }
        };
        var BlockCipher = C_lib.BlockCipher = Cipher.extend({
          cfg: Cipher.cfg.extend({
            mode: CBC,
            padding: Pkcs7
          }),
          reset: function reset() {
            Cipher.reset.call(this);
            var cfg = this.cfg;
            var iv = cfg.iv;
            var mode = cfg.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) var modeCreator = mode.createEncryptor; else {
              var modeCreator = mode.createDecryptor;
              this._minBufferSize = 1;
            }
            if (this._mode && this._mode.__creator == modeCreator) this._mode.init(this, iv && iv.words); else {
              this._mode = modeCreator.call(mode, this, iv && iv.words);
              this._mode.__creator = modeCreator;
            }
          },
          _doProcessBlock: function _doProcessBlock(words, offset) {
            this._mode.processBlock(words, offset);
          },
          _doFinalize: function _doFinalize() {
            var padding = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
              padding.pad(this._data, this.blockSize);
              var finalProcessedBlocks = this._process(true);
            } else {
              var finalProcessedBlocks = this._process(true);
              padding.unpad(finalProcessedBlocks);
            }
            return finalProcessedBlocks;
          },
          blockSize: 4
        });
        var CipherParams = C_lib.CipherParams = Base.extend({
          init: function init(cipherParams) {
            this.mixIn(cipherParams);
          },
          toString: function toString(formatter) {
            return (formatter || this.formatter).stringify(this);
          }
        });
        var C_format = C.format = {};
        var OpenSSLFormatter = C_format.OpenSSL = {
          stringify: function stringify(cipherParams) {
            var ciphertext = cipherParams.ciphertext;
            var salt = cipherParams.salt;
            if (salt) var wordArray = WordArray.create([ 1398893684, 1701076831 ]).concat(salt).concat(ciphertext); else var wordArray = ciphertext;
            return wordArray.toString(Base64);
          },
          parse: function parse(openSSLStr) {
            var ciphertext = Base64.parse(openSSLStr);
            var ciphertextWords = ciphertext.words;
            if (1398893684 == ciphertextWords[0] && 1701076831 == ciphertextWords[1]) {
              var salt = WordArray.create(ciphertextWords.slice(2, 4));
              ciphertextWords.splice(0, 4);
              ciphertext.sigBytes -= 16;
            }
            return CipherParams.create({
              ciphertext: ciphertext,
              salt: salt
            });
          }
        };
        var SerializableCipher = C_lib.SerializableCipher = Base.extend({
          cfg: Base.extend({
            format: OpenSSLFormatter
          }),
          encrypt: function encrypt(cipher, message, key, cfg) {
            cfg = this.cfg.extend(cfg);
            var encryptor = cipher.createEncryptor(key, cfg);
            var ciphertext = encryptor.finalize(message);
            var cipherCfg = encryptor.cfg;
            return CipherParams.create({
              ciphertext: ciphertext,
              key: key,
              iv: cipherCfg.iv,
              algorithm: cipher,
              mode: cipherCfg.mode,
              padding: cipherCfg.padding,
              blockSize: cipher.blockSize,
              formatter: cfg.format
            });
          },
          decrypt: function decrypt(cipher, ciphertext, key, cfg) {
            cfg = this.cfg.extend(cfg);
            ciphertext = this._parse(ciphertext, cfg.format);
            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
            return plaintext;
          },
          _parse: function _parse(ciphertext, format) {
            return "string" == typeof ciphertext ? format.parse(ciphertext, this) : ciphertext;
          }
        });
        var C_kdf = C.kdf = {};
        var OpenSSLKdf = C_kdf.OpenSSL = {
          execute: function execute(password, keySize, ivSize, salt) {
            salt || (salt = WordArray.random(8));
            var key = EvpKDF.create({
              keySize: keySize + ivSize
            }).compute(password, salt);
            var iv = WordArray.create(key.words.slice(keySize), 4 * ivSize);
            key.sigBytes = 4 * keySize;
            return CipherParams.create({
              key: key,
              iv: iv,
              salt: salt
            });
          }
        };
        var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
          cfg: SerializableCipher.cfg.extend({
            kdf: OpenSSLKdf
          }),
          encrypt: function encrypt(cipher, message, password, cfg) {
            cfg = this.cfg.extend(cfg);
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);
            cfg.iv = derivedParams.iv;
            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);
            ciphertext.mixIn(derivedParams);
            return ciphertext;
          },
          decrypt: function decrypt(cipher, ciphertext, password, cfg) {
            cfg = this.cfg.extend(cfg);
            ciphertext = this._parse(ciphertext, cfg.format);
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);
            cfg.iv = derivedParams.iv;
            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
            return plaintext;
          }
        });
      }();
      CryptoJS.mode.CFB = function() {
        var CFB = CryptoJS.lib.BlockCipherMode.extend();
        CFB.Encryptor = CFB.extend({
          processBlock: function processBlock(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
            this._prevBlock = words.slice(offset, offset + blockSize);
          }
        });
        CFB.Decryptor = CFB.extend({
          processBlock: function processBlock(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var thisBlock = words.slice(offset, offset + blockSize);
            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
            this._prevBlock = thisBlock;
          }
        });
        function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
          var iv = this._iv;
          if (iv) {
            var keystream = iv.slice(0);
            this._iv = void 0;
          } else var keystream = this._prevBlock;
          cipher.encryptBlock(keystream, 0);
          for (var i = 0; i < blockSize; i++) words[offset + i] ^= keystream[i];
        }
        return CFB;
      }();
      CryptoJS.mode.ECB = function() {
        var ECB = CryptoJS.lib.BlockCipherMode.extend();
        ECB.Encryptor = ECB.extend({
          processBlock: function processBlock(words, offset) {
            this._cipher.encryptBlock(words, offset);
          }
        });
        ECB.Decryptor = ECB.extend({
          processBlock: function processBlock(words, offset) {
            this._cipher.decryptBlock(words, offset);
          }
        });
        return ECB;
      }();
      CryptoJS.pad.AnsiX923 = {
        pad: function pad(data, blockSize) {
          var dataSigBytes = data.sigBytes;
          var blockSizeBytes = 4 * blockSize;
          var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;
          var lastBytePos = dataSigBytes + nPaddingBytes - 1;
          data.clamp();
          data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
          data.sigBytes += nPaddingBytes;
        },
        unpad: function unpad(data) {
          var nPaddingBytes = 255 & data.words[data.sigBytes - 1 >>> 2];
          data.sigBytes -= nPaddingBytes;
        }
      };
      CryptoJS.pad.Iso10126 = {
        pad: function pad(data, blockSize) {
          var blockSizeBytes = 4 * blockSize;
          var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
          data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS.lib.WordArray.create([ nPaddingBytes << 24 ], 1));
        },
        unpad: function unpad(data) {
          var nPaddingBytes = 255 & data.words[data.sigBytes - 1 >>> 2];
          data.sigBytes -= nPaddingBytes;
        }
      };
      CryptoJS.pad.Iso97971 = {
        pad: function pad(data, blockSize) {
          data.concat(CryptoJS.lib.WordArray.create([ 2147483648 ], 1));
          CryptoJS.pad.ZeroPadding.pad(data, blockSize);
        },
        unpad: function unpad(data) {
          CryptoJS.pad.ZeroPadding.unpad(data);
          data.sigBytes--;
        }
      };
      CryptoJS.mode.OFB = function() {
        var OFB = CryptoJS.lib.BlockCipherMode.extend();
        var Encryptor = OFB.Encryptor = OFB.extend({
          processBlock: function processBlock(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var keystream = this._keystream;
            if (iv) {
              keystream = this._keystream = iv.slice(0);
              this._iv = void 0;
            }
            cipher.encryptBlock(keystream, 0);
            for (var i = 0; i < blockSize; i++) words[offset + i] ^= keystream[i];
          }
        });
        OFB.Decryptor = Encryptor;
        return OFB;
      }();
      CryptoJS.pad.NoPadding = {
        pad: function pad() {},
        unpad: function unpad() {}
      };
      (function(undefined) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var CipherParams = C_lib.CipherParams;
        var C_enc = C.enc;
        var Hex = C_enc.Hex;
        var C_format = C.format;
        var HexFormatter = C_format.Hex = {
          stringify: function stringify(cipherParams) {
            return cipherParams.ciphertext.toString(Hex);
          },
          parse: function parse(input) {
            var ciphertext = Hex.parse(input);
            return CipherParams.create({
              ciphertext: ciphertext
            });
          }
        };
      })();
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        var SBOX = [];
        var INV_SBOX = [];
        var SUB_MIX_0 = [];
        var SUB_MIX_1 = [];
        var SUB_MIX_2 = [];
        var SUB_MIX_3 = [];
        var INV_SUB_MIX_0 = [];
        var INV_SUB_MIX_1 = [];
        var INV_SUB_MIX_2 = [];
        var INV_SUB_MIX_3 = [];
        (function() {
          var d = [];
          for (var i = 0; i < 256; i++) d[i] = i < 128 ? i << 1 : i << 1 ^ 283;
          var x = 0;
          var xi = 0;
          for (var i = 0; i < 256; i++) {
            var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
            sx = sx >>> 8 ^ 255 & sx ^ 99;
            SBOX[x] = sx;
            INV_SBOX[sx] = x;
            var x2 = d[x];
            var x4 = d[x2];
            var x8 = d[x4];
            var t = 257 * d[sx] ^ 16843008 * sx;
            SUB_MIX_0[x] = t << 24 | t >>> 8;
            SUB_MIX_1[x] = t << 16 | t >>> 16;
            SUB_MIX_2[x] = t << 8 | t >>> 24;
            SUB_MIX_3[x] = t;
            var t = 16843009 * x8 ^ 65537 * x4 ^ 257 * x2 ^ 16843008 * x;
            INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
            INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
            INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
            INV_SUB_MIX_3[sx] = t;
            if (x) {
              x = x2 ^ d[d[d[x8 ^ x2]]];
              xi ^= d[d[xi]];
            } else x = xi = 1;
          }
        })();
        var RCON = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ];
        var AES = C_algo.AES = BlockCipher.extend({
          _doReset: function _doReset() {
            if (this._nRounds && this._keyPriorReset === this._key) return;
            var key = this._keyPriorReset = this._key;
            var keyWords = key.words;
            var keySize = key.sigBytes / 4;
            var nRounds = this._nRounds = keySize + 6;
            var ksRows = 4 * (nRounds + 1);
            var keySchedule = this._keySchedule = [];
            for (var ksRow = 0; ksRow < ksRows; ksRow++) if (ksRow < keySize) keySchedule[ksRow] = keyWords[ksRow]; else {
              var t = keySchedule[ksRow - 1];
              if (ksRow % keySize) keySize > 6 && ksRow % keySize == 4 && (t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[255 & t]); else {
                t = t << 8 | t >>> 24;
                t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[255 & t];
                t ^= RCON[ksRow / keySize | 0] << 24;
              }
              keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
            }
            var invKeySchedule = this._invKeySchedule = [];
            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
              var ksRow = ksRows - invKsRow;
              if (invKsRow % 4) var t = keySchedule[ksRow]; else var t = keySchedule[ksRow - 4];
              invKeySchedule[invKsRow] = invKsRow < 4 || ksRow <= 4 ? t : INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 255]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 255]] ^ INV_SUB_MIX_3[SBOX[255 & t]];
            }
          },
          encryptBlock: function encryptBlock(M, offset) {
            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
          },
          decryptBlock: function decryptBlock(M, offset) {
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
          },
          _doCryptBlock: function _doCryptBlock(M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
            var nRounds = this._nRounds;
            var s0 = M[offset] ^ keySchedule[0];
            var s1 = M[offset + 1] ^ keySchedule[1];
            var s2 = M[offset + 2] ^ keySchedule[2];
            var s3 = M[offset + 3] ^ keySchedule[3];
            var ksRow = 4;
            for (var round = 1; round < nRounds; round++) {
              var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 255] ^ SUB_MIX_2[s2 >>> 8 & 255] ^ SUB_MIX_3[255 & s3] ^ keySchedule[ksRow++];
              var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 255] ^ SUB_MIX_2[s3 >>> 8 & 255] ^ SUB_MIX_3[255 & s0] ^ keySchedule[ksRow++];
              var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 255] ^ SUB_MIX_2[s0 >>> 8 & 255] ^ SUB_MIX_3[255 & s1] ^ keySchedule[ksRow++];
              var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 255] ^ SUB_MIX_2[s1 >>> 8 & 255] ^ SUB_MIX_3[255 & s2] ^ keySchedule[ksRow++];
              s0 = t0;
              s1 = t1;
              s2 = t2;
              s3 = t3;
            }
            var t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 255] << 16 | SBOX[s2 >>> 8 & 255] << 8 | SBOX[255 & s3]) ^ keySchedule[ksRow++];
            var t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 255] << 16 | SBOX[s3 >>> 8 & 255] << 8 | SBOX[255 & s0]) ^ keySchedule[ksRow++];
            var t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 255] << 16 | SBOX[s0 >>> 8 & 255] << 8 | SBOX[255 & s1]) ^ keySchedule[ksRow++];
            var t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 255] << 16 | SBOX[s1 >>> 8 & 255] << 8 | SBOX[255 & s2]) ^ keySchedule[ksRow++];
            M[offset] = t0;
            M[offset + 1] = t1;
            M[offset + 2] = t2;
            M[offset + 3] = t3;
          },
          keySize: 8
        });
        C.AES = BlockCipher._createHelper(AES);
      })();
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        var PC1 = [ 57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4 ];
        var PC2 = [ 14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32 ];
        var BIT_SHIFTS = [ 1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28 ];
        var SBOX_P = [ {
          0: 8421888,
          268435456: 32768,
          536870912: 8421378,
          805306368: 2,
          1073741824: 512,
          1342177280: 8421890,
          1610612736: 8389122,
          1879048192: 8388608,
          2147483648: 514,
          2415919104: 8389120,
          2684354560: 33280,
          2952790016: 8421376,
          3221225472: 32770,
          3489660928: 8388610,
          3758096384: 0,
          4026531840: 33282,
          134217728: 0,
          402653184: 8421890,
          671088640: 33282,
          939524096: 32768,
          1207959552: 8421888,
          1476395008: 512,
          1744830464: 8421378,
          2013265920: 2,
          2281701376: 8389120,
          2550136832: 33280,
          2818572288: 8421376,
          3087007744: 8389122,
          3355443200: 8388610,
          3623878656: 32770,
          3892314112: 514,
          4160749568: 8388608,
          1: 32768,
          268435457: 2,
          536870913: 8421888,
          805306369: 8388608,
          1073741825: 8421378,
          1342177281: 33280,
          1610612737: 512,
          1879048193: 8389122,
          2147483649: 8421890,
          2415919105: 8421376,
          2684354561: 8388610,
          2952790017: 33282,
          3221225473: 514,
          3489660929: 8389120,
          3758096385: 32770,
          4026531841: 0,
          134217729: 8421890,
          402653185: 8421376,
          671088641: 8388608,
          939524097: 512,
          1207959553: 32768,
          1476395009: 8388610,
          1744830465: 2,
          2013265921: 33282,
          2281701377: 32770,
          2550136833: 8389122,
          2818572289: 514,
          3087007745: 8421888,
          3355443201: 8389120,
          3623878657: 0,
          3892314113: 33280,
          4160749569: 8421378
        }, {
          0: 1074282512,
          16777216: 16384,
          33554432: 524288,
          50331648: 1074266128,
          67108864: 1073741840,
          83886080: 1074282496,
          100663296: 1073758208,
          117440512: 16,
          134217728: 540672,
          150994944: 1073758224,
          167772160: 1073741824,
          184549376: 540688,
          201326592: 524304,
          218103808: 0,
          234881024: 16400,
          251658240: 1074266112,
          8388608: 1073758208,
          25165824: 540688,
          41943040: 16,
          58720256: 1073758224,
          75497472: 1074282512,
          92274688: 1073741824,
          109051904: 524288,
          125829120: 1074266128,
          142606336: 524304,
          159383552: 0,
          176160768: 16384,
          192937984: 1074266112,
          209715200: 1073741840,
          226492416: 540672,
          243269632: 1074282496,
          260046848: 16400,
          268435456: 0,
          285212672: 1074266128,
          301989888: 1073758224,
          318767104: 1074282496,
          335544320: 1074266112,
          352321536: 16,
          369098752: 540688,
          385875968: 16384,
          402653184: 16400,
          419430400: 524288,
          436207616: 524304,
          452984832: 1073741840,
          469762048: 540672,
          486539264: 1073758208,
          503316480: 1073741824,
          520093696: 1074282512,
          276824064: 540688,
          293601280: 524288,
          310378496: 1074266112,
          327155712: 16384,
          343932928: 1073758208,
          360710144: 1074282512,
          377487360: 16,
          394264576: 1073741824,
          411041792: 1074282496,
          427819008: 1073741840,
          444596224: 1073758224,
          461373440: 524304,
          478150656: 0,
          494927872: 16400,
          511705088: 1074266128,
          528482304: 540672
        }, {
          0: 260,
          1048576: 0,
          2097152: 67109120,
          3145728: 65796,
          4194304: 65540,
          5242880: 67108868,
          6291456: 67174660,
          7340032: 67174400,
          8388608: 67108864,
          9437184: 67174656,
          10485760: 65792,
          11534336: 67174404,
          12582912: 67109124,
          13631488: 65536,
          14680064: 4,
          15728640: 256,
          524288: 67174656,
          1572864: 67174404,
          2621440: 0,
          3670016: 67109120,
          4718592: 67108868,
          5767168: 65536,
          6815744: 65540,
          7864320: 260,
          8912896: 4,
          9961472: 256,
          11010048: 67174400,
          12058624: 65796,
          13107200: 65792,
          14155776: 67109124,
          15204352: 67174660,
          16252928: 67108864,
          16777216: 67174656,
          17825792: 65540,
          18874368: 65536,
          19922944: 67109120,
          20971520: 256,
          22020096: 67174660,
          23068672: 67108868,
          24117248: 0,
          25165824: 67109124,
          26214400: 67108864,
          27262976: 4,
          28311552: 65792,
          29360128: 67174400,
          30408704: 260,
          31457280: 65796,
          32505856: 67174404,
          17301504: 67108864,
          18350080: 260,
          19398656: 67174656,
          20447232: 0,
          21495808: 65540,
          22544384: 67109120,
          23592960: 256,
          24641536: 67174404,
          25690112: 65536,
          26738688: 67174660,
          27787264: 65796,
          28835840: 67108868,
          29884416: 67109124,
          30932992: 67174400,
          31981568: 4,
          33030144: 65792
        }, {
          0: 2151682048,
          65536: 2147487808,
          131072: 4198464,
          196608: 2151677952,
          262144: 0,
          327680: 4198400,
          393216: 2147483712,
          458752: 4194368,
          524288: 2147483648,
          589824: 4194304,
          655360: 64,
          720896: 2147487744,
          786432: 2151678016,
          851968: 4160,
          917504: 4096,
          983040: 2151682112,
          32768: 2147487808,
          98304: 64,
          163840: 2151678016,
          229376: 2147487744,
          294912: 4198400,
          360448: 2151682112,
          425984: 0,
          491520: 2151677952,
          557056: 4096,
          622592: 2151682048,
          688128: 4194304,
          753664: 4160,
          819200: 2147483648,
          884736: 4194368,
          950272: 4198464,
          1015808: 2147483712,
          1048576: 4194368,
          1114112: 4198400,
          1179648: 2147483712,
          1245184: 0,
          1310720: 4160,
          1376256: 2151678016,
          1441792: 2151682048,
          1507328: 2147487808,
          1572864: 2151682112,
          1638400: 2147483648,
          1703936: 2151677952,
          1769472: 4198464,
          1835008: 2147487744,
          1900544: 4194304,
          1966080: 64,
          2031616: 4096,
          1081344: 2151677952,
          1146880: 2151682112,
          1212416: 0,
          1277952: 4198400,
          1343488: 4194368,
          1409024: 2147483648,
          1474560: 2147487808,
          1540096: 64,
          1605632: 2147483712,
          1671168: 4096,
          1736704: 2147487744,
          1802240: 2151678016,
          1867776: 4160,
          1933312: 2151682048,
          1998848: 4194304,
          2064384: 4198464
        }, {
          0: 128,
          4096: 17039360,
          8192: 262144,
          12288: 536870912,
          16384: 537133184,
          20480: 16777344,
          24576: 553648256,
          28672: 262272,
          32768: 16777216,
          36864: 537133056,
          40960: 536871040,
          45056: 553910400,
          49152: 553910272,
          53248: 0,
          57344: 17039488,
          61440: 553648128,
          2048: 17039488,
          6144: 553648256,
          10240: 128,
          14336: 17039360,
          18432: 262144,
          22528: 537133184,
          26624: 553910272,
          30720: 536870912,
          34816: 537133056,
          38912: 0,
          43008: 553910400,
          47104: 16777344,
          51200: 536871040,
          55296: 553648128,
          59392: 16777216,
          63488: 262272,
          65536: 262144,
          69632: 128,
          73728: 536870912,
          77824: 553648256,
          81920: 16777344,
          86016: 553910272,
          90112: 537133184,
          94208: 16777216,
          98304: 553910400,
          102400: 553648128,
          106496: 17039360,
          110592: 537133056,
          114688: 262272,
          118784: 536871040,
          122880: 0,
          126976: 17039488,
          67584: 553648256,
          71680: 16777216,
          75776: 17039360,
          79872: 537133184,
          83968: 536870912,
          88064: 17039488,
          92160: 128,
          96256: 553910272,
          100352: 262272,
          104448: 553910400,
          108544: 0,
          112640: 553648128,
          116736: 16777344,
          120832: 262144,
          124928: 537133056,
          129024: 536871040
        }, {
          0: 268435464,
          256: 8192,
          512: 270532608,
          768: 270540808,
          1024: 268443648,
          1280: 2097152,
          1536: 2097160,
          1792: 268435456,
          2048: 0,
          2304: 268443656,
          2560: 2105344,
          2816: 8,
          3072: 270532616,
          3328: 2105352,
          3584: 8200,
          3840: 270540800,
          128: 270532608,
          384: 270540808,
          640: 8,
          896: 2097152,
          1152: 2105352,
          1408: 268435464,
          1664: 268443648,
          1920: 8200,
          2176: 2097160,
          2432: 8192,
          2688: 268443656,
          2944: 270532616,
          3200: 0,
          3456: 270540800,
          3712: 2105344,
          3968: 268435456,
          4096: 268443648,
          4352: 270532616,
          4608: 270540808,
          4864: 8200,
          5120: 2097152,
          5376: 268435456,
          5632: 268435464,
          5888: 2105344,
          6144: 2105352,
          6400: 0,
          6656: 8,
          6912: 270532608,
          7168: 8192,
          7424: 268443656,
          7680: 270540800,
          7936: 2097160,
          4224: 8,
          4480: 2105344,
          4736: 2097152,
          4992: 268435464,
          5248: 268443648,
          5504: 8200,
          5760: 270540808,
          6016: 270532608,
          6272: 270540800,
          6528: 270532616,
          6784: 8192,
          7040: 2105352,
          7296: 2097160,
          7552: 0,
          7808: 268435456,
          8064: 268443656
        }, {
          0: 1048576,
          16: 33555457,
          32: 1024,
          48: 1049601,
          64: 34604033,
          80: 0,
          96: 1,
          112: 34603009,
          128: 33555456,
          144: 1048577,
          160: 33554433,
          176: 34604032,
          192: 34603008,
          208: 1025,
          224: 1049600,
          240: 33554432,
          8: 34603009,
          24: 0,
          40: 33555457,
          56: 34604032,
          72: 1048576,
          88: 33554433,
          104: 33554432,
          120: 1025,
          136: 1049601,
          152: 33555456,
          168: 34603008,
          184: 1048577,
          200: 1024,
          216: 34604033,
          232: 1,
          248: 1049600,
          256: 33554432,
          272: 1048576,
          288: 33555457,
          304: 34603009,
          320: 1048577,
          336: 33555456,
          352: 34604032,
          368: 1049601,
          384: 1025,
          400: 34604033,
          416: 1049600,
          432: 1,
          448: 0,
          464: 34603008,
          480: 33554433,
          496: 1024,
          264: 1049600,
          280: 33555457,
          296: 34603009,
          312: 1,
          328: 33554432,
          344: 1048576,
          360: 1025,
          376: 34604032,
          392: 33554433,
          408: 34603008,
          424: 0,
          440: 34604033,
          456: 1049601,
          472: 1024,
          488: 33555456,
          504: 1048577
        }, {
          0: 134219808,
          1: 131072,
          2: 134217728,
          3: 32,
          4: 131104,
          5: 134350880,
          6: 134350848,
          7: 2048,
          8: 134348800,
          9: 134219776,
          10: 133120,
          11: 134348832,
          12: 2080,
          13: 0,
          14: 134217760,
          15: 133152,
          2147483648: 2048,
          2147483649: 134350880,
          2147483650: 134219808,
          2147483651: 134217728,
          2147483652: 134348800,
          2147483653: 133120,
          2147483654: 133152,
          2147483655: 32,
          2147483656: 134217760,
          2147483657: 2080,
          2147483658: 131104,
          2147483659: 134350848,
          2147483660: 0,
          2147483661: 134348832,
          2147483662: 134219776,
          2147483663: 131072,
          16: 133152,
          17: 134350848,
          18: 32,
          19: 2048,
          20: 134219776,
          21: 134217760,
          22: 134348832,
          23: 131072,
          24: 0,
          25: 131104,
          26: 134348800,
          27: 134219808,
          28: 134350880,
          29: 133120,
          30: 2080,
          31: 134217728,
          2147483664: 131072,
          2147483665: 2048,
          2147483666: 134348832,
          2147483667: 133152,
          2147483668: 32,
          2147483669: 134348800,
          2147483670: 134217728,
          2147483671: 134219808,
          2147483672: 134350880,
          2147483673: 134217760,
          2147483674: 134219776,
          2147483675: 0,
          2147483676: 133120,
          2147483677: 2080,
          2147483678: 131104,
          2147483679: 134350848
        } ];
        var SBOX_MASK = [ 4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679 ];
        var DES = C_algo.DES = BlockCipher.extend({
          _doReset: function _doReset() {
            var key = this._key;
            var keyWords = key.words;
            var keyBits = [];
            for (var i = 0; i < 56; i++) {
              var keyBitPos = PC1[i] - 1;
              keyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;
            }
            var subKeys = this._subKeys = [];
            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
              var subKey = subKeys[nSubKey] = [];
              var bitShift = BIT_SHIFTS[nSubKey];
              for (var i = 0; i < 24; i++) {
                subKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6;
                subKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;
              }
              subKey[0] = subKey[0] << 1 | subKey[0] >>> 31;
              for (var i = 1; i < 7; i++) subKey[i] = subKey[i] >>> 4 * (i - 1) + 3;
              subKey[7] = subKey[7] << 5 | subKey[7] >>> 27;
            }
            var invSubKeys = this._invSubKeys = [];
            for (var i = 0; i < 16; i++) invSubKeys[i] = subKeys[15 - i];
          },
          encryptBlock: function encryptBlock(M, offset) {
            this._doCryptBlock(M, offset, this._subKeys);
          },
          decryptBlock: function decryptBlock(M, offset) {
            this._doCryptBlock(M, offset, this._invSubKeys);
          },
          _doCryptBlock: function _doCryptBlock(M, offset, subKeys) {
            this._lBlock = M[offset];
            this._rBlock = M[offset + 1];
            exchangeLR.call(this, 4, 252645135);
            exchangeLR.call(this, 16, 65535);
            exchangeRL.call(this, 2, 858993459);
            exchangeRL.call(this, 8, 16711935);
            exchangeLR.call(this, 1, 1431655765);
            for (var round = 0; round < 16; round++) {
              var subKey = subKeys[round];
              var lBlock = this._lBlock;
              var rBlock = this._rBlock;
              var f = 0;
              for (var i = 0; i < 8; i++) f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
              this._lBlock = rBlock;
              this._rBlock = lBlock ^ f;
            }
            var t = this._lBlock;
            this._lBlock = this._rBlock;
            this._rBlock = t;
            exchangeLR.call(this, 1, 1431655765);
            exchangeRL.call(this, 8, 16711935);
            exchangeRL.call(this, 2, 858993459);
            exchangeLR.call(this, 16, 65535);
            exchangeLR.call(this, 4, 252645135);
            M[offset] = this._lBlock;
            M[offset + 1] = this._rBlock;
          },
          keySize: 2,
          ivSize: 2,
          blockSize: 2
        });
        function exchangeLR(offset, mask) {
          var t = (this._lBlock >>> offset ^ this._rBlock) & mask;
          this._rBlock ^= t;
          this._lBlock ^= t << offset;
        }
        function exchangeRL(offset, mask) {
          var t = (this._rBlock >>> offset ^ this._lBlock) & mask;
          this._lBlock ^= t;
          this._rBlock ^= t << offset;
        }
        C.DES = BlockCipher._createHelper(DES);
        var TripleDES = C_algo.TripleDES = BlockCipher.extend({
          _doReset: function _doReset() {
            var key = this._key;
            var keyWords = key.words;
            this._des1 = DES.createEncryptor(WordArray.create(keyWords.slice(0, 2)));
            this._des2 = DES.createEncryptor(WordArray.create(keyWords.slice(2, 4)));
            this._des3 = DES.createEncryptor(WordArray.create(keyWords.slice(4, 6)));
          },
          encryptBlock: function encryptBlock(M, offset) {
            this._des1.encryptBlock(M, offset);
            this._des2.decryptBlock(M, offset);
            this._des3.encryptBlock(M, offset);
          },
          decryptBlock: function decryptBlock(M, offset) {
            this._des3.decryptBlock(M, offset);
            this._des2.encryptBlock(M, offset);
            this._des1.decryptBlock(M, offset);
          },
          keySize: 6,
          ivSize: 2,
          blockSize: 2
        });
        C.TripleDES = BlockCipher._createHelper(TripleDES);
      })();
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var RC4 = C_algo.RC4 = StreamCipher.extend({
          _doReset: function _doReset() {
            var key = this._key;
            var keyWords = key.words;
            var keySigBytes = key.sigBytes;
            var S = this._S = [];
            for (var i = 0; i < 256; i++) S[i] = i;
            for (var i = 0, j = 0; i < 256; i++) {
              var keyByteIndex = i % keySigBytes;
              var keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 255;
              j = (j + S[i] + keyByte) % 256;
              var t = S[i];
              S[i] = S[j];
              S[j] = t;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function _doProcessBlock(M, offset) {
            M[offset] ^= generateKeystreamWord.call(this);
          },
          keySize: 8,
          ivSize: 0
        });
        function generateKeystreamWord() {
          var S = this._S;
          var i = this._i;
          var j = this._j;
          var keystreamWord = 0;
          for (var n = 0; n < 4; n++) {
            i = (i + 1) % 256;
            j = (j + S[i]) % 256;
            var t = S[i];
            S[i] = S[j];
            S[j] = t;
            keystreamWord |= S[(S[i] + S[j]) % 256] << 24 - 8 * n;
          }
          this._i = i;
          this._j = j;
          return keystreamWord;
        }
        C.RC4 = StreamCipher._createHelper(RC4);
        var RC4Drop = C_algo.RC4Drop = RC4.extend({
          cfg: RC4.cfg.extend({
            drop: 192
          }),
          _doReset: function _doReset() {
            RC4._doReset.call(this);
            for (var i = this.cfg.drop; i > 0; i--) generateKeystreamWord.call(this);
          }
        });
        C.RC4Drop = StreamCipher._createHelper(RC4Drop);
      })();
      CryptoJS.mode.CTRGladman = function() {
        var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();
        function incWord(word) {
          if (255 === (word >> 24 & 255)) {
            var b1 = word >> 16 & 255;
            var b2 = word >> 8 & 255;
            var b3 = 255 & word;
            if (255 === b1) {
              b1 = 0;
              if (255 === b2) {
                b2 = 0;
                255 === b3 ? b3 = 0 : ++b3;
              } else ++b2;
            } else ++b1;
            word = 0;
            word += b1 << 16;
            word += b2 << 8;
            word += b3;
          } else word += 1 << 24;
          return word;
        }
        function incCounter(counter) {
          0 === (counter[0] = incWord(counter[0])) && (counter[1] = incWord(counter[1]));
          return counter;
        }
        var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
          processBlock: function processBlock(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var counter = this._counter;
            if (iv) {
              counter = this._counter = iv.slice(0);
              this._iv = void 0;
            }
            incCounter(counter);
            var keystream = counter.slice(0);
            cipher.encryptBlock(keystream, 0);
            for (var i = 0; i < blockSize; i++) words[offset + i] ^= keystream[i];
          }
        });
        CTRGladman.Decryptor = Encryptor;
        return CTRGladman;
      }();
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var S = [];
        var C_ = [];
        var G = [];
        var Rabbit = C_algo.Rabbit = StreamCipher.extend({
          _doReset: function _doReset() {
            var K = this._key.words;
            var iv = this.cfg.iv;
            for (var i = 0; i < 4; i++) K[i] = 16711935 & (K[i] << 8 | K[i] >>> 24) | 4278255360 & (K[i] << 24 | K[i] >>> 8);
            var X = this._X = [ K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16 ];
            var C = this._C = [ K[2] << 16 | K[2] >>> 16, 4294901760 & K[0] | 65535 & K[1], K[3] << 16 | K[3] >>> 16, 4294901760 & K[1] | 65535 & K[2], K[0] << 16 | K[0] >>> 16, 4294901760 & K[2] | 65535 & K[3], K[1] << 16 | K[1] >>> 16, 4294901760 & K[3] | 65535 & K[0] ];
            this._b = 0;
            for (var i = 0; i < 4; i++) nextState.call(this);
            for (var i = 0; i < 8; i++) C[i] ^= X[i + 4 & 7];
            if (iv) {
              var IV = iv.words;
              var IV_0 = IV[0];
              var IV_1 = IV[1];
              var i0 = 16711935 & (IV_0 << 8 | IV_0 >>> 24) | 4278255360 & (IV_0 << 24 | IV_0 >>> 8);
              var i2 = 16711935 & (IV_1 << 8 | IV_1 >>> 24) | 4278255360 & (IV_1 << 24 | IV_1 >>> 8);
              var i1 = i0 >>> 16 | 4294901760 & i2;
              var i3 = i2 << 16 | 65535 & i0;
              C[0] ^= i0;
              C[1] ^= i1;
              C[2] ^= i2;
              C[3] ^= i3;
              C[4] ^= i0;
              C[5] ^= i1;
              C[6] ^= i2;
              C[7] ^= i3;
              for (var i = 0; i < 4; i++) nextState.call(this);
            }
          },
          _doProcessBlock: function _doProcessBlock(M, offset) {
            var X = this._X;
            nextState.call(this);
            S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
            S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
            S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
            S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
            for (var i = 0; i < 4; i++) {
              S[i] = 16711935 & (S[i] << 8 | S[i] >>> 24) | 4278255360 & (S[i] << 24 | S[i] >>> 8);
              M[offset + i] ^= S[i];
            }
          },
          blockSize: 4,
          ivSize: 2
        });
        function nextState() {
          var X = this._X;
          var C = this._C;
          for (var i = 0; i < 8; i++) C_[i] = C[i];
          C[0] = C[0] + 1295307597 + this._b | 0;
          C[1] = C[1] + 3545052371 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
          C[2] = C[2] + 886263092 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
          C[3] = C[3] + 1295307597 + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
          C[4] = C[4] + 3545052371 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
          C[5] = C[5] + 886263092 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
          C[6] = C[6] + 1295307597 + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
          C[7] = C[7] + 3545052371 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
          this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
          for (var i = 0; i < 8; i++) {
            var gx = X[i] + C[i];
            var ga = 65535 & gx;
            var gb = gx >>> 16;
            var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
            var gl = ((4294901760 & gx) * gx | 0) + ((65535 & gx) * gx | 0);
            G[i] = gh ^ gl;
          }
          X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
          X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
          X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
          X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
          X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
          X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
          X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
          X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
        }
        C.Rabbit = StreamCipher._createHelper(Rabbit);
      })();
      CryptoJS.mode.CTR = function() {
        var CTR = CryptoJS.lib.BlockCipherMode.extend();
        var Encryptor = CTR.Encryptor = CTR.extend({
          processBlock: function processBlock(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var counter = this._counter;
            if (iv) {
              counter = this._counter = iv.slice(0);
              this._iv = void 0;
            }
            var keystream = counter.slice(0);
            cipher.encryptBlock(keystream, 0);
            counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;
            for (var i = 0; i < blockSize; i++) words[offset + i] ^= keystream[i];
          }
        });
        CTR.Decryptor = Encryptor;
        return CTR;
      }();
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var S = [];
        var C_ = [];
        var G = [];
        var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
          _doReset: function _doReset() {
            var K = this._key.words;
            var iv = this.cfg.iv;
            var X = this._X = [ K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16 ];
            var C = this._C = [ K[2] << 16 | K[2] >>> 16, 4294901760 & K[0] | 65535 & K[1], K[3] << 16 | K[3] >>> 16, 4294901760 & K[1] | 65535 & K[2], K[0] << 16 | K[0] >>> 16, 4294901760 & K[2] | 65535 & K[3], K[1] << 16 | K[1] >>> 16, 4294901760 & K[3] | 65535 & K[0] ];
            this._b = 0;
            for (var i = 0; i < 4; i++) nextState.call(this);
            for (var i = 0; i < 8; i++) C[i] ^= X[i + 4 & 7];
            if (iv) {
              var IV = iv.words;
              var IV_0 = IV[0];
              var IV_1 = IV[1];
              var i0 = 16711935 & (IV_0 << 8 | IV_0 >>> 24) | 4278255360 & (IV_0 << 24 | IV_0 >>> 8);
              var i2 = 16711935 & (IV_1 << 8 | IV_1 >>> 24) | 4278255360 & (IV_1 << 24 | IV_1 >>> 8);
              var i1 = i0 >>> 16 | 4294901760 & i2;
              var i3 = i2 << 16 | 65535 & i0;
              C[0] ^= i0;
              C[1] ^= i1;
              C[2] ^= i2;
              C[3] ^= i3;
              C[4] ^= i0;
              C[5] ^= i1;
              C[6] ^= i2;
              C[7] ^= i3;
              for (var i = 0; i < 4; i++) nextState.call(this);
            }
          },
          _doProcessBlock: function _doProcessBlock(M, offset) {
            var X = this._X;
            nextState.call(this);
            S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
            S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
            S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
            S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
            for (var i = 0; i < 4; i++) {
              S[i] = 16711935 & (S[i] << 8 | S[i] >>> 24) | 4278255360 & (S[i] << 24 | S[i] >>> 8);
              M[offset + i] ^= S[i];
            }
          },
          blockSize: 4,
          ivSize: 2
        });
        function nextState() {
          var X = this._X;
          var C = this._C;
          for (var i = 0; i < 8; i++) C_[i] = C[i];
          C[0] = C[0] + 1295307597 + this._b | 0;
          C[1] = C[1] + 3545052371 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
          C[2] = C[2] + 886263092 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
          C[3] = C[3] + 1295307597 + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
          C[4] = C[4] + 3545052371 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
          C[5] = C[5] + 886263092 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
          C[6] = C[6] + 1295307597 + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
          C[7] = C[7] + 3545052371 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
          this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
          for (var i = 0; i < 8; i++) {
            var gx = X[i] + C[i];
            var ga = 65535 & gx;
            var gb = gx >>> 16;
            var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
            var gl = ((4294901760 & gx) * gx | 0) + ((65535 & gx) * gx | 0);
            G[i] = gh ^ gl;
          }
          X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
          X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
          X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
          X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
          X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
          X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
          X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
          X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
        }
        C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
      })();
      CryptoJS.pad.ZeroPadding = {
        pad: function pad(data, blockSize) {
          var blockSizeBytes = 4 * blockSize;
          data.clamp();
          data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
        },
        unpad: function unpad(data) {
          var dataWords = data.words;
          var i = data.sigBytes - 1;
          while (!(dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 255)) i--;
          data.sigBytes = i + 1;
        }
      };
      return CryptoJS;
    });
    cc._RF.pop();
  }, {} ],
  debugConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c8e99EFIQBIDI2heSdjrGC0", "debugConfig");
    "use strict";
    var debug = {
      ignoreHotfix: false,
      zoom: .5,
      showReconnBtn: false,
      gateIdx: 0,
      gate: [ {
        ip: "47.92.232.163",
        port: "8481",
        dsc: "nginx"
      }, {
        ip: "47.92.164.11",
        port: "8088",
        dsc: "\u5185"
      }, {
        ip: "172.16.16.193",
        port: "8088"
      }, {
        ip: "172.16.16.92",
        port: "8088"
      }, {
        ip: "127.0.0.1",
        port: "8088"
      } ],
      api: [ "http://47.92.232.163/" ]
    };
    debug.token = require("debugToken");
    module.exports = debug;
    cc._RF.pop();
  }, {
    debugToken: "debugToken"
  } ],
  debugToken: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24a74qxtMJAQ4+m1X2vnjIN", "debugToken");
    "use strict";
    var token = [ "1010272:0saElcRrOHq5xxsTKUr59Q", "1010273:KZT70IMuX7GH04EiUbk6Ig", "1010274:Ifnq184cLYv7n23IWAQ5iP", "1010275:HpK1jN4NTdeJtNuVf1BqZf", "1010276:Cbn7jSEjTreDRMLKAX6j8M", "1010277:3pOg3kbapOO7KMevFUC1mx" ];
    module.exports = token;
    cc._RF.pop();
  }, {} ],
  "es6-promise.auto.min": [ function(require, module, exports) {
    (function(process, global) {
      "use strict";
      cc._RF.push(module, "57cb1i1AvlMvaChQ8MRaBeV", "es6-promise.auto.min");
      "use strict";
      var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      !function(t, e) {
        "object" == ("undefined" === typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.ES6Promise = e();
      }(void 0, function() {
        function t(t) {
          var e = "undefined" === typeof t ? "undefined" : _typeof(t);
          return null !== t && ("object" === e || "function" === e);
        }
        function e(t) {
          return "function" == typeof t;
        }
        function n(t) {
          B = t;
        }
        function r(t) {
          G = t;
        }
        function o() {
          return function() {
            return process.nextTick(a);
          };
        }
        function i() {
          return "undefined" != typeof z ? function() {
            z(a);
          } : c();
        }
        function s() {
          var t = 0, e = new J(a), n = document.createTextNode("");
          return e.observe(n, {
            characterData: !0
          }), function() {
            n.data = t = ++t % 2;
          };
        }
        function u() {
          var t = new MessageChannel();
          return t.port1.onmessage = a, function() {
            return t.port2.postMessage(0);
          };
        }
        function c() {
          var t = setTimeout;
          return function() {
            return t(a, 1);
          };
        }
        function a() {
          for (var t = 0; t < W; t += 2) {
            var e = V[t], n = V[t + 1];
            e(n), V[t] = void 0, V[t + 1] = void 0;
          }
          W = 0;
        }
        function f() {
          try {
            var t = Function("return this")().require("vertx");
            return z = t.runOnLoop || t.runOnContext, i();
          } catch (e) {
            return c();
          }
        }
        function l(t, e) {
          var n = this, r = new this.constructor(p);
          void 0 === r[Z] && O(r);
          var o = n._state;
          if (o) {
            var i = arguments[o - 1];
            G(function() {
              return P(o, r, i, n._result);
            });
          } else E(n, r, t, e);
          return r;
        }
        function h(t) {
          var e = this;
          if (t && "object" == ("undefined" === typeof t ? "undefined" : _typeof(t)) && t.constructor === e) return t;
          var n = new e(p);
          return g(n, t), n;
        }
        function p() {}
        function v() {
          return new TypeError("You cannot resolve a promise with itself");
        }
        function d() {
          return new TypeError("A promises callback cannot return that same promise.");
        }
        function _(t) {
          try {
            return t.then;
          } catch (e) {
            return nt.error = e, nt;
          }
        }
        function y(t, e, n, r) {
          try {
            t.call(e, n, r);
          } catch (o) {
            return o;
          }
        }
        function m(t, e, n) {
          G(function(t) {
            var r = !1, o = y(n, e, function(n) {
              r || (r = !0, e !== n ? g(t, n) : S(t, n));
            }, function(e) {
              r || (r = !0, j(t, e));
            }, "Settle: " + (t._label || " unknown promise"));
            !r && o && (r = !0, j(t, o));
          }, t);
        }
        function b(t, e) {
          e._state === tt ? S(t, e._result) : e._state === et ? j(t, e._result) : E(e, void 0, function(e) {
            return g(t, e);
          }, function(e) {
            return j(t, e);
          });
        }
        function w(t, n, r) {
          n.constructor === t.constructor && r === l && n.constructor.resolve === h ? b(t, n) : r === nt ? (j(t, nt.error), 
          nt.error = null) : void 0 === r ? S(t, n) : e(r) ? m(t, n, r) : S(t, n);
        }
        function g(e, n) {
          e === n ? j(e, v()) : t(n) ? w(e, n, _(n)) : S(e, n);
        }
        function A(t) {
          t._onerror && t._onerror(t._result), T(t);
        }
        function S(t, e) {
          t._state === $ && (t._result = e, t._state = tt, 0 !== t._subscribers.length && G(T, t));
        }
        function j(t, e) {
          t._state === $ && (t._state = et, t._result = e, G(A, t));
        }
        function E(t, e, n, r) {
          var o = t._subscribers, i = o.length;
          t._onerror = null, o[i] = e, o[i + tt] = n, o[i + et] = r, 0 === i && t._state && G(T, t);
        }
        function T(t) {
          var e = t._subscribers, n = t._state;
          if (0 !== e.length) {
            for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) r = e[s], 
            o = e[s + n], r ? P(n, r, o, i) : o(i);
            t._subscribers.length = 0;
          }
        }
        function M(t, e) {
          try {
            return t(e);
          } catch (n) {
            return nt.error = n, nt;
          }
        }
        function P(t, n, r, o) {
          var i = e(r), s = void 0, u = void 0, c = void 0, a = void 0;
          if (i) {
            if (s = M(r, o), s === nt ? (a = !0, u = s.error, s.error = null) : c = !0, n === s) return void j(n, d());
          } else s = o, c = !0;
          n._state !== $ || (i && c ? g(n, s) : a ? j(n, u) : t === tt ? S(n, s) : t === et && j(n, s));
        }
        function x(t, e) {
          try {
            e(function(e) {
              g(t, e);
            }, function(e) {
              j(t, e);
            });
          } catch (n) {
            j(t, n);
          }
        }
        function C() {
          return rt++;
        }
        function O(t) {
          t[Z] = rt++, t._state = void 0, t._result = void 0, t._subscribers = [];
        }
        function k() {
          return new Error("Array Methods must be provided an Array");
        }
        function F(t) {
          return new ot(this, t).promise;
        }
        function Y(t) {
          var e = this;
          return new e(U(t) ? function(n, r) {
            for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(n, r);
          } : function(t, e) {
            return e(new TypeError("You must pass an array to race."));
          });
        }
        function q(t) {
          var e = this, n = new e(p);
          return j(n, t), n;
        }
        function D() {
          throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
        }
        function K() {
          throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        }
        function L() {
          var t = void 0;
          if ("undefined" != typeof global) t = global; else if ("undefined" != typeof self) t = self; else try {
            t = Function("return this")();
          } catch (e) {
            throw new Error("polyfill failed because global object is unavailable in this environment");
          }
          var n = t.Promise;
          if (n) {
            var r = null;
            try {
              r = Object.prototype.toString.call(n.resolve());
            } catch (e) {}
            if ("[object Promise]" === r && !n.cast) return;
          }
          t.Promise = it;
        }
        var N = void 0;
        N = Array.isArray ? Array.isArray : function(t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        };
        var U = N, W = 0, z = void 0, B = void 0, G = function G(t, e) {
          V[W] = t, V[W + 1] = e, W += 2, 2 === W && (B ? B(a) : X());
        }, H = "undefined" != typeof window ? window : void 0, I = H || {}, J = I.MutationObserver || I.WebKitMutationObserver, Q = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), R = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, V = new Array(1e3), X = void 0;
        X = Q ? o() : J ? s() : R ? u() : void 0 === H && "function" == typeof require ? f() : c();
        var Z = Math.random().toString(36).substring(2), $ = void 0, tt = 1, et = 2, nt = {
          error: null
        }, rt = 0, ot = function() {
          function t(t, e) {
            this._instanceConstructor = t, this.promise = new t(p), this.promise[Z] || O(this.promise), 
            U(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 
            0 === this.length ? S(this.promise, this._result) : (this.length = this.length || 0, 
            this._enumerate(e), 0 === this._remaining && S(this.promise, this._result))) : j(this.promise, k());
          }
          return t.prototype._enumerate = function(t) {
            for (var e = 0; this._state === $ && e < t.length; e++) this._eachEntry(t[e], e);
          }, t.prototype._eachEntry = function(t, e) {
            var n = this._instanceConstructor, r = n.resolve;
            if (r === h) {
              var o = _(t);
              if (o === l && t._state !== $) this._settledAt(t._state, e, t._result); else if ("function" != typeof o) this._remaining--, 
              this._result[e] = t; else if (n === it) {
                var i = new n(p);
                w(i, t, o), this._willSettleAt(i, e);
              } else this._willSettleAt(new n(function(e) {
                return e(t);
              }), e);
            } else this._willSettleAt(r(t), e);
          }, t.prototype._settledAt = function(t, e, n) {
            var r = this.promise;
            r._state === $ && (this._remaining--, t === et ? j(r, n) : this._result[e] = n), 
            0 === this._remaining && S(r, this._result);
          }, t.prototype._willSettleAt = function(t, e) {
            var n = this;
            E(t, void 0, function(t) {
              return n._settledAt(tt, e, t);
            }, function(t) {
              return n._settledAt(et, e, t);
            });
          }, t;
        }(), it = function() {
          function t(e) {
            this[Z] = C(), this._result = this._state = void 0, this._subscribers = [], p !== e && ("function" != typeof e && D(), 
            this instanceof t ? x(this, e) : K());
          }
          return t.prototype["catch"] = function(t) {
            return this.then(null, t);
          }, t.prototype["finally"] = function(t) {
            var e = this, n = e.constructor;
            return e.then(function(e) {
              return n.resolve(t()).then(function() {
                return e;
              });
            }, function(e) {
              return n.resolve(t()).then(function() {
                throw e;
              });
            });
          }, t;
        }();
        return it.prototype.then = l, it.all = F, it.race = Y, it.resolve = h, it.reject = q, 
        it._setScheduler = n, it._setAsap = r, it._asap = G, it.polyfill = L, it.Promise = it, 
        it.polyfill(), it;
      });
      cc._RF.pop();
    }).call(this, require("_process"), "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {
    _process: 1
  } ],
  musicCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c0ab5mfoF1DiZE1D7npAETV", "musicCtrl");
    "use strict";
    var MusicCtrl = cc.Class({
      extends: cc.Component,
      properties: {
        soundSlider: cc.Slider,
        musicSlider: cc.Slider,
        btnBack: cc.Button,
        spWidth: 0
      },
      onLoad: function onLoad() {
        var _this = this;
        this.soundSp = this.soundSlider.node.getChildByName("soundLine");
        this.musicSp = this.musicSlider.node.getChildByName("soundLine");
        void 0 === cc.ak.util.audioMgr.getSFXVolume() || null === cc.ak.util.audioMgr.getSFXVolume() ? this.soundSlider.progress = .5 : this.soundSlider.progress = cc.ak.util.audioMgr.getSFXVolume();
        void 0 === cc.ak.util.audioMgr.getBGMVolume() || null === cc.ak.util.audioMgr.getBGMVolume() ? this.musicSlider.progress = .5 : this.musicSlider.progress = cc.ak.util.audioMgr.getBGMVolume();
        this.btnBack.node.on("click", function() {
          _this.node.destroy();
        });
        this.node.on("click", function() {
          _this.node.destroy();
        });
        this.spWidth = this.soundSp.width;
        this.soundSp.width = this.soundSlider.progress * this.spWidth;
        this.musicSp.width = this.musicSlider.progress * this.spWidth;
      },
      _updateSound: function _updateSound(progress) {
        this.soundSp.width = progress * this.spWidth;
        cc.ak.util.audioMgr.setSFXVolume(progress);
      },
      _updateMusic: function _updateMusic(progress) {
        this.musicSp.width = progress * this.spWidth;
        cc.ak.util.audioMgr.setBGMVolume(progress);
      },
      onSoundSliderEvent: function onSoundSliderEvent(sender, eventType) {
        this._updateSound(sender.progress);
      },
      onMusicSliderEvent: function onMusicSliderEvent(sender, eventType) {
        this._updateMusic(sender.progress);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  native: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "883b4Ed2FRNmq17HSnsaLQ0", "native");
    "use strict";
    var native = {};
    native.nname = {};
    native.nname.PAY_RESULT = "native-pay_result";
    native.nname.INAPP_PURCHASE_RESULT = "native-inapp_purchase_result";
    native.nname.URL_INVOKE = "native-url_invoke";
    native.nname.ERROR_ALERT = "native-error_alert";
    native.nname.CANCEL_RECORD = "native-cancel_record";
    native.nname.RECORD_COMPLETE = "native-record_complete";
    native.nname.ENQUEUE_SOUND = "native-download_sound";
    native.nname.PLAY_SOUND_FINISHED = "native-play_sound_finished";
    native.nname.PREPARED_SOUND = "native-prepared_sound";
    native.nname.AUTHORIZE_RESULT = "native-authorize_result";
    native.nname.WX_SHARED = "native-wx_shared";
    native.nname.JPUSH_TAGS = "native-jpush_tags";
    native.nname.JPUSH_ALIAS = "native-jpush_alias";
    native.nname.JPUSH_MESSAGE = "native-jpush_message";
    native.nname.LOCATION_UPDATE = "native-location_update";
    native.nname.LOCATION_SERVICE_DISABLE = "native-location_service_disable";
    native.nname.LOCATION_SERVICE_ENABLED = "native-location_service_enabled";
    native.nname.MEMORY_WARNING = "native-memory_warning";
    native.nname.SHOW_BADGE = "native-show_badge";
    native.nname.PUSH_ACCOUNT = "native-push_account";
    native.name = {};
    native.name.JS_READY = "js_ready";
    native.name.GET_MISC_INFO = "get_misc_info";
    native.name.PLAY_RECORD_SND = "play_record_snd";
    native.name.START_RECORD_SND = "record_snd";
    native.name.STOP_RECORD_SND = "stop_record_snd";
    native.name.CANCEL_RECORD_SND = "cancel_record_snd";
    native.name.UNAUTHORIZE = "unauthorize";
    native.name.AUTHORIZE = "authorize";
    native.name.SHARE = "share";
    native.name.PAY = "pay";
    native.name.COPY_OPEN = "copy_open";
    native.name.START_LOCATION_SERVICE = "start_location_service";
    native.name.STOP_LOCATION_SERVICE = "stop_location_service";
    native.name.GET_LOCATION = "get_location";
    native.name.IS_LOCATION_SERVICE_ENABLED = "is_location_service_enabled";
    native.name.JPUSH_SET_TAGS = "jpush_set_tags";
    native.name.JPUSH_SET_ALIAS = "jpush_set_alias";
    native.name.VIBRATE = "vibrate";
    native.name.VIBRATE_FEEDBACK = "vibrate_feedback";
    native.name.UPDATE_APP = "update_app";
    native.name.GET_BATTERY_INFO = "get_battery_info";
    native.name.GET_NETWORK_INFO = "get_network_info";
    native.name.CUSTOMER_SERVICE = "customer_service";
    native.name.LOGIN_SUCCSE = "login_succse";
    native.name.LOGOUT_SUCCSE = "logout_succse";
    native.name.SAVE_IMG = "save_img";
    native.name.REMOVE_IMG = "remove_img";
    var params = [];
    cc.sys.os === cc.sys.OS_IOS ? params.push("JBridge", "invoke:json:") : cc.sys.os === cc.sys.OS_ANDROID && params.push("com/fx/JBridge", "invoke", "(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;");
    native.invoke = function(key, json) {
      var data = null;
      if (window.jsb && cc.sys.os != cc.sys.OS_WINDOWS) {
        void 0 === json && (json = {});
        try {
          var json_str = jsb.reflection.callStaticMethod.apply(jsb.reflection, params.concat([ key, JSON.stringify(json) ]));
          data = JSON.parse(json_str);
        } catch (e) {
          cc.ak.util.utils.Err(e);
        }
      }
      return data || {};
    };
    native.json_queue = [];
    native.callback = function(key, json) {
      var event = new cc.Event.EventCustom("native-" + key);
      event.setUserData(json);
      cc.ak.event.dispatchEvent(event);
    };
    module.exports = native;
    cc._RF.pop();
  }, {} ],
  setting: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4a9d1LvLsFNkpnJOL0O43Di", "setting");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btnBack: cc.Button,
        aglertBgFrame: cc.Sprite,
        bgFrame: cc.Sprite,
        soundSiderBg: cc.Sprite,
        soundSiderLineBg: cc.Sprite,
        soundSiderHanleBg: cc.Sprite,
        musicSiderBg: cc.Sprite,
        musicSiderLineBg: cc.Sprite,
        musicSiderHanleBg: cc.Sprite,
        titleFrame: cc.Sprite,
        titleLab: cc.Sprite
      },
      onLoad: function onLoad() {
        var _this = this;
        this.node.on("click", function() {});
        this.btnBack.node.on("click", function() {
          _this.node.destroy();
        });
      },
      setAglertBgFrameStyle: function setAglertBgFrameStyle(pic) {
        this.aglertBgFrame.spriteFrame = pic;
      },
      setbgFrameStyle: function setbgFrameStyle(pic) {
        this.bgFrame.spriteFrame = pic;
      },
      setSoundSiderBgStyle: function setSoundSiderBgStyle(pic) {
        this.soundSiderBg.spriteFramep = pic;
      },
      setSoundSiderLineBgStyle: function setSoundSiderLineBgStyle(pic) {
        this.soundSiderLineBg.spriteFramep = pic;
      },
      setSoundSiderHandleStyle: function setSoundSiderHandleStyle(pic) {
        this.soundSiderHanleBg.spriteFramep = pic;
      },
      setMusicSiderBgStyle: function setMusicSiderBgStyle(pic) {
        this.musicSiderBg.spriteFramep = pic;
      },
      setMusicSiderLineBgStyle: function setMusicSiderLineBgStyle(pic) {
        this.musicSiderLineBg.spriteFramep = pic;
      },
      setMusicSiderHandleStyle: function setMusicSiderHandleStyle(pic) {
        this.musicSiderHanleBg.spriteFramep = pic;
      },
      setTitleFrameStyle: function setTitleFrameStyle(pic) {
        this.titleFrame.spriteFrame = pic;
      },
      setTitleLabStyle: function setTitleLabStyle(pic) {
        this.titleLab.spriteFrame = pic;
      },
      setStyle: function setStyle(aglertBgFrame, bgFrame, soundSiderBg, siderLineBg, siderHandle, musicSiderBg, musicLineBg, musicHandle, titleFrame, titleLab) {
        this.setAglertBgFrameStyle(aglertBgFrame);
        this.setbgFrameStyle(bgFrame);
        this.setSoundSiderBgStyle(soundSiderBg);
        this.setSoundSiderLineBgStyle(siderLineBg);
        this.setSoundSiderHandleStyle(siderHandle);
        this.setMusicSiderBgStyle(musicSiderBg);
        this.setMusicSiderLineBgStyle(musicLineBg);
        this.setMusicSiderHandleStyle(musicHandle);
        this.setTitleFrameStyle(titleFrame);
        this.setTitleLabStyle(titleLab);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  test: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1ad0czNKABJmalnIeT5FfGA", "test");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.node.width = cc.winSize.height;
        this.node.height = cc.winSize.width;
        this.node.getChildByName("common_alert_btn").getComponent(cc.Widget).updateAlignment();
        this.node.getChildByName("n0").getChildByName("wn").getComponent(cc.Animation).play();
        this.node.getChildByName("gameItem15").runAction(cc.moveTo(3, 0, 300));
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  time: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6eff3cnHmBAyYrUydJDmU6E", "time");
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
        this.callBack = null;
      },
      start: function start() {},
      setTime: function setTime(time) {
        this.setStartTime(time);
        clearInterval(this.timeID);
        this.timeID = setInterval(this.updateTime.bind(this), 1e3);
      },
      updateTime: function updateTime() {
        if (0 == this.time--) {
          clearInterval(this.timeID);
          this.node && (this.node.active = false);
          this.callBack && this.callBack();
        } else this.timer && (this.timer.string = this.time.toString());
        this.time >= 5 || cc.ak.util.audioMgr.playSFX(this.audioTime[0]);
      },
      setStartTime: function setStartTime(time) {
        this.time = time;
        this.timer.string = time.toString();
      },
      setCallBack: function setCallBack(callBack) {
        this.callBack = callBack;
      },
      cleanTimeAudio: function cleanTimeAudio() {
        clearInterval(this.timeID);
      },
      onDestroy: function onDestroy() {
        clearInterval(this.timeID);
      }
    });
    cc._RF.pop();
  }, {} ],
  uiAlert: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "67ea3KU2GZHMJGUO84p2W5J", "uiAlert");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var BtnCommon = require("uiBtnCommon");
    cc.Class({
      extends: cc.Component,
      properties: {
        txtTitle: cc.Label,
        txtContent: cc.RichText,
        btnClose: cc.Node,
        btns: cc.Node,
        pfButton: cc.Prefab,
        _callback: null
      },
      onLoad: function onLoad() {
        var _this = this;
        this.node.on("click", function() {});
        this.btnClose.on("click", function() {
          _this.node.destroy();
        });
      },
      start: function start() {},
      onEnable: function onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          event.stopPropagation();
        });
      },
      onDisable: function onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_START);
      },
      init: function init(args) {
        if (!args) return;
        this.txtTitle.string = args.title || this.txtTitle.string;
        this.txtContent.string = args.text || "";
        this._callback = args.callback;
        this.btnClose.active = args.btnClose;
        this._setButtons(args.btns);
      },
      _setButtons: function _setButtons(btns) {
        var _this2 = this;
        if (!btns) return;
        "string" === typeof btns && (btns = [ btns ]);
        var width = this.node.getChildByName("dialog").width - 80;
        var seg = width / btns.length;
        var half = .5 * seg;
        var btn_data;
        for (var i = 0; i < btns.length; i++) {
          btn_data = btns[i];
          if ("string" === typeof btn_data) {
            btns[i] = {
              label: btn_data
            };
            btn_data = btns[i];
          }
          if ("object" !== ("undefined" === typeof btn_data ? "undefined" : _typeof(btn_data))) {
            cc.ak.util.utils.Err("Invalid arguments!");
            return;
          }
          btn_data.label = btn_data.label || "";
          btn_data.hasOwnProperty("id") || (btn_data.id = i);
          btn_data.hasOwnProperty("style") || (btn_data.style = 0 === i ? BtnCommon.STYLE.NEGATIVE : BtnCommon.STYLE.SURE);
          btn_data.scale9 || (btn_data.scale9 = cc.rect(25, 20, 1, 40));
          btn_data.hasOwnProperty("color") || (btn_data.color = (0 === i, "#ffffff"));
          var btn = cc.instantiate(this.pfButton);
          btn.parent = this.btns;
          btn.x = seg * i + half - width / 2;
          btn.y = 0;
          var btnSrc = btn.getComponent("uiBtnCommon");
          btnSrc.setStyle(btn_data.style);
          btnSrc.lblText.string = btn_data.label;
          btnSrc.lblText.fontSize = btn_data.size || btnSrc.lblText.fontSize;
          btnSrc.lblText.node.color = cc.color(btn_data.color);
          btn_data.bg && btnSrc.setBackground(btn_data.bg);
          btn_data.imgLable && btnSrc.setSpriteText(btn_data.imgLable);
          btn.idx = btn_data.id;
          btn.on("click", function(target) {
            var id = target.node.idx;
            _this2._callback && _this2._callback(id);
            _this2.node.destroy();
          }, btn);
        }
      }
    });
    cc._RF.pop();
  }, {
    uiBtnCommon: "uiBtnCommon"
  } ],
  uiBadge: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1711a+tPm5D9aIwRqEg5T9v", "uiBadge");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        nodeId: 0
      },
      onLoad: function onLoad() {
        var _this = this;
        if (!this.nodeId) throw new Error("badge's node id is empty!");
        var node = cc.ak.mc.badgeMgr.nodesMap[this.nodeId];
        node || cc.warn("uiBadge node's data not ready yet!");
        this.node.active = !!node.realOn;
        var btnNode = this.node.parent;
        if (!btnNode) throw new Error("badge prefab must mount to the Button's node");
        cc.ak.event.on(cc.ak.key.event.BADGE_SHOW_CHANGED, function(nodeId, isShow) {
          if (nodeId != _this.nodeId) return;
          _this.node.active = !!isShow;
        }, this);
        btnNode.on("click", function() {
          12 != _this.nodeId && cc.ak.mc.badgeMgr.readed(_this.nodeId);
        });
      },
      start: function start() {},
      init: function init(nodeId) {}
    });
    cc._RF.pop();
  }, {} ],
  uiBtnCommon: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29a94pFi6dIDqtCPQ/1M21d", "uiBtnCommon");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        lblText: cc.Label,
        spText: cc.Sprite,
        spBackgrounds: {
          default: [],
          type: [ cc.SpriteFrame ],
          displayName: "\u901a\u7528\u80cc\u666f\u96c6\u5408",
          tooltip: "\u901a\u7528\u80cc\u666f\u96c6\u5408\uff0c0\u4e3a\u80af\u5b9a\u6837\u5f0f\uff0c1\u4e3a\u5426\u5b9a\u6837\u5f0f"
        }
      },
      statics: {
        STYLE: {
          SURE: 0,
          NEGATIVE: 1
        }
      },
      onLoad: function onLoad() {},
      start: function start() {},
      setBackground: function setBackground(spOrUrl) {
        spOrUrl instanceof cc.SpriteFrame ? this.getComponent("cc.Sprite").spriteFrame = spOrUrl : "string" === typeof spOrUrl && cc.loader.loadRes(spOrUrl, cc.SpriteFrame, function(error, sp) {
          this.getComponent("cc.Sprite").spriteFrame = sp;
        });
      },
      setSpriteText: function setSpriteText(spOrUrl) {
        spOrUrl instanceof cc.SpriteFrame ? this.spText.spriteFrame = spOrUrl : "string" === typeof spOrUrl && cc.loader.loadRes(spOrUrl, cc.SpriteFrame, function(error, sp) {
          this.spText.spriteFrame = sp;
        });
      },
      setStyle: function setStyle(style) {
        this.setBackground(this.spBackgrounds[style]);
      },
      setStyleNegative: function setStyleNegative() {
        this.setBackground(this.spBackgrounds[1]);
      },
      setStyleSure: function setStyleSure() {
        this.setBackground(this.spBackgrounds[0]);
      }
    });
    cc._RF.pop();
  }, {} ],
  uiIcon: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "54a31ptLixHNq96qG3O8fZ0", "uiIcon");
    "use strict";
    var UiIcon = cc.Class({
      extends: cc.Component,
      properties: {
        headImg: {
          default: null,
          type: cc.Sprite
        },
        _exit: false,
        _w: null,
        _h: null,
        _onCb: null
      },
      onLoad: function onLoad() {
        this._h = -1;
        this._w = -1;
      },
      size: function size(w, h) {
        this._w = w;
        this._h = h;
        this.node.width = this._w;
        this.node.height = this._h;
      },
      loadImg: function loadImg(url) {
        var _this = this;
        if ("string" !== typeof url) {
          cc.error("game.ui.Icon::loadImg " + url);
          return;
        }
        cc.ak.ui.imgLoad.loadImg(url, function(spf) {
          _this.headImg.spriteFrame = spf;
        });
      },
      canClick: function canClick(yes) {
        this.getComponent(cc.Button).interactable = yes;
      },
      setCallBack: function setCallBack(cb, tag) {
        this.node.on("click", cb.bind(tag));
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  uiImgLoad: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bc036HXUj1Gprv1fb6XyJRD", "uiImgLoad");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _defaultPath: "download/img/",
        _frame: {
          default: null,
          type: cc.SpriteFrame
        }
      },
      onLoad: function onLoad() {},
      size: function size(w, h) {
        this.node.width = w;
        this.node.height = h;
      },
      load: function load(fileName, cb) {
        var that = this;
        cc.loader.load(fileName, function(err, texture) {
          if (err) cc.error("[ImgLoader]img load failed : " + err + "=>"); else {
            var frame = new cc.SpriteFrame(texture);
            frame && cb(frame);
          }
        });
      },
      saveFile: function saveFile(data, cb) {
        if ("undefined" != typeof data) {
          var CryptoJS = require("crypto-js");
          var fs = jsb.fileUtils;
          var dirPath = fs.getWritablePath() + this._defaultPath;
          var filePath = dirPath + CryptoJS.MD5(data) + ".png";
          fs.isDirectoryExist(dirPath) || fs.createDirectory(dirPath);
          if (jsb.fileUtils.isFileExist(filePath)) {
            this.load(filePath, cb);
            cc.log("\u5df2\u7ecf\u5b58\u5728");
            return;
          }
          if (jsb.fileUtils.writeDataToFile(new Uint8Array(data), filePath)) {
            cc.log("save succ");
            this.load(filePath, cb);
          } else cc.error("saveFile data write file failed");
        } else cc.error("saveFile download data file failed");
      },
      loadImg: function loadImg(url, cb) {
        var that = this;
        if (cc.sys.isBrowser) that.load(url, cb); else var req = cc.ak.util.http.requestWithUrl(url, null, function(data) {
          data ? that.saveFile(data, cb) : cc.error("load Img req faild");
        }, false, 2, null, null, null, "arraybuffer");
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    "crypto-js": "crypto-js"
  } ],
  uiLoading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f36d5Fe/vhGLLS/7k5TvFEa", "uiLoading");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        spLoad: {
          default: null,
          type: cc.Sprite
        },
        labLoad: {
          default: null,
          type: cc.Label
        },
        _touchEnable: null,
        _cb: null,
        _tag: null
      },
      onLoad: function onLoad() {
        this._touchEnable = false;
        this.hide();
        this.spLoad.node.runAction(cc.rotateBy(1, -360).repeatForever());
      },
      onEnable: function onEnable() {
        var that = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          if (that._touchEnable) {
            that._touchEnable = false;
            that.hide();
            event.stopPropagation();
            null != that._cb && that._cb.bind(that._tag).call();
          }
        });
      },
      setText: function setText(text) {
        this.labLoad.string = text ? text.toString() : lan.com.lbl.loading;
      },
      show: function show() {
        this.node.active = true;
      },
      hide: function hide() {
        this.unscheduleAllCallbacks();
        this.node.active = false;
      },
      setCallBack: function setCallBack(delay, cb, tag, touchEnable) {
        this._touchEnable = touchEnable;
        var that = this;
        that._cb = cb;
        that._tag = tag;
        this.scheduleOnce(function() {
          that.hide();
          "function" === typeof cb && cb();
        }.bind(tag), delay);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  uiMarquee: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f2322t5rQhKEYSSXWmDOfdE", "uiMarquee");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        DEF_DURATION: 6,
        realDuration: 0,
        lab1_1: cc.Label,
        lab1_2: cc.Label,
        _idx: 0,
        _msgQueue: null,
        labBox: cc.Layout
      },
      onLoad: function onLoad() {
        this._msgQueue = [];
        this.node.active = false;
      },
      display: function display() {
        var tmp = this.lab1_1;
        this.lab1_1 = this.lab1_2;
        this.lab1_2 = tmp;
        var bannerWidth = this.lab1_1.node.width;
        var innerWidth = this.labBox.node.width;
        var size = this.getContentSize();
        var outSideLen = bannerWidth - innerWidth;
        outSideLen = Math.max(0, outSideLen);
        var moveTime = this.realDuration / innerWidth * outSideLen;
        var msg = this._msgQueue[this._idx];
        var allShow = cc.sequence(cc.place(0, .5 * size.height), cc.delayTime(this.realDuration), cc.moveBy(moveTime, -outSideLen, 0), cc.delayTime(4)).repeat(msg.times < 1 ? 1 : msg.times);
        this._idx = ++this._idx % this._msgQueue.length;
        this.lab1_1.stopAllActions();
        this.lab1_1.runAction(cc.sequence(allShow, cc.callFunc(this.next, this)));
      },
      next: function next() {
        var size = this.node.getContentSize();
        this.lab1_1.stopAllActions();
        this.lab1_1.runAction(cc.moveTo(.5, this.lab1_1.node.x, size.height + 15));
        if (this._msgQueue.length > 0) {
          var msg = this._msgQueue[this._idx];
          this.lab1_2.string = msg.msg;
          this.realDuration = msg.interval < this.DEF_DURATION ? this.DEF_DURATION : msg.interval;
          this.lab1_2.stopAllActions();
          this.lab1_2.runAction(cc.sequence(cc.place(0, -size.height), cc.moveTo(.5, 0, .5 * size.height), cc.callFunc(this.display, this)));
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  uiOffline: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "377a7jd4mRALLMASyMA5Dj+", "uiOffline");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {},
      onEnable: function onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          event.stopPropagation();
        });
      },
      onDisable: function onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_START);
      }
    });
    cc._RF.pop();
  }, {} ],
  uiToastElement: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1e2fVtSItGtLjRs9hm2pbO", "uiToastElement");
    "use strict";
    var Toast = cc.Class({
      extends: cc.Component,
      properties: {
        lab_tips: {
          default: null,
          type: cc.Label
        },
        _time: 0
      },
      onLoad: function onLoad() {},
      init: function init(str) {
        this.lab_tips.string = str;
      },
      is_time_over: function is_time_over(dt) {
        return (this._time -= dt) <= 0;
      },
      fadeOut: function fadeOut() {
        var that = this.node;
        that.stopAllActions();
        this.node.runAction(cc.sequence(cc.spawn(cc.moveBy(.5, 0, 50).easing(cc.easeExponentialOut()), cc.fadeOut(1)), cc.callFunc(function() {
          that.destroy();
        })));
      },
      _destroy: function _destroy() {
        this.node.stopAllActions();
        this.node.destroy();
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  uiToast: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7626e7Cx81FpKihyrcXs0dD", "uiToast");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        toast: {
          default: null,
          type: cc.Prefab
        },
        _MAX_NUM: 6,
        _FADE_TIME: 2,
        _queue: []
      },
      onLoad: function onLoad() {
        this._queue = [];
      },
      show: function show(str) {
        var itme = cc.instantiate(this.toast);
        var tx = 0;
        var ty = 0;
        itme.setPosition(tx, ty);
        this.node.addChild(itme);
        itme.stopAllActions();
        itme.getComponent("uiToastElement").init(str);
        itme.opacity = 255;
        itme.runAction(cc.moveTo(.5, tx, ty + 50).easing(cc.easeExponentialOut()));
        var len = this._queue.length;
        for (var i = 0; i < len; i++) {
          var oitme = this._queue[i];
          void 0 != oitme.node ? oitme.node.opacity = 255 : oitme.opacity = 255;
          oitme.stopAllActions();
          oitme.runAction(cc.moveTo(.5, tx, ty + 50 + 40 * (len + i)).easing(cc.easeExponentialOut()));
        }
        this._queue.push(itme);
        if (this._queue.length > this._MAX_NUM) {
          itme = this._queue.shift();
          itme.fadeOut();
        }
      },
      checkItems: function checkItems(dt) {
        for (var i = 0; i < this._queue.length; ) {
          var itme = this._queue[i];
          if (itme.getComponent("uiToastElement").is_time_over(dt)) {
            this._queue.splice(i, 1);
            itme.getComponent("uiToastElement").fadeOut();
          } else i++;
        }
      },
      clear: function clear() {
        while (this._queue.length) this._queue.pop()._destroy();
      },
      onEnable: function onEnable() {
        this.schedule(this.checkItems, .1, cc.REPEAT_FOREVER, 0);
      },
      onDisable: function onDisable() {
        this.unschedule(this.checkItems);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  uiWebview: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ec118XwDsVOI6FaoHDvcP4O", "uiWebview");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        backBg: cc.Sprite,
        webview: cc.WebView,
        btnBack: cc.Button,
        webViewNode: cc.Node
      },
      onLoad: function onLoad() {
        var _this = this;
        this.btnBack.node.on("click", function() {
          _this.webViewNode.active = false;
        });
        this.webViewNode.on("click", function() {
          cc.log("\u70b9\u51fbwebview");
        });
      },
      onWebFinishLoad: function onWebFinishLoad(sender, event) {
        if (event === cc.WebView.EventType.LOADING) cc.ak.ui.waiting(5, lan.com.lbl.loading); else if (cc.WebView.EventType.LOADED) {
          cc.ak.ui.waitingHide();
          this.webViewNode.active = true;
        }
      },
      setParame: function setParame(w, h) {
        this.backBg.width = w;
        this.backBg.height = h;
      },
      show: function show(url) {
        this.webview.url = url;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "com_loc", "com_zh", "AppInit", "ErrorDef", "CacheAuth", "CacheBundlesConf", "CacheHelper", "CacheIpList", "CacheLobbyConf", "CacheModleBase", "CacheShopList", "config", "debugConfig", "debugToken", "card", "time", "LoginHandle", "RoomHandle", "BadgeMgr", "MissionMgr", "UserMgr", "cmd_base_info", "cmd_challenge", "cmd_chess_musem", "cmd_game", "cmd_lobby", "cmd_message", "cmd_mission", "cmd_mjq_video", "cmd_net", "cmd_net_guandan", "cmd_redbags", "cmd_room", "cmd_sys", "test", "Long", "crypto-js", "es6-promise.auto.min", "comTool", "musicCtrl", "setting", "GlobalUIMgr", "uiAlert", "uiBadge", "uiBtnCommon", "uiIcon", "uiImgLoad", "uiLoading", "uiMarquee", "uiOffline", "uiToast", "uiToastElement", "uiWebview", "AudioMgr", "CocosMd5", "ExtensibleError", "HotfixMgr", "Http", "SocketMgr", "TbfUtil", "Utils", "native" ]);