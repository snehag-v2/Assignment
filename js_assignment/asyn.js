// Build Async flow-control code for the following expected behaviour
//    Request all 3 files at the same time (in "parallel")
//    Render then ASAP (don't just blindly wait for all to finish loading)
//    But, render them in proper (obvious) order: "file1", "file2", "file3"
//    After all 3 are done, output "Complete"
//      Implemented using callback

function fakeAjax(url, cb) {
    var fakeResponses = {
      "file1": "The first text",
      "file2": "The middle text",
      "file3": "The last text",
    }

   var randomDelay = (Math.round(Math.random() *1E4) % 8000 + 1000)
    console.log("Requesting: " + url);

    setTimeout(function(){
      cb(fakeResponses[url]);
    }, randomDelay);
  }

  const a = ['file1', 'file2', 'file3'];
  const fn = {};

  function getFile(file) {
    fakeAjax(file, function (text) {
        if (!fn[file]) {
            fn[file] = text;
        }
        for (let i = 0; i < a.length; i++) {
            if (a[i] in fn) {
                if (fn[a[i]] !== true) {
                    fn1(fn[a[i]]);
                    fn[a[i]] = true;
                }
            }
            else {return false;}
        }
        fn1('complete');
    });
}

function fn1(text) {console.log(text)}

getFile('file1');
getFile('file2');
getFile('file3');

//      Implemented using promise

function fakeAjax(url, cb) {
    var fakeResponses = {
      "file1": "The first text",
      "file2": "The middle text",
      "file3": "The last text",
    }

   var randomDelay = (Math.round(Math.random() *1E4) % 8000 + 1000)
    console.log("Requesting: " + url);

    setTimeout(function(){
      cb(fakeResponses[url]);
    }, randomDelay);
  }

let f1 = getFile('file1');f2 = getFile('file2');f3 = getFile('file3');
f1.then(fn).then(function(){return f2})
.then(fn).then(function(){return f3})
.then(fn).then(function(){fn("complete")});

function getFile(file) {
    return new Promise(function(res,_rej) {
        fakeAjax(file, res);
      })
};

function fn(text){console.log(text)};
