//<![CDATA[
// Script Multiple Embed video - Don't Edit
$(document).ready(function() {
    (function() {
        var g = anime.length;
        var e = $(".--tab-eps");
        var y = judulpos.length;
        
        for (var h = 0; h < g; h++) {
            
            e.append("<p><a class='ganti-eps' onclick='topFunction()' data-id='" + [h] + "' ><img src='https://img.youtube.com/vi/"+  anime[h] +"/hqdefault.jpg'/><br><br>" + (h + 1) + "&nbsp;&nbsp; " + judulpos[h] + "  </a></p><br><br>")
        }
        var f = $(".--show-video");
        $(".ganti-eps").click(function() {
            f.html('<div class="--responsive"><iframe src="https://www.youtube.com/embed/' + anime[parseInt($(this).data("id"))] + '" ?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" width="100%" height="360" allow="autoplay; encrypted-media"  allowFullScreen></iframe></div>');
            $("#--title-anime").text($(this).data("eps"))
        })
    }())
});
//]]>
