import type { RouteLocationNormalized, RouteLocationNormalizedLoaded } from 'vue-router'
import type { ScrollPositionNormalized } from './types'

/**
 * 定义路由切换滚动
 * @param to 
 * @param from 
 * @param savedPosition 
 */
export function scrollBehavior (
  to: RouteLocationNormalized, 
  from: RouteLocationNormalizedLoaded, 
  savedPosition: ScrollPositionNormalized | null
) {
  console.log(to, from, savedPosition)
}
