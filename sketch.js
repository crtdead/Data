/////Time 25Y 9M 1346W 1D 20H 56M 26S 02/10/24 10:58AM

/////////// https://editor.p5js.org/caminofarol/sketches/r609C2cs this canvas helped to get the canvases working on the same file

/////////// ChatGPT saved the project with the looping mechanism, the noise generation and the CSS/HTML grid.

let canvasWidth = 240;
let canvasHeight = 240;

function CRT(p) {
    p.background(15, 17, 15);

    p.stroke(255, 255, 255, 40);

    for (let i = 0; i < canvasHeight; i += 2.5) {
        p.line(0, i, canvasWidth, i);
    }

    for (let i = 0; i < canvasWidth * canvasHeight * 0.001; i++) {
        p.stroke(p.random(100, 200), p.random(100, 200), p.random(100, 200), p.random(100, 150));
        p.point(p.random(canvasWidth), p.random(canvasHeight));
    }
}

function adjustCanvasSize(p, containerId) {
    let container = document.getElementById(containerId);
    canvasWidth = container.offsetWidth;
    canvasHeight = container.offsetHeight;
    p.resizeCanvas(canvasWidth, canvasHeight);
}

///////////////////////////////////////////////////////////////////
let gameSketch = function (p) {
    let gamesData;
    let font;
    let index = 0;
    let dataLoaded = false;

    p.preload = function () {
        gamesData = p.loadJSON('Games.json', () => {
            dataLoaded = true;
        });

        font = p.loadFont('HelvetiPixel.ttf');
    };

    p.setup = function () {
        let container = document.getElementById('gameSketch');
        p.createCanvas(container.offsetWidth, container.offsetHeight);

        p.textAlign(p.CENTER);
        p.textFont(font);
        p.textSize(15);
        p.fill(255);
        p.textWrap(p.WORD);
    };

    p.draw = function () {
        if (p.frameCount % 2 == 0) {
            CRT(p);
        }

        p.fill(255);

        if (dataLoaded && gamesData[index]) {
            let game = gamesData[index];
            let gameInfo = `${game.Game}\nGenre: ${game.Genre || "Unknown"}\nPlatform: ${game.Platform || "Unknown"}\nDeveloper: ${game.Dev || "Unknown"}\nPublisher: ${game.Publisher || "Unknown"}\nRelease Date: ${game.ReleaseDate || "Unknown"}\nLast Played: ${game.LastLaunched || "Unknown"}`;
            p.text(gameInfo, 20, canvasHeight / 2 - 70, canvasWidth - 40);

            if (p.frameCount % 25 === 0) {
                index++;
                if (index >= Object.keys(gamesData).length) {
                    index = 0;
                }
            }
        } else {
            p.text("Loading data...", 20, canvasHeight / 2 - 25, canvasWidth - 40);
        }
    };

    p.windowResized = function () {
        adjustCanvasSize(p, 'gameSketch');
    };
};

///////////////////////////////////////////////////////////////////
let spotifySketch = function (p) {
    let spotifyData;
    let font;
    let index = 0;
    let dataLoaded = false;

    p.preload = function () {
        spotifyData = p.loadJSON('Spotify.json', () => {
            dataLoaded = true;
        });

        font = p.loadFont('HelvetiPixel.ttf');
    };

    p.setup = function () {
        let container = document.getElementById('spotifySketch');
        p.createCanvas(container.offsetWidth, container.offsetHeight);

        p.textAlign(p.CENTER);
        p.textFont(font);
        p.textSize(15);
        p.fill(255);
        p.textWrap(p.WORD);
    };

    p.draw = function () {
        if (p.frameCount % 2 == 0) {
            CRT(p);
        }

        p.fill(255);

        if (dataLoaded && spotifyData[index]) {
            let song = spotifyData[index];
            let songInfo = `${song.trackName}\nArtist: ${song.artistName || "Unknown"}\nDate: ${song.endTime || "Unknown"}\nms: ${song.msPlayed || "Unknown"}`;
            p.text(songInfo, 20, canvasHeight / 2 - 10, canvasWidth - 40);

            if (p.frameCount % 9 === 0) {
                index++;
                if (index >= Object.keys(spotifyData).length) {
                    index = 0;
                }
            }
        } else {
            p.text("Loading data...", 20, canvasHeight / 2 - 25, canvasWidth - 40);
        }
    };

    p.windowResized = function () {
        adjustCanvasSize(p, 'spotifySketch');
    };
};

