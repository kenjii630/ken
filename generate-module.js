const fs = require('fs')
const path = require('path')
  
// npm run generate:module

const moduleName = process.argv[2]

if (!moduleName) {
  console.error('Please provide a module name. Usage: node generate-module.js <moduleName>')
  process.exit(1)
}

function generateModule(moduleName) {
  // Paths to the destination files
  const componentDestination = path.join(__dirname, 'src', 'components', `Base${moduleName}.vue`)
  const viewDestination = path.join(__dirname, 'src', 'views', `${moduleName}.vue`)
  const routerDestination = path.join(__dirname, 'src', 'router', 'index.js')

  // Check if the component file already exists
  if (fs.existsSync(componentDestination)) {
    console.error(`Component file for Base${moduleName} already exists in the components folder.`)
    process.exit(1)
  }

  // Check if the view file already exists
  if (fs.existsSync(viewDestination)) {
    console.error(`View file for ${moduleName} already exists in the views folder.`)
    process.exit(1)
  }

  // Generate the component content
  const componentContent = 
  `<template>
    <div>
      <!-- Your component template goes here -->
    </div>
  </template>

  <script setup>
  // Your component logic goes here
  </script>
  `

  // Write the component content to the file
  fs.writeFileSync(componentDestination, componentContent)

  // Generate the view content
  const viewContent = 
  `<template>
    <div>
      <!-- Your view template goes here -->
      <Base${moduleName} />
    </div>
  </template>

  <script setup>
  import Base${moduleName} from '@/components/Base${moduleName}.vue';

  </script>`

  // Write the view content to the file
  fs.writeFileSync(viewDestination, viewContent)

  // Read the existing router file
  const existingRouterContent = fs.readFileSync(routerDestination, 'utf-8')

  // Import the new route
  const newRouteImport = `import ${moduleName} from '@/views/${moduleName}.vue';`

  // Find the position to insert the new route
  const insertPosition = existingRouterContent.lastIndexOf(']')

  // Generate the new route content
  const newRouteContent = `
  ,{
    path: '/${moduleName}',
    name: '${moduleName}',
    component: () => import('@/views/${moduleName}.vue'),
  },
  `

  // Insert the new route into the existing routes
  const updatedRouterContent =
    existingRouterContent.slice(0, insertPosition) +
    newRouteContent +
    existingRouterContent.slice(insertPosition)

  // Write the updated route content back to the file
  fs.writeFileSync(routerDestination, updatedRouterContent)

  console.log(`Module ${moduleName} created successfully.`)
}

generateModule(moduleName)
