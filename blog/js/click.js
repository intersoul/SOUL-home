document.addEventListener('DOMContentLoaded', function() {
  // 获取相关元素
  const centerDiv = document.querySelector('.center');
  const buttonsDiv = document.querySelector('.buttons');
  const timeElement = document.getElementById('time');
  const searchBox = document.querySelector('.search-box');
  const content1 = document.querySelector('.content1'); // 获取.content1元素

  function rightClickHandler(event) {
    event.preventDefault(); // 阻止默认的右键菜单

    if (buttonsDiv.style.opacity === '0' || !buttonsDiv.style.opacity) {
      // 显示.content1元素
      content1.style.opacity = '1';
      content1.style.pointerEvents = 'auto'; // 允许点击
      // 显示按钮容器
      buttonsDiv.style.opacity = '1';
      buttonsDiv.style.pointerEvents = 'auto'; // 允许点击
      // 隐藏时间和搜索栏
      timeElement.style.opacity = '0';
      searchBox.style.opacity = '0';
      timeElement.style.pointerEvents = 'none'; // 防止点击
      searchBox.style.pointerEvents = 'none'; // 防止点击
    } else {
      // 隐藏按钮容器
      buttonsDiv.style.opacity = '0';
      buttonsDiv.style.pointerEvents = 'none'; // 防止点击
      // 显示时间和搜索栏
      timeElement.style.opacity = '1';
      searchBox.style.opacity = '1';
      timeElement.style.pointerEvents = 'auto'; // 允许点击
      searchBox.style.pointerEvents = 'auto'; // 允许点击

      // 隐藏.content1元素
      content1.style.opacity = '0';
      content1.style.pointerEvents = 'none'; // 防止点击
    }
  }
  // function rightClickHandler(event) {
  //   event.preventDefault(); // 阻止默认的右键菜单

  //   if (buttonsDiv.style.opacity === '0' || !buttonsDiv.style.opacity) {
  //     // 显示.content1元素
  //     content1.classList.add('visible');
  //     content1.classList.remove('hidden');
  //     // 显示按钮容器
  //     buttonsDiv.classList.add('visible');
  //     buttonsDiv.classList.remove('hidden');
  //     // 隐藏时间和搜索栏
  //     timeElement.classList.add('hidden');
  //     timeElement.classList.remove('visible');
  //     searchBox.classList.add('hidden');
  //     searchBox.classList.remove('visible');
  //   } else {
  //     // 显示.content1元素
  //     content1.classList.add('hidden');
  //     content1.classList.remove('visible');
  //     // 隐藏按钮容器和.content1元素
  //     buttonsDiv.classList.add('hidden');
  //     buttonsDiv.classList.remove('visible');
  //     content1.classList.add('hidden');
  //     content1.classList.remove('visible');
  //     // 显示时间和搜索栏
  //     timeElement.classList.add('visible');
  //     timeElement.classList.remove('hidden');
  //     searchBox.classList.add('visible');
  //     searchBox.classList.remove('hidden');
  //   }
  // }

  // 绑定右键点击事件到.center元素
  centerDiv.addEventListener('contextmenu', rightClickHandler);
});

document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.querySelector('.search-box form');
  
  searchForm.addEventListener('submit', function(event) {
    // 这里可以添加任何你想在表单提交前执行的代码
    // 比如验证输入是否为空：
    const input = this.querySelector('input[type="text"]');
    if (!input.value.trim()) {
      alert("请输入搜索关键词");
      event.preventDefault(); // 阻止表单提交
    }
  });
});


document.addEventListener('keydown', function(event) {
  // 检查是否按下了Ctrl键和S键
  // 对于Mac用户，可能需要检查event.metaKey作为Cmd键
  if ((event.ctrlKey || event.metaKey) && event.key === 's') {
    event.preventDefault(); // 阻止默认行为，即不执行保存操作
    alert('保存功能已被禁用'); // 可选：提供用户反馈
  }
});
