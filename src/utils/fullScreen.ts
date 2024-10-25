// 检测屏幕旋转是否已开启
function isScreenRotationEnabled(): boolean {
    return window.screen.orientation.type === 'landscape-primary';
}

// 解锁屏幕方向
function unlockOrientation() {
    screen.orientation.unlock();
}

// 切换横屏布局
function switchToLandscape() {
    document.documentElement.style.transform = 'rotate(-90deg)';
    document.documentElement.style.width = '100vh';
    document.documentElement.style.height = '100vw';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.position = 'absolute';
    document.body.style.top = '0';
    document.body.style.left = '-100vh';
}

// 切换竖屏布局
function switchToPortrait() {
    document.documentElement.style.transform = '';
    document.documentElement.style.width = '';
    document.documentElement.style.height = '';
    document.body.style.width = '';
    document.body.style.height = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
}

// 监听全屏事件
function handleFullscreenChange() {
    if (document.fullscreenElement) {
        // 当前页面处于全屏状态
        if (isScreenRotationEnabled()) {
            switchToLandscape();
        }
    } else {
        // 不再处于全屏状态
        unlockOrientation();
        switchToPortrait();
    }
}

// 添加全屏事件监听器
document.addEventListener('fullscreenchange', handleFullscreenChange);

// 触发全屏
// function toggleFullscreen() {
//     if (!document.fullscreenElement) {
//         const element = document.documentElement;
//         if (element.requestFullscreen) {
//             element.requestFullscreen();
//         }
//     } else {
//         if (document.exitFullscreen) {
//             document.exitFullscreen();
//         }
//     }
// }

// 绑定点击事件
// document.getElementById('fullscreenButton').addEventListener('click', toggleFullscreen);