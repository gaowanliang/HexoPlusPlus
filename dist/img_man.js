function start_limit(){var t=$("table"),e=0,n=hpp_page_limit;t.bind("paging",(function(){t.find("tbody tr").hide().slice(e*n,(e+1)*n).show()}));for(var a=t.find("tbody tr").length,i=Math.ceil(a/n),s=$('<div class="page" style="text-align:center;"></div>'),g=0;g<i;g++)$('<a href="#" id="pageStyle" onclick="changCss(this)"><span>'+(g+1)+"</span></a>").bind("click",{newPage:g},(function(n){e=n.data.newPage,t.trigger("paging")})).appendTo(s),s.append(" ");s.insertAfter(t),t.trigger("paging");var l=$("#pageStyle");l[0].style.backgroundColor="#ccc",l[0].style.color="#ffffff"}function changCss(t){for(var e=document.getElementsByTagName("a"),n=0;n<e.length;n++)t==e[n]?(t.style.backgroundColor="#ccc",t.style.color="#ffffff"):(e[n].style.color="",e[n].style.backgroundColor="")}function round(t,e){return Math.round(+t+"e"+e)/Math.pow(10,e)}let imgsize=0;var ctJson="/hpp/admin/api/getimglist";function del(t){swal({title:"确定！",text:`你将要删除${t}，真的这么做么？`,icon:"warning",buttons:!0,dangerMode:!0}).then((e=>{e?delfile(t):swal("好的，当前文件没有被删除",{icon:"success"})}))}function delfile(t){swal({title:"\n删除中...",icon:"https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@db63c79/loading.gif",text:"\n",button:!1,closeModal:!1});var e=ajaxObject();e.open("GET","/hpp/admin/api/delimage/"+t,!0),e.setRequestHeader("Content-Type","text/plain"),e.onreadystatechange=function(){4==e.readyState&&(200==e.status?(swal.close(),swal("已删除！","",{icon:"success",buttons:{yes:"是"}}).then((t=>{window.location.reload()}))):(swal.close(),swal({title:"失败！",text:"文件删除失败，请确定您是否有权限删除，或者该文件是否存在",icon:"warning"})))},e.send((new Date).getTime())}$.getJSON(ctJson,(function(t){document.getElementById("tbody_img").innerHTML="",$.each(t,(function(t,e){imgsize=round(e.size/1024,2),$("#tbody_img").append(`\n\t\t\t\t<tr>\n                          <td>\n                           ${e.name}\n                          </td>\n                          <td>\n                            ${imgsize}KB\n                          </td>\n\t\t\t\t\t\t  <td>\n                            <a href="https://cdn.jsdelivr.net/gh/${hpp_githubimageusername}/${hpp_githubimagerepo}@${hpp_githubimagebranch}${hpp_githubimagepath}${e.name}" class="swipebox" title="图片预览"><img data-src="https://cdn.jsdelivr.net/gh/${hpp_githubimageusername}/${hpp_githubimagerepo}@${hpp_githubimagebranch}${hpp_githubimagepath}${e.name}" class="lazy_img" style="width:100px" src="${hpp_lazy_img}"></a>\n                          </td>\n                          <td>\n                            <a href="https://cdn.jsdelivr.net/gh/${hpp_githubimageusername}/${hpp_githubimagerepo}@${hpp_githubimagebranch}${hpp_githubimagepath}${e.name}">CDN链接</a>\n                          </td>\n                          <td>\n                            <a href="javascript:del('${e.name}');">删除</a>\n                          </td>\n\t\t\t\t\t\t  <td>\n                            <a href="${e.download_url}">原始地址</a>\n                          </td>\n\t\t\t\t\t\t  <td>\n                            <a href="${e.html_url}">Github地址</a>\n                          </td>\n                        </tr>\n                `)})),start_limit(),$(".lazy_img").Lazy(),$(".swipebox").swipebox()}));