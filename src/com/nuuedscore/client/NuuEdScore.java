package com.nuuedscore.client;

import java.util.Date;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.logical.shared.ResizeEvent;
import com.google.gwt.event.logical.shared.ResizeHandler;
import com.google.gwt.user.client.Cookies;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HasVerticalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.RootPanel;
import com.nuuedscore.IConstants;
import com.nuuedscore.client.domain.DATA;
import com.nuuedscore.client.ui.CenterPanel;
import com.nuuedscore.client.ui.MenuPanel;
import com.nuuedscore.client.ui.LeftNavigationPanel;
import com.nuuedscore.client.ui.dashboard.StudentDashboardPanel;
import com.nuuedscore.client.ui.dashboard.TeacherDashboardPanel;
import com.nuuedscore.client.ui.person.LoggedInPanel;
import com.nuuedscore.client.ui.person.LoginRegisterPanel;
import com.nuuedscore.client.ui.portal.BasePortalPanel;
import com.nuuedscore.client.ui.ux.UiUx;
import com.nuuedscore.shared.dto.Person;
import com.nuuedscore.shared.dto.refdata.RefPersonRole;

/**
 * NuuEdScore
 * The application entry point
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class NuuEdScore implements EntryPoint {

	private static NuuEdScore INSTANCE;
	private static String HOST;	
	private int MENU_WIDTH = 42;
	private Button 
		loginButton, 
		registerButton,
		asTeacherButton,
		asStudentButton,
		takeAssessmentButton;
	private CenterPanel centerPanel = new CenterPanel();
	private LoginRegisterPanel loginPanel = new LoginRegisterPanel();
	private Label poweredByRAILabel = new Label("Powered by R AI - " + new Date());
	private Image 
		centerImg,
		centerImgLoggedIn;
	private HorizontalPanel topPanel;
	private LoggedInPanel loggedinPanel;	
	private Panel lastViewPanel;
	private MenuPanel menuPanel = new MenuPanel(); // TODO remove
	private LeftNavigationPanel leftNavigationPanel;
	
	public static Person PERSON;
	public static RefPersonRole PERSON_ROLE = RefPersonRole.ROLE_STUDENT;
	public static boolean LOGGED_IN;

	@Override
	public void onModuleLoad() {
		//Window.alert("Powered by R AI");

		INSTANCE = this;

		detectHOST_IP();
		
		//prototypeUI();
		createUI();
		//loginPanel.autoLogin();
		
		doSTUFF();
	}

	public static NuuEdScore GET() {
		return INSTANCE;
	}

	public static Person GET_PERSON() {
		return PERSON;
	}
	
	public static String GET_HOST() {
		return HOST;
	}
	
	private void detectHOST_IP() {
		HOST = Window.Location.getHost();
		//Window.alert(HOST);
	}

	private void prototypeUI() {
		
	}
	
	private void createUI() {
		centerImg = new Image("images/NuuEDScore_Background.png");
		centerImg.setStyleName("centerImgLoggedin");
		RootPanel.get().add(centerImg, 0, 0);
		
		topPanel = new HorizontalPanel();
		topPanel.setStyleName("topPanel");
		topPanel.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_RIGHT);
		topPanel.setVerticalAlignment(HasVerticalAlignment.ALIGN_MIDDLE);
		
		Image logoImg = new Image("images/NuLogo_Small.jpg");
		logoImg.setStyleName("logoImg");
		//logoImg.setPixelSize(400, 75);

		loginButton = new Button("LOGIN");
		registerButton = new Button("Register");
		loginButton.setVisible(false);
		registerButton.setVisible(false);

		RootPanel.get().add(topPanel, 0, 0);
		
		topPanel.add(logoImg);
		topPanel.setCellHorizontalAlignment(logoImg, HasHorizontalAlignment.ALIGN_LEFT);
		
		topPanel.add(poweredByRAILabel);
		topPanel.setCellHorizontalAlignment(poweredByRAILabel, HasHorizontalAlignment.ALIGN_LEFT);

		poweredByRAILabel.setStyleName("poweredByRAILabel");
		RootPanel.get().add(poweredByRAILabel, 110, 45);
		
		resize();		
		Window.addResizeHandler(new ResizeHandler() {
			@Override
			public void onResize(ResizeEvent event) {
				resize();
			}
		});
		
		loginButton.addClickHandler(event -> {
			loginButton.setVisible(false);
			registerButton.setVisible(true);
			loginPanel.setRegister(false);
		});
		registerButton.addClickHandler(event -> {
			loginButton.setVisible(true);
			registerButton.setVisible(false);
			loginPanel.setRegister(true);
		});
		
		RootPanel.get().add(centerPanel, 0, 150);

		String userEmail = getCookie();
		if (userEmail == null) {
			GWT.log("NOT Logged In");
			viewLogin(false);
		} else {
			GWT.log("Logged In as:" + userEmail);
			viewLogin(false);
			
			//TODO get Logged in Person full profile and letsGo
			PERSON = new Person(DATA.PERSON_FIRSTNAME, DATA.PERSON_LASTNAME, DATA.PERSON_EMAIL, DATA.PERSON_PASSWORD);
//Window.alert(PERSON.toString());			
			letsGo(PERSON);			
		} 
	}
	
	/**
	 * I AM RESIZE
	 */
	private void resize() {
		RootPanel.get().add(loginButton, Window.getClientWidth() - 175, 15);
		RootPanel.get().add(registerButton, Window.getClientWidth() - 175, 15);
		if (!LOGGED_IN) {
			topPanel.setWidth("100%");
		} else {
			topPanel.setWidth((Window.getClientWidth()-50) + "px");
		}
		 
		if (asTeacherButton != null) {
			RootPanel.get().add(asTeacherButton, Window.getClientWidth() - 275, 80);
		}
		if (asStudentButton != null) {
			RootPanel.get().add(asStudentButton, Window.getClientWidth() - 275, 80);
		}
		if (takeAssessmentButton != null) {
			RootPanel.get().add(takeAssessmentButton, Window.getClientWidth() - 550, 80);
		}
	}

	/**
	 * login: false
	 * register: true
	 */
	private void viewLogin(boolean register) {
		loginButton.setVisible(register);
		registerButton.setVisible(!register);
		loginPanel.setRegister(register);
		centerPanel.add(loginPanel);
		centerPanel.setCellVerticalAlignment(loginPanel, HasVerticalAlignment.ALIGN_TOP);
		centerPanel.setCellHorizontalAlignment(loginPanel, HasHorizontalAlignment.ALIGN_CENTER);
	}
		
	public void letsGo(Person person) {
		GWT.log("letsGo:" + person.getEmail());
				
		LOGGED_IN = true;
		PERSON = person;
		setCookie();
		
		//AuditFactory.log(AuditEvent.LOGIN_SUCCESS);
		RootPanel.get().add(poweredByRAILabel, 110+MENU_WIDTH, 45);
		
		loginButton.setVisible(false); 
		registerButton.setVisible(false);

		loginPanel.removeFromParent();
		centerImg.removeFromParent();
		
		/*
		centerImgLoggedIn = new Image("images/background.jpg");
		centerImgLoggedIn.setStyleName("centerImgLoggedin");
		RootPanel.get().add(centerImgLoggedIn, 0, 0);
		*/

		loggedinPanel = new LoggedInPanel(PERSON);
		loggedinPanel.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_RIGHT);
		topPanel.add(loggedinPanel);

		asTeacherButton = new Button("I AM A TEACHER");		
		asTeacherButton.setStyleName("gwt-Button-green");
		asTeacherButton.getElement().getStyle().setProperty("zIndex", "999");
		asTeacherButton.addClickHandler(event -> {
			GWT.log("SHOW " + RefPersonRole.ROLE_TEACHER + " DASHBOARD");

			PERSON_ROLE = RefPersonRole.ROLE_TEACHER;
			this.leftNavigationPanel.createViews();
			this.leftNavigationPanel.showTeacherDashboard();
			
		});

		asStudentButton = new Button("I AM A STUDENT");		
		asStudentButton.setStyleName("gwt-Button-green");
		asStudentButton.getElement().getStyle().setProperty("zIndex", "999");
		asStudentButton.addClickHandler(event -> {
			GWT.log("SHOW " + RefPersonRole.ROLE_STUDENT + " DASHBOARD");

			PERSON_ROLE = RefPersonRole.ROLE_STUDENT;
			this.leftNavigationPanel.showStudentDashboard();
		});

		
		String ACTION = "Take ASSESSMENT";
		takeAssessmentButton = new Button(ACTION);		
		takeAssessmentButton.setStyleName("gwt-Button-orange");
		takeAssessmentButton.getElement().getStyle().setProperty("zIndex", "999");
		takeAssessmentButton.addClickHandler(event -> {
			GWT.log("" + ACTION);
			
			this.leftNavigationPanel.takeStudentAssessment();
		});
		
		createNavigation();
	}
	
	private void createNavigation() {
		leftNavigationPanel = new LeftNavigationPanel();
		RootPanel.get().add(leftNavigationPanel, 0, 0);
		RootPanel.get().add(topPanel, MENU_WIDTH, 0);		 
		resize();
		
		leftNavigationPanel.createViews();
		leftNavigationPanel.showDefaultView();
	}

	public LeftNavigationPanel getNavigation() {
		return leftNavigationPanel;
	}
	
	public void logOut() {
		//deleteCookie();
		
		/*
		centerImgLoggedIn.removeFromParent();
		centerImg = new Image("images/background.jpg");
		centerImg.setStyleName("centerImg");
		RootPanel.get().add(centerImg, 0, 0);
		*/
		
		menuPanel.removeFromParent();
		if (lastViewPanel != null) {
			lastViewPanel.removeFromParent();
		}
		
		//loginPanel.clear();
		topPanel.remove(loggedinPanel);
		topPanel.add(loginPanel);
		
		//AuditFactory.log(AuditEvent.LOGOUT);
	}
	
	private static void setCookie() {
		if (Cookies.isCookieEnabled()) {
			final long DURATION = 1000 * 60 * 60 * 24 * 7; //duration remembering login - 1 week
			Date expires = new Date(System.currentTimeMillis() + DURATION);
	
			Cookies.setCookie(IConstants.NUUEDSCORE_COOKIE_NAME, PERSON.getEmail(), expires, null, "/", false);
		}
	}
	
	private static String getCookie() {
		if (Cookies.isCookieEnabled()) {
			return Cookies.getCookie(IConstants.NUUEDSCORE_COOKIE_NAME);
		}
		return null;
	}
	
	private static void deleteCookie() {
		if (Cookies.isCookieEnabled()) {
			Cookies.removeCookie(IConstants.NUUEDSCORE_COOKIE_NAME);
		}
	}
	
	private Panel lastDashboardPanel;
	
	public void showView(Panel viewPanel) {		
		if (centerImgLoggedIn != null) {
			centerImgLoggedIn.removeFromParent();
		}
		if (lastViewPanel != null) {
			lastViewPanel.removeFromParent();
		}
		//Window.alert("showView:\n" + viewPanel.toString());
		lastViewPanel = viewPanel;
		//viewPanel.setPixelSize(Window.getClientWidth()-200, Window.getClientHeight()-75);
		RootPanel.get().add(viewPanel, MENU_WIDTH + 1, 76);
		
		if (viewPanel instanceof TeacherDashboardPanel) {
			asTeacherButton.setVisible(false);
			asStudentButton.setVisible(true);
			takeAssessmentButton.setVisible(false);
		} 
		else if (viewPanel instanceof StudentDashboardPanel) {
			asTeacherButton.setVisible(true);
			asStudentButton.setVisible(false);
			takeAssessmentButton.setVisible(true);
		} else if (viewPanel instanceof BasePortalPanel) {
			asTeacherButton.setVisible(false);
			asStudentButton.setVisible(false);
			takeAssessmentButton.setVisible(false);
		}
	}
	
	// EXPERIMENTS *************************************************************************************************
	private void doSTUFF() {
		
	}
}
