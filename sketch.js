/////Time 25Y 9M 1346W 1D 20H 56M 26S 02/10/24 10:58AM

/////////// https://editor.p5js.org/caminofarol/sketches/r609C2cs this canvas helped to get the canvases working on the same file

/////////// ChatGPT saved the project with the looping mechanism, the noise generation and the CSS/HTML grid

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
///////////////////////////////////////////////////////////////////
let gameSketch = function(p) {
  
    let gamesData;
    let font;
    let index = 0;
    let dataLoaded = false;

    p.preload = function() {
      
        gamesData = p.loadJSON('Games.json', () => {
          
            dataLoaded = true;
        });
      
        font = p.loadFont('HelvetiPixel.ttf');
    }

    p.setup = function() {
      
        p.createCanvas(canvasWidth, canvasHeight);
        p.textAlign(p.CENTER);
        p.textFont(font);
        p.textSize(15);
        p.fill(255);
        p.textWrap(p.WORD);
    }

    p.draw = function() {
      
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
    }
}
///////////////////////////////////////////////////////////////////
let spotifySketch = function(p) {
  
    let spotifyData;
    let font;
    let index = 0;
    let dataLoaded = false;

    p.preload = function() {
      
        spotifyData = p.loadJSON('Spotify.json', () => {
          
            dataLoaded = true;
        });
      
        font = p.loadFont('HelvetiPixel.ttf');
    }

    p.setup = function() {
      
        p.createCanvas(canvasWidth, canvasHeight);
        p.textAlign(p.CENTER);
        p.textFont(font);
        p.textSize(15);
        p.fill(255);
        p.textWrap(p.WORD);
    }

    p.draw = function() {
      
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
    }
}
///////////////////////////////////////////////////////////////////
let netflixSketch = function(p) {
  
    let streamingData;
    let font;
    let index = 0;
    let dataLoaded = false;

    p.preload = function() {
      
        let baseData = p.loadJSON('Netflix.json', () => {
          
            dataLoaded = true;
          
            streamingData = Object.values(baseData).reverse();
        });
      
        font = p.loadFont('HelvetiPixel.ttf');
    }

    p.setup = function() {
      
        p.createCanvas(canvasWidth, canvasHeight);
        p.textAlign(p.CENTER);
        p.textFont(font);
        p.textSize(15);
        p.fill(255);
        p.textWrap(p.WORD);
    }

    p.draw = function() {
      
        if (p.frameCount % 2 == 0) {
          
            CRT(p);
        }

        p.fill(255);
      
        if (dataLoaded && streamingData[index]) {
          
            let stream = streamingData[index];
          
            let streamInfo = `${stream.Title}\nGenre: ${stream.Genre || "Unknown"}\nNetwork: ${stream.Network || "Unknown"}\nDate: ${stream.Date || "Unknown"}\n`;
          
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
    }
}
///////////////////////////////////////////////////////////////////
let adsSketch = function(p) {
  
    let adsData;
    let font;
    let index = 0;
    let dataLoaded = false;

    p.preload = function() {
      
        let baseData = p.loadJSON('Ads.json', () => {
          
            dataLoaded = true;
          
            adsData = baseData.custom_audiences_all_types_v2;
        });
      
        font = p.loadFont('HelvetiPixel.ttf');
    }

    p.setup = function() {
      
        p.createCanvas(canvasWidth, canvasHeight);
        p.textAlign(p.CENTER);
        p.textFont(font);
        p.textSize(15);
        p.fill(255);
        p.textWrap(p.WORD);
    }

    p.draw = function() {
      
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
    }
}
///////////////////////////////////////////////////////////////////
let primeSketch = function(p) {
  
    let primeData;
    let font;
    let index = 0;
    let dataLoaded = false;

    p.preload = function() {
      
        let baseData = p.loadJSON('PrimeVideo.json', () => {
          
            dataLoaded = true;
          
            primeData = Object.values(baseData).reverse();
        });
      
        font = p.loadFont('HelvetiPixel.ttf');
    }

    p.setup = function() {
      
        p.createCanvas(canvasWidth, canvasHeight);
        p.textAlign(p.CENTER);
        p.textFont(font);
        p.textSize(15);
        p.fill(255);
        p.textWrap(p.WORD);
    }

    p.draw = function() {
      
        if (p.frameCount % 2 == 0) {
          
            CRT(p);
        }

        p.fill(255);
      
        if (dataLoaded && primeData[index]) {
          
            let primes = primeData[index];
          
            let primeInfo = `${primes.Title}\nStart: ${primes["Playback Start Datetime (UTC)"] || "Unknown"}\nEnd: ${primes["Playback End Datetime (UTC)"] || "Unknown"}\nViewed Time: ${primes["Seconds Viewed"] || "Unknown"}\n`;
          
            p.text(primeInfo, 20, canvasHeight / 2-20, canvasWidth - 40);

            if (p.frameCount % 26 === 0) {
              
                index++;
              
                if (index >= Object.keys(primeData).length) {
                  
                    index = 0;
                }
            }
        } else {
          
            p.text("Loading data...", 20, canvasHeight / 2 - 30, canvasWidth - 40);
        }
    }
}
///////////////////////////////////////////////////////////////////
let descriptiveSketch = function(p) {
  
    let descriptionData;
    let font;
    let index = 0;
    let dataLoaded = false;

    p.preload = function() {
      
        let baseData = p.loadJSON('Description.json', () => {
          
            dataLoaded = true;
          
            descriptionData = Object.values(baseData).reverse();
        });
      
        font = p.loadFont('HelvetiPixel.ttf');
    }

    p.setup = function() {
      
        p.createCanvas(canvasWidth, canvasHeight);
        p.textAlign(p.CENTER);
        p.textFont(font);
        p.textSize(13);
        p.fill(255);
        p.textWrap(p.WORD);
    }

    p.draw = function() {
      
        if (p.frameCount % 2 == 0) {
          
            CRT(p);
        }

        p.fill(255);
      
        if (dataLoaded && descriptionData[index]) {
          
            let des = descriptionData[index];
          
            let descriptionInfo = `${des.TitleName}\nDescription: ${des.TitleDescription || "Unknown"}\nDate: ${des.MostRecentWatchDate || "Unknown"}\n`;
          
            p.text(descriptionInfo, 20, canvasHeight / 2-70, canvasWidth - 40);

            if (p.frameCount % 135 === 0) {
              
                index++;
              
                if (index >= Object.keys(descriptionData).length) {
                  
                    index = 0;
                }
            }
        } else {
          
            p.text("Loading data...", 20, canvasHeight / 2 - 30, canvasWidth - 40);
        }
    }
}
///////////////////////////////////////////////////////////////////
let instagramSketch = function(p) {
  
    let likesData;
    let font;
    let index = 0;
    let dataLoaded = false;

    p.preload = function() {
      
        let baseData = p.loadJSON('Likes.json', () => {
          
            dataLoaded = true;
          
            likesData = baseData.likes_media_likes;
        });
      
        font = p.loadFont('HelvetiPixel.ttf');
    }

    p.setup = function() {
      
        p.createCanvas(canvasWidth, canvasHeight);
        p.textAlign(p.CENTER);
        p.textFont(font);
        p.textSize(15);
        p.fill(255);
        p.textWrap(p.WORD);
    }

    p.draw = function() {
      
        if (p.frameCount % 2 == 0) {
          
            CRT(p);
        }

        p.fill(255);
      
        if (dataLoaded && likesData[index]) {
          
            let like = likesData[index];
          
            let likeInfo = `${like.title}\nPost: ${like.string_list_data[0].href || "Unknown"}`;
          
            p.text(likeInfo, 20, canvasHeight / 2-30, canvasWidth - 40);

            if (p.frameCount % 25 === 0) {
              
                index++;
              
                if (index >= Object.keys(likesData).length) {
                  
                    index = 0;
                }
            }
        } else {
          
            p.text("Loading data...", 20, canvasHeight / 2-30 , canvasWidth - 40);
        }
    }
}
///////////////////////////////////////////////////////////////////
let browserSketch = function(p) {
  
    let urlData;
    let font;
    let index = 0;
    let dataLoaded = false;

    p.preload = function() {
      
        /*let baseData = p.loadJSON('URLS.json', () => {
          
            dataLoaded = true;
          
            urlData = baseData
        });*/
      
        font = p.loadFont('HelvetiPixel.ttf');
    }

    p.setup = function() {
      
        p.createCanvas(canvasWidth, canvasHeight);
        p.textAlign(p.CENTER);
        p.textFont(font);
        p.textSize(15);
        p.fill(255);
        p.textWrap(p.WORD);
    }

    p.draw = function() {
      
        if (p.frameCount % 2 == 0) {
          
            CRT(p);
        }

        p.fill(255);
      
        if (dataLoaded && urlData[index]) {
          
            let url = urlData[index];
          
            let urlInfo = `${url.title}\nID: ${url.id || "Unknown"}\nURL: ${url.url || "Unknown"}\n`;
          
            p.text(urlInfo, 20, canvasHeight / 2-50, canvasWidth - 50);

            if (p.frameCount % 9 === 0) {
              
                index++;
              
                if (index >= Object.keys(urlData).length) {
                  
                    index = 0;
                }
            }
        } else {
          
            p.text("Loading data...", 20, canvasHeight / 2 - 25, canvasWidth - 40);
        }
    }
}
///////////////////////////////////////////////////////////////////
let missingSketch = function(p) {

    let font;

    p.preload = function() {
      
        font = p.loadFont('HelvetiPixel.ttf');
    }

    p.setup = function() {
      
        p.createCanvas(canvasWidth, canvasHeight);
        p.textAlign(p.CENTER);
        p.textFont(font);
        p.textSize(15);
        p.fill(255);
        p.textWrap(p.WORD);
    }

    p.draw = function() {

        if (p.frameCount % 2 == 0) {
          
            CRT(p);  
        }

        p.fill(255);
      
        p.text("Loading data...", 20, canvasHeight / 2 - 10, canvasWidth - 40); 
      
    }
}

new p5(gameSketch, 'gameSketch');
new p5(spotifySketch, 'spotifySketch');
new p5(netflixSketch, 'netflixSketch');
new p5(adsSketch, 'adsSketch'); 
new p5(primeSketch, 'primeSketch');
new p5(descriptiveSketch, 'descriptiveSketch');
new p5(instagramSketch, 'instagramSketch');
new p5(browserSketch, 'browserSketch');
new p5(missingSketch, 'missingSketch');
