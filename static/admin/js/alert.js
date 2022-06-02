function confirm_category_delete(pk){
    var r = confirm("Ushbu kategoriyani o'chirmoqchimisiz?");
    if (r == true) {
        window.location.href="/administration/admin/category-delete/"+ pk +""
    }
}

function confirm_model_delete(pk){
    var r = confirm("Ushbu modelni o'chirmoqchimisiz?");
    if (r == true) {
        window.location.href="/administration/admin/model-delete/"+ pk +""
    }
}

function confirm_product_delete(pk){
    var r = confirm("Ushbu buyumni o'chirmoqchimisiz?");
    if (r == true) {
        window.location.href="/administration/admin-index/poka-base/"+ pk +"/product-delete"
    }
}

function confirm_responsible_delete(pk){
    var r = confirm("Ushbu javobgar shaxsni o'chirmoqchimisiz?");
    if (r == true) {
        window.location.href="/administration/admin/responsible-delete/"+ pk +""
    }
}

function confirm_search_delete(pk){
    var r = confirm("Ushbu buyumni o'chirmoqchimisiz?");
    if (r == true) {
        window.location.href="/administration/admin-index/poka-base/"+ pk +"/product-delete"
    }
}