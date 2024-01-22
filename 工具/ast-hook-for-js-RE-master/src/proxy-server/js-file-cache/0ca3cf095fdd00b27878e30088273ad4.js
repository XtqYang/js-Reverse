"use strict";

var Util = function () {};
Util.__proto__.getAllElement = cc11001100_hook("Util.__proto__.getAllElement", function (parentNode) {
  let nodeList = cc11001100_hook("nodeList", [], "var-init");
  let childrenNodeList = cc11001100_hook("childrenNodeList", parentNode.children, "var-init");
  if (parentNode.children.length !== 0) {
    for (let i = cc11001100_hook("i", 0, "var-init"); i < childrenNodeList.length; i++) {
      nodeList.push(childrenNodeList[i]);
      nodeList = cc11001100_hook("nodeList", nodeList.concat(this.getAllElement(childrenNodeList[i])), "assign");
    }
  }
  return nodeList;
}, "assign");
Util.__proto__.getNodeOriginalSize = cc11001100_hook("Util.__proto__.getNodeOriginalSize", function (node) {
  let area = cc11001100_hook("area", [0, 0], "var-init");
  let childNodes = cc11001100_hook("childNodes", Util.getAllElement(node), "var-init");
  childNodes.forEach(function (n) {
    if (getComputedStyle(n, null).position == 'absolute') return;
    area[0] = cc11001100_hook("area[0]", n.offsetWidth > area[0] ? n.offsetWidth : area[0], "assign");
    if (n.parentNode === node) area[1] += cc11001100_hook("area[1]", n.offsetHeight, "assign");
  });
  return area;
}, "assign");
Util.__proto__.maxZIndex = cc11001100_hook("Util.__proto__.maxZIndex", function () {
  let allNodes = cc11001100_hook("allNodes", [].slice.call(document.all), "var-init");
  return parseInt(allNodes.reduce(function (prev, currNode) {
    let currNodeZIndex = cc11001100_hook("currNodeZIndex", getComputedStyle(currNode, null).zIndex, "var-init");
    return Math.max(prev, !isNaN(currNodeZIndex) ? currNodeZIndex : 0);
  }, 0));
}, "assign");
Util.__proto__.eventTarget = cc11001100_hook("Util.__proto__.eventTarget", function (node, selector, type, callback, useCapture) {
  if (useCapture) useCapture = cc11001100_hook("useCapture", false, "assign");
  node.addEventListener(type, function (event) {
    if (event.target === node || event.target === node) return false;
    let targetNodes = cc11001100_hook("targetNodes", [].slice.call(node.querySelectorAll(selector)), "var-init");
    if (targetNodes.indexOf(event.target) !== -1) {
      callback.apply(event.target);
    } else {
      let parentNode = cc11001100_hook("parentNode", event.target.parentNode, "var-init");
      while (parentNode !== node) {
        if (targetNodes.indexOf(parentNode) !== -1) {
          callback.apply(parentNode);
          break;
        } else {
          parentNode = cc11001100_hook("parentNode", parentNode.parentNode, "assign");
        }
      }
    }
  }, useCapture);
}, "assign");
Util.__proto__.objectToDom = cc11001100_hook("Util.__proto__.objectToDom", function (nodeList) {
  let buildNode = cc11001100_hook("buildNode", {}, "var-init");
  for (let item in nodeList) {
    let node = cc11001100_hook("node", document.createElement(nodeList[item]['nodeType']), "var-init");
    if (typeof nodeList[item]['nodeType'] != 'undefined') {
      for (let attr in nodeList[item]) {
        if (attr == 'nodeType') {
          continue;
        } else if (attr.toLocaleLowerCase() == 'innerhtml') {
          let resNode = cc11001100_hook("resNode", this.objectToDom(nodeList[item][attr]), "var-init");
          for (let nodeItem in resNode) {
            node.insertAdjacentElement('beforeend', resNode[nodeItem]);
          }
        } else if (attr.toLocaleLowerCase() == 'innertext') {
          node.insertAdjacentText('beforeend', nodeList[item][attr]);
        } else {
          node.setAttribute(attr, nodeList[item][attr]);
        }
      }
      buildNode[item] = cc11001100_hook("buildNode[item]", node, "assign");
    }
  }
  return buildNode;
}, "assign");
Util.__proto__.loadFile = cc11001100_hook("Util.__proto__.loadFile", function (filename) {
  let previousNode = cc11001100_hook("previousNode", null, "var-init");
  let refenrenceNode = cc11001100_hook("refenrenceNode", null, "var-init");
  let refenrenceType = cc11001100_hook("refenrenceType", filename.substring(filename.toLowerCase().lastIndexOf('.') + 1), "var-init");
  switch (refenrenceType) {
    case 'css':
      previousNode = cc11001100_hook("previousNode", document.head.querySelectorAll('link'), "assign");
      previousNode = cc11001100_hook("previousNode", previousNode.item(previousNode.lenth - 1), "assign");
      refenrenceNode = cc11001100_hook("refenrenceNode", document.createElement('link'), "assign");
      refenrenceNode.rel = cc11001100_hook("refenrenceNode.rel", 'stylesheet', "assign");
      refenrenceNode.href = cc11001100_hook("refenrenceNode.href", filename, "assign");
      break;
    case 'js':
      previousNode = cc11001100_hook("previousNode", document.head.querySelectorAll('script'), "assign");
      previousNode = cc11001100_hook("previousNode", previousNode.item(previousNode.length - 1), "assign");
      refenrenceNode = cc11001100_hook("refenrenceNode", document.createElement('script'), "assign");
      refenrenceNode.src = cc11001100_hook("refenrenceNode.src", filename, "assign");
      break;
    default:
      break;
  }
  previousNode.insertAdjacentElement('afterend', refenrenceNode);
}, "assign");
Util.__proto__.deepClone = cc11001100_hook("Util.__proto__.deepClone", function (obj) {
  return JSON.parse(JSON.stringify(obj));
}, "assign");
Util.__proto__.launchFullscreen = cc11001100_hook("Util.__proto__.launchFullscreen", function (element) {
  if (element.requestFullscreen) element.requestFullscreen();else if (element.mozRequestFullScreen) element.mozRequestFullScreen();else if (element.msRequestFullscreen) element.msRequestFullscreen();else if (element.webkitRequestFullscreen) element.webkitRequestFullScreen();
}, "assign");
Util.__proto__.exitFullscreen = cc11001100_hook("Util.__proto__.exitFullscreen", function () {
  if (document.exitFullscreen) document.exitFullscreen();else if (document.msExitFullscreen) document.msExitFullscreen();else if (document.mozCancelFullScreen) document.mozCancelFullScreen();else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
}, "assign");
Util.__proto__.getFullscreenNode = cc11001100_hook("Util.__proto__.getFullscreenNode", function () {
  return document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || false;
}, "assign");
var ModalLayer = function (options) {
  try {
    if (options.hook && typeof options.hook.initStart === 'function') options.hook.initStart(this);
    let __proto__ = cc11001100_hook("__proto__", Object.getPrototypeOf(this), "var-init");
    Object.keys(__proto__).forEach(function (attr, index) {
      if (attr === 'option') {
        this.option = cc11001100_hook("this.option", {}, "assign");
        Object.keys(__proto__[attr]).forEach(function (k, i) {
          if (['text', 'pageOption'].indexOf(k) >= 0) this.option[k] = cc11001100_hook("this.option[k]", ModalLayer.assistant.util.deepClone(__proto__[attr][k]), "assign");else {
            this.option[k] = cc11001100_hook("this.option[k]", __proto__[attr][k], "assign");
          }
        }, this);
      } else {
        if (!(__proto__[attr] instanceof Function)) {
          if (__proto__[attr] instanceof Object) this[attr] = cc11001100_hook("this[attr]", ModalLayer.assistant.util.deepClone(__proto__[attr]), "assign");else this[attr] = cc11001100_hook("this[attr]", __proto__[attr], "assign");
        }
      }
    }, this);
    this.initOption(options);
    let buildData = cc11001100_hook("buildData", this.initBuildData(), "var-init");
    let nodeList = cc11001100_hook("nodeList", this.initNode(buildData), "var-init");
    if (options.hook && typeof options.hook.initEnded === 'function') options.hook.initEnded(this);
    Object.keys(nodeList).forEach(function (key) {
      document.body.insertAdjacentElement('beforeend', nodeList[key]);
    });
  } catch (e) {
    console.error(e);
    return {
      status: cc11001100_hook("status", 'error', "object-key-init"),
      message: cc11001100_hook("message", e, "object-key-init")
    };
  }
};
ModalLayer.prototype.status = cc11001100_hook("ModalLayer.prototype.status", 'hide', "assign");
ModalLayer.prototype.globalVariable = cc11001100_hook("ModalLayer.prototype.globalVariable", {}, "assign");
ModalLayer.prototype.timeoutClock = cc11001100_hook("ModalLayer.prototype.timeoutClock", [], "assign");
ModalLayer.prototype.intervalClock = cc11001100_hook("ModalLayer.prototype.intervalClock", [], "assign");
ModalLayer.prototype.option = cc11001100_hook("ModalLayer.prototype.option", {
  'index': cc11001100_hook('index', 0, "object-key-init"),
  'title': cc11001100_hook('title', null, "object-key-init"),
  'content': cc11001100_hook('content', null, "object-key-init"),
  'okText': cc11001100_hook('okText', null, "object-key-init"),
  'noText': cc11001100_hook('noText', null, "object-key-init"),
  'cancelText': cc11001100_hook('cancelText', null, "object-key-init"),
  'type': cc11001100_hook('type', 'msg', "object-key-init"),
  'mask': cc11001100_hook('mask', true, "object-key-init"),
  'skin': cc11001100_hook('skin', 'default', "object-key-init"),
  'transitionTime': cc11001100_hook('transitionTime', 0.2, "object-key-init"),
  'transitionOpacity': cc11001100_hook('transitionOpacity', 0, "object-key-init"),
  'transitionScale': cc11001100_hook('transitionScale', [0.45, 0.45], "object-key-init"),
  'areaProportion': cc11001100_hook('areaProportion', [0.18, 0.21], "object-key-init"),
  'pageArea': cc11001100_hook('pageArea', [800, 600], "object-key-init"),
  'popupTime': cc11001100_hook('popupTime', 5, "object-key-init"),
  'resize': cc11001100_hook('resize', true, "object-key-init"),
  'drag': cc11001100_hook('drag', true, "object-key-init"),
  'dragOverflow': cc11001100_hook('dragOverflow', false, "object-key-init"),
  'clickMaskRemove': cc11001100_hook('clickMaskRemove', true, "object-key-init"),
  'contentFullContainer': cc11001100_hook('contentFullContainer', false, "object-key-init"),
  'displayProgressBar': cc11001100_hook('displayProgressBar', false, "object-key-init"),
  'displayProgressBarPos': cc11001100_hook('displayProgressBarPos', 'bottom', "object-key-init"),
  'displayProgressBarColor': cc11001100_hook('displayProgressBarColor', 'deepskyblue', "object-key-init"),
  'parentModalLayer': cc11001100_hook('parentModalLayer', null, "object-key-init"),
  'text': {
    'content': cc11001100_hook('content', '', "object-key-init"),
    'title': cc11001100_hook('title', '标题栏', "object-key-init"),
    'okButton': cc11001100_hook('okButton', '确定', "object-key-init"),
    'noButton': cc11001100_hook('noButton', '拒绝', "object-key-init"),
    'cancelButton': cc11001100_hook('cancelButton', '取消', "object-key-init")
  },
  'pageOption': {
    'src': cc11001100_hook('src', null, "object-key-init"),
    'srcdoc': cc11001100_hook('srcdoc', null, "object-key-init"),
    'frameborder': cc11001100_hook('frameborder', 0, "object-key-init"),
    'scrolling': cc11001100_hook('scrolling', 'no', "object-key-init"),
    'allowfullscreen': cc11001100_hook('allowfullscreen', true, "object-key-init"),
    'name': cc11001100_hook('name', 'modal-layer-page-', "object-key-init")
  },
  'hook': {
    'initStart': cc11001100_hook('initStart', null, "object-key-init"),
    'initEnded': cc11001100_hook('initEnded', null, "object-key-init")
  },
  'callback': {
    'ok': cc11001100_hook('ok', null, "object-key-init"),
    'no': cc11001100_hook('no', null, "object-key-init"),
    'cancel': function () {
      let self = cc11001100_hook("self", ModalLayer.getModalLayerByDom(this), "var-init");
      self.remove();
    },
    'close': function () {
      let self = cc11001100_hook("self", ModalLayer.getModalLayerByDom(this), "var-init");
      self.remove();
    },
    'expand': function () {
      let self = cc11001100_hook("self", ModalLayer.getModalLayerByDom(this), "var-init");
      let oldStatus = cc11001100_hook("oldStatus", self.status, "var-init");
      let modalLayerNodes = cc11001100_hook("modalLayerNodes", self.getNodes(), "var-init");
      let iframeNode = cc11001100_hook("iframeNode", modalLayerNodes.container.querySelector('iframe[name=' + self.option.pageOption.name + self.option.index + ']'), "var-init");
      let fullscreenchangeListener = function (event) {
        if (event.target === iframeNode) {
          self.setStatus('expand');
        } else if (event.target === false) {
          window.removeEventListener('fullscreenchange', fullscreenchangeListener);
          self.setStatus(oldStatus);
        }
      };
      let fullscreenerrorListener = function (e) {
        ModalLayer.msg({
          mask: cc11001100_hook("mask", false, "object-key-init"),
          popupTime: cc11001100_hook("popupTime", 5, "object-key-init"),
          title: cc11001100_hook("title", '错误', "object-key-init"),
          displayProgressBar: cc11001100_hook("displayProgressBar", true, "object-key-init"),
          displayProgressBarPos: cc11001100_hook("displayProgressBarPos", 'bottom', "object-key-init"),
          content: cc11001100_hook("content", '<i class="fas fa-window-close" style="color: red"></i> 全屏失败, 错误原因: ' + e, "object-key-init")
        });
        window.removeEventListener('fullscreenerror', fullscreenerrorListener);
      };
      window.addEventListener('fullscreenerror', fullscreenerrorListener);
      window.addEventListener('fullscreenchange', fullscreenchangeListener);
      ModalLayer.assistant.util.launchFullscreen(iframeNode);
    },
    'minimize': function () {
      let self = cc11001100_hook("self", ModalLayer.getModalLayerByDom(this), "var-init");
      self.minimize();
    },
    'clickMask': function () {
      let self = cc11001100_hook("self", ModalLayer.getModalLayerByDom(this), "var-init");
      self.remove();
    }
  },
  'event': {
    active: function (downEvent) {
      let self = cc11001100_hook("self", ModalLayer.getModalLayerByDom(this), "var-init");
      let showCount = cc11001100_hook("showCount", 0, "var-init");
      let nodes = cc11001100_hook("nodes", self.getNodes(), "var-init");
      let nowTime = cc11001100_hook("nowTime", new Date().getTime(), "var-init");
      let dEvent = cc11001100_hook("dEvent", downEvent || window.event, "var-init");
      if (dEvent.button !== 0 || self.globalVariable.mousedown && self.globalVariable.mousedown[0] && nowTime - self.globalVariable.mousedown[0] <= 200) return;
      self.globalVariable.mousedown = cc11001100_hook("self.globalVariable.mousedown", [true, nowTime], "assign");
      ModalLayer.instance.forEach(function (v) {
        if (v.status === 'show') showCount++;
      }, self);
      if (showCount >= 2) {
        let maxZIndex = cc11001100_hook("maxZIndex", ModalLayer.assistant.util.maxZIndex(), "var-init");
        if (nodes.container.style.zIndex == maxZIndex) return;
        Object.keys(nodes).forEach(function (k) {
          nodes[k].style.zIndex = cc11001100_hook("nodes[k].style.zIndex", maxZIndex + 1, "assign");
        }, self);
        nodes.container.style.zIndex = cc11001100_hook("nodes.container.style.zIndex", parseInt(nodes.container.style.zIndex) + 1, "assign");
      }
    },
    'drag': function (downEvent) {
      let self = cc11001100_hook("self", ModalLayer.getModalLayerByDom(this), "var-init");
      let statusText = cc11001100_hook("statusText", self.status, "var-init");
      let nowTime = cc11001100_hook("nowTime", new Date().getTime(), "var-init");
      let dEvent = cc11001100_hook("dEvent", downEvent || window.event, "var-init");
      let target = cc11001100_hook("target", self.getNodes().container, "var-init");
      let targetRect = cc11001100_hook("targetRect", target.getBoundingClientRect(), "var-init");
      let mousePoint = cc11001100_hook("mousePoint", [dEvent.screenX, dEvent.screenY], "var-init");
      let trigger = cc11001100_hook("trigger", target.querySelector('.modal-layer-title'), "var-init");
      let parentWindow = cc11001100_hook("parentWindow", window.document.documentElement, "var-init");
      let parentWindowRect = cc11001100_hook("parentWindowRect", parentWindow.getBoundingClientRect(), "var-init");
      let boundary = cc11001100_hook("boundary", [parentWindowRect.left, parentWindowRect.left + parentWindowRect.width, parentWindowRect.left, parentWindowRect.top + parentWindowRect.height], "var-init");
      if (dEvent.button !== 0 || self.globalVariable.mousedown && self.globalVariable.mousedown[0] && nowTime - self.globalVariable.mousedown[0] <= 200) return;
      self.globalVariable.mousedown = cc11001100_hook("self.globalVariable.mousedown", [true, nowTime], "assign");
      targetRect.y = cc11001100_hook("targetRect.y", targetRect.top, "assign");
      targetRect.x = cc11001100_hook("targetRect.x", targetRect.left, "assign");
      window.getSelection().removeAllRanges();
      let dragMask = cc11001100_hook("dragMask", target.querySelector('.modal-layer-drag-mask'), "var-init");
      if (!dragMask) {
        dragMask = cc11001100_hook("dragMask", ModalLayer.assistant.util.objectToDom([self.nodeData.dragMask])[0], "assign");
        target.querySelector('.modal-layer-content').insertAdjacentElement('afterbegin', dragMask);
      }
      dragMask.style.visibility = cc11001100_hook("dragMask.style.visibility", 'visible', "assign");
      let targetMoveMethod = function (movementX, movementY) {
        if (!self.option.dragOverflow) {
          if (targetRect.x + movementX < boundary[0]) targetRect.x = cc11001100_hook("targetRect.x", boundary[0] - movementX, "assign");
          if (targetRect.x + targetRect.width + movementX > boundary[1]) targetRect.x = cc11001100_hook("targetRect.x", boundary[1] - targetRect.width - movementX, "assign");
          if (targetRect.y + movementY < boundary[2]) targetRect.y = cc11001100_hook("targetRect.y", boundary[2] - movementY, "assign");
          if (targetRect.y + targetRect.height + movementY > boundary[3]) targetRect.y = cc11001100_hook("targetRect.y", boundary[3] - targetRect.height - movementY, "assign");
        }
        targetRect.x += cc11001100_hook("targetRect.x", movementX, "assign");
        targetRect.y += cc11001100_hook("targetRect.y", movementY, "assign");
        target.style.marginLeft = cc11001100_hook("target.style.marginLeft", targetRect.x + 'px', "assign");
        target.style.marginTop = cc11001100_hook("target.style.marginTop", targetRect.y + 'px', "assign");
        self.setStatus('drag');
      };
      let mouseMoveEvent = function (moveEvent) {
        let mEvent = cc11001100_hook("mEvent", moveEvent || window.event, "var-init");
        let movementX = cc11001100_hook("movementX", mEvent.screenX - mousePoint[0], "var-init");
        let movementY = cc11001100_hook("movementY", mEvent.screenY - mousePoint[1], "var-init");
        mousePoint = cc11001100_hook("mousePoint", [mEvent.screenX, mEvent.screenY], "assign");
        targetMoveMethod(movementX, movementY);
      };
      let keyboardDownEvent = function (kPressEvent) {
        let movement = cc11001100_hook("movement", [], "var-init");
        let kEvent = cc11001100_hook("kEvent", kPressEvent || window.event, "var-init");
        let keyCode = cc11001100_hook("keyCode", kEvent.keyCode || kEvent.which, "var-init");
        let allowKey = cc11001100_hook("allowKey", [ModalLayer.enum.arrow.up, ModalLayer.enum.arrow.dw, ModalLayer.enum.arrow.left, ModalLayer.enum.arrow.right], "var-init");
        if (allowKey.indexOf(keyCode) < 0) return;
        switch (keyCode) {
          case allowKey[0]:
            movement[1] = cc11001100_hook("movement[1]", -1, "assign");
            break;
          case allowKey[1]:
            movement[1] = cc11001100_hook("movement[1]", 1, "assign");
            break;
          case allowKey[2]:
            movement[0] = cc11001100_hook("movement[0]", -1, "assign");
            break;
          case allowKey[3]:
            movement[0] = cc11001100_hook("movement[0]", 1, "assign");
            break;
          default:
            break;
        }
        targetMoveMethod(movement[0], movement[1]);
      };
      let mouseUpEvent = function () {
        delete self.globalVariable.mousedown;
        target.querySelector('.modal-layer-drag-mask').removeAttribute('style');
        document.removeEventListener('keydown', keyboardDownEvent);
        document.removeEventListener('mousemove', mouseMoveEvent);
        document.removeEventListener('mouseup', mouseUpEvent);
        self.setStatus(statusText);
      };
      document.addEventListener('mouseup', mouseUpEvent);
      document.addEventListener('mousemove', mouseMoveEvent);
      document.addEventListener('keydown', keyboardDownEvent);
    },
    'resize': function (downEvent) {
      let self = cc11001100_hook("self", ModalLayer.getModalLayerByDom(this), "var-init");
      let statusText = cc11001100_hook("statusText", self.status, "var-init");
      let nowTime = cc11001100_hook("nowTime", new Date().getTime(), "var-init");
      let dEvent = cc11001100_hook("dEvent", downEvent || window.event, "var-init");
      let trigger = cc11001100_hook("trigger", dEvent.target, "var-init");
      let target = cc11001100_hook("target", self.getNodes().container, "var-init");
      let targetRect = cc11001100_hook("targetRect", target.getBoundingClientRect(), "var-init");
      let targetMinArea = cc11001100_hook("targetMinArea", self.globalVariable.defaultArea, "var-init");
      let mousePoint = cc11001100_hook("mousePoint", [dEvent.screenX, dEvent.screenY], "var-init");
      let targetArea = cc11001100_hook("targetArea", [targetRect.width, targetRect.height], "var-init");
      let windowRect = cc11001100_hook("windowRect", document.documentElement.getBoundingClientRect(), "var-init");
      if (dEvent.button !== 0 || self.globalVariable.mousedown && self.globalVariable.mousedown[0] && nowTime - self.globalVariable.mousedown[0] <= 200) return;
      self.globalVariable.mousedown = cc11001100_hook("self.globalVariable.mousedown", [true, nowTime], "assign");
      targetRect.y = cc11001100_hook("targetRect.y", targetRect.top, "assign");
      targetRect.x = cc11001100_hook("targetRect.x", targetRect.left, "assign");
      window.getSelection().removeAllRanges();
      let resizeMask = cc11001100_hook("resizeMask", target.querySelector('.modal-layer-resize-mask'), "var-init");
      let resizeBodyMask = cc11001100_hook("resizeBodyMask", document.querySelector('.modal-layer-resize-mask'), "var-init");
      if (!resizeMask) {
        resizeMask = cc11001100_hook("resizeMask", ModalLayer.assistant.util.objectToDom([self.nodeData.resizeMask])[0], "assign");
        target.insertAdjacentElement('afterbegin', resizeMask);
      }
      if (resizeBodyMask.parentNode !== document.body || resizeMask === resizeBodyMask || !resizeBodyMask) {
        resizeBodyMask = cc11001100_hook("resizeBodyMask", ModalLayer.assistant.util.objectToDom([self.nodeData.resizeMask])[0], "assign");
        resizeBodyMask.style.zIndex = cc11001100_hook("resizeBodyMask.style.zIndex", parseInt(target.style.zIndex) - 1, "assign");
        resizeBodyMask.style.cssText += cc11001100_hook("resizeBodyMask.style.cssText", 'top: 0; left: 0; right: 0; bottom: 0; position: fixed;', "assign");
        document.body.insertAdjacentElement('afterbegin', resizeBodyMask);
      }
      resizeMask.style.visibility = cc11001100_hook("resizeMask.style.visibility", 'visible', "assign");
      resizeBodyMask.style.visibility = cc11001100_hook("resizeBodyMask.style.visibility", 'visible', "assign");
      let mouseMoveEvent = function (moveEvent) {
        let mEvent = cc11001100_hook("mEvent", moveEvent || window.event, "var-init");
        let movementX = cc11001100_hook("movementX", mEvent.screenX - mousePoint[0], "var-init");
        let movementY = cc11001100_hook("movementY", mEvent.screenY - mousePoint[1], "var-init");
        let resizePos = cc11001100_hook("resizePos", trigger.getAttribute('position-resize-bar'), "var-init");
        let moveNow = cc11001100_hook("moveNow", [targetRect.x, targetRect.y, targetArea[0], targetArea[1]], "var-init");
        self.setStatus('resize');
        if (resizePos.indexOf('top') >= 0) {
          moveNow[1] += cc11001100_hook("moveNow[1]", movementY, "assign");
          moveNow[3] -= cc11001100_hook("moveNow[3]", movementY, "assign");
          if (moveNow[1] < windowRect.y) moveNow[3] -= cc11001100_hook("moveNow[3]", windowRect.y - moveNow[1], "assign");
          if (moveNow[3] < targetMinArea[1]) {
            moveNow[1] += cc11001100_hook("moveNow[1]", moveNow[3] - targetMinArea[1], "assign");
            moveNow[3] = cc11001100_hook("moveNow[3]", targetMinArea[1], "assign");
          }
        }
        if (resizePos.indexOf('bottom') >= 0) {
          moveNow[3] += cc11001100_hook("moveNow[3]", movementY, "assign");
          if (moveNow[3] < targetMinArea[1]) moveNow[3] = cc11001100_hook("moveNow[3]", targetMinArea[1], "assign");
        }
        if (resizePos.indexOf('left') >= 0) {
          moveNow[0] += cc11001100_hook("moveNow[0]", movementX, "assign");
          moveNow[2] -= cc11001100_hook("moveNow[2]", movementX, "assign");
          if (moveNow[0] < windowRect.x) moveNow[2] -= cc11001100_hook("moveNow[2]", windowRect.x - moveNow[0], "assign");
          if (moveNow[2] < targetMinArea[0]) {
            moveNow[0] += cc11001100_hook("moveNow[0]", moveNow[2] - targetMinArea[0], "assign");
            moveNow[2] = cc11001100_hook("moveNow[2]", targetMinArea[0], "assign");
          }
        }
        if (resizePos.indexOf('right') >= 0) {
          moveNow[2] += cc11001100_hook("moveNow[2]", movementX, "assign");
          if (moveNow[2] < targetMinArea[0]) moveNow[2] = cc11001100_hook("moveNow[2]", targetMinArea[0], "assign");
        }
        self.resizeByXYWH(moveNow[0], moveNow[1], moveNow[2], moveNow[3]);
      };
      let mouseUpEvent = function () {
        delete self.globalVariable.mousedown;
        target.querySelector('.modal-layer-resize-mask').removeAttribute('style');
        document.body.removeChild(document.querySelector('.modal-layer-resize-mask'));
        document.removeEventListener('mousemove', mouseMoveEvent);
        document.removeEventListener('mouseup', mouseUpEvent);
        self.setStatus(statusText);
      };
      document.addEventListener('mouseup', mouseUpEvent);
      document.addEventListener('mousemove', mouseMoveEvent);
    }
  }
}, "assign");
ModalLayer.prototype.nodeData = cc11001100_hook("ModalLayer.prototype.nodeData", {
  mask: {
    'nodeType': cc11001100_hook('nodeType', 'div', "object-key-init"),
    'id': cc11001100_hook('id', 'modal-layer-mask', "object-key-init")
  },
  container: {
    'nodeType': cc11001100_hook('nodeType', 'div', "object-key-init"),
    'id': cc11001100_hook('id', 'modal-layer-container', "object-key-init")
  },
  title: {
    'nodeType': cc11001100_hook('nodeType', 'div', "object-key-init"),
    'class': cc11001100_hook('class', 'modal-layer-title', "object-key-init"),
    'innerHTML': cc11001100_hook('innerHTML', [{
      'nodeType': cc11001100_hook('nodeType', 'h4', "object-key-init"),
      'class': cc11001100_hook('class', 'modal-layer-title-content', "object-key-init")
    }], "object-key-init")
  },
  content: {
    'nodeType': cc11001100_hook('nodeType', 'div', "object-key-init"),
    'class': cc11001100_hook('class', 'modal-layer-content', "object-key-init")
  },
  contentPage: {
    'nodeType': cc11001100_hook('nodeType', 'iframe', "object-key-init"),
    'name': cc11001100_hook('name', '', "object-key-init"),
    'scrolling': cc11001100_hook('scrolling', 'no', "object-key-init"),
    'frameborder': cc11001100_hook('frameborder', 0, "object-key-init")
  },
  dragMask: {
    'nodeType': cc11001100_hook('nodeType', 'div', "object-key-init"),
    'class': cc11001100_hook('class', 'modal-layer-drag-mask', "object-key-init")
  },
  interaction: {
    'nodeType': cc11001100_hook('nodeType', 'div', "object-key-init"),
    'class': cc11001100_hook('class', 'modal-layer-interaction', "object-key-init"),
    'innerHTML': cc11001100_hook('innerHTML', [{
      'nodeType': cc11001100_hook('nodeType', 'span', "object-key-init"),
      'class': cc11001100_hook('class', 'modal-layer-button modal-layer-button-ok', "object-key-init")
    }, {
      'nodeType': cc11001100_hook('nodeType', 'span', "object-key-init"),
      'class': cc11001100_hook('class', 'modal-layer-button modal-layer-button-cancel', "object-key-init")
    }, {
      'nodeType': cc11001100_hook('nodeType', 'span', "object-key-init"),
      'class': cc11001100_hook('class', 'modal-layer-button modal-layer-button-no', "object-key-init")
    }], "object-key-init")
  },
  action: {
    'nodeType': cc11001100_hook('nodeType', 'div', "object-key-init"),
    'class': cc11001100_hook('class', 'modal-layer-action', "object-key-init"),
    'innerHTML': cc11001100_hook('innerHTML', [{
      'nodeType': cc11001100_hook('nodeType', 'span', "object-key-init"),
      'data-fa-transform': cc11001100_hook('data-fa-transform', 'up-4 shrink-2', "object-key-init"),
      'class': cc11001100_hook('class', 'fas fa-window-minimize modal-layer-action-btn modal-layer-action-minimize', "object-key-init")
    }, {
      'nodeType': cc11001100_hook('nodeType', 'span', "object-key-init"),
      'data-fa-transform': cc11001100_hook('data-fa-transform', 'shrink-2', "object-key-init"),
      'class': cc11001100_hook('class', 'fas fa-expand-arrows-alt modal-layer-action-btn modal-layer-action-expand', "object-key-init")
    }, {
      'nodeType': cc11001100_hook('nodeType', 'span', "object-key-init"),
      'data-fa-transform': cc11001100_hook('data-fa-transform', 'rotate-45 grow-1', "object-key-init"),
      'class': cc11001100_hook('class', 'fas fa-plus modal-layer-action-btn modal-layer-action-close', "object-key-init")
    }], "object-key-init")
  },
  displayProgressBar: {
    'nodeType': cc11001100_hook('nodeType', 'div', "object-key-init"),
    'class': cc11001100_hook('class', 'modal-layer-display-progress-bar', "object-key-init"),
    'innerHTML': cc11001100_hook('innerHTML', [{
      'nodeType': cc11001100_hook('nodeType', 'div', "object-key-init"),
      'class': cc11001100_hook('class', 'modal-layer-display-progress-background', "object-key-init"),
      'innerHTML': cc11001100_hook('innerHTML', [{
        'nodeType': cc11001100_hook('nodeType', 'span', "object-key-init"),
        'class': cc11001100_hook('class', 'modal-layer-display-bar-progress', "object-key-init")
      }], "object-key-init")
    }], "object-key-init")
  },
  resizeBox: {
    'nodeType': cc11001100_hook('nodeType', 'div', "object-key-init"),
    'class': cc11001100_hook('class', 'modal-layer-resize-box', "object-key-init"),
    'innerHTML': cc11001100_hook('innerHTML', [{
      'nodeType': cc11001100_hook('nodeType', 'div', "object-key-init"),
      'class': cc11001100_hook('class', 'modal-layer-resize-bar', "object-key-init"),
      'position-resize-bar': cc11001100_hook('position-resize-bar', 'top', "object-key-init")
    }, {
      'nodeType': cc11001100_hook('nodeType', 'div', "object-key-init"),
      'class': cc11001100_hook('class', 'modal-layer-resize-bar', "object-key-init"),
      'position-resize-bar': cc11001100_hook('position-resize-bar', 'left', "object-key-init")
    }, {
      'nodeType': cc11001100_hook('nodeType', 'div', "object-key-init"),
      'class': cc11001100_hook('class', 'modal-layer-resize-bar', "object-key-init"),
      'position-resize-bar': cc11001100_hook('position-resize-bar', 'right', "object-key-init")
    }, {
      'nodeType': cc11001100_hook('nodeType', 'div', "object-key-init"),
      'class': cc11001100_hook('class', 'modal-layer-resize-bar', "object-key-init"),
      'position-resize-bar': cc11001100_hook('position-resize-bar', 'bottom', "object-key-init")
    }, {
      'nodeType': cc11001100_hook('nodeType', 'div', "object-key-init"),
      'class': cc11001100_hook('class', 'modal-layer-resize-bar', "object-key-init"),
      'position-resize-bar': cc11001100_hook('position-resize-bar', 'left-top', "object-key-init")
    }, {
      'nodeType': cc11001100_hook('nodeType', 'div', "object-key-init"),
      'class': cc11001100_hook('class', 'modal-layer-resize-bar', "object-key-init"),
      'position-resize-bar': cc11001100_hook('position-resize-bar', 'right-top', "object-key-init")
    }, {
      'nodeType': cc11001100_hook('nodeType', 'div', "object-key-init"),
      'class': cc11001100_hook('class', 'modal-layer-resize-bar', "object-key-init"),
      'position-resize-bar': cc11001100_hook('position-resize-bar', 'left-bottom', "object-key-init")
    }, {
      'nodeType': cc11001100_hook('nodeType', 'div', "object-key-init"),
      'class': cc11001100_hook('class', 'modal-layer-resize-bar', "object-key-init"),
      'position-resize-bar': cc11001100_hook('position-resize-bar', 'right-bottom', "object-key-init")
    }], "object-key-init")
  },
  resizeMask: {
    'nodeType': cc11001100_hook('nodeType', 'div', "object-key-init"),
    'class': cc11001100_hook('class', 'modal-layer-resize-mask', "object-key-init")
  },
  minimizeTaskbar: {
    'nodeType': cc11001100_hook('nodeType', 'div', "object-key-init"),
    'id': cc11001100_hook('id', 'modal-layer-minimize-taskbar', "object-key-init")
  },
  minimizeTaskbarItem: {
    'nodeType': cc11001100_hook('nodeType', 'div', "object-key-init"),
    'class': cc11001100_hook('class', 'modal-layer-minimize-item', "object-key-init"),
    'innerHTML': cc11001100_hook('innerHTML', [{
      'nodeType': cc11001100_hook('nodeType', 'h4', "object-key-init"),
      'class': cc11001100_hook('class', 'modal-layer-minimize-item-title', "object-key-init")
    }], "object-key-init")
  }
}, "assign");
ModalLayer.prototype.initOption = cc11001100_hook("ModalLayer.prototype.initOption", function (options) {
  let optionKeys = cc11001100_hook("optionKeys", Object.keys(options), "var-init");
  optionKeys.forEach(function (key) {
    if (key === 'type') {
      if (ModalLayer.enum.type[options[key]] === undefined) throw Error('无效的类型');
    }
    if (['text', 'pageOption', 'callback', 'hook', 'event'].indexOf(key) >= 0) {
      Object.keys(options[key]).forEach(function (k) {
        if (this.option[key][k] !== undefined) {
          if (typeof options[key][k] === 'function') {
            this.option[key][k] = cc11001100_hook("this.option[key][k]", options[key][k].bind(this), "assign");
          } else {
            this.option[key][k] = cc11001100_hook("this.option[key][k]", options[key][k], "assign");
          }
        }
      }, this);
    } else {
      if (this.option[key] !== undefined) this.option[key] = cc11001100_hook("this.option[key]", options[key], "assign");
    }
  }, this);
  if (this.option.popupTime <= 0) this.option.displayProgressBar = cc11001100_hook("this.option.displayProgressBar", false, "assign");
  if (this.option.mask === false) this.option.clickMaskRemove = cc11001100_hook("this.option.clickMaskRemove", false, "assign");
  if (this.option.type === 'msg') this.option.title = cc11001100_hook("this.option.title", false, "assign");
  if (this.option.title === false) this.option.drag = cc11001100_hook("this.option.drag", false, "assign");
  if (this.option.drag === false) this.option.dragOverflow = cc11001100_hook("this.option.dragOverflow", false, "assign");
  this.option.index = cc11001100_hook("this.option.index", ModalLayer.instance.length, "assign");
}, "assign");
ModalLayer.prototype.initBuildData = cc11001100_hook("ModalLayer.prototype.initBuildData", function () {
  let buildData = cc11001100_hook("buildData", {}, "var-init");
  if (this.option.mask) buildData['mask'] = cc11001100_hook("buildData['mask']", this.nodeData.mask, "assign");
  buildData['container'] = cc11001100_hook("buildData['container']", this.nodeData.container, "assign");
  if (buildData['container']['innerHTML'] === undefined) buildData['container']['innerHTML'] = cc11001100_hook("buildData['container']['innerHTML']", [], "assign");
  if (this.nodeData.content['innerHTML'] === undefined) this.nodeData.content['innerHTML'] = cc11001100_hook("this.nodeData.content['innerHTML']", [], "assign");
  if (this.option.resize) buildData['container']['innerHTML'].push(this.nodeData.resizeMask);
  if (this.option.title !== false) buildData['container']['innerHTML'].push(this.nodeData.title);
  if (this.option.drag) this.nodeData.content['innerHTML'].push(this.nodeData.dragMask);
  if (['page', 'video', 'audio'].indexOf(this.option.type) >= 0) this.nodeData.content['innerHTML'].push(this.nodeData.contentPage);
  buildData['container']['innerHTML'].push(this.nodeData.content);
  buildData['container']['innerHTML'].push(this.nodeData.interaction);
  buildData['container']['innerHTML'].push(this.nodeData.action);
  if (this.option.displayProgressBar) buildData['container']['innerHTML'].push(this.nodeData.displayProgressBar);
  if (this.option.resize) buildData['container']['innerHTML'].push(this.nodeData.resizeBox);
  return buildData;
}, "assign");
ModalLayer.prototype.initNode = cc11001100_hook("ModalLayer.prototype.initNode", function (buildData) {
  let ui = cc11001100_hook("ui", 'modal-layer-ui', "var-init");
  let hideCls = cc11001100_hook("hideCls", 'modal-layer-hide', "var-init");
  let skin = cc11001100_hook("skin", 'modal-layer-skin-' + this.option.skin, "var-init");
  let indexCls = cc11001100_hook("indexCls", 'modal-layer-index-' + this.option.index, "var-init");
  let modalLayerNodes = cc11001100_hook("modalLayerNodes", ModalLayer.assistant.util.objectToDom(buildData), "var-init");
  let modalLayerNodeKeys = cc11001100_hook("modalLayerNodeKeys", Object.keys(modalLayerNodes), "var-init");
  let maxZIndex = cc11001100_hook("maxZIndex", ModalLayer.assistant.util.maxZIndex(), "var-init");
  let opacityStyle = cc11001100_hook("opacityStyle", 'opacity: ' + this.option.transitionOpacity + ';', "var-init");
  let transitionOpacity = cc11001100_hook("transitionOpacity", 'opacity ' + this.option.transitionTime + 's ease', "var-init");
  let transitionTransform = cc11001100_hook("transitionTransform", 'transform ' + this.option.transitionTime + 's ease', "var-init");
  let transitionStyle = cc11001100_hook("transitionStyle", ';-webkit-transition: ' + transitionOpacity + ', ' + transitionTransform + '; -o-transition:' + transitionOpacity + ', ' + transitionTransform + '; transition:' + transitionOpacity + ', ' + transitionTransform + ';', "var-init");
  let transformStyle = cc11001100_hook("transformStyle", ';-webkit-transform: scale(' + this.option.transitionScale[0] + ', ' + this.option.transitionScale[1] + ');-ms-transform: scale(' + this.option.transitionScale[0] + ', ' + this.option.transitionScale[1] + ');-o-transform: scale(' + this.option.transitionScale[0] + ', ' + this.option.transitionScale[1] + ');transform: scale(' + this.option.transitionScale[0] + ', ' + this.option.transitionScale[1] + ');', "var-init");
  modalLayerNodes.container.setAttribute('modal-layer-type', this.option.type);
  modalLayerNodes.container.setAttribute('modal-layer-popup-time', this.option.popupTime);
  modalLayerNodes.container.setAttribute('click-mask-remove', this.option.clickMaskRemove);
  modalLayerNodes.container.setAttribute('content-full-container', this.option.contentFullContainer);
  if (this.option.drag) modalLayerNodes.container.setAttribute('allow-drag', this.option.drag);
  if (this.option.resize) modalLayerNodes.container.setAttribute('allow-resize', this.option.resize);
  if (this.option.displayProgressBar) {
    let posAry = cc11001100_hook("posAry", ['top', 'left', 'right', 'bottom'], "var-init");
    let barNode = cc11001100_hook("barNode", modalLayerNodes.container.querySelector('.modal-layer-display-progress-bar'), "var-init");
    if (posAry.indexOf(this.option.displayProgressBarPos.toLowerCase()) === false) this.option.displayProgressBarPos = cc11001100_hook("this.option.displayProgressBarPos", posAry[3], "assign");
    barNode.setAttribute('progress-bar-position', this.option.displayProgressBarPos);
    barNode.querySelector('.modal-layer-display-bar-progress').style.cssText += cc11001100_hook("barNode.querySelector('.modal-layer-display-bar-progress').style.cssText", 'background: ' + this.option.displayProgressBarColor, "assign");
  }
  if (this.option.type === 'page') {
    let pageNode = cc11001100_hook("pageNode", modalLayerNodes.container.querySelector('.modal-layer-content iframe'), "var-init");
    let pageStyle = cc11001100_hook("pageStyle", 'display: block; width: ' + this.option.pageArea[0] + 'px; height: ' + this.option.pageArea[1] + 'px', "var-init");
    if (this.option.pageOption.srcdoc !== undefined && this.option.pageOption.src !== undefined) delete this.option.pageOption.srcdoc;
    Object.keys(this.option.pageOption).forEach(function (key) {
      if (key === 'name') pageNode.setAttribute('name', this.option.pageOption.name + this.option.index);else pageNode.setAttribute(key, this.option.pageOption[key]);
    }, this);
    pageNode.style.cssText = cc11001100_hook("pageNode.style.cssText", pageStyle, "assign");
  }
  this.initContent(modalLayerNodes.container);
  modalLayerNodeKeys.forEach(function (key) {
    let allNodes = cc11001100_hook("allNodes", ModalLayer.assistant.util.getAllElement(modalLayerNodes[key]), "var-init");
    for (let i = cc11001100_hook("i", 0, "var-init"); i < allNodes.length; i++) {
      let classList = cc11001100_hook("classList", allNodes[i].classList, "var-init");
      if (!classList.contains(ui)) ;
      classList.add(ui);
    }
    modalLayerNodes[key].classList.add(ui);
    modalLayerNodes[key].classList.add(skin);
    modalLayerNodes[key].classList.add(indexCls);
    modalLayerNodes[key].classList.add(hideCls);
    modalLayerNodes[key].style.cssText = cc11001100_hook("modalLayerNodes[key].style.cssText", opacityStyle + transitionStyle, "assign");
    modalLayerNodes[key].style.zIndex = cc11001100_hook("modalLayerNodes[key].style.zIndex", maxZIndex + 1, "assign");
  }, this);
  modalLayerNodes.container.style.cssText += cc11001100_hook("modalLayerNodes.container.style.cssText", transformStyle, "assign");
  this.initEvent(modalLayerNodes);
  ModalLayer.instance.push(this);
  return modalLayerNodes;
}, "assign");
ModalLayer.prototype.initContent = cc11001100_hook("ModalLayer.prototype.initContent", function (container) {
  let titleNode = cc11001100_hook("titleNode", container.querySelector('.modal-layer-title-content'), "var-init");
  let contentNode = cc11001100_hook("contentNode", container.querySelector('.modal-layer-content'), "var-init");
  let interactionNode = cc11001100_hook("interactionNode", container.querySelector('.modal-layer-interaction'), "var-init");
  if (this.option.type !== 'page') {
    if (this.option.drag) contentNode.innerHTML = cc11001100_hook("contentNode.innerHTML", container.querySelector('.modal-layer-drag-mask').outerHTML + (this.option.content ? this.option.content : this.option.text.content), "assign");else contentNode.innerHTML = cc11001100_hook("contentNode.innerHTML", this.option.content ? this.option.content : this.option.text.content, "assign");
  }
  if (this.option.type !== 'msg') {
    titleNode.innerHTML = cc11001100_hook("titleNode.innerHTML", this.option.title ? this.option.title : this.option.text.title, "assign");
    interactionNode.querySelector('.modal-layer-button-ok').innerHTML = cc11001100_hook("interactionNode.querySelector('.modal-layer-button-ok').innerHTML", this.option.okText ? this.option.okText : this.option.text.okButton, "assign");
    interactionNode.querySelector('.modal-layer-button-no').innerHTML = cc11001100_hook("interactionNode.querySelector('.modal-layer-button-no').innerHTML", this.option.noText ? this.option.noText : this.option.text.noButton, "assign");
    interactionNode.querySelector('.modal-layer-button-cancel').innerHTML = cc11001100_hook("interactionNode.querySelector('.modal-layer-button-cancel').innerHTML", this.option.cancelText ? this.option.cancelText : this.option.text.cancelButton, "assign");
  }
}, "assign");
ModalLayer.prototype.initEvent = cc11001100_hook("ModalLayer.prototype.initEvent", function (modalLayerNodes) {
  let self = cc11001100_hook("self", this, "var-init");
  if (this.option.mask && this.option.clickMaskRemove) modalLayerNodes.mask.addEventListener('click', this.option.callback.clickMask);
  if (this.option.drag) modalLayerNodes.container.querySelector('.modal-layer-title').addEventListener('mousedown', this.option.event.drag);
  if (this.option.resize) ModalLayer.assistant.util.eventTarget(modalLayerNodes.container, '.modal-layer-resize-bar', 'mousedown', this.option.event.resize);
  modalLayerNodes.container.addEventListener('mousedown', this.option.event.active);
  if (this.option.popupTime > 0) {
    let hideCls = cc11001100_hook("hideCls", 'modal-layer-hide', "var-init");
    let showCls = cc11001100_hook("showCls", 'modal-layer-show', "var-init");
    let totalTime = cc11001100_hook("totalTime", this.option.popupTime * 1000, "var-init");
    this.intervalClock.push(setInterval(function () {
      if (modalLayerNodes.container.classList.contains(showCls)) {
        self.stopAllInterval();
        if (self.option.displayProgressBar) {
          let animationName = cc11001100_hook("animationName", '', "var-init");
          let progressNode = cc11001100_hook("progressNode", modalLayerNodes.container.querySelector('.modal-layer-display-bar-progress'), "var-init");
          switch (self.option.displayProgressBarPos) {
            case 'top':
            case 'bottom':
              animationName = cc11001100_hook("animationName", 'widthFull', "assign");
              break;
            case 'left':
            case 'right':
              animationName = cc11001100_hook("animationName", 'heightFull', "assign");
              break;
            default:
              break;
          }
          progressNode.style.cssText += cc11001100_hook("progressNode.style.cssText", ';animation: ' + animationName + ' ' + self.option.popupTime + 's linear; -webkit-animation: ' + animationName + ' ' + self.option.popupTime + 's linear;', "assign");
        }
        self.timeoutClock.push(setTimeout(function () {
          self.remove(self.option.index);
        }, totalTime));
      }
    }, 10));
  }
  if (this.option.callback.close) ModalLayer.assistant.util.eventTarget(modalLayerNodes.container, '.modal-layer-action-close', 'click', this.option.callback.close);
  if (this.option.callback.expand) ModalLayer.assistant.util.eventTarget(modalLayerNodes.container, '.modal-layer-action-expand', 'click', this.option.callback.expand);
  if (this.option.callback.minimize) ModalLayer.assistant.util.eventTarget(modalLayerNodes.container, '.modal-layer-action-minimize', 'click', this.option.callback.minimize);
  if (this.option.type !== 'msg') {
    let okButton = cc11001100_hook("okButton", modalLayerNodes.container.querySelector('.modal-layer-button-ok'), "var-init");
    let noButton = cc11001100_hook("noButton", modalLayerNodes.container.querySelector('.modal-layer-button-no'), "var-init");
    let cancelButton = cc11001100_hook("cancelButton", modalLayerNodes.container.querySelector('.modal-layer-button-cancel'), "var-init");
    if (this.option.callback.ok !== undefined) okButton.addEventListener('click', this.option.callback.ok);
    if (this.option.callback.no !== undefined) noButton.addEventListener('click', this.option.callback.no);
    cancelButton.addEventListener('click', this.option.callback.cancel);
  }
}, "assign");
ModalLayer.prototype.stopAllInterval = cc11001100_hook("ModalLayer.prototype.stopAllInterval", function () {
  this.intervalClock.forEach(function (v, k) {
    this.stopInterval(k);
  }, this);
}, "assign");
ModalLayer.prototype.stopInterval = cc11001100_hook("ModalLayer.prototype.stopInterval", function (i) {
  clearInterval(this.intervalClock[i]);
  delete this.intervalClock[i];
}, "assign");
ModalLayer.prototype.stopAllTimeout = cc11001100_hook("ModalLayer.prototype.stopAllTimeout", function () {
  this.timeoutClock.forEach(function (v, k) {
    this.stopTimeout(k);
  }, this);
}, "assign");
ModalLayer.prototype.stopTimeout = cc11001100_hook("ModalLayer.prototype.stopTimeout", function (i) {
  clearTimeout(this.timeoutClock[i]);
  delete this.timeoutClock[i];
}, "assign");
ModalLayer.prototype.removeAllEvent = cc11001100_hook("ModalLayer.prototype.removeAllEvent", function () {
  let modalLayerNodes = cc11001100_hook("modalLayerNodes", this.getNodes(), "var-init");
  if (Object.keys(modalLayerNodes).length === 0) return false;
  if (this.option.mask) modalLayerNodes.mask.removeEventListener('click', this.option.callback.clickMask);
  if (this.option.drag) modalLayerNodes.container.querySelector('.modal-layer-title').removeEventListener('mousedown', this.option.event.drag);
  if (this.option.resize) modalLayerNodes.container.removeEventListener('mousedown', this.option.event.resize);
  modalLayerNodes.container.removeEventListener('mousedown', this.option.event.active);
  let okButton = cc11001100_hook("okButton", modalLayerNodes.container.querySelector('.modal-layer-button-ok'), "var-init");
  let noButton = cc11001100_hook("noButton", modalLayerNodes.container.querySelector('.modal-layer-button-no'), "var-init");
  let cancelButton = cc11001100_hook("cancelButton", modalLayerNodes.container.querySelector('.modal-layer-button-cancel'), "var-init");
  if (okButton) okButton.removeEventListener('click', this.option.callback.ok);
  if (noButton) noButton.removeEventListener('click', this.option.callback.no);
  if (cancelButton) cancelButton.removeEventListener('click', this.option.callback.cancel);
  modalLayerNodes.container.removeEventListener('click', this.option.callback.close);
  modalLayerNodes.container.removeEventListener('click', this.option.callback.expand);
  modalLayerNodes.container.removeEventListener('click', this.option.callback.minimize);
}, "assign");
ModalLayer.__proto__.getModalLayerByDom = cc11001100_hook("ModalLayer.__proto__.getModalLayerByDom", function (node) {
  let modalIndex = cc11001100_hook("modalIndex", null, "var-init");
  let classList = cc11001100_hook("classList", node.classList, "var-init");
  let indexClass = cc11001100_hook("indexClass", 'modal-layer-index-', "var-init");
  while (node.getAttribute('class').indexOf(indexClass) < 0 && node !== document) {
    classList = cc11001100_hook("classList", node.classList, "assign");
    node = cc11001100_hook("node", node.parentNode, "assign");
  }
  classList = cc11001100_hook("classList", node.classList, "assign");
  for (let i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", classList.length, "var-init"); i < len; i++) {
    let item = cc11001100_hook("item", classList.item(i), "var-init");
    if (item.indexOf(indexClass) >= 0) {
      modalIndex = cc11001100_hook("modalIndex", item.replace(indexClass, ''), "assign");
      break;
    }
  }
  return ModalLayer.instance[modalIndex];
}, "assign");
ModalLayer.prototype.getNodes = cc11001100_hook("ModalLayer.prototype.getNodes", function () {
  let nodes = cc11001100_hook("nodes", {}, "var-init");
  let maskNode = cc11001100_hook("maskNode", document.querySelector('#modal-layer-mask.modal-layer-index-' + this.option.index), "var-init");
  let containerNode = cc11001100_hook("containerNode", document.querySelector('#modal-layer-container.modal-layer-index-' + this.option.index), "var-init");
  let minimizeTaskbarNode = cc11001100_hook("minimizeTaskbarNode", document.querySelector('#modal-layer-container.modal-layer-index-'), "var-init");
  maskNode ? nodes.mask = cc11001100_hook("nodes.mask", maskNode, "assign") : '';
  containerNode ? nodes.container = cc11001100_hook("nodes.container", containerNode, "assign") : '';
  return nodes;
}, "assign");
ModalLayer.prototype.setStatus = cc11001100_hook("ModalLayer.prototype.setStatus", function (statusText) {
  if (ModalLayer.enum.status[statusText] === undefined) throw Error('不存在该状态, 无法设置.');
  this.status = cc11001100_hook("this.status", statusText, "assign");
}, "assign");
ModalLayer.prototype.resize = cc11001100_hook("ModalLayer.prototype.resize", function () {
  let newModalWidth = cc11001100_hook("newModalWidth", 0, "var-init");
  let newModalHeight = cc11001100_hook("newModalHeight", 0, "var-init");
  let modalChildNodes = cc11001100_hook("modalChildNodes", null, "var-init");
  let windowWidth = cc11001100_hook("windowWidth", window.innerWidth, "var-init");
  let windowHeight = cc11001100_hook("windowHeight", window.innerHeight, "var-init");
  let containerNode = cc11001100_hook("containerNode", this.getNodes().container, "var-init");
  let widthTmpNum = cc11001100_hook("widthTmpNum", this.option.areaProportion[0].toString().length - (this.option.areaProportion[0].toString().indexOf('.') + 1), "var-init");
  let heightTmpNum = cc11001100_hook("heightTmpNum", this.option.areaProportion[1].toString().length - (this.option.areaProportion[1].toString().indexOf('.') + 1), "var-init");
  if (this.option.type.toLowerCase() === 'page') {
    let pageNode = cc11001100_hook("pageNode", containerNode.querySelector('iframe[name=' + this.option.pageOption.name + this.option.index + ']'), "var-init");
    modalChildNodes = cc11001100_hook("modalChildNodes", containerNode.children, "assign");
    newModalWidth = cc11001100_hook("newModalWidth", pageNode.offsetWidth + pageNode.parentNode.offsetLeft * 2, "assign");
    for (let i = cc11001100_hook("i", 0, "var-init"); i < modalChildNodes.length; i++) {
      newModalHeight += cc11001100_hook("newModalHeight", getComputedStyle(modalChildNodes[i], null).position == 'absolute' ? 0 : modalChildNodes[i].offsetHeight, "assign");
    }
    containerNode.style.width = cc11001100_hook("containerNode.style.width", newModalWidth + 'px', "assign");
    containerNode.style.height = cc11001100_hook("containerNode.style.height", newModalHeight + 'px', "assign");
  } else {
    newModalWidth = cc11001100_hook("newModalWidth", windowWidth * (10 * widthTmpNum * this.option.areaProportion[0]) / (10 * widthTmpNum), "assign");
    containerNode.style.width = cc11001100_hook("containerNode.style.width", newModalWidth + 'px', "assign");
    modalChildNodes = cc11001100_hook("modalChildNodes", containerNode.children, "assign");
    for (let i = cc11001100_hook("i", 0, "var-init"); i < modalChildNodes.length; i++) {
      newModalHeight += cc11001100_hook("newModalHeight", getComputedStyle(modalChildNodes[i], null).position == 'absolute' ? 0 : modalChildNodes[i].offsetHeight, "assign");
    }
    containerNode.style.height = cc11001100_hook("containerNode.style.height", newModalHeight + 'px', "assign");
  }
  this.globalVariable.defaultArea = cc11001100_hook("this.globalVariable.defaultArea", [newModalWidth, newModalHeight], "assign");
}, "assign");
ModalLayer.prototype.resizeByXYWH = cc11001100_hook("ModalLayer.prototype.resizeByXYWH", function (x, y, w, h) {
  let containerNode = cc11001100_hook("containerNode", this.getNodes().container, "var-init");
  let wBoundary = cc11001100_hook("wBoundary", document.documentElement.getBoundingClientRect(), "var-init");
  if (x < wBoundary.left) x = cc11001100_hook("x", wBoundary.left, "assign");
  if (x + w > wBoundary.right) w = cc11001100_hook("w", wBoundary.right - x, "assign");
  if (y < wBoundary.y) y = cc11001100_hook("y", wBoundary.y, "assign");
  if (y + h > wBoundary.bottom) h = cc11001100_hook("h", wBoundary.bottom - y, "assign");
  containerNode.style.marginLeft = cc11001100_hook("containerNode.style.marginLeft", x + 'px', "assign");
  containerNode.style.marginTop = cc11001100_hook("containerNode.style.marginTop", y + 'px', "assign");
  containerNode.style.width = cc11001100_hook("containerNode.style.width", w + 'px', "assign");
  containerNode.style.height = cc11001100_hook("containerNode.style.height", h + 'px', "assign");
  if (['page', 'video', 'audio'].indexOf(this.option.type) >= 0) {
    let pageNode = cc11001100_hook("pageNode", containerNode.querySelector('iframe[name=' + this.option.pageOption.name + this.option.index + ']'), "var-init");
    pageNode.style.width = cc11001100_hook("pageNode.style.width", this.option.pageArea[0] + w - this.globalVariable['defaultArea'][0] + 'px', "assign");
    pageNode.style.height = cc11001100_hook("pageNode.style.height", this.option.pageArea[1] + h - this.globalVariable['defaultArea'][1] + 'px', "assign");
  }
}, "assign");
ModalLayer.prototype.show = cc11001100_hook("ModalLayer.prototype.show", function () {
  let showStatus = cc11001100_hook("showStatus", 'show', "var-init");
  let showCls = cc11001100_hook("showCls", 'modal-layer-show', "var-init");
  let hideCls = cc11001100_hook("hideCls", 'modal-layer-hide', "var-init");
  let modalLayerNodes = cc11001100_hook("modalLayerNodes", this.getNodes(), "var-init");
  let maxZIndex = cc11001100_hook("maxZIndex", ModalLayer.assistant.util.maxZIndex(), "var-init");
  if (Object.keys(modalLayerNodes).length === 0 || this.status === showStatus) return false;
  if (this.option.mask) modalLayerNodes.mask.style.zIndex = cc11001100_hook("modalLayerNodes.mask.style.zIndex", maxZIndex + 1, "assign");
  modalLayerNodes.container.style.zIndex = cc11001100_hook("modalLayerNodes.container.style.zIndex", maxZIndex + 2, "assign");
  if (this.option.mask) modalLayerNodes.mask.style.opacity = cc11001100_hook("modalLayerNodes.mask.style.opacity", 1, "assign");
  modalLayerNodes.container.style.opacity = cc11001100_hook("modalLayerNodes.container.style.opacity", 1, "assign");
  modalLayerNodes.container.style.transform = cc11001100_hook("modalLayerNodes.container.style.transform", 'scale(1, 1)', "assign");
  Object.keys(modalLayerNodes).forEach(function (key) {
    if (modalLayerNodes[key].classList.contains(hideCls)) {
      modalLayerNodes[key].classList.add(showCls);
      modalLayerNodes[key].classList.remove(hideCls);
    }
  });
  this.setStatus(showStatus);
}, "assign");
ModalLayer.prototype.hide = cc11001100_hook("ModalLayer.prototype.hide", function (callback) {
  let self = cc11001100_hook("self", this, "var-init");
  let hideStatus = cc11001100_hook("hideStatus", 'hide', "var-init");
  let hideCls = cc11001100_hook("hideCls", 'modal-layer-hide', "var-init");
  let showCls = cc11001100_hook("showCls", 'modal-layer-show', "var-init");
  let modalLayerNodes = cc11001100_hook("modalLayerNodes", this.getNodes(), "var-init");
  if (Object.keys(modalLayerNodes).length === 0 || this.status === hideStatus) return false;
  if (this.option.mask) modalLayerNodes.mask.style.opacity = cc11001100_hook("modalLayerNodes.mask.style.opacity", this.option.transitionOpacity, "assign");
  modalLayerNodes.container.style.opacity = cc11001100_hook("modalLayerNodes.container.style.opacity", this.option.transitionOpacity, "assign");
  modalLayerNodes.container.style.transform = cc11001100_hook("modalLayerNodes.container.style.transform", 'scale(' + this.option.transitionScale[0] + ', ' + this.option.transitionScale[1] + ')', "assign");
  setTimeout(function () {
    Object.keys(modalLayerNodes).forEach(function (key) {
      if (modalLayerNodes[key].classList.contains(showCls)) {
        modalLayerNodes[key].classList.add(hideCls);
        modalLayerNodes[key].classList.remove(showCls);
      }
    });
    self.setStatus(hideStatus);
    if (callback instanceof Function) {
      callback.apply(self);
    }
  }, (this.option.transitionTime * 1000 / 700).toFixed(2) * 1000);
}, "assign");
ModalLayer.prototype.minimize = cc11001100_hook("ModalLayer.prototype.minimize", function () {
  let title = cc11001100_hook("title", null, "var-init");
  let maxTaskItem = cc11001100_hook("maxTaskItem", 8, "var-init");
  let taskbarNode = cc11001100_hook("taskbarNode", null, "var-init");
  let taskItemNode = cc11001100_hook("taskItemNode", null, "var-init");
  let taskItemWidth = cc11001100_hook("taskItemWidth", null, "var-init");
  let minimizeText = cc11001100_hook("minimizeText", 'minimize', "var-init");
  if (this.status === minimizeText) return;
  taskbarNode = cc11001100_hook("taskbarNode", document.querySelector('#modal-layer-minimize-taskbar'), "assign");
  if (!taskbarNode) {
    taskbarNode = cc11001100_hook("taskbarNode", ModalLayer.assistant.util.objectToDom([this.nodeData.minimizeTaskbar])[0], "assign");
    document.body.insertAdjacentElement('beforeend', taskbarNode);
    ModalLayer.assistant.util.eventTarget(taskbarNode, '.modal-layer-minimize-item', 'click', function () {
      if (this.getAttribute('clicked')) return;
      let index = cc11001100_hook("index", this.getAttribute('modal-layer-index'), "var-init");
      this.setAttribute('clicked', true);
      ModalLayer.minimizeList.splice(ModalLayer.minimizeList.indexOf(ModalLayer.instance[index]), 1)[0].revert();
    });
  }
  if (ModalLayer.minimizeList.length < 3) taskItemWidth = cc11001100_hook("taskItemWidth", '25%', "assign");else if (ModalLayer.minimizeList.length < 5) taskItemWidth = cc11001100_hook("taskItemWidth", '20%', "assign");else taskItemWidth = cc11001100_hook("taskItemWidth", '12.5%', "assign");
  title = cc11001100_hook("title", this.option.title.length === 0 ? this.option.text.title : this.option.title, "assign");
  taskItemNode = cc11001100_hook("taskItemNode", ModalLayer.assistant.util.objectToDom([this.nodeData.minimizeTaskbarItem])[0], "assign");
  taskItemNode.setAttribute('modal-layer-index', this.option.index);
  taskItemNode.querySelector('.modal-layer-minimize-item-title').innerHTML = cc11001100_hook("taskItemNode.querySelector('.modal-layer-minimize-item-title').innerHTML", title, "assign");
  taskbarNode.insertAdjacentElement('beforeend', taskItemNode);
  let itemList = cc11001100_hook("itemList", taskbarNode.querySelectorAll('.' + taskItemNode.className), "var-init");
  for (let i = cc11001100_hook("i", 0, "var-init"), itemCount = cc11001100_hook("itemCount", itemList.length, "var-init"); i < itemCount; i++) {
    itemList[i].style.width = cc11001100_hook("itemList[i].style.width", taskItemWidth, "assign");
  }
  let tmpClock = cc11001100_hook("tmpClock", setInterval(function () {
    if (taskItemNode.parentNode) {
      taskItemNode.style.cssText += cc11001100_hook("taskItemNode.style.cssText", 'opacity: 1;-webkit-transform: scale(1);-ms-transform: scale(1);-o-transform: scale(1);transform: scale(1);', "assign");
      clearInterval(tmpClock);
    }
  }, 10), "var-init");
  this.hide(function () {
    this.setStatus(minimizeText);
    ModalLayer.minimizeList.push(this);
  });
}, "assign");
ModalLayer.prototype.revert = cc11001100_hook("ModalLayer.prototype.revert", function () {
  let showText = cc11001100_hook("showText", 'show', "var-init");
  let minimizeText = cc11001100_hook("minimizeText", 'minimize', "var-init");
  let minimizeTaskbar = cc11001100_hook("minimizeTaskbar", document.querySelector('#modal-layer-minimize-taskbar'), "var-init");
  let taskItem = cc11001100_hook("taskItem", minimizeTaskbar.querySelector('.modal-layer-minimize-item[modal-layer-index="' + this.option.index + '"]'), "var-init");
  if ([minimizeText].indexOf(this.status) < 0) return;
  this.show();
  this.setStatus(showText);
  taskItem.style.opacity = cc11001100_hook("taskItem.style.opacity", '', "assign");
  taskItem.style.transform = cc11001100_hook("taskItem.style.transform", '', "assign");
  setTimeout(function () {
    minimizeTaskbar.removeChild(taskItem);
    if (ModalLayer.minimizeList.length <= 0) document.body.removeChild(minimizeTaskbar);
  }, 250);
}, "assign");
ModalLayer.prototype.remove = cc11001100_hook("ModalLayer.prototype.remove", function () {
  let self = cc11001100_hook("self", this, "var-init");
  let removedStatus = cc11001100_hook("removedStatus", 'removed', "var-init");
  let removingStatus = cc11001100_hook("removingStatus", 'removing', "var-init");
  let hideCls = cc11001100_hook("hideCls", 'modal-layer-hide', "var-init");
  let modalLayerNodes = cc11001100_hook("modalLayerNodes", this.getNodes(), "var-init");
  if (Object.keys(modalLayerNodes).length === 0 || this.status === removingStatus || this.status === removedStatus) return false;
  this.setStatus(removingStatus);
  this.stopAllTimeout();
  this.stopAllInterval();
  this.hide(function () {
    this.removeAllEvent();
    Object.keys(modalLayerNodes).forEach(function (key) {
      modalLayerNodes[key].parentNode.removeChild(modalLayerNodes[key]);
    });
    this.setStatus(removedStatus);
    if (this.option.parentModalLayer !== null) this.option.parentModalLayer.show();
  });
}, "assign");
ModalLayer.__proto__.removeAll = cc11001100_hook("ModalLayer.__proto__.removeAll", function () {
  for (let i = cc11001100_hook("i", 0, "var-init"); i < ModalLayer.instance.length; i++) ModalLayer.instance[i].remove();
}, "assign");
ModalLayer.__proto__.msg = cc11001100_hook("ModalLayer.__proto__.msg", function (options) {
  let msgLayer = cc11001100_hook("msgLayer", null, "var-init");
  if (typeof options === 'string') options = cc11001100_hook("options", {
    'content': cc11001100_hook('content', options, "object-key-init")
  }, "assign");else options.type = cc11001100_hook("options.type", 'msg', "assign");
  msgLayer = cc11001100_hook("msgLayer", new ModalLayer(options), "assign");
  msgLayer.resize();
  msgLayer.show();
  return msgLayer;
}, "assign");
ModalLayer.__proto__.alert = cc11001100_hook("ModalLayer.__proto__.alert", function (options) {
  let alertLayer = cc11001100_hook("alertLayer", null, "var-init");
  options.type = cc11001100_hook("options.type", 'alert', "assign");
  alertLayer = cc11001100_hook("alertLayer", new ModalLayer(options), "assign");
  alertLayer.resize();
  alertLayer.show();
  return alertLayer;
}, "assign");
ModalLayer.__proto__.prompt = cc11001100_hook("ModalLayer.__proto__.prompt", function (options) {
  let promptLayer = cc11001100_hook("promptLayer", null, "var-init");
  options.type = cc11001100_hook("options.type", 'prompt', "assign");
  promptLayer = cc11001100_hook("promptLayer", new ModalLayer(options), "assign");
  promptLayer.resize();
  promptLayer.show();
  return promptLayer;
}, "assign");
ModalLayer.__proto__.confirm = cc11001100_hook("ModalLayer.__proto__.confirm", function (options) {
  let confirmLayer = cc11001100_hook("confirmLayer", null, "var-init");
  options.type = cc11001100_hook("options.type", 'confirm', "assign");
  confirmLayer = cc11001100_hook("confirmLayer", new ModalLayer(options), "assign");
  confirmLayer.resize();
  confirmLayer.show();
  return confirmLayer;
}, "assign");
ModalLayer.__proto__.page = cc11001100_hook("ModalLayer.__proto__.page", function (options) {
  let pageLayer = cc11001100_hook("pageLayer", null, "var-init");
  options.type = cc11001100_hook("options.type", 'page', "assign");
  if (!options.callback) options.callback = cc11001100_hook("options.callback", {}, "assign");
  pageLayer = cc11001100_hook("pageLayer", new ModalLayer(options), "assign");
  pageLayer.resize();
  pageLayer.show();
  return pageLayer;
}, "assign");
ModalLayer.__proto__.image = cc11001100_hook("ModalLayer.__proto__.image", function (options) {}, "assign");
ModalLayer.__proto__.video = cc11001100_hook("ModalLayer.__proto__.video", function (options) {}, "assign");
ModalLayer.__proto__.audio = cc11001100_hook("ModalLayer.__proto__.audio", function (options) {}, "assign");
ModalLayer.__proto__.instance = cc11001100_hook("ModalLayer.__proto__.instance", [], "assign");
ModalLayer.__proto__.minimizeList = cc11001100_hook("ModalLayer.__proto__.minimizeList", [], "assign");
ModalLayer.__proto__.assistant = cc11001100_hook("ModalLayer.__proto__.assistant", {
  'util': cc11001100_hook('util', Util, "object-key-init")
}, "assign");
ModalLayer.__proto__.enum = cc11001100_hook("ModalLayer.__proto__.enum", {
  type: {
    'msg': cc11001100_hook('msg', 0, "object-key-init"),
    'alert': cc11001100_hook('alert', 1, "object-key-init"),
    'prompt': cc11001100_hook('prompt', 2, "object-key-init"),
    'confirm': cc11001100_hook('confirm', 3, "object-key-init"),
    'page': cc11001100_hook('page', 4, "object-key-init"),
    'loading': cc11001100_hook('loading', 5, "object-key-init"),
    'image': cc11001100_hook('image', 6, "object-key-init"),
    'video': cc11001100_hook('video', 7, "object-key-init"),
    'audio': cc11001100_hook('audio', 8, "object-key-init")
  },
  status: {
    'hide': cc11001100_hook('hide', 0, "object-key-init"),
    'show': cc11001100_hook('show', 1, "object-key-init"),
    'expand': cc11001100_hook('expand', 2, "object-key-init"),
    'minimize': cc11001100_hook('minimize', 3, "object-key-init"),
    'removing': cc11001100_hook('removing', 4, "object-key-init"),
    'removed': cc11001100_hook('removed', 5, "object-key-init"),
    'drag': cc11001100_hook('drag', 6, "object-key-init"),
    'resize': cc11001100_hook('resize', 7, "object-key-init")
  },
  arrow: {
    'left': cc11001100_hook('left', 37, "object-key-init"),
    'up': cc11001100_hook('up', 38, "object-key-init"),
    'right': cc11001100_hook('right', 39, "object-key-init"),
    'dw': cc11001100_hook('dw', 40, "object-key-init")
  }
}, "assign");