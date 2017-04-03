import React, {PropTypes} from 'react';

import GoogleMap from 'react-google-map';
import GoogleMapLoader from 'react-google-maps-loader';



const MY_API_KEY = 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo';

const Map = ({googleMaps, secretData, userLng, userLat}) => (
	<div className='map'>
    <GoogleMap
      googleMaps={googleMaps}
      coordinates={[
      	{
                title: 'Jackyson',
                position: {
                  lat: 47.6074,
                  lng: -122.3430,
                },
                onLoaded: (googleMaps, map, marker) => {
                  // Set Marker animation
                  marker.setAnimation(googleMaps.Animation.DROP)

                  // Define Marker InfoWindow
                  const infoWindow = new googleMaps.InfoWindow({
                    content: `
                      <div>
                        <h6 id='blockLocation'>`+ '1483 Alaskan Way, Seattle, WA 98101' +`<h6>
                        <p id='offense'>` +
                          'JACKSON-DUHON--TOUCHING FISH INNAPPROPRIATELY'
                          +
                        `</p>
                      </div>
                    `,
                  })

                  // Open InfoWindow when Marker will be clicked
                  googleMaps.event.addListener(marker, "click", () => {
                    infoWindow.open(map, marker)
                  })
                },
              },      	{
                title: 'Denise',
                position: {
                  lat: 47.6062,
                  lng: -122.3425,
                },
                onLoaded: (googleMaps, map, marker) => {
                  // Set Marker animation
                  marker.setAnimation(googleMaps.Animation.DROP)

                  // Define Marker InfoWindow
                  const infoWindow = new googleMaps.InfoWindow({
                    content: `
                      <div>
                        <h6 id='blockLocation'>`+ '1301 Alaskan Way Seattle, WA 98101' +`<h6>
                        <p id='offense'>` +
                          'DENISE--INNAPPROPRIATE DANCING'
                          +
                        `</p>
                      </div>
                    `,
                  })

                  // Open InfoWindow when Marker will be clicked
                  googleMaps.event.addListener(marker, "click", () => {
                    infoWindow.open(map, marker)
                  })
                },
              },

      	              
secretData[0],
secretData[1],
secretData[2],
secretData[3],
secretData[4],
secretData[5],
secretData[6],
secretData[7],
secretData[8],
secretData[9],
secretData[10],
secretData[11],
secretData[12],
secretData[13],
secretData[14],
secretData[15],
secretData[16],
secretData[17],
secretData[18],
secretData[19],
secretData[20],
secretData[21],
secretData[22],
secretData[23],
secretData[24],
secretData[25],
secretData[26],
secretData[27],
secretData[28],
secretData[29],
secretData[30],
secretData[31],
secretData[32],
secretData[33],
secretData[34],
secretData[35],
secretData[36],
secretData[37],
secretData[38],
secretData[39],
secretData[40],
secretData[41],
secretData[42],
secretData[43],
secretData[44],
secretData[45],
secretData[46],
secretData[47],
secretData[48],
secretData[49],
secretData[50],
secretData[51],
secretData[52],
secretData[53],
secretData[54],
secretData[55],
secretData[56],
secretData[57],
secretData[58],
secretData[59],
secretData[60],
secretData[61],
secretData[62],
secretData[63],
secretData[64],
secretData[65],
secretData[66],
secretData[67],
secretData[68],
secretData[69],
secretData[70],
secretData[71],
secretData[72],
secretData[73],
secretData[74],
secretData[75],
secretData[76],
secretData[77],
secretData[78],
secretData[79],
secretData[80],
secretData[81],
secretData[82],
secretData[83],
secretData[84],
secretData[85],
secretData[86],
secretData[87],
secretData[88],
secretData[89],
secretData[90],
secretData[91],
secretData[92],
secretData[93],
secretData[94],
secretData[95],
secretData[96],
secretData[97],
secretData[98],
secretData[99],
secretData[100],
secretData[101],
secretData[102],
secretData[103],
secretData[104],
secretData[105],
secretData[106],
secretData[107],
secretData[108],
secretData[109],
secretData[110],
secretData[111],
secretData[112],
secretData[113],
secretData[114],
secretData[115],
secretData[116],
secretData[117],
secretData[118],
secretData[119],
secretData[120],
secretData[121],
secretData[122],
secretData[123],
secretData[124],
secretData[125],
secretData[126],
secretData[127],
secretData[128],
secretData[129],
secretData[130],
secretData[131],
secretData[132],
secretData[133],
secretData[134],
secretData[135],
secretData[136],
secretData[137],
secretData[138],
secretData[139],
secretData[140],
secretData[141],
secretData[142],
secretData[143],
secretData[144],
secretData[145],
secretData[146],
secretData[147],
secretData[148],
secretData[149],
secretData[150],
secretData[151],
secretData[152],
secretData[153],
secretData[154],
secretData[155],
secretData[156],
secretData[157],
secretData[158],
secretData[159],
secretData[160],
secretData[161],
secretData[162],
secretData[163],
secretData[164],
secretData[165],
secretData[166],
secretData[167],
secretData[168],
secretData[169],
secretData[170],
secretData[171],
secretData[172],
secretData[173],
secretData[174],
secretData[175],
secretData[176],
secretData[177],
secretData[178],
secretData[179],
secretData[180],
secretData[181],
secretData[182],
secretData[183],
secretData[184],
secretData[185],
secretData[186],
secretData[187],
secretData[188],
secretData[189],
secretData[190],
secretData[191],
secretData[192],
secretData[193],
secretData[194],
secretData[195],
secretData[196],
secretData[197],
secretData[198],
secretData[199],
secretData[200],
secretData[201],
secretData[202],
secretData[203],
secretData[204],
secretData[205],
secretData[206],
secretData[207],
secretData[208],
secretData[209],
secretData[210],
secretData[211],
secretData[212],
secretData[213],
secretData[214],
secretData[215],
secretData[216],
secretData[217],
secretData[218],
secretData[219],
secretData[220],
secretData[221],
secretData[222],
secretData[223],
secretData[224],
secretData[225],
secretData[226],
secretData[227],
secretData[228],
secretData[229],
secretData[230],
secretData[231],
secretData[232],
secretData[233],
secretData[234],
secretData[235],
secretData[236],
secretData[237],
secretData[238],
secretData[239],
secretData[240],
secretData[241],
secretData[242],
secretData[243],
secretData[244],
secretData[245],
secretData[246],
secretData[247],
secretData[248],
secretData[249],
secretData[250],
secretData[251],
secretData[252],
secretData[253],
secretData[254],
secretData[255],
secretData[256],
secretData[257],
secretData[258],
secretData[259],
secretData[260],
secretData[261],
secretData[262],
secretData[263],
secretData[264],
secretData[265],
secretData[266],
secretData[267],
secretData[268],
secretData[269],
secretData[270],
secretData[271],
secretData[272],
secretData[273],
secretData[274],
secretData[275],
secretData[276],
secretData[277],
secretData[278],
secretData[279],
secretData[280],
secretData[281],
secretData[282],
secretData[283],
secretData[284],
secretData[285],
secretData[286],
secretData[287],
secretData[288],
secretData[289],
secretData[290],
secretData[291],
secretData[292],
secretData[293],
secretData[294],
secretData[295],
secretData[296],
secretData[297],
secretData[298],
secretData[299],
secretData[300],
secretData[301],
secretData[302],
secretData[303],
secretData[304],
secretData[305],
secretData[306],
secretData[307],
secretData[308],
secretData[309],
secretData[310],
secretData[311],
secretData[312],
secretData[313],
secretData[314],
secretData[315],
secretData[316],
secretData[317],
secretData[318],
secretData[319],
secretData[320],
secretData[321],
secretData[322],
secretData[323],
secretData[324],
secretData[325],
secretData[326],
secretData[327],
secretData[328],
secretData[329],
secretData[330],
secretData[331],
secretData[332],
secretData[333],
secretData[334],
secretData[335],
secretData[336],
secretData[337],
secretData[338],
secretData[339],
secretData[340],
secretData[341],
secretData[342],
secretData[343],
secretData[344],
secretData[345],
secretData[346],
secretData[347],
secretData[348],
secretData[349],
secretData[350],
secretData[351],
secretData[352],
secretData[353],
secretData[354],
secretData[355],
secretData[356],
secretData[357],
secretData[358],
secretData[359],
secretData[360],
secretData[361],
secretData[362],
secretData[363],
secretData[364],
secretData[365],
secretData[366],
secretData[367],
secretData[368],
secretData[369],
secretData[370],
secretData[371],
secretData[372],
secretData[373],
secretData[374],
secretData[375],
secretData[376],
secretData[377],
secretData[378],
secretData[379],
secretData[380],
secretData[381],
secretData[382],
secretData[383],
secretData[384],
secretData[385],
secretData[386],
secretData[387],
secretData[388],
secretData[389],
secretData[390],
secretData[391],
secretData[392],
secretData[393],
secretData[394],
secretData[395],
secretData[396],
secretData[397],
secretData[398],
secretData[399],
secretData[400],
secretData[401],
secretData[402],
secretData[403],
secretData[404],
secretData[405],
secretData[406],
secretData[407],
secretData[408],
secretData[409],
secretData[410],
secretData[411],
secretData[412],
secretData[413],
secretData[414],
secretData[415],
secretData[416],
secretData[417],
secretData[418],
secretData[419],
secretData[420],
secretData[421],
secretData[422],
secretData[423],
secretData[424],
secretData[425],
secretData[426],
secretData[427],
secretData[428],
secretData[429],
secretData[430],
secretData[431],
secretData[432],
secretData[433],
secretData[434],
secretData[435],
secretData[436],
secretData[437],
secretData[438],
secretData[439],
secretData[440],
secretData[441],
secretData[442],
secretData[443],
secretData[444],
secretData[445],
secretData[446],
secretData[447],
secretData[448],
secretData[449],
secretData[450],
secretData[451],
secretData[452],
secretData[453],
secretData[454],
secretData[455],
secretData[456],
secretData[457],
secretData[458],
secretData[459],
secretData[460],
secretData[461],
secretData[462],
secretData[463],
secretData[464],
secretData[465],
secretData[466],
secretData[467],
secretData[468],
secretData[469],
secretData[470],
secretData[471],
secretData[472],
secretData[473],
secretData[474],
secretData[475],
secretData[476],
secretData[477],
secretData[478],
secretData[479],
secretData[480],
secretData[481],
secretData[482],
secretData[483],
secretData[484],
secretData[485],
secretData[486],
secretData[487],
secretData[488],
secretData[489],
secretData[490],
secretData[491],
secretData[492],
secretData[493],
secretData[494],
secretData[495],
secretData[496],
secretData[497],
secretData[498],
secretData[499],
secretData[500],
secretData[501],
secretData[502],
secretData[503],
secretData[504],
secretData[505],
secretData[506],
secretData[507],
secretData[508],
secretData[509],
secretData[510],
secretData[511],
secretData[512],
secretData[513],
secretData[514],
secretData[515],
secretData[516],
secretData[517],
secretData[518],
secretData[519],
secretData[520],
secretData[521],
secretData[522],
secretData[523],
secretData[524],
secretData[525],
secretData[526],
secretData[527],
secretData[528],
secretData[529],
secretData[530],
secretData[531],
secretData[532],
secretData[533],
secretData[534],
secretData[535],
secretData[536],
secretData[537],
secretData[538],
secretData[539],
secretData[540],
secretData[541],
secretData[542],
secretData[543],
secretData[544],
secretData[545],
secretData[546],
secretData[547],
secretData[548],
secretData[549],
secretData[550],
secretData[551],
secretData[552],
secretData[553],
secretData[554],
secretData[555],
secretData[556],
secretData[557],
secretData[558],
secretData[559],
secretData[560],
secretData[561],
secretData[562],
secretData[563],
secretData[564],
secretData[565],
secretData[566],
secretData[567],
secretData[568],
secretData[569],
secretData[570],
secretData[571],
secretData[572],
secretData[573],
secretData[574],
secretData[575],
secretData[576],
secretData[577],
secretData[578],
secretData[579],
secretData[580],
secretData[581],
secretData[582],
secretData[583],
secretData[584],
secretData[585],
secretData[586],
secretData[587],
secretData[588],
secretData[589],
secretData[590],
secretData[591],
secretData[592],
secretData[593],
secretData[594],
secretData[595],
secretData[596],
secretData[597],
secretData[598],
secretData[599],
secretData[600],
secretData[601],
secretData[602],
secretData[603],
secretData[604],
secretData[605],
secretData[606],
secretData[607],
secretData[608],
secretData[609],
secretData[610],
secretData[611],
secretData[612],
secretData[613],
secretData[614],
secretData[615],
secretData[616],
secretData[617],
secretData[618],
secretData[619],
secretData[620],
secretData[621],
secretData[622],
secretData[623],
secretData[624],
secretData[625],
secretData[626],
secretData[627],
secretData[628],
secretData[629],
secretData[630],
secretData[631],
secretData[632],
secretData[633],
secretData[634],
secretData[635],
secretData[636],
secretData[637],
secretData[638],
secretData[639],
secretData[640],
secretData[641],
secretData[642],
secretData[643],
secretData[644],
secretData[645],
secretData[646],
secretData[647],
secretData[648],
secretData[649],
secretData[650],
secretData[651],
secretData[652],
secretData[653],
secretData[654],
secretData[655],
secretData[656],
secretData[657],
secretData[658],
secretData[659],
secretData[660],
secretData[661],
secretData[662],
secretData[663],
secretData[664],
secretData[665],
secretData[666],
secretData[667],
secretData[668],
secretData[669],
secretData[670],
secretData[671],
secretData[672],
secretData[673],
secretData[674],
secretData[675],
secretData[676],
secretData[677],
secretData[678],
secretData[679],
secretData[680],
secretData[681],
secretData[682],
secretData[683],
secretData[684],
secretData[685],
secretData[686],
secretData[687],
secretData[688],
secretData[689],
secretData[690],
secretData[691],
secretData[692],
secretData[693],
secretData[694],
secretData[695],
secretData[696],
secretData[697],
secretData[698],
secretData[699],
secretData[700],
secretData[701],
secretData[702],
secretData[703],
secretData[704],
secretData[705],
secretData[706],
secretData[707],
secretData[708],
secretData[709],
secretData[710],
secretData[711],
secretData[712],
secretData[713],
secretData[714],
secretData[715],
secretData[716],
secretData[717],
secretData[718],
secretData[719],
secretData[720],
secretData[721],
secretData[722],
secretData[723],
secretData[724],
secretData[725],
secretData[726],
secretData[727],
secretData[728],
secretData[729],
secretData[730],
secretData[731],
secretData[732],
secretData[733],
secretData[734],
secretData[735],
secretData[736],
secretData[737],
secretData[738],
secretData[739],
secretData[740],
secretData[741],
secretData[742],
secretData[743],
secretData[744],
secretData[745],
secretData[746],
secretData[747],
secretData[748],
secretData[749],
secretData[750],
secretData[751],
secretData[752],
secretData[753],
secretData[754],
secretData[755],
secretData[756],
secretData[757],
secretData[758],
secretData[759],
secretData[760],
secretData[761],
secretData[762],
secretData[763],
secretData[764],
secretData[765],
secretData[766],
secretData[767],
secretData[768],
secretData[769],
secretData[770],
secretData[771],
secretData[772],
secretData[773],
secretData[774],
secretData[775],
secretData[776],
secretData[777],
secretData[778],
secretData[779],
secretData[780],
secretData[781],
secretData[782],
secretData[783],
secretData[784],
secretData[785],
secretData[786],
secretData[787],
secretData[788],
secretData[789],
secretData[790],
secretData[791],
secretData[792],
secretData[793],
secretData[794],
secretData[795],
secretData[796],
secretData[797],
secretData[798],
secretData[799],
secretData[800],
secretData[801],
secretData[802],
secretData[803],
secretData[804],
secretData[805],
secretData[806],
secretData[807],
secretData[808],
secretData[809],
secretData[810],
secretData[811],
secretData[812],
secretData[813],
secretData[814],
secretData[815],
secretData[816],
secretData[817],
secretData[818],
secretData[819],
secretData[820],
secretData[821],
secretData[822],
secretData[823],
secretData[824],
secretData[825],
secretData[826],
secretData[827],
secretData[828],
secretData[829],
secretData[830],
secretData[831],
secretData[832],
secretData[833],
secretData[834],
secretData[835],
secretData[836],
secretData[837],
secretData[838],
secretData[839],
secretData[840],
secretData[841],
secretData[842],
secretData[843],
secretData[844],
secretData[845],
secretData[846],
secretData[847],
secretData[848],
secretData[849],
secretData[850],
secretData[851],
secretData[852],
secretData[853],
secretData[854],
secretData[855],
secretData[856],
secretData[857],
secretData[858],
secretData[859],
secretData[860],
secretData[861],
secretData[862],
secretData[863],
secretData[864],
secretData[865],
secretData[866],
secretData[867],
secretData[868],
secretData[869],
secretData[870],
secretData[871],
secretData[872],
secretData[873],
secretData[874],
secretData[875],
secretData[876],
secretData[877],
secretData[878],
secretData[879],
secretData[880],
secretData[881],
secretData[882],
secretData[883],
secretData[884],
secretData[885],
secretData[886],
secretData[887],
secretData[888],
secretData[889],
secretData[890],
secretData[891],
secretData[892],
secretData[893],
secretData[894],
secretData[895],
secretData[896],
secretData[897],
secretData[898],
secretData[899],
secretData[900],
secretData[901],
secretData[902],
secretData[903],
secretData[904],
secretData[905],
secretData[906],
secretData[907],
secretData[908],
secretData[909],
secretData[910],
secretData[911],
secretData[912],
secretData[913],
secretData[914],
secretData[915],
secretData[916],
secretData[917],
secretData[918],
secretData[919],
secretData[920],
secretData[921],
secretData[922],
secretData[923],
secretData[924],
secretData[925],
secretData[926],
secretData[927],
secretData[928],
secretData[929],
secretData[930],
secretData[931],
secretData[932],
secretData[933],
secretData[934],
secretData[935],
secretData[936],
secretData[937],
secretData[938],
secretData[939],
secretData[940],
secretData[941],
secretData[942],
secretData[943],
secretData[944],
secretData[945],
secretData[946],
secretData[947],
secretData[948],
secretData[949],
secretData[950],
secretData[951],
secretData[952],
secretData[953],
secretData[954],
secretData[955],
secretData[956],
secretData[957],
secretData[958],
secretData[959],
secretData[960],
secretData[961],
secretData[962],
secretData[963],
secretData[964],
secretData[965],
secretData[966],
secretData[967],
secretData[968],
secretData[969],
secretData[970],
secretData[971],
secretData[972],
secretData[973],
secretData[974],
secretData[975],
secretData[976],
secretData[977],
secretData[978],
secretData[979],
secretData[980],
secretData[981],
secretData[982],
secretData[983],
secretData[984],
secretData[985],
secretData[986],
secretData[987],
secretData[988],
secretData[989],
secretData[990],
secretData[991],
secretData[992],
secretData[993],
secretData[994],
secretData[995],
secretData[996],
secretData[997],
secretData[998],
secretData[999]
      ]}
      center={{lat: userLat, lng: userLng}}
      zoom={15}
      onLoaded={(googleMaps, map) => {
        map.setMapTypeId(googleMaps.MapTypeId.ROADMAP)
      }}
    />
  </div>
)

export default GoogleMapLoader(Map, {
  libraries: ["places"],
  key: MY_API_KEY,
})







