import { form, get, post, resources, route } from '@remix-run/fetch-router'

export const routes = route({
  assets: get('/assets/*path'),
  uploads: get('/uploads/*key'),
  playground: get('/playground'),

  account: route('/account', {
    settings: "settings"
  }),

  auth: {
    login: form('/login'),
    logout: post('/logout'),
    register: form('/register'),
    forgotPassword: form('/forgot-password'),
    resetPassword: form('reset-password/:token'),

    providers: route('/providers', {
      google: route('/google', {
        login: get('/login'),
        callback: get('/callback'),
      }),
    }),
  },

  admin: route('/admin', {
    search: get('/search'),
    stores: resources('/stores', { param: 'storeId' }),

    suppliers: route('/suppliers', {
      export: get('/export'),
      ...resources('/', { param: 'supplierId' }),
    }),

    orders: route('/orders', {
      index: get('/'),
      summary: get('/summary'),
      items: route('/items', {
        export: get('/export'),
        ...resources('/', { param: 'orderId' }),
      }),
    }),

    dashboard: route('/dashboard', {
      index: get('/'),
      summary: get('/summary'),
      salesAndPurchases: get('/sales-purchases'),
      stock: route('/stock', {
        topSelling: get('/top-selling'),
        lowQuantity: get('/low-quantity'),
      }),
    }),

    report: route('/report', {
      index: get('/'),
      profitAndRevenue: get('/profit-revenue'),
      bestselling: route('/bestselling', {
        category: get('/category'),
        product: get('/product'),
      }),
    }),

    inventory: route('/inventory', {
      index: get('/'),
      summary: get('summary'),
      products: route('/product', {
        ...resources('/', { exclude: ['show'], param: 'productId' }),
        export: get('/export'),
        show: {
          ...route('/:productId', {
            overview: get('/overview'),
            adjustments: get('/adjustments'),
            history: get('/history'),
            download: get('/download'),
          }),
        },
      }),
    }),
  }),
})
