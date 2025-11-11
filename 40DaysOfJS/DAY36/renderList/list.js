// Container

let ITEMS_COUNT = 10000;

let items = Array.from({ length : ITEMS_COUNT}, (_, i) => `Item ${i+1}`);

console.log(items);

let listContainer = document.getElementById('listContainer');

const ROW_HEIGHT = 20;
const viewPortHeight = listContainer.clientHeight;
const visibleCount = Math.ceil(viewPortHeight / ROW_HEIGHT);

const pool = [];

for(let i = 0; i < visibleCount; i++) {
    const div = document.createElement('div');
    div.style.height = ROW_HEIGHT + 'px';
    div.style.boxSizing = 'border-box';
    div.style.borderBottom = '1px solid #eee';
    div.style.padding = '4px 8px';
    listContainer.appendChild(div);
    pool.push(div)
}

console.log(pool);


function renderVirtual() {
  const scrollTop = listContainer.scrollTop;
  const startIndex = Math.floor(scrollTop / ROW_HEIGHT);

  listContainer.style.paddingTop = startIndex * ROW_HEIGHT + 'px';

  for (let i = 0; i < pool.length; i++) {
    const itemIndex = startIndex + i;
    const div = pool[i];

    if (itemIndex >= items.length) {
      div.style.display = 'none';
    } else {
      div.style.display = 'block';
      div.textContent = items[itemIndex];
    }
  }
}

// --- Attach scroll event ---
listContainer.addEventListener('scroll', renderVirtual);

// --- Initial render ---
renderVirtual();