///////////////////////////////////////////////////////////////////
let netflixSketch = function (p) {
    let streamingData;
    let font;
    let index = 0;
    let dataLoaded = false;

    p.preload = function () {
        let baseData = p.loadJSON('Netflix.json', () => {
            dataLoaded = true;
            streamingData = Object.values(baseData).reverse();
        });

        font = p.loadFont('HelvetiPixel.ttf');
    };

    p.setup = function () {
        let container = document.getElementById('netflixSketch');
        p.createCanvas(container.offsetWidth, container.offsetHeight);

        p.textAlign(p.CENTER);
        p.textFont(font);
        p.textSize(15);
        p.fill(255);
        p.textWrap(p.WORD);
    };

    p.draw = function () {
        if (p.frameCount % 2 == 0) {
            CRT(p);
        }

        p.fill(255);

        if (dataLoaded && streamingData[index]) {
            let stream = streamingData[index];
            let streamInfo = `${stream.Title}\nGenre: ${stream.Genre || "Unknown"}\nNetwork: ${stream.Network || "Unknown"}\nDate: ${stream.Date || "Unknown"}`;
            p.text(streamInfo, 20, canvasHeight / 2 - 30, canvasWidth - 40);

            if (p.frameCount % 20 === 0) {
                index++;
                if (index >= Object.keys(streamingData).length) {
                    index = 0;
                }
            }
        } else {
            p.text("Loading data...", 20, canvasHeight / 2 - 25, canvasWidth - 40);
        }
    };

    p.windowResized = function () {
        adjustCanvasSize(p, 'netflixSketch');
    };
};

///////////////////////////////////////////////////////////////////
let adsSketch = function (p) {
    let adsData;
    let font;
    let index = 0;
    let dataLoaded = false;

    p.preload = function () {
        let baseData = p.loadJSON('Ads.json', () => {
            dataLoaded = true;
            adsData = baseData.custom_audiences_all_types_v2;
        });

        font = p.loadFont('HelvetiPixel.ttf');
    };

    p.setup = function () {
        let container = document.getElementById('adsSketch');
        p.createCanvas(container.offsetWidth, container.offsetHeight);

        p.textAlign(p.CENTER);
        p.textFont(font);
        p.textSize(15);
        p.fill(255);
        p.textWrap(p.WORD);
    };

    p.draw = function () {
        if (p.frameCount % 2 == 0) {
            CRT(p);
        }

        p.fill(255);

        if (dataLoaded && adsData[index]) {
            let ads = adsData[index];
            let adsInfo = `Advertiser Name: ${ads.advertiser_name}`;
            p.text(adsInfo, 20, canvasHeight / 2, canvasWidth - 40);

            if (p.frameCount % 56 === 0) {
                index++;
                if (index >= Object.keys(adsData).length) {
                    index = 0;
                }
            }
        } else {
            p.text("Loading data...", 20, canvasHeight / 2 - 25, canvasWidth - 40);
        }
    };

    p.windowResized = function () {
        adjustCanvasSize(p, 'adsSketch');
    };
};

///////////////////////////////////////////////////////////////////
let primeSketch = function (p) {
    let primeData;
    let font;
    let index = 0;
    let dataLoaded = false;

    p.preload = function () {
        primeData = p.loadJSON('PrimeVideo.json', () => {
            dataLoaded = true;
        });

        font = p.loadFont('HelvetiPixel.ttf');
    };

    p.setup = function () {
        let container = document.getElementById('primeSketch');
        p.createCanvas(container.offsetWidth, container.offsetHeight);

        p.textAlign(p.CENTER);
        p.textFont(font);
        p.textSize(15);
        p.fill(255);
        p.textWrap(p.WORD);
    };

    p.draw = function () {
        if (p.frameCount % 2 == 0) {
            CRT(p);
        }

        p.fill(255);

        if (dataLoaded && primeData[index]) {
            let prime = primeData[index];
            let primeInfo = `${prime.Title}\nStart: ${prime["Playback Start Datetime (UTC)"] || "Unknown"}\nEnd: ${prime["Playback End Datetime (UTC)"] || "Unknown"}\nViewed Time: ${prime["Seconds Viewed"] || "Unknown"}`;
            p.text(primeInfo, 20, canvasHeight / 2 - 20, canvasWidth - 40);

            if (p.frameCount % 26 === 0) {
                index++;
                if (index >= Object.keys(primeData).length) {
                    index = 0;
                }
            }
        } else {
            p.text("Loading data...", 20, canvasHeight / 2 - 30, canvasWidth - 40);
        }
    };

    p.windowResized = function () {
        adjustCanvasSize(p, 'primeSketch');
    };
};

///////////////////////////////////////////////////////////////////
let descriptiveSketch = function (p) {
    let descriptionData;
    let font;
    let index = 0;
    let dataLoaded = false;

    p.preload = function () {
        descriptionData = p.loadJSON('Description.json', () => {
            dataLoaded = true;
        });

        font = p.loadFont('HelvetiPixel.ttf');
    };

    p.setup = function () {
        let container = document.getElementById('descriptiveSketch');
        p.createCanvas(container.offsetWidth, container.offsetHeight);

        p.textAlign(p.CENTER);
        p.textFont(font);
        p.textSize(13);
        p.fill(255);
        p.textWrap(p.WORD);
    };

    p.draw = function () {
        if (p.frameCount % 2 == 0) {
            CRT(p);
        }

        p.fill(255);

        if (dataLoaded && descriptionData[index]) {
            let des = descriptionData[index];
            let descriptionInfo = `${des.TitleName}\nDescription: ${des.TitleDescription || "Unknown"}\nDate: ${des.MostRecentWatchDate || "Unknown"}`;
            p.text(descriptionInfo, 20, canvasHeight / 2 - 70, canvasWidth - 40);

            if (p.frameCount % 135 === 0) {
                index++;
                if (index >= Object.keys(descriptionData).length) {
                    index = 0;
                }
            }
        } else {
            p.text("Loading data...", 20, canvasHeight / 2 - 30, canvasWidth - 40);
        }
    };

    p.windowResized = function () {
        adjustCanvasSize(p, 'descriptiveSketch');
    };
};

