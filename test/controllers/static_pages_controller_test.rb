require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get login" do
    get static_pages_login_url
    assert_response :success
  end

  test "should get dashboard" do
    get static_pages_dashboard_url
    assert_response :success
  end

  test "should get profile" do
    get static_pages_profile_url
    assert_response :success
  end

  test "should get settings" do
    get static_pages_settings_url
    assert_response :success
  end

  test "should get messenger" do
    get static_pages_messenger_url
    assert_response :success
  end

end
