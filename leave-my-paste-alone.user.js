// ==UserScript==
// @name         Leave my paste alone!
// @namespace    https://github.com/sonicer105/leave-my-paste-alone/
// @description  Prevents site from disallowing paste. I know what I'm doing damn it!
// @author       LinuxPony
// @version      0.1.0
// @license      MIT
// @updateURL    https://raw.githubusercontent.com/sonicer105/leave-my-paste-alone/master/leave-my-paste-alone.user.js
// @downloadURL  https://raw.githubusercontent.com/sonicer105/leave-my-paste-alone/master/leave-my-paste-alone.user.js
// @match        http://*/*
// @match        https://*/*
// @run-at       document-start
// @grant        none
// @connect      *
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener(
        "paste",
        function(e) {
            e.stopImmediatePropagation()
        },
        true
    );
})();