///////////////////////////////////////////////////////////////////
let instagramSketch = function (p) {
    let likesData;
    let font;
    let index = 0;
    let dataLoaded = false;

    p.preload = function () {
        // Load JSON data
        likesData = p.loadJSON('Likes.json', (data) => {
            dataLoaded = true;
            likesData = data.likes_media_likes;
        }, () => {
            console.error("Failed to load Likes.json. Check the file path.");
        });

        // Load font
        font = p.loadFont('HelvetiPixel.ttf');
    };

    p.setup = function () {
        // Create canvas
        let container = document.getElementById('instagramSketch');
        p.createCanvas(container.offsetWidth, container.offsetHeight);

        p.textAlign(p.CENTER);
        p.textFont(font);
        p.textSize(15);
        p.fill(255);
        p.textWrap(p.WORD);
    };

    p.draw = function () {
        if (p.frameCount % 2 === 0) {
            CRT(p);
        }

        p.fill(255);

        if (dataLoaded && likesData && likesData.length > 0) {
            let like = likesData[index];
            if (like && like.string_list_data && like.string_list_data[0]) {
                let likeInfo = `${like.title}\nPost: ${like.string_list_data[0].href || "Unknown"}`;
                p.text(likeInfo, 20, canvasHeight / 2 - 30, canvasWidth - 40);
            } else {
                p.text("No data available", 20, canvasHeight / 2 - 30, canvasWidth - 40);
            }

            if (p.frameCount % 25 === 0) {
                index = (index + 1) % likesData.length;
            }
        } else {
            p.text("Loading data...", 20, canvasHeight / 2 - 30, canvasWidth - 40);
        }
    };

    p.windowResized = function () {
        adjustCanvasSize(p, 'instagramSketch');
    };
};

///////////////////////////////////////////////////////////////////
let browserSketch = function (p) {
    let urlData;
    let font;
    let index = 0;
    let dataLoaded = false;

    p.preload = function () {

        font = p.loadFont('HelvetiPixel.ttf');
    };

    p.setup = function () {
        let container = document.getElementById('browserSketch');
        p.createCanvas(container.offsetWidth, container.offsetHeight);

        p.textAlign(p.CENTER);
        p.textFont(font);
        p.textSize(15);
        p.fill(255);
        p.textWrap(p.WORD);
    };

    p.draw = function () {
        if (p.frameCount % 2 == 0) {
            CRT(p);
        }

        p.fill(255);

        if (dataLoaded && urlData[index]) {
            let url = urlData[index];
            let urlInfo = `${url.title}\nID: ${url.id || "Unknown"}\nURL: ${url.url || "Unknown"}`;
            p.text(urlInfo, 20, canvasHeight / 2 - 50, canvasWidth - 50);

            if (p.frameCount % 9 === 0) {
                index++;
                if (index >= Object.keys(urlData).length) {
                    index = 0;
                }
            }
        } else {
            p.text("Loading data...", 20, canvasHeight / 2 - 25, canvasWidth - 40);
        }
    };

    p.windowResized = function () {
        adjustCanvasSize(p, 'browserSketch');
    };
};

///////////////////////////////////////////////////////////////////
let missingSketch = function (p) {
    let font;

    p.preload = function () {
        font = p.loadFont('HelvetiPixel.ttf');
    };

    p.setup = function () {
        let container = document.getElementById('missingSketch');
        p.createCanvas(container.offsetWidth, container.offsetHeight);

        p.textAlign(p.CENTER);
        p.textFont(font);
        p.textSize(15);
        p.fill(255);
        p.textWrap(p.WORD);
    };

    p.draw = function () {
        if (p.frameCount % 2 == 0) {
            CRT(p);
        }

        p.fill(255);
        p.text("Loading data...", 20, canvasHeight / 2 - 10, canvasWidth - 40);
    };

    p.windowResized = function () {
        adjustCanvasSize(p, 'missingSketch');
    };
};

///////////////////////////////////////////////////////////////////

new p5(gameSketch, 'gameSketch');
new p5(spotifySketch, 'spotifySketch');
new p5(netflixSketch, 'netflixSketch');
new p5(adsSketch, 'adsSketch');
new p5(primeSketch, 'primeSketch');
new p5(descriptiveSketch, 'descriptiveSketch');
new p5(instagramSketch, 'instagramSketch');
new p5(browserSketch, 'browserSketch');
new p5(missingSketch, 'missingSketch');
