///web player
function play() {

            var url = document.getElementById('txt_url').value;
   
                var video = document.getElementById('video');
                var src = document.createAttribute("src");
                src.value = url;
                video.setAttributeNode(src);
            }

///drive player
            function drive() {

            var durl = document.getElementById('d_url').value;
   
                var iframe = document.getElementById('drive');
                var src = document.createAttribute("src");
                src.value = durl;
                iframe.setAttributeNode(src);
            }
