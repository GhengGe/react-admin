import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

// 使用 Vite 提供的 import.meta.globEager 方法，同步导入当前目录及子目录下所有 .ts 文件，返回一个对象，键是文件路径，值是模块内容。
const modules = import.meta.globEager('./**/*.ts')

const mockModules: any[] = []
Object.keys(modules).forEach((key) => {
    if (key.includes('/_')) {
        return
    }
    mockModules.push(...modules[key].default)
})

/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer() {
    createProdMockServer(mockModules)
}
