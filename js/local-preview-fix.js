// 仅在双击本地打开（file://）时生效；部署到正式网站后不做任何事。
(function(){
  if (location.protocol !== 'file:') return;
  document.addEventListener('DOMContentLoaded', function(){
    var frames = document.querySelectorAll('iframe[src*="youtube"]');
    frames.forEach(function(f){
      var m = f.src.match(/embed\/([\w-]{6,})/); if(!m) return;
      var id = m[1], a = document.createElement('a');
      a.href = 'https://www.youtube.com/watch?v=' + id; a.target = '_blank';
      a.style.cssText = f.style.cssText + ';display:block;background:#000 url(https://i.ytimg.com/vi/'+id+'/hqdefault.jpg) center/cover no-repeat;';
      a.innerHTML = '<span style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:68px;height:48px;border-radius:12px;background:#f00;display:flex;align-items:center;justify-content:center"><span style="border-left:18px solid #fff;border-top:11px solid transparent;border-bottom:11px solid transparent;margin-left:4px"></span></span>';
      a.title = '本地文件无法内嵌播放 YouTube，点击在 YouTube 打开（用"本地预览.command"打开可内嵌播放）';
      f.replaceWith(a);
    });
  });
})();
