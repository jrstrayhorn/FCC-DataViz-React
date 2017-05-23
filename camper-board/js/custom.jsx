class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const renderCampers = campers.map(el =>
            <tr>
                <td>{el.username}</td>
                <td>{el.alltime}</td>
                <td>{el.recent}</td>
            </tr>
        );
        return (
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Brownie Points All Time</th>
                            <th>Brownie Point Last 30 Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCampers}
                    </tbody>
                </table>
            </div>
        );
    }
}

const campers = [
  {
    "username": "sjames1958gm",
    "img": "https://avatars.githubusercontent.com/u/4639625?v=3",
    "alltime": 7097,
    "recent": 561,
    "lastUpdate": "2017-05-22T21:43:56.058Z"
  },
  {
    "username": "anthonygallina1",
    "img": "https://avatars.githubusercontent.com/u/11003055?v=3",
    "alltime": 4610,
    "recent": 550,
    "lastUpdate": "2017-05-21T09:22:46.261Z"
  },
  {
    "username": "indefinite0212",
    "img": "https://avatars1.githubusercontent.com/u/26141499?v=3",
    "alltime": 989,
    "recent": 545,
    "lastUpdate": "2017-05-21T09:01:39.085Z"
  },
  {
    "username": "forkerino",
    "img": "https://avatars3.githubusercontent.com/u/16620061?v=3",
    "alltime": 2005,
    "recent": 508,
    "lastUpdate": "2017-05-21T14:17:21.979Z"
  },
  {
    "username": "diomed",
    "img": "https://avatars3.githubusercontent.com/u/72777?v=3",
    "alltime": 4198,
    "recent": 494,
    "lastUpdate": "2017-05-21T09:22:30.670Z"
  },
  {
    "username": "thekholm80",
    "img": "https://avatars0.githubusercontent.com/u/25966390?v=3",
    "alltime": 470,
    "recent": 430,
    "lastUpdate": "2017-05-21T09:12:41.137Z"
  },
  {
    "username": "Manish-Giri",
    "img": "https://avatars1.githubusercontent.com/u/11348778?v=3",
    "alltime": 5256,
    "recent": 357,
    "lastUpdate": "2017-05-21T09:08:07.256Z"
  },
  {
    "username": "JohnPaulWalsh",
    "img": "https://avatars.githubusercontent.com/u/9558634?v=3",
    "alltime": 1916,
    "recent": 311,
    "lastUpdate": "2017-05-21T14:17:23.036Z"
  },
  {
    "username": "JLuboff",
    "img": "https://avatars2.githubusercontent.com/u/19599055?v=3",
    "alltime": 1501,
    "recent": 268,
    "lastUpdate": "2017-05-19T19:52:54.096Z"
  },
  {
    "username": "Lumexralph",
    "img": "https://avatars.githubusercontent.com/u/12391886?v=3",
    "alltime": 1443,
    "recent": 250,
    "lastUpdate": "2017-05-21T14:15:06.381Z"
  },
  {
    "username": "mstellaluna",
    "img": "https://avatars.githubusercontent.com/u/22984739?v=3",
    "alltime": 1074,
    "recent": 244,
    "lastUpdate": "2017-04-28T15:04:06.603Z"
  },
  {
    "username": "revisualize",
    "img": "https://avatars.githubusercontent.com/u/1588399?v=3",
    "alltime": 3650,
    "recent": 233,
    "lastUpdate": "2017-05-12T15:17:15.351Z"
  },
  {
    "username": "Chrono79",
    "img": "https://avatars0.githubusercontent.com/u/9571508?v=3",
    "alltime": 3760,
    "recent": 220,
    "lastUpdate": "2017-05-21T14:12:13.988Z"
  },
  {
    "username": "Blauelf",
    "img": "https://avatars.githubusercontent.com/u/5952026?v=3",
    "alltime": 3864,
    "recent": 217,
    "lastUpdate": "2017-05-21T14:17:48.478Z"
  },
  {
    "username": "jenkynolasco11",
    "img": "https://avatars.githubusercontent.com/u/8356035?v=3",
    "alltime": 676,
    "recent": 214,
    "lastUpdate": "2017-04-28T14:49:13.625Z"
  },
  {
    "username": "apottr",
    "img": "https://avatars.githubusercontent.com/u/1924021?v=3",
    "alltime": 2606,
    "recent": 212,
    "lastUpdate": "2017-05-21T14:13:03.695Z"
  },
  {
    "username": "Margaret2",
    "img": "https://avatars.githubusercontent.com/u/18198357?v=3",
    "alltime": 2239,
    "recent": 212,
    "lastUpdate": "2017-05-21T14:17:00.180Z"
  },
  {
    "username": "Masd925",
    "img": "https://avatars.githubusercontent.com/u/9335367?v=3",
    "alltime": 3793,
    "recent": 205,
    "lastUpdate": "2017-05-21T14:12:09.283Z"
  },
  {
    "username": "cmccormack",
    "img": "https://avatars2.githubusercontent.com/u/3016919?v=3",
    "alltime": 309,
    "recent": 198,
    "lastUpdate": "2017-05-19T19:58:09.035Z"
  },
  {
    "username": "Azbo400",
    "img": "https://avatars0.githubusercontent.com/u/12162628?v=3",
    "alltime": 1581,
    "recent": 177,
    "lastUpdate": "2017-05-21T14:16:41.673Z"
  },
  {
    "username": "derhallim",
    "img": "https://avatars2.githubusercontent.com/u/7239963?v=3",
    "alltime": 180,
    "recent": 176,
    "lastUpdate": "2017-04-28T16:54:13.558Z"
  },
  {
    "username": "roxroy",
    "img": "https://avatars1.githubusercontent.com/u/20972782?v=3",
    "alltime": 554,
    "recent": 167,
    "lastUpdate": "2017-05-21T14:16:36.276Z"
  },
  {
    "username": "cotolany",
    "img": "https://avatars0.githubusercontent.com/u/27549363?v=3",
    "alltime": 181,
    "recent": 153,
    "lastUpdate": "2017-05-21T09:16:34.792Z"
  },
  {
    "username": "vittorioVT",
    "img": "https://avatars.githubusercontent.com/u/25430289?v=3",
    "alltime": 279,
    "recent": 149,
    "lastUpdate": "2017-05-21T09:10:04.996Z"
  },
  {
    "username": "jodylecompte",
    "img": "https://avatars2.githubusercontent.com/u/25594276?v=3",
    "alltime": 593,
    "recent": 143,
    "lastUpdate": "2017-05-04T05:15:10.907Z"
  },
  {
    "username": "heroiczero",
    "img": "https://avatars.githubusercontent.com/u/21147717?v=3",
    "alltime": 907,
    "recent": 141,
    "lastUpdate": "2017-04-28T15:05:22.611Z"
  },
  {
    "username": "breese8009",
    "img": "https://avatars.githubusercontent.com/u/22070304?v=3",
    "alltime": 243,
    "recent": 138,
    "lastUpdate": "2017-04-28T15:15:33.701Z"
  },
  {
    "username": "coymeetsworld",
    "img": "https://avatars1.githubusercontent.com/u/7891989?v=3",
    "alltime": 2278,
    "recent": 136,
    "lastUpdate": "2017-05-21T14:12:26.874Z"
  },
  {
    "username": "khaduch",
    "img": "https://avatars.githubusercontent.com/u/1930584?v=3",
    "alltime": 2588,
    "recent": 131,
    "lastUpdate": "2017-05-21T14:17:01.813Z"
  },
  {
    "username": "ivancsicsmarkus",
    "img": "https://avatars2.githubusercontent.com/u/22645197?v=3",
    "alltime": 176,
    "recent": 131,
    "lastUpdate": "2017-05-21T08:59:23.842Z"
  },
  {
    "username": "azngeoffdog",
    "img": "https://avatars2.githubusercontent.com/u/7655432?v=3",
    "alltime": 192,
    "recent": 128,
    "lastUpdate": "2017-04-28T19:13:13.125Z"
  },
  {
    "username": "Takumar",
    "img": "https://avatars3.githubusercontent.com/u/2951935?v=3",
    "alltime": 3299,
    "recent": 123,
    "lastUpdate": "2017-05-23T14:04:02.722Z"
  },
  {
    "username": "psyperl",
    "img": "https://avatars0.githubusercontent.com/u/28307592?v=3",
    "alltime": 118,
    "recent": 118,
    "lastUpdate": "2017-05-21T23:32:01.485Z"
  },
  {
    "username": "NahuelOvejero",
    "img": "https://avatars1.githubusercontent.com/u/23706776?v=3",
    "alltime": 199,
    "recent": 113,
    "lastUpdate": "2017-05-21T09:11:57.127Z"
  },
  {
    "username": "ArielLeslie",
    "img": "https://avatars.githubusercontent.com/u/6234475?v=3",
    "alltime": 3056,
    "recent": 106,
    "lastUpdate": "2017-05-21T14:17:22.485Z"
  },
  {
    "username": "amirsaleem96",
    "img": "https://avatars3.githubusercontent.com/u/17252818?v=3",
    "alltime": 106,
    "recent": 105,
    "lastUpdate": "2017-05-21T18:25:20.566Z"
  },
  {
    "username": "moigithub",
    "img": "https://avatars3.githubusercontent.com/u/7305974?v=3",
    "alltime": 2887,
    "recent": 103,
    "lastUpdate": "2017-05-21T14:11:54.161Z"
  },
  {
    "username": "alpox",
    "img": "https://avatars.githubusercontent.com/u/12485194?v=3",
    "alltime": 855,
    "recent": 101,
    "lastUpdate": "2017-04-28T17:18:55.047Z"
  },
  {
    "username": "DanCouper",
    "img": "https://avatars0.githubusercontent.com/u/573694?v=3",
    "alltime": 583,
    "recent": 100,
    "lastUpdate": "2017-04-28T14:51:45.204Z"
  },
  {
    "username": "VicPopescu",
    "img": "https://avatars0.githubusercontent.com/u/6849522?v=3",
    "alltime": 116,
    "recent": 99,
    "lastUpdate": "2017-05-22T21:42:44.947Z"
  },
  {
    "username": "DarrenfJ",
    "img": "https://avatars.githubusercontent.com/u/13170765?v=3",
    "alltime": 1333,
    "recent": 89,
    "lastUpdate": "2017-04-28T14:47:54.502Z"
  },
  {
    "username": "Cyclokitty",
    "img": "https://avatars.githubusercontent.com/u/14623520?v=3",
    "alltime": 640,
    "recent": 89,
    "lastUpdate": "2017-04-28T14:40:09.734Z"
  },
  {
    "username": "grotberg",
    "img": "https://avatars3.githubusercontent.com/u/7596821?v=3",
    "alltime": 94,
    "recent": 88,
    "lastUpdate": "2017-05-22T20:03:25.742Z"
  },
  {
    "username": "CodeDraken",
    "img": "https://avatars3.githubusercontent.com/u/16908616?v=3",
    "alltime": 962,
    "recent": 84,
    "lastUpdate": "2017-04-28T14:53:28.101Z"
  },
  {
    "username": "EneCatalin",
    "img": "https://avatars.githubusercontent.com/u/22774244?v=3",
    "alltime": 95,
    "recent": 83,
    "lastUpdate": "2017-04-28T15:15:18.510Z"
  },
  {
    "username": "vishalgautamm",
    "img": "https://avatars0.githubusercontent.com/u/21270741?v=3",
    "alltime": 81,
    "recent": 79,
    "lastUpdate": "2017-04-28T17:23:31.630Z"
  },
  {
    "username": "rahsheen",
    "img": "https://avatars2.githubusercontent.com/u/4641959?v=3",
    "alltime": 173,
    "recent": 78,
    "lastUpdate": "2017-04-28T14:49:10.257Z"
  },
  {
    "username": "hoangthanhtu",
    "img": "https://avatars2.githubusercontent.com/u/16975881?v=3",
    "alltime": 75,
    "recent": 75,
    "lastUpdate": "2017-05-22T00:01:41.492Z"
  },
  {
    "username": "nugoose",
    "img": "https://avatars.githubusercontent.com/u/14965989?v=3",
    "alltime": 848,
    "recent": 75,
    "lastUpdate": "2017-04-28T14:33:23.758Z"
  },
  {
    "username": "Dhavalc2012",
    "img": "https://avatars2.githubusercontent.com/u/7031028?v=3",
    "alltime": 86,
    "recent": 74,
    "lastUpdate": "2017-04-28T17:04:26.531Z"
  },
  {
    "username": "lydatech",
    "img": "https://avatars.githubusercontent.com/u/2355633?v=3",
    "alltime": 2052,
    "recent": 67,
    "lastUpdate": "2017-04-28T14:50:44.579Z"
  },
  {
    "username": "Marmiz",
    "img": "https://avatars.githubusercontent.com/u/16669241?v=3",
    "alltime": 526,
    "recent": 67,
    "lastUpdate": "2017-04-28T14:52:00.397Z"
  },
  {
    "username": "camperbot",
    "img": "https://avatars.githubusercontent.com/u/13561988?v=3",
    "alltime": 3251,
    "recent": 66,
    "lastUpdate": "2017-05-21T14:13:18.906Z"
  },
  {
    "username": "uiharu-s",
    "img": "https://avatars3.githubusercontent.com/u/20656006?v=3",
    "alltime": 85,
    "recent": 65,
    "lastUpdate": "2017-05-19T19:53:52.264Z"
  },
  {
    "username": "alexanderkopke",
    "img": "https://avatars3.githubusercontent.com/u/13712290?v=3",
    "alltime": 1023,
    "recent": 63,
    "lastUpdate": "2017-04-28T14:43:40.725Z"
  },
  {
    "username": "JohnTendik",
    "img": "https://avatars.githubusercontent.com/u/4714913?v=3",
    "alltime": 507,
    "recent": 62,
    "lastUpdate": "2017-04-28T14:51:45.204Z"
  },
  {
    "username": "adityaparab",
    "img": "https://avatars.githubusercontent.com/u/5561498?v=3",
    "alltime": 718,
    "recent": 61,
    "lastUpdate": "2017-04-28T14:52:45.896Z"
  },
  {
    "username": "luishendrix92",
    "img": "https://avatars.githubusercontent.com/u/6039444?v=3",
    "alltime": 1183,
    "recent": 60,
    "lastUpdate": "2017-04-28T14:36:24.172Z"
  },
  {
    "username": "GarrusNapp",
    "img": "https://avatars.githubusercontent.com/u/20761081?v=3",
    "alltime": 528,
    "recent": 57,
    "lastUpdate": "2017-04-28T14:57:04.295Z"
  },
  {
    "username": "jdraiv",
    "img": "https://avatars.githubusercontent.com/u/17892416?v=3",
    "alltime": 270,
    "recent": 57,
    "lastUpdate": "2017-04-28T14:52:45.895Z"
  },
  {
    "username": "texas2010",
    "img": "https://avatars.githubusercontent.com/u/9701609?v=3",
    "alltime": 923,
    "recent": 56,
    "lastUpdate": "2017-04-28T14:52:15.550Z"
  },
  {
    "username": "dymondbruce",
    "img": "https://avatars2.githubusercontent.com/u/4977693?v=3",
    "alltime": 56,
    "recent": 56,
    "lastUpdate": "2017-05-22T03:43:01.220Z"
  },
  {
    "username": "hekri-d",
    "img": "https://avatars3.githubusercontent.com/u/14976542?v=3",
    "alltime": 57,
    "recent": 56,
    "lastUpdate": "2017-04-28T18:38:35.195Z"
  },
  {
    "username": "Listener23",
    "img": "https://avatars1.githubusercontent.com/u/28044033?v=3",
    "alltime": 55,
    "recent": 55,
    "lastUpdate": "2017-05-21T21:00:20.766Z"
  },
  {
    "username": "kodinglife",
    "img": "https://avatars3.githubusercontent.com/u/12427123?v=3",
    "alltime": 94,
    "recent": 54,
    "lastUpdate": "2017-05-22T21:16:25.920Z"
  },
  {
    "username": "mitron6",
    "img": "https://avatars2.githubusercontent.com/u/8966523?v=3",
    "alltime": 342,
    "recent": 52,
    "lastUpdate": "2017-04-28T14:54:59.174Z"
  },
  {
    "username": "sharpdev121212",
    "img": "https://avatars0.githubusercontent.com/u/17362906?v=3",
    "alltime": 11,
    "recent": 52,
    "lastUpdate": "2017-04-28T19:48:49.157Z"
  },
  {
    "username": "ducthanh512",
    "img": "https://avatars.githubusercontent.com/u/17810713?v=3",
    "alltime": 50,
    "recent": 50,
    "lastUpdate": "2016-04-23T15:07:57.547Z"
  },
  {
    "username": "shk202",
    "img": "https://avatars0.githubusercontent.com/u/26007774?v=3",
    "alltime": 49,
    "recent": 48,
    "lastUpdate": "2017-04-23T10:46:22.751Z"
  },
  {
    "username": "Ranacode",
    "img": "https://avatars0.githubusercontent.com/u/24314364?v=3",
    "alltime": 59,
    "recent": 48,
    "lastUpdate": "2017-05-21T09:03:01.066Z"
  },
  {
    "username": "MathematicsCoding",
    "img": "https://avatars.githubusercontent.com/u/25870090?v=3",
    "alltime": 78,
    "recent": 48,
    "lastUpdate": "2017-04-28T16:06:19.387Z"
  },
  {
    "username": "ace1122sp",
    "img": "https://avatars.githubusercontent.com/u/25890894?v=3",
    "alltime": 50,
    "recent": 48,
    "lastUpdate": "2017-04-28T16:08:21.755Z"
  },
  {
    "username": "Knochenmark",
    "img": "https://avatars.githubusercontent.com/u/20475463?v=3",
    "alltime": 462,
    "recent": 48,
    "lastUpdate": "2017-04-28T14:54:47.573Z"
  },
  {
    "username": "njordomir",
    "img": "https://avatars2.githubusercontent.com/u/16409553?v=3",
    "alltime": 46,
    "recent": 47,
    "lastUpdate": "2017-05-21T09:13:08.975Z"
  },
  {
    "username": "JulienDemarque",
    "img": "https://avatars0.githubusercontent.com/u/27313954?v=3",
    "alltime": 39,
    "recent": 47,
    "lastUpdate": "2017-05-21T09:11:29.718Z"
  },
  {
    "username": "yaohaixiao",
    "img": "https://avatars0.githubusercontent.com/u/1411473?v=3",
    "alltime": 48,
    "recent": 47,
    "lastUpdate": "2017-05-22T20:03:00.224Z"
  },
  {
    "username": "kickkick479",
    "img": "https://avatars1.githubusercontent.com/u/12395197?v=3",
    "alltime": 48,
    "recent": 46,
    "lastUpdate": "2017-04-28T17:56:33.810Z"
  },
  {
    "username": "PiniShv",
    "img": "https://avatars3.githubusercontent.com/u/7192105?v=3",
    "alltime": 46,
    "recent": 46,
    "lastUpdate": "2017-05-22T06:14:12.289Z"
  },
  {
    "username": "peugelion",
    "img": "https://avatars2.githubusercontent.com/u/14549232?v=3",
    "alltime": 45,
    "recent": 46,
    "lastUpdate": "2017-05-04T11:16:53.476Z"
  },
  {
    "username": "theNuclearman",
    "img": "https://avatars3.githubusercontent.com/u/15063456?v=3",
    "alltime": 49,
    "recent": 46,
    "lastUpdate": "2017-04-28T17:09:14.364Z"
  },
  {
    "username": "drunknzombiecow",
    "img": "https://avatars1.githubusercontent.com/u/1717688?v=3",
    "alltime": 48,
    "recent": 46,
    "lastUpdate": "2017-05-21T08:59:56.426Z"
  },
  {
    "username": "moT01",
    "img": "https://avatars.githubusercontent.com/u/20648924?v=3",
    "alltime": 331,
    "recent": 46,
    "lastUpdate": "2017-04-28T15:00:21.947Z"
  },
  {
    "username": "carldieter",
    "img": "https://avatars1.githubusercontent.com/u/522788?v=3",
    "alltime": 46,
    "recent": 45,
    "lastUpdate": "2017-04-28T17:58:07.809Z"
  },
  {
    "username": "OlivierHJ",
    "img": "https://avatars1.githubusercontent.com/u/25533653?v=3",
    "alltime": 45,
    "recent": 45,
    "lastUpdate": "2017-04-28T22:54:18.939Z"
  },
  {
    "username": "MenkeTechnologies",
    "img": "https://avatars3.githubusercontent.com/u/18195247?v=3",
    "alltime": 45,
    "recent": 45,
    "lastUpdate": "2017-05-22T05:45:47.431Z"
  },
  {
    "username": "ryanart",
    "img": "https://avatars2.githubusercontent.com/u/28701173?v=3",
    "alltime": 45,
    "recent": 45,
    "lastUpdate": "2017-05-22T06:42:35.779Z"
  },
  {
    "username": "anthonyibarnard",
    "img": "https://avatars3.githubusercontent.com/u/9060190?v=3",
    "alltime": 45,
    "recent": 45,
    "lastUpdate": "2017-04-28T17:18:41.790Z"
  },
  {
    "username": "BlackRob",
    "img": "https://avatars2.githubusercontent.com/u/1175441?v=3",
    "alltime": 45,
    "recent": 45,
    "lastUpdate": "2017-04-28T18:24:33.986Z"
  },
  {
    "username": "bad-axel",
    "img": "https://avatars3.githubusercontent.com/u/27778290?v=3",
    "alltime": 45,
    "recent": 45,
    "lastUpdate": "2017-04-28T23:17:05.512Z"
  },
  {
    "username": "CharlesMarlow",
    "img": "https://avatars1.githubusercontent.com/u/28301111?v=3",
    "alltime": 45,
    "recent": 45,
    "lastUpdate": "2017-05-21T23:27:23.764Z"
  },
  {
    "username": "OXLODoS",
    "img": "https://avatars3.githubusercontent.com/u/22507419?v=3",
    "alltime": 45,
    "recent": 45,
    "lastUpdate": "2017-05-22T01:01:58.269Z"
  },
  {
    "username": "aaliev",
    "img": "https://avatars3.githubusercontent.com/u/22000885?v=3",
    "alltime": 45,
    "recent": 45,
    "lastUpdate": "2017-05-21T12:33:36.912Z"
  },
  {
    "username": "darkmantle",
    "img": "https://avatars0.githubusercontent.com/u/410651?v=3",
    "alltime": 45,
    "recent": 45,
    "lastUpdate": "2017-05-22T01:39:39.443Z"
  },
  {
    "username": "kironroy",
    "img": "https://avatars3.githubusercontent.com/u/11792826?v=3",
    "alltime": 45,
    "recent": 45,
    "lastUpdate": "2017-05-21T20:44:23.561Z"
  },
  {
    "username": "ASplayer9119",
    "img": "https://avatars2.githubusercontent.com/u/14073690?v=3",
    "alltime": 45,
    "recent": 45,
    "lastUpdate": "2017-05-20T18:38:49.236Z"
  },
  {
    "username": "apiepho",
    "img": "https://avatars3.githubusercontent.com/u/10007673?v=3",
    "alltime": 45,
    "recent": 45,
    "lastUpdate": "2017-05-21T22:38:21.960Z"
  },
  {
    "username": "BenLevitt1",
    "img": "https://avatars.githubusercontent.com/u/24968328?v=3",
    "alltime": 45,
    "recent": 44,
    "lastUpdate": "2017-04-28T15:18:18.427Z"
  },
  {
    "username": "trevorv57",
    "img": "https://avatars.githubusercontent.com/u/26015427?v=3",
    "alltime": 45,
    "recent": 44,
    "lastUpdate": "2017-04-28T16:18:19.742Z"
  },
  {
    "username": "tdewitt274",
    "img": "https://avatars.githubusercontent.com/u/13274244?v=3",
    "alltime": 55,
    "recent": 44,
    "lastUpdate": "2017-04-28T16:53:58.340Z"
  },
  {
    "username": "Robbie-Mack",
    "img": "https://avatars3.githubusercontent.com/u/26529528?v=3",
    "alltime": 45,
    "recent": 44,
    "lastUpdate": "2017-04-28T22:55:49.028Z"
  }
];


const codedWithArr = [
    {
        link: 'https://facebook.github.io/react/',
        display: 'React'
    },
    {
        link: 'http://getbootstrap.com/',
        display: 'Bootstrap'
    }
];

const devInfo = {
        link: 'https://www.freecodecamp.com/jrstrayhorn',
        name: 'J.R. Strayhorn'
    };

const Footer = function() {
    const renderCodedWith = codedWithArr.map((el, idx) => 
        <span>
            <a href={el.link} target="_blank"> {el.display}</a>
            {(idx !== codedWithArr.length-1) ? ',' : ''}
        </span>
    );
    const renderDevInfo = <a href={devInfo.link} target="_blank">{devInfo.name}</a>;
    return (
         <div className="row footer pad-row">
            <p>Coded with {renderCodedWith} by {renderDevInfo}</p>
        </div>
    );
};

const App = function() {
    return (
        <div className="container">
            <h1>Camper Leaderboard</h1>
            <Leaderboard />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));