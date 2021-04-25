var names = ["Father", "Mother", "Brother", "Me"]
var images = ["Father.jpg", "Mother.jpg", "Brother.jpg", "Me.jpg"]
var i = 0

function next() {
    i++
    if (i > 3) {
        i = 0
    }
    var newname=names[i]
    var newimages=images[i]
    document.getElementById("names").innerHTML = newname
    document.getElementById("family_book").innerHTML = newimages
}
