import React from 'react'

const UnicornHorn = (x = 0, y = 0, width, height) => (
  <svg
    x={x}
    y={y}
    width={width}
    height={height}
    imageRendering="optimizeSpeed"
    baseProfile="basic"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
  >
    <defs>
      <linearGradient id="a">
        <stop offset="0" stopColor="#ffef6d" />
        <stop offset="1" stopColor="#ffb22a" />
      </linearGradient>
      <linearGradient id="b">
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="c">
        <stop offset="0" stopColor="#ffef6d" />
        <stop offset="1" stopColor="#ffb22a" />
      </linearGradient>
      <linearGradient id="d">
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="e" xlinkHref="#a" x1=".587" y1=".482" x2=".665" y2=".55" />
      <linearGradient id="f" xlinkHref="#b" x1=".457" y1=".476" x2=".587" y2=".576" />
      <linearGradient id="g" xlinkHref="#a" x1="1.3" y1="-.55" x2="1.524" y2="-.336" />
      <linearGradient id="h" xlinkHref="#b" x1="1.009" y1="-.756" x2="1.434" y2="-.4" />
    </defs>
    <path fill="#664e27">
      <animate
        attributeName="d"
        values="M167.12,28.69C166.06,28.38 164.38,28.06 162.06,28.50 C159.94,29.06 158.00,30.19 156.00,31.75 C154.19,33.06 153.00,34.38 151.31,36.00 C149.56,37.31 148.06,38.38 145.62,40.50 C142.81,42.88 140.00,45.38 137.19,48.19 C134.25,51.06 132.38,53.19 131.31,54.44 C129.00,55.19 125.31,56.62 121.06,59.38 C117.00,62.44 113.88,65.75 111.81,68.50 C110.19,70.62 110.38,71.25 110.50,71.88 C109.94,72.88 109.56,73.50 109.38,73.88 L102.75,76.56 C101.06,77.56 98.44,79.50 95.69,82.81 C93.12,86.69 91.31,90.69 90.31,93.25 C86.31,94.88 80.06,97.75 74.31,101.94 C69.56,106.50 67.12,110.94 65.88,113.69 C60.94,116.31 53.44,120.62 47.69,125.44 C43.88,129.94 43.31,133.44 43.44,135.50 C39.88,136.81 34.75,139.50 32.56,144.62 C31.69,150.06 34.06,156.12 38.94,162.25 C43.25,168.50 48.44,172.75 54.75,174.25 C60.50,175.25 65.06,173.00 70.25,169.31 C75.62,166.81 79.56,163.88 83.06,159.06 C86.62,153.00 88.44,146.94 89.31,143.12 C92.19,141.69 96.81,139.06 100.75,134.62 C103.69,129.38 104.88,123.88 105.44,120.50 C107.69,119.50 111.38,117.50 115.06,113.12 C118.19,107.50 120.19,101.25 121.31,97.25 C122.44,96.44 124.50,94.94 127.50,92.19 C130.62,89.31 133.69,86.25 135.88,83.06 C137.50,79.75 137.62,77.44 137.50,76.12 C139.06,75.38 141.81,73.75 145.38,69.81 C149.00,64.50 152.19,58.44 154.19,54.56 C154.94,53.56 156.19,51.94 157.75,50.06 C158.94,48.50 159.94,47.31 161.31,45.75 C162.75,44.06 164.06,42.62 165.25,40.88 C166.31,39.06 166.88,37.62 167.31,36.00 C167.81,34.25 168.06,33.00 168.00,31.75 C167.81,30.25 167.38,29.25 167.12,28.69 Z ;M167.12,28.69C166.06,28.19 164.00,27.94 160.06,29.69 C156.12,31.69 151.69,35.00 146.31,39.88 C140.88,45.12 136.38,50.25 132.25,54.00 C128.56,56.38 126.81,56.19 124.44,57.00 C121.50,58.50 119.12,60.31 116.38,63.50 C113.19,67.50 110.69,71.62 109.25,74.25 C107.75,74.44 105.19,75.06 102.06,76.94 C99.00,78.81 96.38,81.25 94.19,84.31 C92.19,87.50 91.44,90.25 90.81,92.25 C89.88,93.81 89.44,93.88 89.25,93.81 L83.69,96.25 C81.44,96.94 77.81,98.50 73.69,102.06 C69.62,106.69 66.38,111.94 64.50,115.38 C60.12,117.25 53.38,120.50 47.94,124.62 C44.12,128.88 43.12,132.69 42.88,135.00 C41.50,135.69 39.31,136.94 37.25,138.50 C35.44,140.12 34.31,141.56 33.75,142.44 C33.19,144.00 32.56,146.81 33.56,151.50 C34.19,156.31 35.81,161.25 40.56,165.88 C46.06,170.56 52.75,173.31 59.44,173.62 C65.38,173.06 69.06,170.00 71.81,167.25 C74.50,165.69 75.12,165.12 75.69,164.62 C76.88,163.69 77.62,163.12 78.06,162.81 C79.19,162.25 81.12,160.94 83.44,157.31 C85.69,152.38 87.56,146.56 88.69,142.88 C91.69,141.56 96.38,139.19 100.56,134.94 C103.75,129.75 105.19,124.19 105.88,120.75 C107.81,119.19 110.94,116.62 114.06,113.38 C116.50,110.62 118.00,108.31 119.50,105.31 C121.19,101.62 122.25,98.44 122.81,96.50 C126.12,93.50 131.25,88.75 135.06,84.12 C137.44,80.12 137.50,77.75 137.25,76.44 C138.81,75.62 141.44,73.94 144.69,70.12 C147.31,65.81 149.44,60.81 152.56,55.69 C156.06,51.12 159.31,48.25 162.12,45.25 C164.56,42.00 165.62,39.94 166.44,37.81 C167.50,35.38 167.88,33.81 167.94,32.25 C167.88,30.44 167.44,29.25 167.12,28.69 Z"
      />
    </path>
    <path fill="url(#e)">
      <animate
        attributeName="d"
        values="M165.31,30.62C165.31,30.56 165.25,30.56 165.19,30.62 C165.06,30.56 164.94,30.50 164.62,30.69 C164.19,30.81 163.69,31.12 163.19,31.50 C162.69,31.81 162.44,32.06 162.25,32.38 C162.00,32.62 161.88,32.75 161.88,32.88 C161.88,32.88 161.88,32.88 162.00,32.94 C162.06,32.94 162.19,33.00 162.50,33.19 C162.75,33.31 163.06,33.44 163.44,33.62 C163.69,33.75 163.88,33.81 164.06,33.88 C164.19,33.94 164.25,33.94 164.31,34.00 C164.31,33.94 164.44,33.88 164.62,33.69 C164.75,33.44 164.94,33.19 165.12,32.81 C165.31,32.31 165.44,31.75 165.50,31.38 C165.50,31.00 165.44,30.88 165.38,30.81 C165.31,30.62 165.31,30.62 165.31,30.62 L165.31,30.62 Z M163.88,34.19C164.31,32.81 163.81,33.38 163.31,33.94 C163.00,33.81 162.69,33.69 162.44,33.56 C162.12,33.38 161.94,33.31 161.81,33.25 C161.62,33.12 161.56,33.12 161.56,33.12 C161.94,32.75 162.25,32.44 161.06,33.06 C159.56,33.62 157.12,34.88 153.50,37.44 C149.56,40.31 145.75,43.62 142.62,46.56 C140.06,48.81 139.31,49.75 138.69,50.75 C137.44,52.12 136.75,53.06 136.38,53.62 L150.88,53.94 C151.19,53.50 151.81,52.75 152.69,51.94 C153.44,51.19 154.06,50.56 154.81,49.94 C155.44,49.31 155.81,48.88 156.31,48.44 C156.75,48.06 157.06,47.81 157.75,47.00 C158.62,45.69 159.50,44.25 160.12,43.31 C161.19,40.69 162.88,36.81 163.88,34.19 Z M147.50,57.00C146.62,56.94 145.56,56.94 144.00,56.94 C142.25,56.88 140.56,56.81 138.81,56.81 C137.12,56.75 136.06,56.81 135.19,56.81 C134.19,56.75 133.81,56.75 133.62,56.75 C133.25,56.81 132.56,56.94 131.38,57.56 C130.44,57.94 129.38,58.50 127.25,59.94 C124.56,61.56 121.69,63.50 119.12,65.56 C116.94,67.19 115.94,68.19 115.25,69.56 C114.25,71.38 113.88,73.00 113.75,74.00 L135.88,74.69 C136.62,74.06 137.88,73.06 139.31,71.81 C140.19,71.06 140.81,70.50 142.25,68.69 C144.25,66.06 146.44,63.00 148.06,60.56 C149.12,58.69 149.12,58.19 149.06,57.94 C149.19,57.25 149.19,57.06 149.19,57.00 C148.94,57.00 148.44,57.00 147.50,57.00 Z M132.62,76.31C131.31,76.19 129.50,76.19 126.75,76.25 C123.81,76.25 121.00,76.25 118.25,76.31 C115.62,76.31 114.12,76.25 112.94,76.31 C111.50,76.31 110.88,76.31 110.62,76.38 C109.12,77.00 106.81,78.12 104.31,79.50 C102.31,80.50 100.94,81.31 99.31,82.88 C97.38,84.75 95.88,86.69 94.62,88.62 C93.38,90.31 92.94,91.31 92.75,92.12 C92.44,93.00 92.50,93.31 92.62,93.44 L120.19,94.69 C120.38,94.50 120.88,94.25 121.88,93.56 C122.69,92.94 123.69,92.19 125.19,90.94 C126.69,89.62 128.19,88.25 129.75,86.50 C131.25,84.69 132.25,83.19 133.06,81.44 C133.88,79.38 134.12,77.81 134.25,76.94 C134.19,76.75 133.88,76.50 132.62,76.31 Z M116.31,96.69C114.88,96.56 113.00,96.50 109.88,96.38 C106.38,96.19 102.81,96.06 99.38,95.94 C96.19,95.75 94.31,95.69 92.88,95.69 C91.19,95.62 90.62,95.62 90.38,95.62 C90.06,95.69 89.44,95.94 88.12,96.62 C87.31,96.75 86.38,97.12 83.38,99.25 C79.19,102.12 74.25,105.94 70.69,109.19 C68.25,111.62 68.19,112.50 68.38,113.19 C67.88,114.19 67.75,114.62 67.81,114.88 L104.38,118.00 C104.75,117.81 105.62,117.44 107.12,116.38 C108.50,115.69 110.00,114.69 112.06,112.00 C114.31,108.38 116.38,104.19 117.81,100.88 C118.88,98.44 118.81,97.94 118.69,97.75 C118.75,97.00 118.69,96.88 118.62,96.88 C118.38,96.81 117.88,96.75 116.31,96.69 Z M99.69,120.12C97.88,119.94 95.50,119.69 91.31,119.38 C86.62,118.94 81.75,118.56 77.06,118.19 C72.75,117.81 70.25,117.62 68.38,117.50 C66.19,117.31 65.50,117.25 65.25,117.25 C61.50,119.38 55.75,122.88 51.00,127.00 C47.19,130.88 45.69,133.94 46.00,136.00 C46.19,137.44 48.25,137.12 50.88,136.94 C52.94,137.38 54.81,137.81 56.94,138.12 C59.19,138.25 60.81,138.19 61.81,138.12 C62.81,138.06 64.62,138.06 67.19,138.12 C69.56,138.19 71.88,138.31 74.38,138.56 C76.75,138.81 78.44,139.06 80.19,139.25 C82.00,139.25 83.19,139.06 84.00,139.06 C84.75,139.12 84.88,139.31 84.88,139.50 C84.75,139.44 84.81,139.31 85.56,139.06 C86.06,139.25 87.06,139.38 89.44,138.06 C92.31,136.12 95.69,133.38 98.56,130.25 C100.81,127.38 101.69,125.19 102.12,123.38 C102.75,121.50 102.69,120.69 102.62,120.38 C102.38,120.31 101.69,120.25 99.69,120.12 Z ;M165.25,30.88C165.31,30.69 165.31,30.50 164.56,30.88 C164.00,30.94 163.00,31.31 160.31,33.12 C157.19,35.12 153.44,37.81 149.31,41.12 C145.44,44.31 142.62,47.00 140.31,49.44 C137.88,51.81 136.88,53.06 136.44,53.69 C136.50,53.62 136.69,53.62 137.44,53.69 C138.00,53.69 138.81,53.75 140.38,53.81 C142.00,53.81 143.81,53.81 145.69,53.81 C147.38,53.81 148.44,53.81 149.38,53.88 C150.31,53.88 150.69,53.88 150.88,53.88 C151.38,53.50 152.31,52.69 154.06,50.81 C155.81,48.88 157.69,46.62 159.81,43.56 C161.88,40.19 163.38,37.19 164.44,34.75 C165.38,32.56 165.44,31.81 165.38,31.44 C165.44,30.75 165.31,30.75 165.25,30.88 L165.25,30.88 Z M147.38,56.44C146.44,56.38 145.31,56.31 143.75,56.31 C142.06,56.25 140.44,56.31 138.81,56.31 C137.19,56.25 136.06,56.19 135.19,56.19 C134.19,56.12 133.69,56.12 133.50,56.19 C133.00,56.25 132.12,56.50 130.31,57.44 C128.50,58.19 126.44,59.25 123.81,61.12 C121.00,63.12 118.69,65.19 116.75,67.44 C115.00,69.50 114.38,70.88 114.06,72.00 C113.56,73.19 113.56,73.62 113.69,73.88 L136.25,74.31 C136.56,74.06 137.25,73.50 138.56,72.31 C139.81,71.19 141.12,69.81 142.81,67.81 C144.44,65.56 145.81,63.44 146.94,61.44 C147.94,59.56 148.31,58.56 148.56,57.81 C148.94,56.88 149.00,56.56 149.06,56.50 C148.81,56.44 148.38,56.44 147.38,56.44 Z M132.00,76.81C130.69,76.75 129.12,76.75 126.69,76.69 C124.06,76.56 121.44,76.50 118.81,76.50 C116.25,76.44 114.62,76.44 113.31,76.44 C111.81,76.38 111.12,76.38 110.88,76.44 C110.31,76.50 109.31,76.75 107.50,77.62 C105.62,78.38 103.62,79.38 101.25,81.25 C98.75,83.19 96.81,85.25 95.25,87.38 C93.75,89.25 93.25,90.44 93.00,91.44 C92.50,92.44 92.44,92.81 92.44,93.00 L121.62,94.25 C121.88,94.00 122.50,93.50 123.75,92.44 C124.94,91.44 126.31,90.19 128.12,88.31 C130.00,86.19 131.62,84.19 132.88,82.19 C133.94,80.31 134.19,79.25 134.31,78.38 C134.50,77.38 134.50,76.94 134.44,76.81 C134.06,76.81 133.44,76.81 132.00,76.81 Z M116.62,97.00C115.00,96.88 113.00,96.81 109.81,96.69 C106.38,96.50 102.88,96.38 99.44,96.25 C96.12,96.06 94.12,96.00 92.44,95.94 C90.56,95.88 89.75,95.81 89.38,95.88 C88.88,96.00 87.81,96.44 85.75,97.56 C83.62,98.56 81.19,99.88 78.19,102.06 C75.00,104.38 72.38,106.75 70.31,109.19 C68.44,111.38 67.94,112.75 67.75,113.88 C67.31,115.06 67.38,115.50 67.56,115.69 L104.50,117.31 C104.75,117.12 105.38,116.75 106.69,115.88 C107.88,115.06 109.25,114.12 111.12,112.31 C113.00,110.31 114.62,108.12 116.12,105.75 C117.44,103.38 118.12,101.62 118.62,100.06 C119.19,98.38 119.38,97.56 119.50,97.19 C119.12,97.12 118.38,97.06 116.62,97.00 Z M99.25,120.06C97.31,119.94 94.88,119.75 90.62,119.56 C85.94,119.31 81.19,119.12 76.56,119.00 C72.25,118.81 69.81,118.69 67.88,118.62 C65.69,118.50 64.88,118.50 64.56,118.50 C64.12,118.56 63.25,118.88 61.50,119.81 C59.75,120.56 57.75,121.56 55.25,123.44 C52.56,125.44 50.31,127.56 48.50,129.81 C46.81,131.88 46.19,133.25 45.81,134.44 C45.19,135.62 45.12,136.19 45.12,136.44 L87.44,140.06 C87.94,139.81 88.94,139.38 90.69,138.12 C92.38,136.94 94.19,135.44 96.31,133.12 C98.44,130.50 100.06,127.94 101.25,125.56 C102.25,123.38 102.38,122.25 102.38,121.50 C102.50,120.50 102.44,120.25 102.38,120.19 C102.06,120.19 101.38,120.12 99.25,120.06 Z M82.06,142.44C79.94,142.25 77.19,142.00 72.31,141.62 C66.94,141.12 61.31,140.69 55.88,140.25 C50.88,139.81 48.00,139.56 45.81,139.38 C43.31,139.12 42.44,139.12 42.12,139.12 C41.38,139.25 40.19,139.69 38.81,141.19 C37.19,142.50 35.88,144.25 35.62,147.31 C35.69,150.62 36.81,154.12 38.31,157.19 C39.50,159.88 40.56,161.12 41.44,161.94 C42.12,162.88 42.25,162.94 42.31,162.94 C42.75,163.50 43.75,164.50 45.94,165.88 C48.06,167.25 50.56,168.50 53.94,169.25 C57.44,169.69 60.56,169.31 63.12,168.81 C65.31,168.38 66.00,167.88 66.38,167.56 C66.94,167.31 66.88,167.25 66.75,167.31 C66.56,167.44 66.50,167.56 67.31,167.00 C67.94,166.62 69.00,165.88 71.50,163.62 C74.38,161.00 77.69,157.75 80.62,154.19 C83.06,150.81 84.19,148.38 84.88,146.31 C85.62,144.12 85.50,143.19 85.38,142.75 C85.12,142.69 84.38,142.62 82.06,142.44 Z"
      />
    </path>
    <path fill="url(#f)">
      <animate
        attributeName="d"
        values="M164.75,31.50L164.62,31.56 L164.56,31.56 C164.50,31.56 164.50,31.56 164.38,31.69 C164.19,31.69 164.06,31.81 163.88,31.94 C163.62,32.06 163.44,32.19 163.31,32.38 C163.12,32.50 163.00,32.62 162.94,32.75 C162.81,32.81 162.75,32.81 162.75,32.88 C162.81,32.94 162.94,33.00 163.25,33.12 C163.50,33.25 163.75,33.31 164.06,33.25 C164.31,33.06 164.44,32.81 164.56,32.50 C164.62,32.19 164.62,31.94 164.69,31.75 C164.69,31.56 164.69,31.50 164.75,31.50 L164.75,31.50 Z M163.06,34.19C163.75,32.75 163.31,33.44 162.88,34.12 C162.75,34.06 162.62,33.94 162.56,33.94 C162.44,33.88 162.31,33.88 162.25,33.88 C162.12,33.81 162.06,33.81 162.06,33.81 L161.81,33.69 C159.12,35.75 155.06,39.00 151.81,41.81 C149.56,43.81 149.06,44.50 148.69,45.06 C148.06,45.50 148.00,45.50 147.25,46.19 C145.88,47.56 144.25,49.25 143.25,50.31 C142.69,50.75 143.06,50.25 143.44,49.81 C143.50,50.25 143.81,50.94 144.75,51.38 C145.69,51.75 146.88,51.75 148.50,51.06 C150.12,50.00 151.62,48.50 152.75,47.56 C153.62,47.06 153.75,47.31 153.88,47.44 C154.19,47.19 154.38,46.88 154.50,46.69 C154.56,46.69 154.69,46.75 155.00,46.62 C155.25,46.38 155.56,46.00 155.81,45.62 C155.88,45.19 155.88,44.81 156.12,44.62 C156.44,44.50 156.94,44.56 157.38,44.56 C157.62,44.31 157.75,44.00 157.81,43.81 C159.31,41.06 161.56,36.94 163.06,34.19 Z M141.44,58.81C141.19,58.69 140.62,58.56 139.44,58.50 C138.25,58.31 136.88,58.19 134.88,58.62 C133.12,58.75 131.50,59.31 128.75,61.12 C125.25,63.50 121.81,66.44 119.38,68.81 C117.56,70.50 117.62,70.94 117.88,71.06 C118.06,70.94 118.62,70.88 119.94,70.81 C121.06,70.75 122.50,70.69 124.88,70.75 C127.56,70.75 130.38,70.81 132.56,70.88 C134.06,71.00 134.31,71.06 134.88,70.81 C136.00,70.25 137.06,69.50 137.75,69.06 C138.12,68.81 138.75,68.38 139.69,67.50 C140.38,66.62 141.06,65.62 142.06,64.44 C143.19,63.19 144.31,62.19 145.25,61.31 C145.94,60.44 146.19,60.00 146.38,59.69 C146.62,59.19 146.81,58.94 146.88,58.88 L141.44,58.81 Z M119.44,80.81C119.12,80.75 118.56,80.69 117.38,80.69 C116.25,80.56 114.88,80.44 112.88,80.62 C110.62,80.75 108.50,81.06 106.50,81.69 C104.62,82.31 103.62,83.00 102.88,83.69 C101.94,84.31 101.62,84.69 101.50,84.94 C101.38,85.00 101.12,85.12 100.75,85.50 C100.31,85.75 99.88,86.12 99.25,86.75 C98.56,87.38 97.88,88.06 97.25,88.88 C96.56,89.56 96.19,90.12 95.88,90.62 C95.50,91.06 95.38,91.31 95.31,91.44 C95.56,91.44 96.19,91.44 97.75,91.50 C99.12,91.50 100.81,91.56 103.56,91.75 C106.38,91.88 109.19,92.06 112.00,92.19 C114.62,92.25 116.31,92.31 117.69,92.31 C119.19,92.31 119.81,92.25 120.12,92.25 C120.25,92.12 120.50,91.94 121.19,91.44 C121.81,90.94 122.62,90.38 123.69,89.38 C124.75,88.25 125.69,87.06 126.56,85.69 C127.31,84.31 127.75,83.25 128.12,82.38 C128.56,81.44 128.75,81.06 128.88,80.88 L119.44,80.81 Z M104.56,98.38C104.25,98.31 103.62,98.31 102.31,98.25 C101.06,98.06 99.56,97.88 97.25,97.88 C94.69,97.75 92.19,97.81 89.81,98.31 C88.00,98.50 87.19,98.88 85.25,100.38 C82.12,102.50 78.75,105.06 76.69,106.81 C76.62,106.81 76.44,106.94 75.94,107.44 C75.31,107.81 74.62,108.44 73.81,109.38 C72.81,110.38 72.06,111.44 71.94,112.31 C71.94,112.94 72.56,113.12 73.38,113.19 C74.06,113.25 74.69,113.06 75.12,113.00 C75.44,112.94 76.25,112.94 78.12,113.12 C79.75,113.25 81.75,113.44 84.94,113.81 C88.31,114.19 91.69,114.56 95.12,114.88 C98.31,115.06 100.31,115.06 102.00,115.06 C103.75,115.00 104.50,114.94 104.88,114.88 C110.94,104.81 119.56,90.69 122.75,86.19 C120.94,90.00 113.38,103.56 108.94,111.69 C108.38,113.00 111.62,107.56 114.38,102.88 C115.50,100.88 115.62,100.44 115.75,100.12 C116.06,99.38 116.12,99.00 116.19,98.88 L104.56,98.38 Z M94.19,122.12C93.81,122.12 93.12,122.12 91.31,122.00 C89.62,121.81 87.56,121.62 84.38,121.31 C80.94,120.94 77.56,120.62 74.25,120.38 C71.06,120.12 69.06,120.06 67.50,120.12 C65.69,120.12 65.00,120.19 64.69,120.31 C64.62,120.44 64.38,120.75 63.31,121.62 C62.25,122.12 60.81,122.81 58.50,124.88 C55.00,127.56 51.50,130.81 50.94,133.31 C51.94,135.06 55.81,135.38 59.44,135.50 C61.81,135.94 63.06,136.00 63.69,136.00 C64.38,135.94 65.69,135.94 67.69,136.00 C69.44,136.00 71.19,136.12 73.44,136.38 C75.69,136.62 77.56,136.94 79.56,137.19 C81.44,137.31 82.69,137.25 84.00,137.25 C85.50,137.25 86.50,137.25 87.12,137.25 C88.44,136.25 90.50,134.75 92.38,133.31 C93.56,132.31 93.94,131.88 94.69,130.94 C95.75,129.69 96.81,128.38 97.75,127.00 C98.56,125.62 99.00,124.75 99.31,124.00 C99.62,123.19 99.69,122.81 99.75,122.69 L94.19,122.12 Z ;M160.69,36.38L159.50,37.12 L159.00,37.44 C158.75,37.50 158.31,37.81 157.31,38.56 C156.31,39.19 155.19,40.06 153.44,41.50 C151.50,43.00 149.69,44.62 147.88,46.25 C146.12,47.75 145.12,48.69 144.38,49.50 C143.44,50.38 143.06,50.75 142.94,51.00 C143.31,51.19 144.06,51.44 145.62,51.38 C147.06,51.44 148.69,51.19 150.81,49.81 C152.88,48.12 154.69,45.88 156.38,43.44 C157.94,41.19 158.75,39.56 159.44,38.31 C160.19,37.00 160.50,36.56 160.69,36.38 L160.69,36.38 Z M143.06,59.19C142.88,59.06 142.69,58.88 142.25,58.81 C141.69,58.69 141.06,58.62 140.31,58.69 C139.56,58.69 139.00,58.81 138.50,58.94 C137.94,59.00 137.62,59.12 137.50,59.19 L133.88,59.12 C133.62,59.19 133.12,59.31 132.06,59.88 C131.00,60.25 129.75,60.81 127.88,61.94 C125.88,63.12 123.94,64.44 122.19,65.94 C120.50,67.31 119.56,68.44 118.94,69.38 C118.12,70.31 117.88,70.81 117.81,71.06 C118.06,71.00 118.69,70.88 120.19,70.94 C121.56,71.00 123.25,71.19 125.94,71.31 C128.75,71.44 131.56,71.50 134.19,71.06 C136.56,70.38 137.81,69.44 138.81,68.44 C139.88,67.44 140.19,66.69 140.31,66.31 C140.44,66.19 140.69,65.94 141.12,65.44 C141.56,64.88 142.00,64.31 142.56,63.50 C143.06,62.56 143.50,61.75 143.75,61.06 C143.88,60.31 143.75,60.00 143.62,59.75 C143.50,59.44 143.38,59.31 143.31,59.31 C143.25,59.25 143.25,59.25 143.06,59.19 Z M122.69,79.56C122.31,79.38 121.50,79.12 119.69,79.06 C117.94,78.81 115.88,78.69 112.81,79.38 C109.50,80.12 106.38,81.31 103.56,83.06 C100.94,84.69 99.56,86.25 98.56,87.75 C97.31,89.12 96.94,89.88 96.81,90.31 C97.06,90.25 97.69,90.12 99.31,90.19 C100.75,90.19 102.50,90.31 105.38,90.56 C108.38,90.88 111.38,91.19 114.31,91.31 C117.00,91.25 118.62,91.00 119.94,90.69 C121.38,90.38 121.94,90.06 122.25,89.94 C122.38,89.81 122.62,89.56 123.25,89.00 C123.81,88.50 124.44,87.88 125.50,86.88 C126.56,85.75 127.56,84.62 128.56,83.44 C129.38,82.25 129.88,81.50 130.25,80.88 C130.69,80.12 130.81,79.81 130.94,79.69 L122.69,79.56 Z M104.50,99.38C104.12,99.31 103.44,99.19 101.88,99.12 C100.44,98.88 98.75,98.69 96.06,98.81 C93.12,98.81 90.31,99.12 87.56,99.81 C85.00,100.56 83.50,101.44 82.38,102.38 C81.00,103.19 80.44,103.75 80.25,104.06 C80.12,104.12 79.88,104.31 79.25,104.81 C78.62,105.19 77.94,105.69 76.88,106.62 C75.75,107.50 74.69,108.50 73.69,109.56 C72.75,110.56 72.25,111.25 71.88,111.88 C71.44,112.50 71.25,112.81 71.25,113.00 C71.62,112.94 72.44,112.94 74.50,113.06 C76.31,113.12 78.56,113.25 82.19,113.44 C85.94,113.62 89.69,113.81 93.44,114.00 C96.94,114.06 99.12,114.12 101.00,114.12 C103.00,114.12 103.88,114.06 104.31,114.06 C104.44,113.94 104.81,113.69 105.75,113.00 C106.62,112.38 107.69,111.62 109.12,110.25 C110.56,108.69 111.81,107.06 113.00,105.38 C114.06,103.69 114.56,102.56 115.00,101.62 C115.44,100.56 115.56,100.06 115.62,99.88 L104.50,99.38 Z M83.56,122.25C83.19,122.19 82.38,122.19 80.56,122.06 C78.88,121.81 76.81,121.56 73.69,121.56 C70.25,121.44 66.94,121.56 63.75,122.19 C60.75,122.88 59.00,123.81 57.69,124.88 C56.12,125.81 55.56,126.56 55.38,127.00 C55.25,127.06 55.06,127.25 54.50,127.81 C53.81,128.31 53.00,129.00 52.06,130.12 C50.94,131.25 50.06,132.44 49.88,133.38 C49.88,134.12 50.62,134.38 51.62,134.44 C52.44,134.50 53.12,134.38 53.62,134.25 C54.00,134.19 54.94,134.19 57.06,134.38 C58.94,134.50 61.19,134.69 64.94,135.12 C68.88,135.56 72.81,136.00 76.81,136.38 C80.50,136.62 82.75,136.62 84.62,136.62 C86.69,136.56 87.56,136.44 88.00,136.38 C88.19,136.25 88.56,135.94 89.50,135.31 C90.31,134.75 91.38,134.00 92.75,132.75 C94.19,131.31 95.44,129.81 96.62,128.19 C97.62,126.56 98.12,125.44 98.50,124.56 C98.94,123.56 99.06,123.19 99.12,123.00 L83.56,122.25 Z M75.69,144.81C75.25,144.81 74.38,144.75 72.31,144.62 C70.38,144.44 68.06,144.19 64.38,143.88 C60.44,143.44 56.50,143.06 52.62,142.81 C48.94,142.50 46.62,142.44 44.81,142.50 C42.75,142.50 41.88,142.56 41.56,142.69 C41.12,142.75 40.56,143.12 39.88,144.25 C39.00,145.25 38.31,146.56 38.44,148.81 C38.69,151.19 39.69,153.69 41.00,156.12 C42.12,158.25 43.19,159.50 44.12,160.44 C44.94,161.44 45.25,161.81 45.44,161.94 C45.69,162.31 46.25,163.00 47.94,163.94 C49.38,165.00 51.25,166.06 54.38,166.50 C57.69,166.75 61.12,166.25 64.44,165.19 C67.38,164.06 69.06,162.62 70.38,161.31 C71.75,160.06 72.19,159.31 72.38,158.94 C72.50,158.75 72.88,158.44 73.62,157.75 C74.31,157.06 75.12,156.31 76.31,155.00 C77.50,153.50 78.69,152.00 79.75,150.44 C80.69,148.88 81.19,147.88 81.56,147.00 C81.94,146.06 82.06,145.62 82.12,145.44 L75.69,144.81 Z"
      />
    </path>
    <path fill="url(#g)">
      <animate
        attributeName="d"
        values="M82.06,142.44C79.94,142.25 77.19,142.00 72.31,141.62 C66.94,141.12 61.31,140.69 55.88,140.25 C50.88,139.81 48.00,139.56 45.81,139.38 C43.31,139.12 42.44,139.12 42.12,139.12 C41.38,139.25 40.19,139.69 38.81,141.19 C37.19,142.50 35.88,144.25 35.62,147.31 C35.69,150.62 36.81,154.12 38.31,157.19 C39.50,159.88 40.56,161.12 41.44,161.94 C42.12,162.88 42.25,162.94 42.31,162.94 C42.75,163.50 43.75,164.50 45.94,165.88 C48.06,167.25 50.56,168.50 53.94,169.25 C57.44,169.69 60.56,169.31 63.12,168.81 C65.31,168.38 66.00,167.88 66.38,167.56 C66.94,167.31 66.88,167.25 66.75,167.31 C66.56,167.44 66.50,167.56 67.31,167.00 C67.94,166.62 69.00,165.88 71.50,163.62 C74.38,161.00 77.69,157.75 80.62,154.19 C83.06,150.81 84.19,148.38 84.88,146.31 C85.62,144.12 85.50,143.19 85.38,142.75 C85.12,142.69 84.38,142.62 82.06,142.44 Z ;M71.38,165.94C71.00,166.50 70.50,167.19 69.69,168.12 C68.75,169.00 67.75,169.69 66.75,170.31 C65.75,170.81 65.06,171.00 64.56,171.12 C64.00,171.25 63.75,171.31 63.69,171.31 C63.50,171.38 63.19,171.50 62.56,171.62 C61.88,171.69 61.12,171.75 60.44,171.88 C59.75,171.94 59.31,171.94 59.06,172.00 C58.81,172.00 58.81,172.00 58.94,172.00 C58.94,172.00 59.00,172.00 59.06,172.06 C58.94,172.00 58.94,172.00 59.25,172.00 C59.56,172.00 60.12,172.00 60.94,172.00 C61.75,171.94 62.56,171.88 63.31,171.88 C63.94,171.81 64.19,171.75 64.38,171.75 C64.56,171.69 64.56,171.69 64.56,171.75 C64.44,171.75 64.38,171.81 64.62,171.75 C64.81,171.75 65.19,171.69 66.12,171.25 C67.06,170.75 68.19,170.06 69.31,169.12 C70.25,168.00 70.81,167.00 71.31,166.19 C71.75,165.50 71.94,165.25 72.00,165.25 C71.94,165.25 71.75,165.38 71.38,165.94 Z"
      />
    </path>
    <path fill="url(#h)">
      <animate
        attributeName="d"
        values="M75.69,144.81C75.25,144.81 74.38,144.75 72.31,144.62 C70.38,144.44 68.06,144.19 64.38,143.88 C60.44,143.44 56.50,143.06 52.62,142.81 C48.94,142.50 46.62,142.44 44.81,142.50 C42.75,142.50 41.88,142.56 41.56,142.69 C41.12,142.75 40.56,143.12 39.88,144.25 C39.00,145.25 38.31,146.56 38.44,148.81 C38.69,151.19 39.69,153.69 41.00,156.12 C42.12,158.25 43.19,159.50 44.12,160.44 C44.94,161.44 45.25,161.81 45.44,161.94 C45.69,162.31 46.25,163.00 47.94,163.94 C49.38,165.00 51.25,166.06 54.38,166.50 C57.69,166.75 61.12,166.25 64.44,165.19 C67.38,164.06 69.06,162.62 70.38,161.31 C71.75,160.06 72.19,159.31 72.38,158.94 C72.50,158.75 72.88,158.44 73.62,157.75 C74.31,157.06 75.12,156.31 76.31,155.00 C77.50,153.50 78.69,152.00 79.75,150.44 C80.69,148.88 81.19,147.88 81.56,147.00 C81.94,146.06 82.06,145.62 82.12,145.44 L75.69,144.81 Z ;M69.81,168.25C69.69,168.25 69.56,168.44 69.19,168.75 C68.81,169.06 68.44,169.50 67.81,169.94 C67.06,170.31 66.31,170.56 65.56,170.81 C64.81,171.06 64.31,171.25 63.88,171.38 C63.31,171.44 63.06,171.50 62.94,171.50 C62.81,171.50 62.62,171.56 62.25,171.69 C61.81,171.75 61.31,171.81 60.88,171.88 C60.44,171.94 60.25,171.94 60.12,172.00 C59.94,172.00 59.94,172.00 60.00,172.00 C60.00,172.00 60.06,172.00 60.12,172.00 C60.12,172.00 60.19,172.00 60.50,172.00 C60.62,172.00 60.88,172.00 61.56,172.00 C62.31,171.94 63.31,171.88 64.31,171.75 C65.19,171.56 65.75,171.38 66.25,171.19 C66.75,170.94 66.94,170.81 67.06,170.75 C67.12,170.69 67.25,170.69 67.50,170.56 C67.69,170.44 67.94,170.31 68.38,169.94 C68.75,169.50 69.19,168.94 69.69,168.44 C70.06,167.88 70.38,167.50 70.62,167.25 C70.81,166.94 70.88,166.81 70.94,166.81 L69.81,168.25 Z"
      />
    </path>
    <g>
      <path
        fill="#664e27"
        d="M167.12 28.69c-1.06-.31-2.74-.63-5.06-.19-2.12.56-4.06 1.69-6.06 3.25-1.81 1.31-3 2.63-4.69 4.25-1.75 1.31-3.25 2.38-5.69 4.5-2.81 2.38-5.62 4.88-8.43 7.69-2.94 2.87-4.81 5-5.88 6.25-2.31.75-6 2.18-10.25 4.94-4.06 3.06-7.18 6.37-9.25 9.12-1.62 2.12-1.43 2.75-1.31 3.38-.56 1-.94 1.62-1.12 2l-6.63 2.68c-1.69 1-4.31 2.94-7.06 6.25-2.57 3.88-4.38 7.88-5.38 10.44-4 1.63-10.25 4.5-16 8.69-4.75 4.56-7.19 9-8.43 11.75-4.94 2.62-12.44 6.93-18.19 11.75-3.81 4.5-4.38 8-4.25 10.06-3.56 1.31-8.69 4-10.88 9.12-.87 5.44 1.5 11.5 6.38 17.63 4.31 6.25 9.5 10.5 15.81 12 5.75 1 10.31-1.25 15.5-4.94 5.37-2.5 9.31-5.43 12.81-10.25 3.56-6.06 5.38-12.12 6.25-15.94 2.88-1.43 7.5-4.06 11.44-8.5 2.94-5.24 4.13-10.74 4.69-14.12 2.25-1 5.94-3 9.62-7.38 3.13-5.62 5.13-11.87 6.25-15.87 1.13-.81 3.19-2.31 6.19-5.06 3.12-2.88 6.19-5.94 8.38-9.13 1.62-3.31 1.74-5.62 1.62-6.94 1.56-.74 4.31-2.37 7.88-6.31 3.62-5.31 6.81-11.37 8.81-15.25.75-1 2-2.62 3.56-4.5 1.19-1.56 2.19-2.75 3.56-4.31 1.44-1.69 2.75-3.13 3.94-4.87 1.06-1.82 1.63-3.26 2.06-4.88.5-1.75.75-3 .69-4.25a9.95 9.95 0 0 0-.88-3.06z"
      />
      <path
        fill="url(#e)"
        d="M165.31 30.62c0-.06-.06-.06-.12 0-.13-.06-.25-.12-.57.07-.43.12-.93.43-1.43.81-.5.31-.75.56-.94.88-.25.24-.37.37-.37.5l.12.06c.06 0 .19.06.5.25.25.12.56.25.94.43.25.13.44.19.62.26.13.06.19.06.25.12 0-.06.13-.12.31-.31.13-.25.32-.5.5-.88.19-.5.32-1.06.38-1.43 0-.38-.06-.5-.12-.57l-.07-.19zm-1.43 3.57c.43-1.38-.07-.81-.57-.25-.31-.13-.62-.25-.87-.38-.32-.18-.5-.25-.63-.31-.19-.13-.25-.13-.25-.13.38-.37.69-.68-.5-.06-1.5.56-3.94 1.82-7.56 4.38-3.94 2.87-7.75 6.18-10.88 9.12-2.56 2.25-3.31 3.19-3.93 4.19-1.25 1.37-1.94 2.31-2.31 2.87l14.5.32c.31-.44.93-1.19 1.81-2 .75-.75 1.37-1.38 2.12-2 .63-.63 1-1.06 1.5-1.5.44-.38.75-.63 1.44-1.44.87-1.31 1.75-2.75 2.37-3.69 1.07-2.62 2.76-6.5 3.76-9.12zM147.5 57c-.88-.06-1.94-.06-3.5-.06-1.75-.06-3.44-.13-5.19-.13-1.69-.06-2.75 0-3.62 0-1-.06-1.38-.06-1.57-.06-.37.06-1.06.19-2.24.81-.94.38-2 .94-4.13 2.38-2.69 1.62-5.56 3.56-8.13 5.62-2.18 1.63-3.18 2.63-3.87 4-1 1.82-1.37 3.44-1.5 4.44l22.13.69c.74-.63 2-1.63 3.43-2.88.88-.75 1.5-1.31 2.94-3.12 2-2.63 4.19-5.69 5.81-8.13 1.06-1.87 1.06-2.37 1-2.62.13-.69.13-.88.13-.94h-1.69zm-14.88 19.31c-1.31-.12-3.12-.12-5.87-.06-2.94 0-5.75 0-8.5.06-2.63 0-4.13-.06-5.31 0-1.44 0-2.06 0-2.32.07-1.5.62-3.81 1.74-6.31 3.12-2 1-3.37 1.81-5 3.38-1.93 1.87-3.43 3.81-4.69 5.74-1.24 1.69-1.68 2.69-1.87 3.5-.31.88-.25 1.19-.13 1.32l27.57 1.25c.19-.19.69-.44 1.69-1.13.81-.62 1.81-1.37 3.31-2.62 1.5-1.32 3-2.69 4.56-4.44 1.5-1.81 2.5-3.31 3.31-5.06.82-2.06 1.06-3.63 1.19-4.5-.06-.19-.37-.44-1.63-.63zm-16.31 20.38c-1.43-.13-3.31-.19-6.43-.31-3.5-.19-7.07-.32-10.5-.44-3.19-.19-5.07-.25-6.5-.25-1.69-.07-2.26-.07-2.5-.07-.32.07-.94.32-2.26 1-.81.13-1.74.5-4.74 2.63-4.19 2.87-9.13 6.69-12.69 9.94-2.44 2.43-2.5 3.31-2.31 4-.5 1-.63 1.43-.57 1.69l36.57 3.12c.37-.19 1.24-.56 2.74-1.62 1.38-.69 2.88-1.69 4.94-4.38 2.25-3.62 4.32-7.81 5.75-11.12 1.07-2.44 1-2.94.88-3.13.06-.75 0-.87-.07-.87-.24-.07-.74-.13-2.31-.19zm-16.62 23.43c-1.81-.18-4.19-.43-8.38-.74-4.69-.44-9.56-.82-14.25-1.19-4.31-.38-6.81-.57-8.68-.69-2.19-.19-2.88-.25-3.13-.25-3.75 2.13-9.5 5.63-14.25 9.75-3.81 3.88-5.31 6.94-5 9 .19 1.44 2.25 1.12 4.88.94 2.06.44 3.93.87 6.06 1.18 2.25.13 3.87.07 4.87 0 1-.06 2.81-.06 5.38 0 2.37.07 4.69.19 7.19.44 2.37.25 4.06.5 5.81.69 1.81 0 3-.19 3.81-.19.75.06.88.25.88.44-.13-.06-.07-.19.68-.44.5.19 1.5.32 3.88-1 2.87-1.94 6.25-4.68 9.12-7.81 2.25-2.87 3.13-5.06 3.56-6.87.63-1.88.57-2.69.5-3-.24-.07-.93-.13-2.93-.26z"
      />
      <path
        fill="url(#f)"
        d="M164.75 31.5l-.13.06h-.06c-.06 0-.06 0-.18.13-.19 0-.32.12-.5.25-.26.12-.44.25-.57.44-.19.12-.31.24-.37.37-.13.06-.19.06-.19.13.06.06.19.12.5.24.25.13.5.19.81.13.25-.19.38-.44.5-.75.06-.31.06-.56.13-.75 0-.19 0-.25.06-.25zm-1.69 2.69c.69-1.44.25-.75-.18-.07-.13-.06-.26-.18-.32-.18-.12-.06-.25-.06-.31-.06-.13-.07-.19-.07-.19-.07l-.25-.12c-2.69 2.06-6.75 5.31-10 8.12-2.25 2-2.75 2.69-3.12 3.25-.63.44-.69.44-1.44 1.13-1.37 1.37-3 3.06-4 4.12-.56.44-.19-.06.19-.5.06.44.37 1.13 1.31 1.57.94.37 2.13.37 3.75-.32 1.62-1.06 3.12-2.56 4.25-3.5.87-.5 1-.25 1.13-.12.31-.25.5-.56.62-.75.06 0 .19.06.5-.07.25-.24.56-.62.81-1 .07-.43.07-.81.31-1 .32-.12.82-.06 1.26-.06.24-.25.37-.56.43-.75l5.25-9.62zm-21.62 24.62c-.25-.12-.82-.25-2-.31-1.19-.19-2.56-.31-4.56.12-1.76.13-3.38.69-6.13 2.5-3.5 2.38-6.94 5.32-9.37 7.69-1.82 1.69-1.76 2.13-1.5 2.25.18-.12.74-.18 2.06-.25 1.12-.06 2.56-.12 4.94-.06 2.68 0 5.5.06 7.68.13 1.5.12 1.75.18 2.32-.07 1.12-.56 2.18-1.31 2.87-1.75.37-.25 1-.68 1.94-1.56.69-.88 1.37-1.88 2.37-3.06 1.13-1.25 2.25-2.25 3.19-3.13.69-.87.94-1.31 1.13-1.62.24-.5.43-.75.5-.81l-5.44-.07zm-22 22c-.32-.06-.88-.12-2.06-.12a20.5 20.5 0 0 0-4.5-.07c-2.26.13-4.38.44-6.38 1.07-1.88.62-2.88 1.31-3.62 2-.94.62-1.26 1-1.38 1.25-.12.06-.38.18-.75.56-.44.25-.87.62-1.5 1.25-.69.63-1.37 1.31-2 2.13-.69.68-1.06 1.24-1.37 1.74-.38.44-.5.69-.57.82.25 0 .88 0 2.44.06 1.37 0 3.06.06 5.81.25 2.82.13 5.63.31 8.44.44 2.62.06 4.31.12 5.69.12 1.5 0 2.12-.06 2.43-.06.13-.13.38-.31 1.07-.81.62-.5 1.43-1.06 2.5-2.06 1.06-1.13 2-2.32 2.87-3.69.75-1.38 1.19-2.44 1.56-3.31.44-.94.63-1.32.76-1.5l-9.44-.07zm-14.88 17.57c-.31-.07-.94-.07-2.25-.13-1.25-.19-2.75-.37-5.06-.37-2.56-.13-5.06-.07-7.44.43-1.81.19-2.62.57-4.56 2.07-3.13 2.12-6.5 4.68-8.56 6.43-.07 0-.25.13-.75.63-.63.37-1.32 1-2.13 1.94-1 1-1.75 2.06-1.87 2.93 0 .63.62.81 1.44.88.68.06 1.31-.13 1.74-.19.32-.06 1.13-.06 3 .12 1.63.13 3.63.32 6.82.69 3.37.38 6.75.75 10.18 1.07 3.19.18 5.19.18 6.88.18 1.75-.06 2.5-.12 2.88-.18 6.06-10.07 14.68-24.19 17.87-28.69-1.81 3.81-9.37 17.37-13.81 25.5-.56 1.31 2.68-4.13 5.44-8.81 1.12-2 1.24-2.44 1.37-2.76.31-.74.37-1.12.44-1.24l-11.63-.5zm-10.37 23.74c-.38 0-1.07 0-2.88-.12-1.69-.19-3.75-.38-6.93-.69-3.44-.37-6.82-.69-10.13-.93-3.19-.26-5.19-.32-6.75-.26-1.81 0-2.5.07-2.81.19-.07.13-.31.44-1.38 1.31-1.06.5-2.5 1.19-4.81 3.26-3.5 2.68-7 5.93-7.56 8.43 1 1.75 4.87 2.07 8.5 2.19 2.37.44 3.62.5 4.25.5.69-.06 2-.06 4 0 1.75 0 3.5.12 5.75.38 2.25.24 4.12.56 6.12.81 1.88.12 3.13.06 4.44.06h3.12c1.32-1 3.38-2.5 5.26-3.94 1.18-1 1.56-1.43 2.31-2.37 1.06-1.25 2.12-2.56 3.06-3.94.81-1.38 1.25-2.25 1.56-3 .31-.81.38-1.19.44-1.31l-5.56-.57z"
      />
      <path
        fill="url(#g)"
        d="M82.06 142.44c-2.12-.19-4.87-.44-9.75-.82-5.37-.5-11-.93-16.43-1.37-5-.44-7.88-.69-10.07-.87-2.5-.26-3.37-.26-3.69-.26-.74.13-1.93.57-3.31 2.07-1.62 1.31-2.93 3.06-3.19 6.12.07 3.31 1.19 6.81 2.69 9.88 1.19 2.69 2.25 3.93 3.13 4.75.68.94.81 1 .87 1 .44.56 1.44 1.56 3.63 2.94 2.12 1.37 4.62 2.62 8 3.37 3.5.44 6.62.06 9.18-.44 2.19-.43 2.88-.93 3.26-1.25.56-.25.5-.31.37-.25-.19.13-.25.25.56-.31.63-.38 1.69-1.12 4.19-3.38 2.88-2.62 6.19-5.87 9.12-9.43 2.44-3.38 3.57-5.81 4.26-7.88.74-2.19.62-3.12.5-3.56-.26-.06-1-.13-3.32-.31z"
      />
      <path
        fill="url(#h)"
        d="M75.69 144.81c-.44 0-1.31-.06-3.38-.19-1.93-.18-4.25-.43-7.93-.74-3.94-.44-7.88-.82-11.76-1.07-3.68-.31-6-.37-7.81-.31-2.06 0-2.93.06-3.25.19-.44.06-1 .43-1.68 1.56-.88 1-1.57 2.31-1.44 4.56.25 2.38 1.25 4.88 2.56 7.31 1.12 2.13 2.19 3.38 3.12 4.32.82 1 1.13 1.37 1.32 1.5.25.37.81 1.06 2.5 2 1.44 1.06 3.31 2.12 6.44 2.56 3.31.25 6.74-.25 10.06-1.31 2.94-1.13 4.62-2.57 5.94-3.88 1.37-1.25 1.81-2 2-2.37.12-.19.5-.5 1.24-1.19.69-.69 1.5-1.44 2.69-2.75 1.19-1.5 2.38-3 3.44-4.56.94-1.56 1.44-2.56 1.81-3.44.38-.94.5-1.38.56-1.56l-6.43-.63z"
      />
    </g>
  </svg>
)

UnicornHorn.args = ['x', 'y', 'width', 'height']

export default UnicornHorn