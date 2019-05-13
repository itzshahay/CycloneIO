export default class RoomCamera extends Phaser.Cameras.Scene2D.Camera {

	constructor(cameras, x, y, width, height) {

        super(x, y, width, height)

		this.cameras = cameras

		this.create()

	}

	create() {

		this.cameras.remove(this.cameras.main)
		this.cameras.addExisting(this, true)

		this.centerOn(this.midPoint.x / this.width, this.midPoint.y / this.height)

	}

	scroll(pointer) {

		this.scrollX += (pointer.downX - pointer.x) / this.zoom
        pointer.downX = pointer.x

        this.scrollY += (pointer.downY - pointer.y) / this.zoom
        pointer.downY = pointer.y

		this.isScrolling = true

    }
}