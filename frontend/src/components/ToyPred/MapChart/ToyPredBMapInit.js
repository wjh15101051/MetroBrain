import axios from "axios"

let curClass = 1

export default {
    BMapInit() {
        console.log("BMap Map")
        let BMapAPI = window.BMap
        let map = new BMapAPI.Map('MapChart')
        let tiananmen_point = new BMapAPI.Point(116.404, 39.915)
        // let LeftTopPoint = new BMapAPI.Point(115.99006082100207, 40.16688527768762)
        map.centerAndZoom(tiananmen_point, 11)
        map.setMapStyleV2({
            styleId: '339adf9d562889e33507be6456576e4c'
        })
        map.addEventListener('click', function (e) {
            console.log(e)
            let pos = new BMapAPI.Point(e.point.lng, e.point.lat)
            console.log(pos)
            let class1IconImg = require('@/assets/figure/location_green.png')
            let class2IconImg = require('@/assets/figure/location_red.png')
            console.log(curClass)
            if (curClass === 1 || curClass === 2) {
                if (curClass === 1) {
                    let class1Icon = new BMapAPI.Icon(class1IconImg, new BMapAPI.Size(26, 26), {
                        imageSize: new BMapAPI.Size(26, 26),
                        anchor: new BMapAPI.Size(13, 26)
                    })
                    console.log(class1Icon)
                    map.addOverlay(new BMapAPI.Marker(pos, {icon: class1Icon}))
                } else {
                    let class2Icon = new BMapAPI.Icon(class2IconImg, new BMapAPI.Size(26, 26), {
                        imageSize: new BMapAPI.Size(26, 26),
                        anchor: new BMapAPI.Size(13, 26)
                    })
                    console.log(class2Icon)
                    map.addOverlay(new BMapAPI.Marker(pos, {icon: class2Icon}))
                }
                let send_data = new URLSearchParams()
                send_data.append("type", "add-new-point")
                send_data.append("cur_class", curClass)
                send_data.append("location_lng", e.point.lng)
                send_data.append("location_lat", e.point.lat)
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/toy-pred/',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: send_data
                }).then((response) => {
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            } else {
                console.log("query")
            }
        })
    },
    setClass(c) {
        curClass = c
    },
    startPred() {
        let send_data = new URLSearchParams()
        send_data.append("type", "start-prediction")
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/toy-pred/',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: send_data
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    },
    query() {

    }
}