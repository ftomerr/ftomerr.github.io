// const toggle_btn = document.querySelector('#checkbox')
// console.log(toggle_btn)

// toggle_btn.addEventListener('change', () => {

//     if(toggle_btn.checked) {
//         console.log("toggle_btn checked")
//         document.body.classList.add('light-mode')
//     } else {
//         document.body.classList.remove('light-mode')
//     }

// })

const options = {
  bottom: "32px", // default: '32px'
  right: "unset", // default: '32px'
  left: "32px", // default: 'unset'
  time: "0.3s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: true, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();


