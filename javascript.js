window.onload = function () {
	move('p')
  }
  
  function move (IMG) {
	var imgs = document.getElementsByTagName(IMG)
  
	function fmove (index) {
	  for (var i = 0;i < imgs.length;i++) {
		imgs[i].style.opacity = '0'
	  }
	  imgs[index].style.opacity = '1'
	}
  
	fmove(0)
  
	var count = 1
	function smove () {
	  if (count == (imgs.length - 2)) {
		count = 0
	  }
	  fmove(count)
	  count++
	}
  
	var scollMove = setInterval(smove, 5000)
  
	var left = document.getElementById('arrow-l')
	var right = document.getElementById('arrow-r')
	left.onclick = function () {
	  clearInterval(scollMove)
	  if (count == 0) {
		count = (imgs.length - 2)
	  }
	  count--
	  fmove(count)
	  scollMove = setInterval(smove, 5000)
	}
	right.onclick = function () {
	  clearInterval(scollMove)
	  smove()
	  scollMove = setInterval(smove, 5000)
	}
  }
  