const settings = {
	contentTypes: {
		article: {
			id: 'article',
			name: 'Article',
			icon: 'icon-document',
			actions: {
				list: [
					{
						id: 'add',
						icon: 'icon-add-botton-3',
						name: 'Add article',
						type: 'form/DISPLAY_FORM',
					},
				],
				primary: [
					{
						id: 'edit',
						icon: 'fa-pencil',
						name: 'Edit article',
						type: 'form/DISPLAY_FORM',
					},
					{
						id: 'delete',
						icon: 'fa-delete',
						name: 'Delete article',
						type: 'DELETE',
					},
				],
			},
		},
	},
	actions: {
		'menu:article': {
			id: 'menu:article',
			name: 'My article',
			icon: 'icon-article',
			available: 'model.actions.delete',
			type: '@@router/CALL_HISTORY_METHOD',
			payload: {
				method: 'push',
				args: ['/myarticle'],
			},
		},
		'menu:demo': {
			id: 'menu',
			name: 'Menu',
			icon: 'fa-bars',
			type: 'TEST_MENU',
		},
	},
	views: {
		appmenu: {
			actions: ['menu:tuto', 'menu:forum', 'menu:settings'],
			userMenuActions: ['menu:preferences', 'menu:logout'],
			logo: { src: 'images/logo.png', alt: 'My blog' },
			app: 'article',
		},
		homepage: {
			sidemenu: {
				actions: ['menu:article', 'menu:about'],
			},
			listview: {
				collectionId: 'article',
				contentType: 'article',
				searchLabel: 'find a article',
				columns: [
					{ key: 'name', label: 'Name' },
					{ key: 'type', label: 'Type' },
					{ key: 'creator', label: 'Creator' },
					{ key: 'description', label: 'Description' },
					{ key: 'write_date', label: 'Last modification date', dateformat: 'YYYY/MM/DD' },
				],
				sortOn: [],
			},
		},
	},
	routes: {
		path: '/',
		component: 'App',
		indexRoute: { component: 'SortableListWithSideMenu', view: 'homepage' },
		childRoutes: [
			{ path: 'myarticle', component: 'SortableListWithSideMenu', view: 'homepage' },
		],
	},
};
export default settings;
