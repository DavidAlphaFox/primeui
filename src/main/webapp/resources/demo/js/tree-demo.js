var TreeDemo = {
  
    localData: [
            {
                label: 'Documents',
                data: 'Documents Folder',
                children: [{
                        label: 'Work',
                        data: 'Work Folder',
                        children: [{label: 'Expenses.doc', iconType: 'doc', data: 'Expenses Document'}, {label: 'Resume.doc', iconType: 'doc', data: 'Resume Document'}]
                    },
                    {
                        label: 'Home',
                        data: 'Home Folder',
                        children: [{label: 'Invoices.txt', iconType: 'doc', data: 'Invoices for this month'}]
                    }]
            },
            {
                label: 'Pictures',
                data: 'Pictures Folder',
                children: [
                    {label: 'barcelona.jpg', iconType: 'picture', data: 'Barcelona Photo'},
                    {label: 'logo.jpg', iconType: 'picture', data: 'PrimeFaces Logo'},
                    {label: 'primeui.png', iconType: 'picture', data: 'PrimeUI Logo'}]
            },
            {
                label: 'Movies',
                data: 'Movies Folder',
                children: [{
                        label: 'Al Pacino',
                        data: 'Pacino Movies',
                        children: [{label: 'Scarface', iconType: 'video', data: 'Scarface Movie'}, {label: 'Serpico', iconType: 'video', data: 'Serpico Movie'}]
                    },
                    {
                        label: 'Robert De Niro',
                        data: 'De Niro Movies',
                        children: [{label: 'Goodfellas', iconType: 'video', data: 'Goodfellas Movie'}, {label: 'Untouchables', iconType: 'video', data: 'Untouchables Movie'}]
                    }]
            }
        ],
        
    remoteData: function(ui, response) {
            $.ajax({
                type: "GET",
                url: 'rest/tree/all',
                dataType: "json",
                context: this,
                success: function(data) {
                    response.call(this, data);
                }
            });
        }
};