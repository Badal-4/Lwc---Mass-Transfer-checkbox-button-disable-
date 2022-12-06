import { LightningElement, track,api} from 'lwc';

export default class Practice_ChangeOwnerCmp extends LightningElement 
{
    showAccounts = false;
    showContacts = false;
    showOpp = false;
    showLeads = false;
    showATM = false;
    showOTM = false;
    value = '';
    seachAccount = false;
    seachContact = false;
    seachLead = false;
    seachOpportunity = false;
    seachAccountTeamMember = false;
    seachOpportunityTeamMember = false;
    @track objName;
    @track account =[] ;
    @track lead =[] ;
    @track contact =[] ;
    @track opportunity =[] ;
    @track AccountTeamMember =[] ;
    @track OpportunityTeamMember =[] ;
    @track userId;
    @track transferTo;
    selectedTab = '';
    val = '';
    tab = '';
    showTable = false;
    boolVal ;
    @track value = '';
    @track options =[
        {label : 'Auto Reject Approval Request' , value : 'AutoRejectApprovalRequest'},
        {label : 'Do not make any change' , value : 'DoNotMakeAnyChange'},
        {label : 'Transfer Request To New User' , value : 'TransferRequestToNewUser'},
        {label : 'Abort All the Approval Request' , value : 'AbortAllTheApprovalRequest'}
    ];
    @track Allvalues = [];
    disableCheckbox = true;
   

    handleAcc(event)
    {         
        //this.showAccounts = event.target.checked;
        //this.showAccounts = true;
       this.showAccounts = event.target.checked;
       //if(this.showAccounts)
       if(event.target.checked)
       {
        this.account = event.target.name;
        this.objName =event.target.name;
        this.selectedTab = event.target.value; 
       }
       else 
       {
          this.account = '';
          this.objName = '';
          this.selectedTab = '';
          this.seachAccount = false;
       }
    }

    handleLeads(event)
    {         
        this.showLeads =event.target.checked;

        if(event.target.checked)
        {
            this.lead = event.target.name;   
            this.objName =event.target.name;
            this.selectedTab = event.target.value;
        }
        else 
        {
            this.lead = '';
            this.objName = '';
            this.selectedTab = '';
            this.seachLead = false;
        }
    }

    handleContacts(event)
    {
       this.showContacts = event.target.checked;

       if(event.target.checked)
       {
        this.contact = event.target.name;
        this.objName = event.target.name;
        this.selectedTab = event.target.value;
        
       }
       else 
       {
         this.contact = '';
         this.objName = '';
         this.selectedTab = '';
         this.seachContact = false;
       }
    }

    handleOpportunity(event)
    {
       this.showOpp = event.target.checked;

       if(event.target.checked)
       {
        this.opportunity = event.target.name;
        this.objName = event.target.name;
        this.selectedTab = event.target.value;
       }
       else 
       {
         this.opportunity = '';
         this.objName = '';
         this.selectedTab = '';
         this.seachOpportunity = false;
       }
    }
    handleAccountTeamMember(event)
    {
       this.showATM = event.target.checked;

       if(event.target.checked)
       {
        this.AccountTeamMember = event.target.name;
        this.objName = event.target.name;
        this.selectedTab = event.target.value;
       }
       else 
       {
         this.AccountTeamMember = '';
         this.objName = '';
         this.selectedTab = '';
         this.seachAccountTeamMember = false;
       }
    }

    handleOpportunityTeamMember(event)
    {
       this.showOTM = event.target.checked;

       if(event.target.checked)
       {
        this.OpportunityTeamMember = event.target.name;
        this.objName = event.target.name;
        this.selectedTab = event.target.value;
       }
       else 
       {
         this.OpportunityTeamMember = '';
         this.objName = '';
         this.selectedTab = '';
         this.seachOpportunityTeamMember = false;
       }
    }

    handleSelection(event)
    {
        this.userId = event.detail.selectedId;
        this.boolVal = true;
        this.disableCheckbox = false;
    }

    handletransferTo(event)
    {
        this.transferTo = event.detail.selectedId;
    }

    SelectRecords(){
        this.seachAccount = this.showAccounts;
        this.tab = this.selectedTab;
        this.seachContact = this.showContacts;
        this.seachLead = this.showLeads;
        this.seachOpportunity = this.showOpp;
        this.seachAccountTeamMember = this.showATM;
        this.seachOpportunityTeamMember = this.showOTM;
        
    }

    handleProgressValueChange(event)
    {
        this.boolVal = event.detail;
    
        if(this.boolVal == false)
        {
            
            this.showAccounts = false;
            this.showLeads = false;
            this.showContacts = false;
            this.showOpp = false;
            this.showATM = false;
            this.showOTM = false;
            
            setTimeout(() => {
                eval("$A.get('e.force:refreshView').fire();");
           }, 100); 
        }
    }

   get disableSearchBtn()
   {
    if(this.account != '' || this.lead != '' ||  this.contact != '' || this.opportunity != '' || this.AccountTeamMember != '' || this.OpportunityTeamMember != '')
    {
        return false;
    }
    else 
    {
        return true;
    }
   }
}
