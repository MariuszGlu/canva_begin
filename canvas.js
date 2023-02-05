const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d')
// c.fillStyle = 'rgba(255,0,0,0.5)'
// c.fillRect(50, 100, 100, 100)
// c.fillStyle = 'rgba(0,255,0,0.2)'
// c.fillRect(200, 50, 100, 100)
// c.fillStyle = 'rgba(0,0,255,0.5)'
// c.fillRect(300, 150, 100, 100)

// //line

// c.beginPath()
// c.moveTo(100, 300)
// c.lineTo(300, 100)

// c.moveTo(100, 100)
// c.lineTo(300, 100)

// c.moveTo(100, 300)
// c.lineTo(300, 300)

// c.strokeStyle = 'red'
// c.stroke()

//arc / circle

// c.arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean | undefined): void)
// c.beginPath()
// c.arc(300, 300, 30, 0,Math.PI*2,false)
// c.strokeStyle = 'green'
// c.stroke()

// for (let i = 0; i < 100; i++) {

//     const x = Math.random()*window.innerWidth
//     const y = Math.random()*window.innerHeight

//     c.beginPath()
//     c.strokeStyle = 'black'
//     c.arc(x,y,30,0,Math.PI*2,false)
//     c.stroke()

// }

class Circle {
	constructor(x, y, dx, dy, radius) {
		this.x = x
		this.y = y
		this.dx = dx
		this.dy = dy
		this.radius = radius
	}
	draw = () => {
		console.log(this.x, this.y)

		c.clearRect(0, 0, innerWidth, innerHeight)
		c.beginPath()
		c.arc(this.x, this.y, 30, 0, Math.PI * 2, false)
		c.strokeStyle = 'green'
		c.stroke()
	}

	update = () => {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx
		}
		this.x += this.dx
		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy
		}
		this.y += this.dy

		circle.draw()
	}
}

const circle = new Circle(200, 200, 2, 2, 30)

let x = Math.random() * innerWidth
let y = Math.random() * innerHeight
let dx = (Math.random() - 0.5) * 8
let dy = (Math.random() - 0.5) * 8
const radius = 30
const animate = () => {
	requestAnimationFrame(animate)

	circle.update()

	// c.clearRect(0, 0, innerWidth, innerHeight)
	// c.beginPath()

	// c.arc(x, y, 30, 0, Math.PI * 2, false)
	// c.strokeStyle = 'green'
	// c.stroke()
	// if (x + radius > innerWidth || x - radius < 0) {
	// 	dx = -dx
	// }
	// x += dx
	// if (y + radius > innerHeight || y - radius < 0) {
	// 	dy = -dy
	// }
	// y += dy
}

animate()
