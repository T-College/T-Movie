;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-home" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M851.934246 960.409706 169.505337 960.409706 169.505337 492.877477 200.389984 492.877477 200.389984 929.517115 821.036296 929.517115 821.036296 492.877477 851.934246 492.877477Z"  ></path>' +
    '' +
    '<path d="M83.827562 529.437138 62.111091 507.473917 510.733607 64.500013 959.327468 507.473917 937.613044 529.437138 510.733607 107.928105Z"  ></path>' +
    '' +
    '<path d="M649.166001 944.972109l-30.88567 0L618.280331 605.89653c0-20.817118-16.953808-37.763069-37.762569-37.763069L440.912611 568.133462c-20.808761 0-37.764616 16.946974-37.764616 37.763069l0 339.076602-30.874413 0L372.273582 605.89653c0-37.838793 30.788452-68.635193 68.639029-68.635193l139.605152 0c37.857741 0 68.648239 30.797423 68.648239 68.635193L649.166001 944.972109z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-rank" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M682.688 394.624l0 426.752c0 3.712 0.832 7.296 1.92 10.624L616.704 832c1.28-3.328 1.984-6.912 1.984-10.624L618.688 202.624c0-17.536-14.4-31.936-32-31.936L437.312 170.688c-17.536 0-31.936 14.4-31.936 31.936l0 618.752c0 3.712 0.768 7.296 1.92 10.624L339.392 832c1.216-3.328 1.92-6.912 1.92-10.624L341.312 586.624c0-17.536-14.336-31.936-31.936-31.936L160 554.688C142.4 554.688 128 569.088 128 586.624l0 234.752c0 17.6 14.4 31.936 32 31.936l704 0c17.6 0 32-14.336 32-31.936L896 394.624c0-17.536-14.4-31.936-32-31.936l-149.312 0C697.088 362.688 682.688 377.088 682.688 394.624zM234.688 832 160 832c-5.888 0-10.688-4.736-10.688-10.624L149.312 586.624C149.312 580.8 154.112 576 160 576l149.376 0C315.2 576 320 580.8 320 586.624l0 234.752C320 827.264 315.2 832 309.376 832L234.688 832zM437.312 832c-5.824 0-10.624-4.736-10.624-10.624L426.688 202.624C426.688 196.8 431.488 192 437.312 192l149.376 0c5.888 0 10.688 4.8 10.688 10.624l0 618.752C597.376 827.264 592.576 832 586.688 832L437.312 832zM874.688 394.624l0 426.752c0 5.888-4.736 10.624-10.688 10.624l-149.312 0C708.8 832 704 827.264 704 821.376L704 394.624C704 388.8 708.8 384 714.688 384L864 384C869.952 384 874.688 388.8 874.688 394.624z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-person" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.067538 958.852234l-3.677762-0.024559c-118.471229-0.959861-229.42218-47.982828-312.458361-132.426055C114.075105 743.196593 67.692728 627.27135 68.678172 508.352937 70.701249 263.96695 269.529643 65.146743 511.907902 65.146743l3.64911 0c248.898767 15.396665 441.706027 213.280548 439.765839 450.528973C953.298751 760.047376 754.456031 958.852234 512.067538 958.852234L512.067538 958.852234zM557.445028 929.476183c206.613708-22.847357 369.227296-199.817931 371.000686-414.023548C930.270269 292.483424 748.550531 106.488313 514.731204 92.000344l0 0-2.823302 0.023536c-227.675396 0-414.446173 186.863898-416.349523 416.553161-0.921999 111.828948 42.651402 220.814128 119.534444 298.978349 77.994352 79.32465 182.215018 123.498732 293.456588 124.392078l3.532453 0.023536C527.403828 931.971004 542.538527 931.124729 557.445028 929.476183M514.731204 92.000344"  ></path>' +
    '' +
    '<path d="M511.485277 572.946071c-95.568612 0-173.315324-78.533634-173.315324-175.048805 0-96.499821 77.746712-175.023222 173.315324-175.023222 95.559403 0 173.296905 78.523401 173.296905 175.023222C684.782182 494.412436 607.045703 572.946071 511.485277 572.946071L511.485277 572.946071zM511.485277 249.750157c-80.751139 0-146.435117 66.460668-146.435117 148.147108 0 81.697697 65.685002 148.171668 146.435117 148.171668 80.730673 0 146.415674-66.474994 146.415674-148.171668C657.900951 316.210825 592.21595 249.750157 511.485277 249.750157L511.485277 249.750157zM511.485277 249.750157"  ></path>' +
    '' +
    '<path d="M797.911752 838.057077c-7.42818 0-13.440104-6.011924-13.440104-13.434987 0-120.535237-69.046562-226.78819-167.911244-258.366396-7.060813-2.255367-10.970866-9.815553-8.700149-16.876366 2.257413-7.074116 9.776667-10.984169 16.890692-8.713452 109.85806 35.080983 186.596815 151.845337 186.596815 283.957237C811.351855 832.04413 805.340955 838.057077 797.911752 838.057077L797.911752 838.057077zM797.911752 838.057077"  ></path>' +
    '' +
    '<path d="M226.063689 838.057077c-7.429203 0-13.440104-6.011924-13.440104-13.434987 0-130.879839 75.844386-247.356644 184.436616-283.249109 7.006578-2.339278 14.643512 1.509377 16.968463 8.544607 2.334161 7.045463-1.499144 14.658861-8.544607 16.977673-97.723695 32.301683-165.979242 138.29267-165.979242 257.720689C239.503792 832.04413 233.491869 838.057077 226.063689 838.057077L226.063689 838.057077zM226.063689 838.057077"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrow" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M403.911111 284.444444 375.466667 312.888889 591.644444 512l-216.177778 199.111111L403.911111 739.555556l244.622222-227.555556L403.911111 284.444444zM403.911111 284.444444" fill="#7e7e7e" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-business" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M622.002176 256.596992l0-76.476416-219.99616 0 0 76.476416L142.333952 256.596992l0 587.283456 739.332096 0L881.666048 256.596992 622.002176 256.596992zM585.306112 216.855552l0 39.740416L438.70208 256.595968l0-39.740416L585.306112 216.855552zM402.006016 470.688768l0 61.171712L179.02592 531.86048 179.02592 293.332992l665.952256 0 0 238.527488-222.976 0 0-61.171712L402.006016 470.688768zM622.002176 629.776384 622.002176 568.59648l222.976 0 0 238.543872L179.02592 807.140352 179.02592 568.59648l222.980096 0 0 61.179904L622.002176 629.776384zM438.70208 593.036288l0-85.61152 146.604032 0 0 85.61152L438.70208 593.036288z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)