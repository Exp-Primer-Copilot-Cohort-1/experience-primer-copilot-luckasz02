function skillsMember() {
    return {
        restrict: 'E',
        templateURL: 'modules/skils/views/memebr.html',
        controller: 'SkillMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        } 
    };
}