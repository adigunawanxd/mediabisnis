function showrecentposts(json) 
{ 	document.write('<ol>');
  for (var i = 0; i < numposts; i++) {
    var entry = json.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl;
    if (i == json.feed.entry.length) break;
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'alternate') {
        posturl = entry.link[k].href;
        break; }
    }
    posttitle = posttitle.link(posturl);
    document.write('<li>' + posttitle + '</li>');
	}
	document.write('</ol>'); 
}
