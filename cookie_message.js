(function() {

    /**
     * Set cookie
     *
     * @param string name
     * @param string value
     * @param int days
     * @param string path
     * @see http://www.quirksmode.org/js/cookies.html
     */
    function createCookie(name,value,days,path) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path="+path;
    }

    /**
     * Read cookie
     * @param string name
     * @returns {*}
     * @see http://www.quirksmode.org/js/cookies.html
     */
    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    var cookieMessageWindow = document.getElementById('cookiecontentwindow');
    if (cookieMessageWindow == null) {
        return;
    }
    var cookie = readCookie('_hidecookiecontentwindow');
    if (cookie != null && cookie == 'yes') {
        cookieMessageWindow.style.display = 'none';
    } else {
        cookieMessageWindow.style.display = 'block';
    }

    createCookie('_hidecookiecontentwindow','yes',30,'/');

})();