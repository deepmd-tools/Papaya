Papaya
======

A pure JavaScript medical image viewer.  Current list of features:
- Requires no browser plugin.  Runs in desktop and mobile browsers (iPhone and iPad supported).
- NIFTI (.nii and .nii.gz) reader.
- Orthogonal viewer controlled by mouse and keyboard (press spacebar to cycle main slice direction).
- Supported browsers (min version requirement): Firefox (7), Chrome (7), Safari (6), MobileSafari (iOS 6), IE (10), Opera (12)

![ScreenShot](https://raw.github.com/rii-mango/Papaya/master/README-img.png)

Installation
------
Development: Use debug.html.

Production: Run build.sh to create compressed papaya.js (requires yuicompressor.jar).  See index.html (or usage below) as an example.


Usage
------
To load an image URL automatically when the page loads:
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
    <script type="text/javascript" src="papaya.js"></script>
    <title>Papaya Viewer</title>
</head>

<body>
    <div id="papayaViewer"></div>
    <script type="text/javascript">
        $(window).load(function(){
            var viewer = new papaya.viewer.Viewer("http://www.mysite.com/myimages/myimage.nii.gz");
        });
    </script>
</body>
</html>
```

To let the user select a local image file, for example:
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
    <script type="text/javascript" src="papaya.js"></script>
    <title>Papaya Viewer</title>

    <script type="text/javascript">
        function readFile() {
            var files = document.getElementById('files').files;
            if (!files.length) {
                alert('Please select a file!');
                return;
            }

            var viewer = new papaya.viewer.Viewer(files[0]);
        }
    </script>
</head>

<body>
    <div id="papayaViewer"></div>
    <input type="file" id="files" name="files" />
    <button onclick="readFile()">Go!</button>
</body>
</html>
```