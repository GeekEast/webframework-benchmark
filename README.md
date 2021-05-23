### Benchmark Result
```sh
autocannon -c 100 -d 5 -p 10 http://localhsot:3000
autocannon -c 100 -d 5 -p 10 http://localhsot:3001
autocannon -c 100 -d 5 -p 10 http://localhsot:3002
autocannon -c 100 -d 5 -p 10 http://localhsot:3003
autocannon -c 100 -d 5 -p 10 http://localhsot:3004
autocannon -c 100 -d 5 -p 10 http://localhsot:3005
autocannon -c 100 -d 5 -p 10 http://localhsot:3006
```

| Runtime     | Framework     | Port | RPS   | Latency   | Middleware |                                                      Github Start                                                       |
| ----------- | ------------- | ---- | ----- | --------- | :--------: | :---------------------------------------------------------------------------------------------------------------------: |
| node14.17.0 | `nanoexpress` | 3004 | `76k` | `12.75ms` |     ✅     | [![GitHub stars](https://img.shields.io/github/stars/nanoexpress/nanoexpress?style=social&label=Star&maxAge=2592000)]() |
| go1.16      | `gin`         | 3006 | `73k` | `13.35ms` |     ✅     |      [![GitHub stars](https://img.shields.io/github/stars/gin-gonic/gin?style=social&label=Star&maxAge=2592000)]()      |
| go1.16      | `fiber`       | 3005 | `72k` | `13.57ms` |     ✅     |      [![GitHub stars](https://img.shields.io/github/stars/gofiber/fiber?style=social&label=Star&maxAge=2592000)]()      |
| node14.17.0 | `fastify`     | 3001 | `62k` | `15.82ms` |     ✅     |     [![GitHub stars](https://img.shields.io/github/stars/fastify/fastify?style=social&label=Star&maxAge=2592000)]()     |
| node14.17.0 | `0http`       | 3003 | `61k` | `15.86ms` |     ✅     |  [![GitHub stars](https://img.shields.io/github/stars/BackendStack21/0http?style=social&label=Star&maxAge=2592000)]()   |
| node14.17.0 | `koa`         | 3002 | `49k` | `19.80s`  |     ✅     |        [![GitHub stars](https://img.shields.io/github/stars/koajs/koa?style=social&label=Star&maxAge=2592000)]()        |
| node14.17.0 | `express`     | 3000 | `13k` | `75.53ms` |     ✅     |    [![GitHub stars](https://img.shields.io/github/stars/expressjs/express?style=social&label=Star&maxAge=2592000)]()    |


### Latency

- Go Gin
<p align="center"><img style="display: block; width: 100%; margin: 0 auto;" src=img/2021-05-23-17-14-12.png alt="no image found"></p>

- Go Fiber
<p align="center"><img style="display: block; width: 100%; margin: 0 auto;" src=img/2021-05-23-17-15-04.png alt="no image found"></p>

- NanoExpress
<p align="center"><img style="display: block; width: 100%; margin: 0 auto;" src=img/2021-05-23-17-16-02.png alt="no image found"></p>

- 0http
<p align="center"><img style="display: block; width: 100%; margin: 0 auto;" src=img/2021-05-23-17-17-01.png alt="no image found"></p>

- koa
<p align="center"><img style="display: block; width: 100%; margin: 0 auto;" src=img/2021-05-23-17-18-05.png alt="no image found"></p>

- fastify
<p align="center"><img style="display: block; width: 100%; margin: 0 auto;" src=img/2021-05-23-17-18-36.png alt="no image found"></p>

- express
<p align="center"><img style="display: block; width: 100%; margin: 0 auto;" src=img/2021-05-23-17-19-03.png alt="no image found"></p>

### References
- [Web Framework Benchmarks](https://web-frameworks-benchmark.netlify.app/result)
- [Stress Test: autocannon](https://github.com/mcollina/autocannon)
- [Stress Test: ali](https://github.com/nakabonne/ali)


















