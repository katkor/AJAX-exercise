

function createPost(data) {
	var div = document.createElement('div');
	var header = document.createElement('h2');
	var p = document.createElement('p');
	var postContent = document.createElement('p');
	p.textContent = data.author;
	header.textContent = data.title;
	postContent.textContent = data.content;
	div.appendChild(p);
	div.appendChild(header);
	div.appendChild(postContent);

	return div;
};

function success(data) {

	for (var i=0; i<data.length; i++) {
		var post = data[i];
		var postElem = createPost(post);

		//dodajemy do drzewa DOM:
		var article = document.getElementsByTagName('article')[0];
		article.appendChild(postElem);

	}

	console.log(data);
}

$.ajax({
	url: '/posts',
	success: success
});



var form = document.getElementById('add-post');

function addPost(data) {
author = data.author;
title = data.title;
content = data.content;
};


form.addEventListener('submit', function(e) {
	console.log("działa");
	var author = form.author.value;
	var title = form.title.value;
	var content = form.content.value;

	e.preventDefault();

	$.ajax({
		type: 'POST',
		url: '/posts',
		success: addPost
	});
});


