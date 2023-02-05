const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d')
c.fillStyle = 'rgba(255,0,0,0.5)'
c.fillRect(50,100,100,100)
c.fillStyle = 'rgba(0,255,0,0.2)'
c.fillRect(200,50,100,100)
c.fillStyle = 'rgba(0,0,255,0.5)'
c.fillRect(300,150,100,100)

//line

c.beginPath()
c.moveTo(100,300)
c.lineTo(300,100)

c.moveTo(100,100)
c.lineTo(300,100)

c.moveTo(100,300)
c.lineTo(300,300)



c.strokeStyle = 'red'
c.stroke()



